"use client";

import { useMemo, useState } from "react";

const languageOptions = ["English", "हिन्दी", "Chhattisgarhi"];
const contactOptions = ["Call", "WhatsApp", "SMS"];

type FormState = {
  name: string;
  phone: string;
  district: string;
  village: string;
  crop: string;
  stage: string;
  concern: string;
  language: string;
  contact: string;
  consent: boolean;
};

const initialState: FormState = {
  name: "",
  phone: "",
  district: "",
  village: "",
  crop: "",
  stage: "",
  concern: "",
  language: "English",
  contact: "WhatsApp",
  consent: false,
};

export function ConsultationForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const isValid = useMemo(() => {
    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) nextErrors.name = "Full name is required.";
    if (!/^\+?[0-9\s-]{10,15}$/.test(form.phone)) nextErrors.phone = "Enter a valid mobile number.";
    if (!form.district.trim()) nextErrors.district = "District is required.";
    if (!form.crop.trim()) nextErrors.crop = "Crop is required.";
    if (!form.concern.trim()) nextErrors.concern = "Please describe your main concern.";
    if (!form.consent) nextErrors.consent = "Consent is required to submit.";
    return { valid: Object.keys(nextErrors).length === 0, nextErrors };
  }, [form]);

  const handleChange = (field: keyof FormState, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { valid, nextErrors } = isValid;
    setErrors(nextErrors);

    if (!valid) {
      setSubmitted(false);
      return;
    }

    const payload = {
      ...form,
      submittedAt: new Date().toISOString(),
    };

    if (typeof window !== "undefined") {
      window.localStorage.setItem("urva-demo-consultation", JSON.stringify(payload));
    }

    setSubmitted(true);
    setForm(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-stone-200 bg-white p-6 shadow-[0_20px_50px_rgba(23,26,28,0.06)]">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-stone-700">Farmer / customer name</label>
          <input value={form.name} onChange={(e) => handleChange("name", e.target.value)} className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none transition focus:border-[#D62828] focus:bg-white" placeholder="Enter full name" />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-stone-700">Mobile number</label>
          <input value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none transition focus:border-[#D62828] focus:bg-white" placeholder="+91 98xxx xxxxx" />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-stone-700">District</label>
          <input value={form.district} onChange={(e) => handleChange("district", e.target.value)} className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none transition focus:border-[#D62828] focus:bg-white" placeholder="District" />
          {errors.district && <p className="mt-1 text-xs text-red-600">{errors.district}</p>}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-stone-700">Village</label>
          <input value={form.village} onChange={(e) => handleChange("village", e.target.value)} className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none transition focus:border-[#D62828] focus:bg-white" placeholder="Village / locality" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-stone-700">Crop</label>
          <input value={form.crop} onChange={(e) => handleChange("crop", e.target.value)} className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none transition focus:border-[#D62828] focus:bg-white" placeholder="Rice, wheat, chilli..." />
          {errors.crop && <p className="mt-1 text-xs text-red-600">{errors.crop}</p>}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-stone-700">Sowing date / crop stage</label>
          <input value={form.stage} onChange={(e) => handleChange("stage", e.target.value)} className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none transition focus:border-[#D62828] focus:bg-white" placeholder="e.g. 10 June / tillering stage" />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-stone-700">Main agricultural concern</label>
        <textarea value={form.concern} onChange={(e) => handleChange("concern", e.target.value)} rows={5} className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none transition focus:border-[#D62828] focus:bg-white" placeholder="Describe the challenge, symptoms, or objective" />
        {errors.concern && <p className="mt-1 text-xs text-red-600">{errors.concern}</p>}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-stone-700">Preferred language</label>
          <select value={form.language} onChange={(e) => handleChange("language", e.target.value)} className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none transition focus:border-[#D62828] focus:bg-white">
            {languageOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-stone-700">Preferred contact method</label>
          <select value={form.contact} onChange={(e) => handleChange("contact", e.target.value)} className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none transition focus:border-[#D62828] focus:bg-white">
            {contactOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-stone-700">Optional field photo</label>
        <input type="file" className="block w-full rounded-xl border border-dashed border-stone-300 bg-stone-50 px-4 py-3 text-sm text-stone-600" />
      </div>

      <label className="flex items-start gap-3 rounded-xl border border-stone-200 bg-stone-50 p-3 text-sm text-stone-700">
        <input type="checkbox" checked={form.consent} onChange={(e) => handleChange("consent", e.target.checked)} className="mt-1 h-4 w-4 accent-[#D62828]" />
        <span>I agree to be contacted by URVA for crop advisory and product-related communication, and understand that submitted information will be used for agronomic support and lead management.</span>
      </label>
      {errors.consent && <p className="text-xs text-red-600">{errors.consent}</p>}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="rounded-full bg-[#D62828] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#b62020]">
          Request Crop Consultation
        </button>
        <p className="text-xs text-stone-500">Secure demo workflow for development. Sample submissions are stored locally in-browser.</p>
      </div>

      {submitted && (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          Your crop consultation request has been captured successfully in development mode. A team member will review it soon.
        </div>
      )}
    </form>
  );
}
