import Link from "next/link";

const solutions = [
  {
    title: "Precision Agriculture",
    description: "Satellite imagery, GIS mapping, field intelligence, and crop monitoring to support smarter decisions across growing seasons.",
    icon: "◎",
  },
  {
    title: "Crop Consultancy",
    description: "Crop planning, nutrient guidance, pest management, and field-level recommendations tailored to local conditions.",
    icon: "◌",
  },
  {
    title: "Agricultural Inputs",
    description: "Quality-driven crop nutrition, protection, and specialty product solutions selected for practical field performance.",
    icon: "✦",
  },
  {
    title: "Digital Farming",
    description: "Farm data management, crop calendars, weather insights, and digital tools designed for disciplined crop execution.",
    icon: "▣",
  },
];

const products = [
  {
    name: "NUTRIGROW Plus",
    category: "Crop nutrition",
    pack: "25 kg",
    text: "Field nutrition support designed for balanced crop development and nutrient planning.",
    image: "https://images.unsplash.com/photo-1464226184884-fa52ac9c8a0d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "BioRhiz Gold",
    category: "Specialty fertilizers",
    pack: "1 L",
    text: "Root-zone support to improve nutrient efficiency and crop resilience.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "GuardX Pest Shield",
    category: "Crop protection",
    pack: "500 mL",
    text: "Responsible protection support for post-emergence crop health management.",
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Silicon Spray Max",
    category: "Spray adjuvants",
    pack: "1 L",
    text: "Spray quality support to improve coverage, spreading, and field application uniformity.",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80",
  },
];

const stories = [
  {
    location: "Balod, Chhattisgarh",
    crop: "Paddy",
    challenge: "Uneven crop establishment and nutrient gaps during vegetative growth.",
    outcome: "Supported field-level guidance and nutrition planning for better stand uniformity.",
    photo: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
  },
  {
    location: "Durg, Chhattisgarh",
    crop: "Chilli",
    challenge: "Managing crop stress and monitoring pest pressure under fluctuating weather conditions.",
    outcome: "Improved crop monitoring rhythm and timely recommendations for stress management.",
    photo: "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    location: "Raipur, Chhattisgarh",
    crop: "Soybean",
    challenge: "Need for better field observations and crop-stage planning across a large acreage.",
    outcome: "Practical agronomic guidance helped maintain field discipline and decision-making clarity.",
    photo: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=1200&q=80",
  },
];

const knowledge = [
  { tag: "Crop advisories", title: "Seasonal crop planning for Kharif fields in Central India", meta: "Monsoon planning • 5 min read" },
  { tag: "Nutrient management", title: "Recognising nutrient stress at early vegetative stages", meta: "Field notes • 4 min read" },
  { tag: "Pest & disease", title: "Common field symptoms and what to check before intervention", meta: "Diagnostics • 6 min read" },
  { tag: "Farming tips", title: "How to improve spray coverage and application efficiency", meta: "Field operations • 3 min read" },
];

