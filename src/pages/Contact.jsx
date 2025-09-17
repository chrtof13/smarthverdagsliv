// src/pages/Contact.jsx
import { useState } from "react";
import Seo from "../components/Seo";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
        website: "", // honeypot
    });

    const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.website) return; // bot
        if (!form.name || !form.email || !form.message) {
            alert("Fyll ut navn, e-post og melding.");
            return;
        }
        const to = "smarthverdagsliv@gmail.com"; // hovedadresse
        const subject = encodeURIComponent(`Kontakt via nettsiden: ${form.name}`);
        const body = encodeURIComponent(
            [
                `Navn: ${form.name}`,
                `E-post: ${form.email}`,
                "",
                "Melding:",
                form.message,
                "",
                "---",
                "Sendt fra kontaktskjemaet på smarthverdagsliv.no",
            ].join("\n")
        );
        window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    };

    return (
        <main className="max-w-3xl mx-auto px-5 py-8 space-y-6">
            <Seo
                title="Kontakt oss | SmartHverdagsliv"
                description="Ta kontakt med redaksjonen. Vi svarer så raskt vi kan."
            />

            <h1 className="text-3xl font-bold">Kontakt oss</h1>
            <p className="leading-relaxed">
                Bruk skjemaet under – det åpner e-postklienten din med ferdig utfylt melding.
                Du kan også skrive direkte til{" "}
                <a className="text-blue-600 underline" href="mailto:smarthverdagsliv@gmail.com">
                    smarthverdagsliv@gmail.com
                </a>.
            </p>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-5 grid gap-3">
                {/* Honeypot */}
                <label className="hidden">
                    Ikke fyll ut dette feltet:
                    <input
                        name="website"
                        value={form.website}
                        onChange={onChange}
                        tabIndex={-1}
                        autoComplete="off"
                    />
                </label>

                <label className="grid gap-1">
                    <span className="text-sm">Navn</span>
                    <input
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        className="px-3 py-2 border rounded-lg"
                        required
                    />
                </label>

                <label className="grid gap-1">
                    <span className="text-sm">E-post</span>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        className="px-3 py-2 border rounded-lg"
                        required
                    />
                </label>

                <label className="grid gap-1">
                    <span className="text-sm">Melding</span>
                    <textarea
                        rows={6}
                        name="message"
                        value={form.message}
                        onChange={onChange}
                        className="px-3 py-2 border rounded-lg"
                        required
                    />
                </label>

                <button className="px-4 py-2 rounded-lg bg-black text-white">Åpne e-post</button>
            </form>
        </main>
    );
}