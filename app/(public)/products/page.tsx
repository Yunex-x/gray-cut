import Navbar from "@/app/components/layout/Navbar";
import ProductShowcase from "@/app/components/sections/products/products/ProductShowcase";

export default function PrecisionPage() {
  return (
    <main className="w-full flex flex-col   items-center">
   <Navbar/>
   <ProductShowcase />
    </main>
  );
}
