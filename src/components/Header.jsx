// src/components/Header.jsx
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Header() {
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();

    // Lukk meny ved ruteskifte
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    // Lås body-scroll når menyen er åpen
    useEffect(() => {
        document.body.classList.toggle("overflow-hidden", open);
        return () => document.body.classList.remove("overflow-hidden");
    }, [open]);

    // Lukk med ESC
    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const navLink =
        "px-3 py-2 rounded-lg text-sm hover:bg-black/5 transition aria-[current=page]:font-semibold";

    return (
        <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
                <Link to="/" className="font-bold tracking-tight">
                    SmartHverdagsliv
                </Link>

                {/* Desktop-nav */}
                <nav className="hidden md:flex gap-1">
                    <NavLink to="/" end className={navLink}>
                        Hjem
                    </NavLink>
                    <NavLink to="/about" className={navLink}>
                        Om
                    </NavLink>
                    <NavLink to="/contact" className={navLink}>
                        Kontakt
                    </NavLink>
                    <NavLink to="/privacy" className={navLink}>
                        Personvern
                    </NavLink>
                </nav>

                {/* Mobil-knapp */}
                <button
                    type="button"
                    className="md:hidden inline-flex items-center justify-center rounded-xl p-2 hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black/20"
                    aria-label="Åpne/lukk meny"
                    aria-expanded={open}
                    aria-controls="mobile-nav"
                    onClick={() => setOpen((o) => !o)}
                >
                    {/* Enkel hamburger/close-ikon */}
                    <span className="sr-only">Meny</span>
                    <div className="relative w-5 h-5">
            <span
                className={`absolute left-0 top-[4px] h-[2px] w-5 bg-black transition-transform ${
                    open ? "translate-y-[6px] rotate-45" : ""
                }`}
            />
                        <span
                            className={`absolute left-0 top-[9px] h-[2px] w-5 bg-black transition-opacity ${
                                open ? "opacity-0" : "opacity-100"
                            }`}
                        />
                        <span
                            className={`absolute left-0 top-[14px] h-[2px] w-5 bg-black transition-transform ${
                                open ? "-translate-y-[6px] -rotate-45" : ""
                            }`}
                        />
                    </div>
                </button>
            </div>

            {/* Mobil overlay + panel */}
            {/* Overlay (klikk for å lukke) */}
            <div
                className={`md:hidden fixed inset-0 bg-black/20 transition-opacity ${
                    open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setOpen(false)}
            />

            {/* Selve meny-panelet */}
            <nav
                id="mobile-nav"
                className={`md:hidden fixed inset-x-0 top-14 z-40 origin-top bg-white border-b shadow-sm transition-transform ${
                    open ? "scale-y-100" : "scale-y-0"
                }`}
                style={{ transformOrigin: "top" }}
            >
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-3 grid gap-1">
                    <MobileItem to="/" end onClick={() => setOpen(false)}>
                        Hjem
                    </MobileItem>
                    <MobileItem to="/about" onClick={() => setOpen(false)}>
                        Om
                    </MobileItem>
                    <MobileItem to="/contact" onClick={() => setOpen(false)}>
                        Kontakt
                    </MobileItem>
                    <MobileItem to="/privacy" onClick={() => setOpen(false)}>
                        Personvern
                    </MobileItem>
                </div>
            </nav>
        </header>
    );
}

function MobileItem({ to, end, children, onClick }) {
    return (
        <NavLink
            to={to}
            end={end}
            onClick={onClick}
            className={({ isActive }) =>
                `block w-full rounded-xl px-3 py-2 text-base ${
                    isActive ? "bg-black/90 text-white" : "hover:bg-black/5"
                }`
            }
        >
            {children}
        </NavLink>
    );
}