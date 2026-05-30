const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const DEMO_ROOT = `${BASE}/demo-data`;

let usersCache: Record<string, string> | null = null;

async function loadUsers(): Promise<Record<string, string>> {
  if (usersCache) return usersCache;
  const response = await fetch(`${DEMO_ROOT}/users.json`);
  if (!response.ok) throw new Error("Не удалось загрузить список пользователей демо");
  usersCache = (await response.json()) as Record<string, string>;
  return usersCache;
}

function loginFromToken(token: string | null): string | null {
  if (!token?.startsWith("static:")) return null;
  const login = token.slice("static:".length);
  return login || null;
}

async function loginFromBody(body: string | undefined): Promise<string | null> {
  if (!body) return null;
  try {
    const parsed = JSON.parse(body) as { login?: string; password?: string };
    if (!parsed.login || !parsed.password) return null;
    const users = await loadUsers();
    if (users[parsed.login] === parsed.password) return parsed.login;
  } catch {
    return null;
  }
  return null;
}

async function loadJson<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Не удалось загрузить ${url}`);
  return response.json() as Promise<T>;
}

function endpointFile(path: string, login: string): string | null {
  const map: Record<string, string> = {
    "/dashboard/summary": "summary",
    "/dashboard/rating": "rating",
    "/dashboard/indicators": "indicators",
    "/dashboard/me": "me",
    "/profile": "profile",
  };
  const base = path.split("?")[0];
  const key = map[base];
  return key ? `${DEMO_ROOT}/${login}/${key}.json` : null;
}

export function isStaticDemo(): boolean {
  return process.env.NEXT_PUBLIC_STATIC_DEMO === "true";
}

export async function staticApiFetch<T>(
  path: string,
  init: RequestInit = {},
  token: string | null,
): Promise<T> {
  const method = (init.method ?? "GET").toUpperCase();

  if (method === "POST" && path === "/auth/login") {
    const login = await loginFromBody(typeof init.body === "string" ? init.body : undefined);
    if (!login) throw new Error("Неверный логин или пароль");
    return { access_token: `static:${login}`, token_type: "bearer" } as T;
  }

  const login = loginFromToken(token);
  if (!login) throw new Error("Требуется авторизация");

  const users = await loadUsers();
  if (!users[login]) throw new Error("Неизвестный пользователь демо");

  if (method === "PATCH" && path === "/profile") {
    const body = init.body ? (JSON.parse(String(init.body)) as { max_user_id?: string }) : {};
    const profile = await loadJson<Record<string, unknown>>(`${DEMO_ROOT}/${login}/profile.json`);
    return { ...profile, max_user_id: body.max_user_id ?? profile.max_user_id } as T;
  }

  if (method === "POST" && path.startsWith("/admin/")) {
    if (path === "/admin/gas/upload") return { rows: 12, changed: true } as T;
    if (path === "/admin/connectors/run") {
      return {
        period: "2024-12-01",
        results: [{ connector: "bdmo_tochno", status: "success", message: "Загрузка недоступна на статическом сайте" }],
      } as T;
    }
  }

  if (path.startsWith("/admin/connectors/status")) {
    return loadJson<T>(`${DEMO_ROOT}/admin-connectors.json`);
  }

  const file = endpointFile(path, login);
  if (!file) throw new Error(`Неизвестный путь данных: ${path}`);

  if (path.includes("?")) {
    const data = await loadJson<Record<string, unknown>[]>(file);
    const params = new URLSearchParams(path.split("?")[1]);
    const category = params.get("category");
    if (category && Array.isArray(data)) {
      return data.filter((row) => row.category === category) as T;
    }
  }

  return loadJson<T>(file);
}

export async function staticApiUpload<T>(_path: string, _form: FormData): Promise<T> {
  return { rows: 12, changed: true } as T;
}

export interface MunicipalityOption {
  login: string;
  slug: string;
  name: string;
  type: string;
  oktmo: string;
}

export async function loadMunicipalities(): Promise<MunicipalityOption[]> {
  return loadJson<MunicipalityOption[]>(`${DEMO_ROOT}/municipalities.json`);
}

export async function getHeadPassword(): Promise<string> {
  const users = await loadUsers();
  const sample = Object.entries(users).find(([login]) => login.startsWith("glava_"));
  return sample?.[1] ?? "district12345";
}
