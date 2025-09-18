// src/pages/Home.jsx
import { articles } from "../data/articles";
import ArticleCard from "../components/ArticleCard";
import Seo from "../components/Seo";

export default function Home() {
    return (
        <main className="space-y-6">
            <Seo
                title="SmartHverdagsliv – forsiden"
                description="Praktiske guider, sparetips og produktanmeldelser."
            />
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                De mest nyttige tipsene for hverdagen i 2025
            </h1>
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {articles.map((a) => (
                    <ArticleCard key={a.id} article={a} />
                ))}
            </div>
        </main>
    );
}