import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
    return (
        <article className="group bg-white rounded-xl shadow-sm ring-1 ring-black/5 hover:shadow-md transition overflow-hidden">
            <Link to={`/artikler/${article.slug}`} className="block p-4 sm:p-5">
                <h2 className="text-lg sm:text-xl font-semibold group-hover:underline line-clamp-2">
                    {article.title}
                </h2>
                <p className="text-xs text-gray-500 mt-1">{article.date}</p>
                <p className="mt-3 text-sm text-gray-700 line-clamp-3">{article.excerpt}</p>
            </Link>
        </article>
    );
}