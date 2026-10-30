export default function AdminPage() {
  return (
    <div className="section-shell py-16 lg:py-20">
      <div className="rounded-[30px] border border-stone-200 bg-white p-8 shadow-sm">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D62828]">Admin dashboard</div>
        <h1 className="mt-4 text-4xl font-bold tracking-[-0.06em] text-[#171A1C]">Operational overview</h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-stone-700">This area is a protected placeholder for authorized staff to manage products, articles, success stories, leads, and homepage content.</p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Leads", "128"],
            ["Products", "24"],
            ["Articles", "18"],
            ["Partners", "07"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
              <div className="text-sm text-stone-500">{label}</div>
              <div className="mt-3 text-3xl font-bold text-[#171A1C]">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
