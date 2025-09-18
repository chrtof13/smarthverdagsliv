import { Navigate, useParams } from "react-router-dom";
import { articles } from "../data/articles";

export default function RedirectArticleById() {
    const { id } = useParams();
    const art = articles.find((a) => String(a.id) === String(id));

    if (!art) {
        return <Navigate to="/" replace />;
    }

    return <Navigate to={`/artikler/${art.slug}`} replace />;
}