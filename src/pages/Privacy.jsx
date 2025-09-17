// src/pages/Privacy.jsx
import Seo from "../components/Seo";

export default function Privacy() {
    return (
        <main className="max-w-3xl mx-auto px-5 py-8 space-y-6">
            <Seo
                title="Personvern og cookies | SmartHverdagsliv"
                description="Les om hvilke data vi samler inn, cookies og annonsering."
            />
            <h1 className="text-3xl font-bold">Personvern og cookies</h1>
            <p className="text-sm text-gray-500">Sist oppdatert: 17. september 2025</p>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold">Hvilke data vi samler inn</h2>
                <p className="leading-relaxed">
                    Vi samler inn begrenset informasjon om besøk (f.eks. sidevisninger og anonymisert brukerstatistikk)
                    for å forbedre innholdet og brukeropplevelsen.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold">Cookies</h2>
                <p className="leading-relaxed">
                    Nettstedet bruker informasjonskapsler (cookies) for grunnleggende funksjon og analyse.
                    Tredjeparter (f.eks. annonseleverandører) kan sette cookies for frekvensstyring og rapportering.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold">Annonser</h2>
                <p className="leading-relaxed">
                    Dersom vi viser annonser (f.eks. Google AdSense/Ezoic), kan disse bruke cookies for å vise mer relevante annonser.
                    Vi deler ikke personidentifiserbare data med annonsører.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold">Kontakt</h2>
                <p className="leading-relaxed">
                    Spørsmål? Kontakt oss på{" "}
                    <a className="text-blue-600 underline" href="mailto:smarthverdagsliv@gmail.com">
                        smarthverdagsliv@gmail.com
                    </a>.
                </p>
            </section>
        </main>
    );
}