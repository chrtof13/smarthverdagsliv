// src/components/Seo.jsx
import { useEffect } from "react";

/**
 * Enkel SEO-komponent for dynamisk title og description
 * Brukes slik:
 *   <Seo title="Artikkel 1 | Min blogg" description="Kort beskrivelse..." />
 */
export default function Seo({ title, description }) {
    useEffect(() => {
        // Oppdater document.title
        if (title) {
            document.title = title;
        }

        // Oppdater (eller lag) meta description
        if (description !== undefined) {
            let meta = document.querySelector('meta[name="description"]');
            if (!meta) {
                meta = document.createElement("meta");
                meta.setAttribute("name", "description");
                document.head.appendChild(meta);
            }
            meta.setAttribute("content", description || "");
        }
    }, [title, description]);

    return null; // Denne rendrer ingenting i DOM, bare oppdaterer <head>
}