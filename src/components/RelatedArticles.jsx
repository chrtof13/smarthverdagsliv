import { Link } from "react-router-dom";
import { articles } from "../data/articles";

export default function RelatedArticles({ currentId, count = 3 }) {
    const related = articles
        .filter((a) => a.id.toString() !== currentId.toString())
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, count);

    if (!related.length) return null;

    return (
        <section className="mt-12">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-4">Les også</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {related.map((a) => (
                    <article
                        key={a.id}
                        className="group bg-white rounded-xl shadow-sm ring-1 ring-black/5 hover:shadow-md transition overflow-hidden"
                    >
                        <Link to={`/article/${a.id}`} className="block p-4 sm:p-5">
                            <h3 className="text-base sm:text-lg font-semibold group-hover:underline">
                                {a.title}
                            </h3>
                            <p className="text-xs text-gray-500 mt-1">{a.date}</p>
                            <p className="mt-2 text-sm text-gray-700">{a.excerpt}</p>
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    );
}