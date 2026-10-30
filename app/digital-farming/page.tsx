const features = [
  "Farmer accounts and farm profiles",
  "Field layers and GIS map views",
  "Sowing-date and crop-stage crop calendars",
  "Weather insights and agronomic reminders",
  "Pest, disease, and crop health advisories",
  "Consultation booking and history tracking",
];

export default function DigitalFarmingPage() {
  return (
    <div className="section-shell py-16 lg:py-20">
      <div className="mb-12 max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D62828]">Digital farming</div>
        <h1 className="mt-4 text-4xl font-bold tracking-[-0.06em] text-[#171A1C] sm:text-5xl">Bring intelligence to every acre.</h1>
        <p className="mt-5 text-base leading-8 text-stone-700">The URVA digital agriculture framework is designed to support smarter field decisions through structured records, crop calendars, weather awareness, and expert assistance.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm lg:p-8">
          <h2 className="text-2xl font-semibold text-[#171A1C]">Planned capabilities</h2>
          <ul className="mt-6 space-y-4 text-base text-stone-700">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#D62828]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[28px] border border-stone-200 bg-[#171A1C] p-6 text-white shadow-sm lg:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F8B4B4]">Demo view</div>
          <h2 className="mt-4 text-2xl font-semibold">Illustrative app preview</h2>
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl bg-white/5 p-4">
              <div className="text-sm text-stone-300">Today&apos;s field plan</div>
              <div className="mt-2 text-3xl font-bold text-white">Rice • 28 DAS</div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/5 p-4">
                <div className="text-sm text-stone-300">Weather</div>
                <div className="mt-2 text-xl font-semibold">31°C</div>
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <div className="text-sm text-stone-300">Task reminder</div>
                <div className="mt-2 text-xl font-semibold">Nutrient check</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
