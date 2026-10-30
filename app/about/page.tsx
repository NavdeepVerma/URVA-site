export default function AboutPage() {
  return (
    <div className="section-shell py-16 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D62828]">About URVA</div>
          <h1 className="mt-4 text-4xl font-bold tracking-[-0.06em] text-[#171A1C] sm:text-5xl">A farmer-first agritech company rooted in Indian agriculture.</h1>
          <p className="mt-5 text-base leading-8 text-stone-700">URVA, operated by VERMA AGROTECH PVT LTD, is focused on practical agronomic solutions, precision agriculture advisory, and better crop decision-making for farmers, agri-businesses, and institutions across India.</p>
          <p className="mt-5 text-base leading-8 text-stone-700">The brand combines field expertise, crop science, digital intelligence, and trusted products to help clients reduce uncertainty and improve crop performance across growing seasons.</p>
        </div>

        <div className="rounded-[30px] border border-stone-200 bg-[#171A1C] p-6 text-white shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F8B4B4]">Operating focus</div>
          <div className="mt-6 space-y-5 text-sm text-stone-300">
            <div><span className="font-semibold text-white">Precision agriculture:</span> GIS, crop monitoring, and field visibility.</div>
            <div><span className="font-semibold text-white">Crop consultancy:</span> Advisory support at each crop stage.</div>
            <div><span className="font-semibold text-white">Inputs and solutions:</span> Crop nutrition and crop protection support.</div>
            <div><span className="font-semibold text-white">Digital agriculture:</span> Digital records, planning, and guidance tools.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
