import { MobileBottomNav, MobileTopBar } from "@/components/layout/MobileNav";
import { Sidebar } from "@/components/layout/Sidebar";
import { assetPath } from "@/lib/assetPath";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const ornamentUrl = `url('${assetPath("/ornament.svg")}')`;

  return (
    <div className="app-shell">
      <Sidebar />
      <MobileTopBar />
      <main className="app-main" style={{ ["--ornament-url" as string]: ornamentUrl }}>
        <div className="app-content">{children}</div>
      </main>
      <MobileBottomNav />
    </div>
  );
}
