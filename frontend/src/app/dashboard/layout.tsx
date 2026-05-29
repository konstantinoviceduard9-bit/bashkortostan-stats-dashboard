import { Header } from "@/components/layout/Header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-6xl px-4 py-8">{children}</div>
    </>
  );
}
