import { Link, NavLink } from "react-router-dom";

export default function Header() {
    const navLink =
        "px-3 py-2 rounded-lg text-sm hover:bg-black/5 transition aria-[current=page]:font-semibold";
    return (
        <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
                <Link to="/" className="font-bold tracking-tight">SmartHverdagsliv</Link>
                <nav className="flex gap-1">
                    <NavLink to="/" end className={navLink}>Hjem</NavLink>
                    <NavLink to="/about" className={navLink}>Om</NavLink>
                    <NavLink to="/contact" className={navLink}>Kontakt</NavLink>
                    <NavLink to="/privacy" className={navLink}>Personvern</NavLink>
                </nav>
            </div>
        </header>
    );
}