import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        // Global scroll-to-top på ruteskifte
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);
    return null;
}