import Link from "next/link";

export function Header() {
  return (
    <header className="border-b-4 border-bashkir-green bg-gradient-to-r from-bashkir-blue via-white to-bashkir-green/80 bg-[length:100%_4px] bg-bottom bg-no-repeat shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-bashkir-gold bg-white text-xs font-bold text-bashkir-green">
          РБ
        </div>
        <div className="flex flex-1 flex-col items-center gap-1">
          <div className="flex h-3 w-32 overflow-hidden rounded-sm border border-slate-300">
            <span className="flex-1 bg-bashkir-blue" />
            <span className="flex-1 bg-white" />
            <span className="flex-1 bg-bashkir-green" />
          </div>
          <h1 className="heading-gold text-center text-lg md:text-xl">Дашборд муниципального образования</h1>
        </div>
        <nav className="hidden gap-3 text-sm md:flex">
          <Link href="/dashboard" className="text-bashkir-blue hover:underline">
            Главная
          </Link>
          <Link href="/dashboard/indicators" className="text-bashkir-blue hover:underline">
            Показатели
          </Link>
          <Link href="/dashboard/rating" className="text-bashkir-blue hover:underline">
            Рейтинг
          </Link>
          <Link href="/profile" className="text-bashkir-blue hover:underline">
            Профиль
          </Link>
        </nav>
      </div>
    </header>
  );
}
