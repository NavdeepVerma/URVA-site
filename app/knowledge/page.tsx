const articles = [
  { category: "Crop advisory", title: "Seasonal crop planning for Kharif fields in Central India", readTime: "5 min read" },
  { category: "Nutrient management", title: "Recognising nutrient stress during vegetative growth", readTime: "4 min read" },
  { category: "Pest & disease", title: "Common symptoms and what to check before intervention", readTime: "6 min read" },
  { category: "Farming tips", title: "Improving spray coverage and application efficiency", readTime: "3 min read" },
  { category: "Soil health", title: "Building a practical soil management routine on mixed farms", readTime: "7 min read" },
  { category: "Field notes", title: "Sampling and observation methods for better crop decisions", readTime: "5 min read" },
];

export default function KnowledgePage() {
  return (
    <div className="section-shell py-16 lg:py-20">
      <div className="mb-12 max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D62828]">Knowledge center</div>
        <h1 className="mt-4 text-4xl font-bold tracking-[-0.06em] text-[#171A1C] sm:text-5xl">Practical insights for better crop decisions.</h1>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {['All','Crop advisories','Nutrient management','Pest & disease','Farming tips','Seasonal planning'].map((filter) => (
          <button key={filter} type="button" className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-700 hover:border-[#D62828] hover:text-[#D62828]">
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((article) => (
          <article key={article.title} className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm">
            <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D62828]">{article.category}</div>
            <h2 className="mt-4 text-xl font-semibold text-[#171A1C]">{article.title}</h2>
            <p className="mt-4 text-sm text-stone-600">{article.readTime}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
