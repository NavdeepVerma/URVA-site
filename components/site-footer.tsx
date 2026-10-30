import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-stone-200 bg-[#171A1C] text-stone-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.2fr] lg:px-8">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-white">
              <Image
                src="/urva%20new%20logo%203d.png?v=20261030"
                alt=""
                width={64}
                height={64}
                unoptimized
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <div className="font-['Lexend_Deca'] text-lg font-semibold tracking-[0.12em] text-white">
                URVA
              </div>
              <div className="text-[10px] uppercase tracking-[0.24em] text-stone-400">
                Verma Agrotech
              </div>
            </div>
          </div>
          <p className="max-w-md text-sm leading-7 text-stone-300">
            URVA supports Indian farmers and agri-businesses with precision agriculture, scientific crop guidance, and performance-focused crop solutions.
          </p>
          <div className="mt-6 flex gap-3 text-sm text-stone-300">
            <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="rounded-full border border-stone-700 px-3 py-2 hover:border-[#D62828] hover:text-white">WhatsApp</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="rounded-full border border-stone-700 px-3 py-2 hover:border-[#D62828] hover:text-white">LinkedIn</a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-stone-400">Company</h3>
          <ul className="space-y-3 text-sm text-stone-300">
            <li><Link href="/about" className="hover:text-white">About URVA</Link></li>
            <li><Link href="/solutions" className="hover:text-white">Solutions</Link></li>
            <li><Link href="/products" className="hover:text-white">Products</Link></li>
            <li><Link href="/partners" className="hover:text-white">Partnerships</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-stone-400">Resources</h3>
          <ul className="space-y-3 text-sm text-stone-300">
            <li><Link href="/stories" className="hover:text-white">Customer Stories</Link></li>
            <li><Link href="/knowledge" className="hover:text-white">Knowledge Center</Link></li>
            <li><Link href="/digital-farming" className="hover:text-white">Digital Farming</Link></li>
            <li><Link href="/consultation" className="hover:text-white">Consultation</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-stone-400">Contact</h3>
          <ul className="space-y-3 text-sm text-stone-300">
            <li>VERMA AGROTECH PVT LTD</li>
            <li>Chhattisgarh, India</li>
            <li><a href="tel:+919999999999" className="hover:text-white">+91 99999 99999</a></li>
            <li><a href="mailto:hello@urvaagritech.com" className="hover:text-white">hello@urvaagritech.com</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-stone-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-stone-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div>© 2026 URVA by VERMA AGROTECH PVT LTD. All rights reserved.</div>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <span>Regulatory disclaimer applies.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
