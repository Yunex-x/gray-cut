import SectionTitle from "./SectionTitle";


export default function DiagnosisSection() {
  return (
    <section
      className="
        w-full
        mx-auto
        overflow-hidden
        bg-[#F6F4F1]
      "
    >
        <SectionTitle/>
        <section className="w-full bg-[#F6F4F1]">
      <div
        className="
          w-full

          grid
          grid-cols-1
          md:grid-cols-2

          items-center

          px-[40px]
          md:px-[40px]
          sm:px-[18px]
        "
      >
        {/* LEFT CONTENT */}
        <div className="flex  flex-col  gap-[24px] max-w-[532px]">
          {/* Title */}
          <h2
            className="
              font-playfair
              font-normal
              text-center
              md:text-left
              whitespace-pre-line
              lg:whitespace-nowrap
              uppercase
              tracking-[0.02em]
              text-[#2C2D30]
              text-[24px]
              md:text-[64px]
              md:leading-[100%]
leading-[140%]
            
            "
          >
            We don't guess, <br />
            we measure
          </h2>

          {/* Description */}
          <p
            className="
              uppercase
              text-[rgba(44,45,48,0.7)]
font-poppins
              text-[14px]
              text-center
md:text-left
              leading-[25px]

             w-[319px]
              lg:w-[370px]
            "
          >
            Most hair systems fail because of bad geometry. Our protocol is built
            on 10,000.
          </p>

          {/* Actions */}
          <div className="flex gap-[20px] ">
            {/* Primary */}
            <button
              className="
                bg-[#8AAE9B]
                text-[#F6F4F1]
                uppercase
                font-medium

                w-[215px]
                h-[44px]

                text-[14px]

                transition-all
                duration-300
                ease-in-out

                hover:bg-[#7a9d8a]
                hover:scale-105
                hover:shadow-lg
                hover:shadow-[#8AAE9B]/50
                hover:tracking-wider

                active:scale-95
                active:shadow-md

                cursor-pointer
              "
              style={{ fontFamily: "Poppins" }}
            >
              Start digital diagnosis
            </button>

            {/* Secondary */}
            <button
              className="
                border
                border-[#8AAE9B]
                text-[#8AAE9B]
                uppercase
                font-medium
                w-[122px]
                h-[44px]
                

                text-[14px]

                transition-all
                duration-300
                ease-in-out

                hover:bg-[#8AAE9B]
                hover:text-[#F6F4F1]
                hover:scale-105
                hover:shadow-lg
                hover:shadow-[#8AAE9B]/50

                active:scale-95
                active:shadow-md

                cursor-pointer
              "
              style={{ fontFamily: "Poppins" }}
            >
              Learn more
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
            w-full
            flex
            justify-center
            md:justify-end

            mt-[40px]
            md:mt-0

            group
          "
        >
          <img
            src="/diagnosis.webp"
            alt="Diagnosis device"
            className="
              w-full
              max-w-[792px]
              h-auto
              object-contain

              transition-all
              duration-700
              ease-out

              group-hover:scale-110
              group-hover:rotate-2
              group-hover:drop-shadow-xl

              cursor-pointer
            "
          />
        </div>
      </div>
    </section>
    </section>
  );
}