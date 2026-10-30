import { ConsultationForm } from "@/components/consultation-form";

export default function ConsultationPage() {
  return (
    <div className="section-shell py-16 lg:py-20">
      <div className="mb-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D62828]">Consultation</div>
          <h1 className="mt-4 text-4xl font-bold tracking-[-0.06em] text-[#171A1C] sm:text-5xl">Let&apos;s work on your crop challenge.</h1>
          <p className="mt-5 text-base leading-8 text-stone-700">Share your field information for a practical, field-focused crop consultation. We support Hindi and English, with a foundation for future Chhattisgarhi outreach.</p>
          <div className="mt-8 space-y-4 text-sm text-stone-700">
            <div className="rounded-2xl border border-stone-200 bg-white p-4">• Product and agronomy advice</div>
            <div className="rounded-2xl border border-stone-200 bg-white p-4">• Crop-stage recommendations</div>
            <div className="rounded-2xl border border-stone-200 bg-white p-4">• Support for farmers, retailers, and institutional buyers</div>
          </div>
        </div>

        <ConsultationForm />
      </div>
    </div>
  );
}
