import Link from "next/link";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[#faf8f4]">
      <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-12 md:py-20 lg:gap-20">
        {/* Left: Introduction */}
        <div className="relative z-10">
          <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#85745d]">
            <span className="h-px w-8 bg-[#85745d]" />
            Art • Emotion • Expression
          </p>

          <h1 className="max-w-xl font-serif text-5xl leading-[1.12] tracking-tight text-[#29271f] sm:text-6xl lg:text-7xl">
            Every stroke
            <br />
            tells a <span className="italic text-[#85745d]">story.</span>
          </h1>

          <p className="mt-7 max-w-md text-base leading-8 text-[#716d66] md:text-lg">
            Step into the creative world of Lubina N Salam, where colour,
            imagination and emotion come together through art.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="/#artworks"
              className="group inline-flex items-center gap-4 bg-[#29271f] px-7 py-4 text-sm text-white transition-colors duration-300 hover:bg-[#514b3e]"
            >
              Explore Artworks
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>

            <Link
              href="/#about"
              className="border-b border-[#b9ad9a] pb-2 text-sm text-[#514d46] transition-colors hover:text-[#85745d]"
            >
              Meet the Artist
            </Link>
          </div>

          <div className="mt-14 flex items-center gap-4 border-t border-black/10 pt-6">
            <span className="font-serif text-3xl italic text-[#85745d]">
              Art
            </span>
            <span className="h-8 w-px bg-black/15" />
            <p className="text-xs leading-5 text-[#716d66]">
              Original creations
              <br />
              Made with passion
            </p>
          </div>
        </div>

        {/* Right: Artwork placeholder */}
        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -right-3 -top-3 h-full w-full border border-[#d9cebd] sm:-right-5 sm:-top-5" />

          <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-[#e9e0d3] p-8">
            <div className="absolute left-5 top-5 h-12 w-12 border-l border-t border-[#b9a78e]" />
            <div className="absolute bottom-5 right-5 h-12 w-12 border-b border-r border-[#b9a78e]" />

            <div className="text-center">
              <span className="font-serif text-7xl italic text-[#a18d71] sm:text-8xl">
                L
              </span>
              <p className="mt-5 text-xs uppercase tracking-[0.3em] text-[#85745d]">
                A world of art
              </p>
              <p className="mt-2 font-serif text-lg italic text-[#716d66]">
                Something beautiful begins here
              </p>
            </div>
          </div>

          <p className="mt-5 text-right text-[10px] uppercase tracking-[0.25em] text-[#85745d]">
            The art of seeing differently
          </p>
        </div>
      </div>
    </section>
  );
}