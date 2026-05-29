export function isLiveDataEnabled(): boolean {
  return import.meta.env.VITE_ENABLE_LIVE_DATA === "true" || !import.meta.env.PROD;
}

export function getLiveApiBaseUrl(): string {
  const configured = import.meta.env.VITE_LIVE_API_URL;
  if (configured) {
    return configured.replace(/\/+$/, "");
  }

  return "/api";
}
