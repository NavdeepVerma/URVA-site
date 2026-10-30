import Link from "next/link";

const solutions = [
  { title: "Precision Agriculture", description: "Satellite and GIS-backed observation to track crop variability, field patterns, and operational decisions.", bullets: ["Field intelligence", "Crop monitoring", "Site-level planning"] },
  { title: "Crop Consultancy", description: "Seasonal guidance and in-field recommendations tailored to crop stage, region, and farmer goals.", bullets: ["Nutrient planning", "Pest and disease guidance", "Crop-stage planning"] },
  { title: "Agricultural Inputs", description: "Input selection aligned with agronomic needs, crop performance goals, and responsible field use.", bullets: ["Crop nutrition", "Crop protection", "Specialized products"] },
  { title: "Digital Farming", description: "A structured digital layer for crop records, reminders, field monitoring, and better farm administration.", bullets: ["Crop calendars", "Weather insights", "Farm activity records"] },
];

export default function SolutionsPage() {
  return (
    <div className="section-shell py-16 lg:py-20">
      <div className="mb-12 max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D62828]">Solutions</div>
        <h1 className="mt-4 text-4xl font-bold tracking-[-0.06em] text-[#171A1C] sm:text-5xl">Technology and agronomy designed for practical field outcomes.</h1>
      </div>

      <div className="grid gap-6">
        {solutions.map((item) => (
          <article key={item.title} className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-[0_18px_50px_rgba(23,26,28,0.04)] md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold text-[#171A1C]">{item.title}</h2>
                <p className="mt-3 text-base leading-8 text-stone-700">{item.description}</p>
              </div>
              <Link href="/consultation" className="rounded-full bg-[#D62828] px-5 py-3 text-sm font-semibold text-white hover:bg-[#b62020]">Request Advisory</Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {item.bullets.map((bullet) => (
                <span key={bullet} className="rounded-full bg-stone-100 px-3 py-2 text-sm text-stone-700">{bullet}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
