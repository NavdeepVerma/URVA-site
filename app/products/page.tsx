import { ProductCatalog } from "@/components/product-catalog";

export default function ProductsPage() {
  return (
    <div className="section-shell py-16 lg:py-20">
      <div className="mb-12 max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D62828]">Products</div>
        <h1 className="mt-4 text-4xl font-bold tracking-[-0.06em] text-[#171A1C] sm:text-5xl">Find the right crop solution for your field.</h1>
        <p className="mt-5 text-base leading-8 text-stone-700">This product catalogue is structured for future retail and distributor growth, while supporting product discovery and qualified lead generation in the current release.</p>
      </div>
      <ProductCatalog />
    </div>
  );
}
