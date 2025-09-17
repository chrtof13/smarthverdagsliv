import Seo from "../components/Seo";

export default function About() {
    return (
        <main className="max-w-3xl mx-auto px-5 py-8 space-y-4">
            <Seo
                title="Om oss | SmartHverdagsliv"
                description="Om SmartHverdagsliv: praktiske guider, sparetips og produktanmeldelser."
            />
            <h1 className="text-3xl font-bold">Om oss</h1>
            <p className="text-sm text-gray-500">Sist oppdatert: 17. september 2025</p>
            <p className="leading-relaxed">
                SmartHverdagsliv er et lite, uavhengig nettsted som publiserer praktiske guider,
                sparetips og produktanmeldelser. Målet vårt er å gjøre hverdagen enklere – og smartere.
            </p>
            <p className="leading-relaxed">
                Innholdet er redaksjonelt og uavhengig. Dersom vi får provisjon (affiliatelenker), merker vi dette.
                Vi forsøker alltid å være transparente på metode, utvalg og vurderinger.
            </p>
            <p className="leading-relaxed">Har du forslag til temaer vi bør dekke? Ta kontakt!</p>
        </main>
    );
}