"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/products", label: "Products" },
  { href: "/stories", label: "Stories" },
  { href: "/digital-farming", label: "Digital Farming" },
  { href: "/knowledge", label: "Knowledge" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="URVA home">
          <Image
            src="/urva%20new%20logo.png?v=20261030"
            alt=""
            width={56}
            height={56}
            unoptimized
            priority
            className="h-12 w-12 shrink-0 object-contain mix-blend-multiply"
          />
          <div className="min-w-0">
            <div className="font-['Lexend_Deca'] text-[1.625rem] font-semibold tracking-[0.12em] text-[#171A1C] sm:text-[2rem]">
              URVA
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-stone-700 xl:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-[#D62828]">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <Link href="/consultation" className="rounded-full border border-stone-300 px-3 py-2 text-xs font-semibold text-stone-800 transition hover:border-[#D62828] hover:text-[#D62828] sm:px-4 sm:text-sm">
            Get Crop Consultation
          </Link>
          <Link href="/products" className="rounded-full bg-[#D62828] px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#b62020] sm:px-4 sm:text-sm">
            Explore Products
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 text-stone-700 transition hover:border-[#D62828] hover:text-[#D62828] xl:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
            <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-stone-200 bg-white xl:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-sm font-medium text-stone-700">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 transition hover:bg-stone-50 hover:text-[#D62828]">
                {link.label}
              </Link>
            ))}
            <Link href="/consultation" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-[#D62828] px-4 py-3 text-center font-semibold text-white">
              Get Crop Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
