import { clearToken, getToken } from "@/lib/api";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api/v1";
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export async function apiUpload<T>(path: string, form: FormData): Promise<T> {
  const token = getToken();

  if (process.env.NEXT_PUBLIC_STATIC_DEMO === "true") {
    const { staticApiUpload } = await import("./staticDemo");
    return staticApiUpload<T>(path, form);
  }

  const headers = new Headers();
  if (token) headers.set("Authorization", `Bearer ${token}`);

  const response = await fetch(`${API_URL}${path}`, { method: "POST", headers, body: form });
  if (response.status === 401) {
    clearToken();
    if (typeof window !== "undefined") window.location.href = `${BASE_PATH}/login/`;
    throw new Error("Требуется авторизация");
  }
  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(body.detail ?? `Ошибка API: ${response.status}`);
  }
  return response.json() as Promise<T>;
}
