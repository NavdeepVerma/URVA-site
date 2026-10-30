export default function ContactPage() {
  return (
    <div className="section-shell py-16 lg:py-20">
      <div className="mb-12 max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D62828]">Contact</div>
        <h1 className="mt-4 text-4xl font-bold tracking-[-0.06em] text-[#171A1C] sm:text-5xl">Connect with the URVA team.</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm">
          <div className="space-y-5 text-sm text-stone-700">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D62828]">Office</div>
              <div className="mt-2 text-base text-[#171A1C]">VERMA AGROTECH PVT LTD</div>
              <div>Chhattisgarh, India</div>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D62828]">Call</div>
              <a href="tel:+919999999999" className="mt-2 inline-block text-base text-[#171A1C]">+91 99999 99999</a>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D62828]">Email</div>
              <a href="mailto:hello@urvaagritech.com" className="mt-2 inline-block text-base text-[#171A1C]">hello@urvaagritech.com</a>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200 bg-[#F1EFE9] p-6 shadow-sm">
          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-stone-700">Name</label>
              <input className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none focus:border-[#D62828]" placeholder="Full name" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-stone-700">Email</label>
              <input type="email" className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none focus:border-[#D62828]" placeholder="Email" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-stone-700">Message</label>
              <textarea rows={5} className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none focus:border-[#D62828]" placeholder="How can URVA support you?" />
            </div>
            <button type="submit" className="rounded-full bg-[#D62828] px-6 py-3 text-sm font-semibold text-white hover:bg-[#b62020]">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
