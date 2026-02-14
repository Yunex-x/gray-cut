function FooterContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="
w-full
      mx-auto
      px-[24px]
      lg:px-[40px]
      xl:px-[80px]
      py-[64px]
      lg:py-[80px]
    ">
            {children}
        </div>
    );
}
