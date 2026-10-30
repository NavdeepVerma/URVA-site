import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const lexend = Lexend_Deca({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "URVA | Smarter Farming. Stronger Harvests.",
  description:
    "URVA by VERMA AGROTECH PVT LTD brings precision agriculture, crop consultancy, digital farming, and trusted agronomic inputs to Indian farmers and agri-businesses.",
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={lexend.variable} suppressHydrationWarning>
      <body className="bg-[#F8F6F3] text-[#171A1C] antialiased" suppressHydrationWarning>
        <div className="min-h-screen">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
