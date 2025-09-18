import { useParams, Link } from "react-router-dom";
import { articles } from "../data/articles";
import Seo from "../components/Seo";
import RelatedArticles from "../components/RelatedArticles";

export default function ArticlePage() {
    const { slug } = useParams();
    const article = articles.find((a) => a.slug === slug);

    if (!article) {
        return (
            <div className="max-w-4xl mx-auto p-6">
                <h1 className="text-2xl font-bold">Artikkel ikke funnet</h1>
                <Link to="/" className="text-blue-600">Til forsiden</Link>
            </div>
        );
    }

    return (
        <article className="max-w-4xl mx-auto p-6">
            <Seo
                title={article.title}
                description={article.excerpt}
            />
            <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
            <p className="text-gray-500 text-sm mb-6">{article.date}</p>
            <div className="prose max-w-none">
                {article.content.split("\n").map((p, i) => (
                    <p key={i}>{p}</p>
                ))}
            </div>
            <RelatedArticles currentId={article.id} />
        </article>
    );
}