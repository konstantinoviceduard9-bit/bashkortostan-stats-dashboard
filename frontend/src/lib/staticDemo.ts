const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const DEMO_ROOT = `${BASE}/demo-data`;

const VALID_LOGINS = new Set(["admin", "glava_ufa", "glava_beloretsk"]);

function loginFromToken(token: string | null): string | null {
  if (!token?.startsWith("static:")) return null;
  const login = token.slice("static:".length);
  return VALID_LOGINS.has(login) ? login : null;
}

function loginFromBody(body: string | undefined): string | null {
  if (!body) return null;
  try {
    const parsed = JSON.parse(body) as { login?: string; password?: string };
    if (!parsed.login || !parsed.password) return null;
    const expected: Record<string, string> = {
      admin: "admin12345",
      glava_ufa: "district12345",
      glava_beloretsk: "district12345",
    };
    if (expected[parsed.login] === parsed.password) return parsed.login;
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
    const login = loginFromBody(typeof init.body === "string" ? init.body : undefined);
    if (!login) throw new Error("Неверный логин или пароль");
    return { access_token: `static:${login}`, token_type: "bearer" } as T;
  }

  const login = loginFromToken(token);
  if (!login) throw new Error("Требуется авторизация");

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
        results: [
          { connector: "bdmo_tochno", status: "demo", message: "Статическое демо на GitHub Pages" },
        ],
      } as T;
    }
  }

  if (path.startsWith("/admin/connectors/status")) {
    return loadJson<T>(`${DEMO_ROOT}/admin-connectors.json`);
  }

  const file = endpointFile(path, login);
  if (!file) throw new Error(`Статическое демо: неизвестный путь ${path}`);

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
