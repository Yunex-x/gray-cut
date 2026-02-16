import GridGallery from './GridGallery';
import ProductConfigurator from './ProductConfigurator';

interface ProductShowcaseProps {
  images?: {
    image146?: string;
    image147?: string;
    image148?: string;
    image141?: string;
  };
  className?: string;
}

export default function ProductShowcase({ images, className = '' }: ProductShowcaseProps) {
  return (
    <section className={`w-full bg-[#F6F4F1] ${className}`}>
      <div className="max-w-[1440px] mx-auto px-10 py-[118px]">
        <div className="flex flex-col xl:flex-row gap-10 items-start">
          {/* Gallery Grid - Main Content */}
          <div className="flex-1 w-full max-w-[1044px]">
            <GridGallery images={images} className="p-0 max-w-none" />
          </div>

          {/* Product Configurator - Sticky Sidebar */}
          <aside className="w-full xl:w-[276px] flex-shrink-0">
            <div className="sticky top-8 xl:top-[118px]">
              <ProductConfigurator />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}