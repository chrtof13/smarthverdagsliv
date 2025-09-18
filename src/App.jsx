import RedirectArticleById from "./pages/RedirectArticleById"; // lager vi straks

<Routes>
    <Route path="/" element={<Home />} />

    {/* NY: slug-basert URL */}
    <Route path="/artikler/:slug" element={<ArticlePage />} />

    {/* GAMMEL sti -> redirect */}
    <Route path="/article/:id" element={<RedirectArticleById />} />

    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/privacy" element={<Privacy />} />
    <Route path="*" element={<Home />} />
</Routes>