// src/pages/ArticlePage.jsx
import { useParams, Link } from "react-router-dom";
import { articles } from "../data/articles";
import Seo from "../components/Seo";
import RelatedArticles from "../components/RelatedArticles";

export default function ArticlePage() {
    const { id } = useParams();
    const article = articles.find((a) => a.id.toString() === id);

    if (!article) {
        return (
            <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-xl font-bold">Artikkel ikke funnet</h1>
                <Link to="/" className="text-blue-600 underline">Tilbake til forsiden</Link>
            </main>
        );
    }

    return (
        <main className="mx-auto w-full max-w-3xl lg:max-w-4xl">
            <Seo title={`${article.title} | SmartHverdagsliv`} description={article.excerpt} />

            <nav className="mb-4 sm:mb-6">
                <Link
                    to="/"
                    aria-label="Gå tilbake til forsiden"
                    className="text-sm text-blue-600 hover:underline"
                >
                    ← Tilbake
                </Link>
            </nav>

            <header className="mb-4 sm:mb-6">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                    {article.title}
                </h1>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">{article.date}</p>
            </header>

            <ArticleBody content={article.content} />

            <RelatedArticles currentId={article.id} count={3} />

            <div className="mt-10">
                <Link to="/" className="text-blue-600 hover:underline">← Til forsiden</Link>
            </div>
        </main>
    );
}

function ArticleBody({ content }) {
    return (
        <div
            className="article-content text-[15px] sm:text-base lg:text-lg leading-7 sm:leading-8 text-gray-800"
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
}