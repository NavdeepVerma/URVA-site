const partnerTypes = [
  "Retailers",
  "Distributors",
  "Agricultural professionals",
  "FPOs and SHGs",
  "Institutional customers",
  "Strategic partners",
];

export default function PartnersPage() {
  return (
    <div className="section-shell py-16 lg:py-20">
      <div className="mb-12 max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D62828]">Partnerships</div>
        <h1 className="mt-4 text-4xl font-bold tracking-[-0.06em] text-[#171A1C] sm:text-5xl">Grow with URVA.</h1>
        <p className="mt-5 text-base leading-8 text-stone-700">URVA works with partners who value agronomic credibility, field-focused products, and practical support for crop performance in Indian agriculture.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {partnerTypes.map((type) => (
          <div key={type} className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#D62828] text-lg font-bold text-white">✓</div>
            <h2 className="text-xl font-semibold text-[#171A1C]">{type}</h2>
            <p className="mt-3 text-sm leading-7 text-stone-600">Access practical product support, field guidance, and collaborative growth opportunities tailored to your agricultural business model.</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-[32px] border border-stone-200 bg-[#F1EFE9] p-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D62828]">Become a partner</div>
            <h2 className="mt-3 text-2xl font-semibold text-[#171A1C]">Start a collaborative agriculture partnership with URVA.</h2>
          </div>
          <a href="mailto:partners@urvaagritech.com" className="inline-flex rounded-full bg-[#D62828] px-6 py-3 text-sm font-semibold text-white hover:bg-[#b62020]">Connect with Sales</a>
        </div>
      </div>
    </div>
  );
}
