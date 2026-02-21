"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import SizeSelector from "./SizeSelector";
import VariantSelector from "./VariantSelector";
import AddToCart from "./AddToCart";
import ColorSelector from "./ColorSelector";

interface ProductOption {
  id: string;
  name: string;
  delivery: string;
  price: number;
  isSelected?: boolean;
}

interface ProductConfiguratorProps {
  onAddToCart: (payload: {
    productId: string;
    variant: string;
    color: string;
    size: string;
    location?: string;
    quantity: number;
  }) => void;
}

export default function ProductConfigurator({ onAddToCart }: ProductConfiguratorProps) {
  const [selectedColor, setSelectedColor] = useState<string>("jet-black");
  const [selectedSize, setSelectedSize] = useState<string>("7 × 7");
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedVariant, setSelectedVariant] = useState<string>("standard");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const productOptions: ProductOption[] = [
    {
      id: "custom",
      name: "the custom creation",
      delivery: "Delivery in 3 days",
      price: 1000,
    },
    {
      id: "standard",
      name: "The Standard System",
      delivery: "Delivery in 3 days",
      price: 240,
    },
  ];

  const colors = [
    { id: "jet-black", label: "Jet Black", image: "/products/jet-black.png" },
    { id: "natural-black", label: "Natural Black", image: "/products/natural-black.png" },
    { id: "dark-brown", label: "Dark Brown", image: "/products/dark-brown.png" },
    { id: "medium-brown", label: "Medium Brown", image: "/products/medium-brown.png" },
    { id: "light-brown", label: "Light Brown", image: "/products/light-brown.png" },
    { id: "chestnut-brown", label: "Chestnut Brown", image: "/products/chestnut-brown.png" },
    { id: "dark-blonde", label: "Dark Blonde", image: "/products/dark-blonde.png" },
    { id: "light-blonde", label: "Light Blonde", image: "/products/light-blonde.png" },
  ];

  const sizes = ["7 × 7", "8 × 8", "9 × 9"];

  const isValid = selectedVariant && selectedColor && selectedSize;

  async function handleAddToCartClick(): Promise<void> {
    if (!isValid) {
      setError("Please select all required options.");
      return;
    }

    setError("");
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 800));

    onAddToCart({
      productId: "standard-system",
      variant: selectedVariant,
      color: selectedColor,
      size: selectedSize,
      location: selectedLocation,
      quantity: 1,
    });

    setLoading(false);
  }

  return (
<div
  className="
    w-full
    max-w-[90%] sm:max-w-[320px] lg:max-w-[380px] xl:max-w-[440px] 2xl:max-w-[500px]
    flex flex-col
  "
>      <div className="bg-[#F6F4F1] ">
<div className="bg-[#F6F4F1] pl-6">
            {/* Header */}
          <div className="flex flex-col gap-1">
            <h1 className="font-playfair whitespace-nowrap font-semibold text-[20px] leading-[26px] tracking-[-0.02em] uppercase text-[#2C2D30]">
              The Standard <br /> System
            </h1>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-[#2C2D30] text-[#2C2D30]" />
                <span className="font-poppins font-semibold text-xs uppercase text-[#2C2D30]">
                  5/5
                </span>
              </div>
              <span className="font-poppins text-[11px] uppercase text-[#2C2D30]/70">
                based on 240 reviews
              </span>
            </div>
          </div>

          {/* Variant */}
          <VariantSelector
            options={productOptions}
            selected={selectedVariant}
            onSelect={(value) => {
              setSelectedVariant(value);
              setError("");
            }}
            compact
          />

          {/* Color */}
          <ColorSelector
            colors={colors}
            selected={selectedColor}
            onSelect={(value) => {
              setSelectedColor(value);
              setError("");
            }}
            compact
          />

          {/* Size */}
          <SizeSelector
            sizes={sizes}
            selected={selectedSize}
            onSelect={(value) => {
              setSelectedSize(value);
              setError("");
            }}
            compact
          />
          

          {/* Error */}
          {error && (
            <p className="text-xs text-red-500 mt-1 font-poppins">
              {error}
            </p>
          )}
 <div
          className="font-playfair mt-4 font-semibold uppercase tracking-[-0.02em]"
          style={{ fontSize: 16, lineHeight: "21px", color: "#2C2D30" }}
        >
          WHERE IS YOUR PART?
        </div>
        </div>
      </div>
<svg width="276" className="ml-6 mb-6 mt-6 " height="38" viewBox="0 0 276 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="275" height="37" stroke="#2C2D30" strokeOpacity="0.1"/>
<path d="M19.648 23.084C19.088 23.084 18.584 22.988 18.136 22.796C17.688 22.596 17.336 22.316 17.08 21.956C16.824 21.596 16.696 21.176 16.696 20.696H18.16C18.192 21.056 18.332 21.352 18.58 21.584C18.836 21.816 19.192 21.932 19.648 21.932C20.12 21.932 20.488 21.82 20.752 21.596C21.016 21.364 21.148 21.068 21.148 20.708C21.148 20.428 21.064 20.2 20.896 20.024C20.736 19.848 20.532 19.712 20.284 19.616C20.044 19.52 19.708 19.416 19.276 19.304C18.732 19.16 18.288 19.016 17.944 18.872C17.608 18.72 17.32 18.488 17.08 18.176C16.84 17.864 16.72 17.448 16.72 16.928C16.72 16.448 16.84 16.028 17.08 15.668C17.32 15.308 17.656 15.032 18.088 14.84C18.52 14.648 19.02 14.552 19.588 14.552C20.396 14.552 21.056 14.756 21.568 15.164C22.088 15.564 22.376 16.116 22.432 16.82H20.92C20.896 16.516 20.752 16.256 20.488 16.04C20.224 15.824 19.876 15.716 19.444 15.716C19.052 15.716 18.732 15.816 18.484 16.016C18.236 16.216 18.112 16.504 18.112 16.88C18.112 17.136 18.188 17.348 18.34 17.516C18.5 17.676 18.7 17.804 18.94 17.9C19.18 17.996 19.508 18.1 19.924 18.212C20.476 18.364 20.924 18.516 21.268 18.668C21.62 18.82 21.916 19.056 22.156 19.376C22.404 19.688 22.528 20.108 22.528 20.636C22.528 21.06 22.412 21.46 22.18 21.836C21.956 22.212 21.624 22.516 21.184 22.748C20.752 22.972 20.24 23.084 19.648 23.084ZM25.2702 15.764V18.212H28.1502V19.328H25.2702V21.884H28.5102V23H23.9022V14.648H28.5102V15.764H25.2702ZM31.3232 21.896H34.1432V23H29.9552V14.66H31.3232V21.896ZM36.4152 15.764V18.212H39.2952V19.328H36.4152V21.884H39.6552V23H35.0472V14.648H39.6552V15.764H36.4152ZM40.6442 18.812C40.6442 17.996 40.8322 17.264 41.2082 16.616C41.5922 15.968 42.1082 15.464 42.7562 15.104C43.4122 14.736 44.1282 14.552 44.9042 14.552C45.7922 14.552 46.5802 14.772 47.2682 15.212C47.9642 15.644 48.4682 16.26 48.7802 17.06H47.1362C46.9202 16.62 46.6202 16.292 46.2362 16.076C45.8522 15.86 45.4082 15.752 44.9042 15.752C44.3522 15.752 43.8602 15.876 43.4282 16.124C42.9962 16.372 42.6562 16.728 42.4082 17.192C42.1682 17.656 42.0482 18.196 42.0482 18.812C42.0482 19.428 42.1682 19.968 42.4082 20.432C42.6562 20.896 42.9962 21.256 43.4282 21.512C43.8602 21.76 44.3522 21.884 44.9042 21.884C45.4082 21.884 45.8522 21.776 46.2362 21.56C46.6202 21.344 46.9202 21.016 47.1362 20.576H48.7802C48.4682 21.376 47.9642 21.992 47.2682 22.424C46.5802 22.856 45.7922 23.072 44.9042 23.072C44.1202 23.072 43.4042 22.892 42.7562 22.532C42.1082 22.164 41.5922 21.656 41.2082 21.008C40.8322 20.36 40.6442 19.628 40.6442 18.812ZM55.5294 14.66V15.776H53.3094V23H51.9414V15.776H49.7094V14.66H55.5294ZM65.732 14.66L62.972 19.976V23H61.604V19.976L58.832 14.66H60.356L62.288 18.752L64.22 14.66H65.732ZM70.3817 23.084C69.6057 23.084 68.8897 22.904 68.2337 22.544C67.5857 22.176 67.0697 21.668 66.6857 21.02C66.3097 20.364 66.1217 19.628 66.1217 18.812C66.1217 17.996 66.3097 17.264 66.6857 16.616C67.0697 15.968 67.5857 15.464 68.2337 15.104C68.8897 14.736 69.6057 14.552 70.3817 14.552C71.1657 14.552 71.8817 14.736 72.5297 15.104C73.1857 15.464 73.7017 15.968 74.0777 16.616C74.4537 17.264 74.6417 17.996 74.6417 18.812C74.6417 19.628 74.4537 20.364 74.0777 21.02C73.7017 21.668 73.1857 22.176 72.5297 22.544C71.8817 22.904 71.1657 23.084 70.3817 23.084ZM70.3817 21.896C70.9337 21.896 71.4257 21.772 71.8577 21.524C72.2897 21.268 72.6257 20.908 72.8657 20.444C73.1137 19.972 73.2377 19.428 73.2377 18.812C73.2377 18.196 73.1137 17.656 72.8657 17.192C72.6257 16.728 72.2897 16.372 71.8577 16.124C71.4257 15.876 70.9337 15.752 70.3817 15.752C69.8297 15.752 69.3377 15.876 68.9057 16.124C68.4737 16.372 68.1337 16.728 67.8857 17.192C67.6457 17.656 67.5257 18.196 67.5257 18.812C67.5257 19.428 67.6457 19.972 67.8857 20.444C68.1337 20.908 68.4737 21.268 68.9057 21.524C69.3377 21.772 69.8297 21.896 70.3817 21.896ZM77.1038 14.66V19.976C77.1038 20.608 77.2678 21.084 77.5958 21.404C77.9318 21.724 78.3958 21.884 78.9878 21.884C79.5878 21.884 80.0518 21.724 80.3798 21.404C80.7158 21.084 80.8838 20.608 80.8838 19.976V14.66H82.2518V19.952C82.2518 20.632 82.1038 21.208 81.8078 21.68C81.5118 22.152 81.1158 22.504 80.6198 22.736C80.1238 22.968 79.5758 23.084 78.9758 23.084C78.3758 23.084 77.8278 22.968 77.3318 22.736C76.8438 22.504 76.4558 22.152 76.1678 21.68C75.8798 21.208 75.7358 20.632 75.7358 19.952V14.66H77.1038ZM88.125 23L86.205 19.664H85.161V23H83.793V14.66H86.673C87.313 14.66 87.853 14.772 88.293 14.996C88.741 15.22 89.073 15.52 89.289 15.896C89.513 16.272 89.625 16.692 89.625 17.156C89.625 17.7 89.465 18.196 89.145 18.644C88.833 19.084 88.349 19.384 87.693 19.544L89.757 23H88.125ZM85.161 18.572H86.673C87.185 18.572 87.569 18.444 87.825 18.188C88.089 17.932 88.221 17.588 88.221 17.156C88.221 16.724 88.093 16.388 87.837 16.148C87.581 15.9 87.193 15.776 86.673 15.776H85.161V18.572ZM99.8442 17.144C99.8442 17.568 99.7442 17.968 99.5442 18.344C99.3442 18.72 99.0242 19.028 98.5842 19.268C98.1442 19.5 97.5802 19.616 96.8922 19.616H95.3802V23H94.0122V14.66H96.8922C97.5322 14.66 98.0722 14.772 98.5122 14.996C98.9602 15.212 99.2922 15.508 99.5082 15.884C99.7322 16.26 99.8442 16.68 99.8442 17.144ZM96.8922 18.5C97.4122 18.5 97.8002 18.384 98.0562 18.152C98.3122 17.912 98.4402 17.576 98.4402 17.144C98.4402 16.232 97.9242 15.776 96.8922 15.776H95.3802V18.5H96.8922ZM105.937 21.296H102.445L101.845 23H100.417L103.405 14.648H104.989L107.977 23H106.537L105.937 21.296ZM105.553 20.18L104.197 16.304L102.829 20.18H105.553ZM113.368 23L111.448 19.664H110.404V23H109.036V14.66H111.916C112.556 14.66 113.096 14.772 113.536 14.996C113.984 15.22 114.316 15.52 114.532 15.896C114.756 16.272 114.868 16.692 114.868 17.156C114.868 17.7 114.708 18.196 114.388 18.644C114.076 19.084 113.592 19.384 112.936 19.544L115 23H113.368ZM110.404 18.572H111.916C112.428 18.572 112.812 18.444 113.068 18.188C113.332 17.932 113.464 17.588 113.464 17.156C113.464 16.724 113.336 16.388 113.08 16.148C112.824 15.9 112.436 15.776 111.916 15.776H110.404V18.572ZM121.766 14.66V15.776H119.546V23H118.178V15.776H115.946V14.66H121.766ZM127.157 21.896H129.977V23H125.789V14.66H127.157V21.896ZM132.249 14.66V23H130.881V14.66H132.249ZM140.657 23H139.289L135.173 16.772V23H133.805V14.648H135.173L139.289 20.864V14.648H140.657V23ZM143.581 15.764V18.212H146.461V19.328H143.581V21.884H146.821V23H142.213V14.648H146.821V15.764H143.581Z" fill="#2C2D30" fillOpacity="0.3"/>
<path d="M256.94 16.7125L252.05 21.6025C251.472 22.18 250.527 22.18 249.95 21.6025L245.06 16.7125" stroke="#2C2D30" strokeOpacity="0.7" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

      {/* Sticky CTA */}
      <div className="sticky bottom-0 pl-6   ">
        <AddToCart
          onAddToCart={handleAddToCartClick}
          disabled={loading || !isValid}
          compact
        />
      </div>
    </div>
  );
}