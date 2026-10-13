import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Artworks", href: "/#artworks" },
  { label: "About the Artist", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#29271f] text-[#faf8f4]">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-12 md:py-20">
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-block font-serif text-2xl tracking-[0.12em] transition-opacity hover:opacity-70"
            >
              LUBINA <span className="italic">N</span> SALAM
            </Link>

            <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-[#c6b79f]">
              Artist & Creative Soul
            </p>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/60">
              A world of creativity, colour and emotion, expressed through art.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="mb-6 text-xs uppercase tracking-[0.25em] text-[#c6b79f]">
              Explore
            </h2>

            <nav className="flex flex-col items-start gap-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h2 className="mb-6 text-xs uppercase tracking-[0.25em] text-[#c6b79f]">
              Get in touch
            </h2>

            <p className="max-w-xs text-sm leading-7 text-white/60">
              Interested in an artwork or a collaboration? We would love to
              hear from you.
            </p>

            <Link
              href="/#contact"
              className="mt-6 inline-flex items-center gap-3 border-b border-[#c6b79f] pb-2 text-sm transition-colors hover:text-[#c6b79f]"
            >
              Contact the artist <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between md:mt-20">
          <p>
            © {new Date().getFullYear()} Lubina N Salam. All rights reserved.
          </p>

          <p>Created with creativity and care.</p>
        </div>
      </div>
    </footer>
  );
}