const testimonials = [
  {
    type: "Farmer testimonial",
    quote: "URVA helped us review our crop-stage problems systematically. The guidance made our field decisions more confident and practical.",
    name: "Rajesh Sahu",
    role: "Farmer, Bilaspur",
  },
  {
    type: "Retail partner review",
    quote: "We value the way URVA explains agronomy clearly. It helps both farmers and retailers make better product and crop decisions.",
    name: "Poonam Verma",
    role: "Agri retailer, Rajnandgaon",
  },
  {
    type: "Short video review",
    quote: "A quick field review can save a lot of confusion. The digital follow-up and on-ground advice have made a visible difference.",
    name: "Field Demo Reel",
    role: "3-minute review",
  },
  {
    type: "Institutional feedback",
    quote: "Their agriculture advisory is structured and field-driven. It feels professional, scientific, and easy to apply in real operations.",
    name: "FPO Team",
    role: "Dhamtari Collective",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-stone-200 bg-[#f7f4f0]">
        <div className="absolute inset-0 grid-overlay opacity-60" aria-hidden="true" />
        <div className="section-shell relative grid items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D62828]/20 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#D62828]">
              Science-driven agriculture
            </div>
            <h1 className="max-w-xl text-5xl font-bold leading-[1.05] tracking-[-0.06em] text-[#171A1C] sm:text-6xl">
              Smarter Farming. Stronger Harvests.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-700">
              Combining agricultural science, field expertise, precision technology, and quality crop solutions to help Indian farmers make better farming decisions.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/consultation" className="rounded-full bg-[#D62828] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#b62020]">
                Get Crop Consultation
              </Link>
              <Link href="/solutions" className="rounded-full border border-stone-300 bg-white px-6 py-3 text-center text-sm font-semibold text-stone-800 transition hover:border-[#D62828] hover:text-[#D62828]">
                Explore Our Solutions
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-stone-600">
              <div>
                <div className="text-2xl font-bold text-[#171A1C]">4x</div>
                <div>Core agritech solutions</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#171A1C]">Field-first</div>
                <div>scientific guidance</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#171A1C]">Farmer-centric</div>
                <div>decision support</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-6 top-10 h-28 w-28 rounded-full bg-[#D62828]/15 blur-3xl" aria-hidden="true" />
            <div className="rounded-[32px] border border-stone-200 bg-white p-3 shadow-[0_25px_80px_rgba(23,26,28,0.08)]">
              <img
                src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80"
                alt="Agronomist inspecting crops in a field"
                className="h-[280px] w-full rounded-[26px] object-cover sm:h-[360px] md:h-[420px] lg:h-[540px]"
              />
            </div>
            <div className="absolute -bottom-3 left-2 max-w-[220px] rounded-2xl border border-stone-200 bg-white/90 p-3 shadow-lg backdrop-blur sm:left-4 sm:-bottom-5 sm:max-w-xs sm:p-4">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.12em] text-stone-500">
                <span>Field insight</span>
                <span className="text-[#2d6a47]">Live</span>
              </div>
              <div className="mt-3 text-xl font-semibold text-[#171A1C]">Field performance monitoring</div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs text-stone-600">
                <div className="rounded-lg bg-stone-100 px-2 py-2"><div className="font-bold text-[#171A1C]">78%</div><div>Soil health</div></div>
                <div className="rounded-lg bg-stone-100 px-2 py-2"><div className="font-bold text-[#171A1C]">14d</div><div>Crop cycle</div></div>
                <div className="rounded-lg bg-stone-100 px-2 py-2"><div className="font-bold text-[#171A1C]">5.2</div><div>Index</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D62828]">Our solutions</div>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[#171A1C] sm:text-4xl">Agricultural intelligence that moves your field forward.</h2>
            </div>
            <Link href="/solutions" className="text-sm font-semibold text-[#D62828]">View all solutions →</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {solutions.map((solution) => (
              <article key={solution.title} className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-[0_12px_40px_rgba(23,26,28,0.04)] transition hover:-translate-y-1 hover:border-[#D62828]/20 hover:shadow-[0_20px_50px_rgba(214,40,40,0.08)]">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D62828] text-2xl text-white shadow-sm">{solution.icon}</div>
                <h3 className="text-xl font-semibold text-[#171A1C]">{solution.title}</h3>
                <p className="mt-4 text-sm leading-7 text-stone-600">{solution.description}</p>
                <Link href="/solutions" className="mt-6 inline-flex text-sm font-semibold text-[#D62828]">Learn more →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#171A1C] py-20 text-white">
        <div className="section-shell">
          <div className="mb-10 max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F8B4B4]">How URVA works</div>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] sm:text-4xl">Discover your field → receive scientific recommendations → implement and monitor results.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { step: "01", title: "Discover your field", text: "We understand crop conditions, field history, and local production realities before recommending action." },
              { step: "02", title: "Receive scientific recommendations", text: "URVA blends agronomy, crop-stage knowledge, product suitability, and digital insight for practical guidance." },
              { step: "03", title: "Implement and monitor", text: "Farmers use tailored recommendations and track performance with better field visibility and follow-up support." },
            ].map((item) => (
              <div key={item.step} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <div className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#F8B4B4]">{item.step}</div>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-stone-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D62828]">Featured products</div>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[#171A1C] sm:text-4xl">Practical crop solutions for field performance.</h2>
            </div>
            <Link href="/products" className="text-sm font-semibold text-[#D62828]">Browse all products →</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <article key={product.name} className="overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-sm">
                <img src={product.image} alt={product.name} className="h-56 w-full object-cover" />
                <div className="space-y-4 p-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full bg-stone-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-stone-600">{product.category}</span>
                    <span className="text-xs font-medium text-stone-500">{product.pack}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#171A1C]">{product.name}</h3>
                  <p className="text-sm leading-6 text-stone-600">{product.text}</p>
                  <div className="flex gap-3 pt-2">
                    <button type="button" className="flex-1 rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-800 transition hover:border-[#D62828] hover:text-[#D62828]">View Product</button>
                    <button type="button" className="flex-1 rounded-full bg-[#D62828] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#b62020]">Enquire Now</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F1EFE9] py-20">
        <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D62828]">Digital agriculture</div>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-[#171A1C] sm:text-4xl">Bring Intelligence to Every Acre.</h2>
            <p className="mt-5 max-w-lg text-base leading-8 text-stone-700">
              Digital farm records, GIS and satellite analysis, crop-stage monitoring, weather insights, and personalized crop guidance come together to support better decisions across the full season.
            </p>
            <ul className="mt-7 space-y-3 text-sm text-stone-700">
              <li>• Farm profiles and crop records</li>
              <li>• Field-level visibility and crop calendar planning</li>
              <li>• Weather and agronomic task reminders</li>
              <li>• Agronomy advisories and consultation booking</li>
            </ul>
            <div className="mt-8">
              <Link href="/digital-farming" className="inline-flex rounded-full bg-[#D62828] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b62020]">Discover Digital Farming</Link>
            </div>
          </div>
          <div className="rounded-[32px] border border-stone-200 bg-white p-4 shadow-[0_25px_80px_rgba(23,26,28,0.06)]">
            <div className="overflow-hidden rounded-[26px] border border-stone-200 bg-[#f8f6f3] p-3">
              <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                <div className="flex gap-2">
                  {["#D62828", "#C7C0B3", "#2d6a47"].map((dot) => (
                    <span key={dot} className="h-3 w-3 rounded-full" style={{ backgroundColor: dot }} />
                  ))}
                </div>
                <div className="text-xs uppercase tracking-[0.14em] text-stone-500">Farm dashboard</div>
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-2xl bg-[#171A1C] p-5 text-white">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.14em] text-stone-300">
                    <span>Crop health</span>
                    <span className="text-[#F8B4B4]">+12.4%</span>
                  </div>
                  <div className="mt-5 h-36 rounded-2xl bg-[radial-gradient(circle_at_bottom,_rgba(214,40,40,0.45),_rgba(23,26,28,1)_55%)] p-4">
                    <div className="flex h-full items-end justify-between gap-2">
                      {[25, 35, 48, 60, 72, 88].map((height) => (
                        <div key={height} className="w-full rounded-t-xl bg-gradient-to-t from-[#D62828] to-[#F8B4B4]" style={{ height: `${height}%` }} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-stone-200 bg-white p-4">
                    <div className="text-xs uppercase tracking-[0.14em] text-stone-500">Weather</div>
                    <div className="mt-3 text-3xl font-bold text-[#171A1C]">31°C</div>
                    <div className="text-sm text-stone-600">Light rainfall expected</div>
                  </div>
                  <div className="rounded-2xl border border-stone-200 bg-white p-4">
                    <div className="text-xs uppercase tracking-[0.14em] text-stone-500">Upcoming task</div>
                    <div className="mt-3 text-lg font-semibold text-[#171A1C]">Nutrient review</div>
                    <div className="text-sm text-stone-600">Due in 2 days</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <div className="mb-10 max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D62828]">Farmer success stories</div>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-[#171A1C] sm:text-4xl">Field demonstrations and practical outcomes from real agronomic work.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {stories.map((story) => (
              <article key={story.location} className="overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-sm">
                <img src={story.photo} alt={story.crop} className="h-64 w-full object-cover" />
                <div className="p-5">
                  <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.12em] text-stone-500">
                    <span>{story.location}</span>
                    <span>{story.crop}</span>
                  </div>
                  <div className="space-y-3 text-sm leading-6 text-stone-600">
                    <p><span className="font-semibold text-[#171A1C]">Challenge:</span> {story.challenge}</p>
                    <p><span className="font-semibold text-[#171A1C]">Intervention:</span> Field guidance, monitoring, and recommendation support.</p>
                    <p><span className="font-semibold text-[#171A1C]">Outcome:</span> {story.outcome}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F3] py-20">
        <div className="section-shell">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D62828]">Testimonials</div>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[#171A1C] sm:text-4xl">Field feedback, quick reviews, and real conversations.</h2>
            </div>
            <Link href="/stories" className="text-sm font-semibold text-[#D62828]">View customer stories →</Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-[28px] border border-stone-200 bg-white p-5 shadow-[0_12px_32px_rgba(23,26,28,0.04)]">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-[#D62828]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#D62828]">{item.type}</span>
                  <span className="text-sm text-amber-500">★★★★★</span>
                </div>
                <p className="text-sm leading-7 text-stone-700">“{item.quote}”</p>
                <div className="mt-6 border-t border-stone-200 pt-4">
                  <div className="font-semibold text-[#171A1C]">{item.name}</div>
                  <div className="text-sm text-stone-500">{item.role}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D62828]">Knowledge center</div>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[#171A1C] sm:text-4xl">Actionable agronomy updates for the field.</h2>
            </div>
            <Link href="/knowledge" className="text-sm font-semibold text-[#D62828]">Explore all insights →</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {knowledge.map((item) => (
              <article key={item.title} className="rounded-[28px] border border-stone-200 bg-[#F8F6F3] p-5">
                <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D62828]">{item.tag}</div>
                <h3 className="mt-4 text-xl font-semibold text-[#171A1C]">{item.title}</h3>
                <p className="mt-4 text-sm text-stone-600">{item.meta}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell rounded-[32px] border border-stone-200 bg-[#171A1C] px-6 py-10 text-white sm:px-10 lg:px-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F8B4B4]">Grow with URVA</div>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] sm:text-4xl">Partner with a focused agritech growth network.</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-stone-300">For retailers, distributors, FPOs, institutional buyers, and agricultural professionals seeking practical products, field insight, and growth-focused collaboration.</p>
            </div>
            <Link href="/partners" className="inline-flex rounded-full bg-[#D62828] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b62020]">Become a Partner</Link>
          </div>
        </div>
      </section>

      <section className="pb-20 pt-6">
        <div className="section-shell rounded-[32px] border border-stone-200 bg-[#F1EFE9] p-8 sm:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D62828]">Ready to grow</div>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-[#171A1C] sm:text-4xl">Request crop consultation, explore products, or connect with the team.</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <Link href="/consultation" className="rounded-full bg-[#D62828] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#b62020]">Get Crop Consultation</Link>
              <Link href="/products" className="rounded-full border border-stone-300 bg-white px-6 py-3 text-center text-sm font-semibold text-stone-800 transition hover:border-[#D62828] hover:text-[#D62828]">Explore Products</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
