"use client";

import { useMemo, useState } from "react";

const categories = ["All", "Crop nutrition", "Specialty fertilizers", "Crop protection", "Spray adjuvants"];

const products = [
  {
    name: "NUTRIGROW Plus",
    category: "Crop nutrition",
    description: "Balanced nutrient support for high-yield crop nutrition planning and soil health management.",
    size: "25 kg",
    image: "https://images.unsplash.com/photo-1464226184884-fa52ac9c8a0d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "BioRhiz Gold",
    category: "Specialty fertilizers",
    description: "Biofertilizer formulation for root activity support and improved nutrient efficiency.",
    size: "1 L",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "GuardX Pest Shield",
    category: "Crop protection",
    description: "Field-ready crop protection support to address common pest pressure with responsible use guidance.",
    size: "500 mL",
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Silicon Spray Max",
    category: "Spray adjuvants",
    description: "Adjuvant support for better spray coverage and residue management during crop protection activity.",
    size: "1 L",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80",
  },
];

export function ProductCatalog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = category === "All" || product.category === category;
      const matchesSearch = `${product.name} ${product.description}`.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 rounded-3xl border border-stone-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border border-stone-300 bg-stone-50 px-4 py-3 text-sm outline-none focus:border-[#D62828]"
            placeholder="Search products, crops, or solutions"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setCategory(tab)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${category === tab ? "bg-[#D62828] text-white" : "bg-stone-100 text-stone-700 hover:bg-stone-200"}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <article key={product.name} className="group overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-[0_20px_50px_rgba(23,26,28,0.04)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(214,40,40,0.12)]">
              <div className="relative overflow-hidden">
                <img src={product.image} alt={product.name} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D62828]">
                  {product.category}
                </div>
              </div>

              <div className="space-y-4 p-5">
                <div>
                  <h3 className="text-xl font-semibold text-[#171A1C]">{product.name}</h3>
                </div>
                <p className="text-sm leading-6 text-stone-600">{product.description}</p>
                <div className="flex items-center justify-between text-sm text-stone-500">
                  <span>Pack size</span>
                  <span className="font-semibold text-stone-800">{product.size}</span>
                </div>
                <div className="flex gap-3 pt-1">
                  <button type="button" className="flex-1 rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-800 transition hover:border-[#D62828] hover:text-[#D62828]">
                    View Product
                  </button>
                  <button type="button" className="flex-1 rounded-full bg-[#D62828] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#b62020]">
                    Enquire Now
                  </button>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="rounded-3xl border border-dashed border-stone-300 bg-stone-50 p-8 text-center text-stone-600 md:col-span-2 xl:col-span-4">
            No products match the current search. Try a different category or keyword.
          </div>
        )}
      </div>
    </div>
  );
}
