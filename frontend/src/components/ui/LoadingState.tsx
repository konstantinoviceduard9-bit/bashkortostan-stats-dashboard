export function LoadingState({ label = "Загрузка…" }: { label?: string }) {
  return (
    <div className="card-bashkir flex items-center justify-center gap-3 py-12 text-slate-600">
      <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-bashkir-blue border-t-transparent" />
      {label}
    </div>
  );
}

export function ErrorBanner({ message }: { message: string }) {
  return (
    <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
      {message}
    </div>
  );
}
