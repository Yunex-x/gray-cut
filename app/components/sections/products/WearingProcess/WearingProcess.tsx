import Image from 'next/image';

interface ProcessStep {
  number: string;
  label: string;
  description: string;
  image: string;
}

interface WearingProcessProps {
  title?: string;
  subtitle?: string;
  steps?: ProcessStep[];
  className?: string;
}

export default function WearingProcess({
  title = 'wearing process',
  subtitle = 'Wear it perfectly in under five minutes.',
  steps = [
    {
      number: '01',
      label: 'Prep',
      description: 'Clean your scalp. Apply adhesive or tape.',
      image: '/products/0.webp'
    },
    {
      number: '02',
      label: 'Place',
      description: 'Align the hairline. Position the system.',
      image: '/products/9.webp'
    },
    {
      number: '03',
      label: 'Secure',
      description: 'Press down, style, and go.',
      image: '/products/9.webp'
    }
  ],
  className = ''
}: WearingProcessProps) {
  return (
    <section className={`w-full bg-[#F6F4F1] ${className}`}>
      <div className=" mx-auto px-4 md:px-8 lg:px-10 py-12 md:py-16 lg:py-20">
        {/* Frame 509 - Main Container */}
        <div className="w-full  mx-auto flex flex-col items-start gap-8 md:gap-12 lg:gap-14">

          {/* Frame 503 - Header */}
          <div className="w-full flex flex-col justify-center items-center gap-4 md:gap-6">
            {/* Title */}
            <h2
              className="w-full font-playfair font-normal text-[32px] md:text-[48px] lg:text-[64px] leading-[42px] md:leading-[64px] lg:leading-[85px] text-center tracking-[-0.02em] uppercase text-[#2C2D30]"
              style={{
                flex: 'none',
                order: 0,
                alignSelf: 'stretch',
                flexGrow: 0
              }}
            >
              {title}
            </h2>

            {/* Subtitle */}
            <p
              className="w-full font-poppins font-normal text-sm md:text-base leading-5 md:leading-6 text-center uppercase text-[rgba(44,45,48,0.7)]"
              style={{
                flex: 'none',
                order: 1,
                alignSelf: 'stretch',
                flexGrow: 0
              }}
            >
              {subtitle}
            </p>
          </div>

          {/* Frame 508 - Steps Container */}
          <div className="w-full flex flex-col md:flex-row items-stretch gap-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col items-start p-4 gap-6 flex-1 ${index === 1
                    ? ''
                    : 'border-r border-l border-[#E4DACC] md:border-l-0 md:border-r md:first:border-l md:last:border-r'
                  }`}
                style={{
                  boxSizing: 'border-box',
                  flex: 'none',
                  order: index,
                  flexGrow: 1
                }}
              >
                {/* Frame 408 - Text Content */}
                <div className="w-full flex flex-col items-start gap-6">
                  {/* Frame 206 - Number and Label */}
                  <div className="w-full flex flex-row items-center gap-3">
                    {/* Number */}
                    <span
                      className="font-neue-montreal font-medium text-base leading-[19px] uppercase text-[rgba(42,42,42,0.5)]"
                      style={{
                        flex: 'none',
                        order: 0,
                        flexGrow: 0
                      }}
                    >
                      {step.number}
                    </span>

                    {/* Divider */}
                    <div
                      className="w-px h-4 bg-[#D2D2D2]"
                      style={{
                        flex: 'none',
                        order: 1,
                        flexGrow: 0
                      }}
                    />

                    {/* Label */}
                    <span
                      className="font-neue-montreal font-medium text-base leading-[19px] uppercase text-[rgba(42,42,42,0.5)]"
                      style={{
                        flex: 'none',
                        order: 2,
                        flexGrow: 0
                      }}
                    >
                      {step.label}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="w-full font-neue-montreal font-medium text-lg md:text-xl leading-6 uppercase text-[#2C2D30]"
                    style={{
                      flex: 'none',
                      order: 1,
                      alignSelf: 'stretch',
                      flexGrow: 0
                    }}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Frame 505 - Image Container */}
                <div
                  className="relative w-full h-[166px] bg-[#F9F9F9] overflow-hidden"
                  style={{
                    flex: 'none',
                    order: 1,
                    alignSelf: 'stretch',
                    flexGrow: 0
                  }}
                >
                  <Image
                    src={step.image}
                    alt={`${step.label} step`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 348px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}