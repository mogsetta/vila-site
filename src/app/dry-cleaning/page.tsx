import Button from "../../components/Button";

export const metadata = {
  title: "Dry Cleaning in Smyrna TN | Professional Garment Care | Vila Cleaners",
  description:
    "Professional dry cleaning services in Smyrna, TN. Suits, shirts, dresses, formal wear, and specialty garment care with reliable turnaround and consistent quality.",
  keywords: [
    "dry cleaning Smyrna TN",
    "dry cleaning near me",
    "suit dry cleaning",
    "formal wear cleaning",
    "shirt cleaning Smyrna",
  ],
  openGraph: {
    title: "Professional Dry Cleaning in Smyrna TN | Vila Cleaners",
    description:
      "Reliable dry cleaning for business wear, formal garments, and everyday clothing in Smyrna, Tennessee.",
    url: "https://vilacleaners.com/dry-cleaning",
    siteName: "Vila Cleaners & Alterations",
    locale: "en_US",
    type: "website",
  },
};

export default function DryCleaningPage() {
  return (
    <main>

      {/* HERO - PROFESSIONAL STRUCTURE */}
      <section className="relative -mx-6 md:-mx-10 overflow-hidden">

        {/* Matte Charcoal Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1d20] via-[#14171a] to-[#0f1113]"></div>

        {/* Subtle Emerald Edge Glow */}
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#0f3a2f]/40 to-transparent"></div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#111315]"></div>

        <div className="relative max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-24">

          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div>
              <div className="text-xs tracking-[0.3em] uppercase text-[#d4af37] font-semibold mb-4">
                Professional Garment Care
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight text-white">
                Reliable Dry Cleaning in Smyrna, TN
              </h1>

              <div className="mt-6 h-[2px] w-24 bg-[#d4af37]"></div>

              <p className="mt-6 text-white/80 text-lg max-w-xl leading-relaxed">
                Professional cleaning for business attire, formal garments, and everyday clothing with consistent turnaround and dependable quality.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6 text-white/70 text-sm">
                <div>• Business & Professional Wear</div>
                <div>• Formal & Specialty Garments</div>
                <div>• Careful Fabric Handling</div>
                <div>• Reliable Turnaround</div>
              </div>

              <div className="mt-10">
                <a href="tel:6154625145">
                  <Button>Call Now</Button>
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[360px] md:h-[420px] overflow-hidden rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
              <div className="absolute inset-0 bg-[#1a1d20] flex items-center justify-center text-white/40">
                Pressed Shirts Image Placeholder
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT WE CLEAN */}
      <section className="mt-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-xs tracking-[0.25em] uppercase text-[#d4af37] font-semibold mb-4">
            What We Clean
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Everyday & Specialty Garments
          </h2>

          <div className="mt-8 h-[2px] w-24 bg-[#d4af37]"></div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              "Suits & Blazers",
              "Dress Shirts & Blouses",
              "Dresses & Formal Wear",
              "Coats & Jackets",
              "Pants & Slacks",
              "Specialty Items",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] p-8"
              >
                <h3 className="text-white font-semibold text-lg">
                  {item}
                </h3>
                <p className="mt-3 text-white/60 text-sm leading-relaxed">
                  Professional cleaning with attention to fabric type and care requirements.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mt-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-xs tracking-[0.25em] uppercase text-[#d4af37] font-semibold mb-4">
            Our Process
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            How Our Dry Cleaning Works
          </h2>

          <div className="mt-8 h-[2px] w-24 bg-[#d4af37]"></div>

          <div className="mt-14 grid gap-10 md:grid-cols-3 text-white/70 leading-relaxed">
            <div>
              <h3 className="text-white font-semibold text-lg">Drop Off</h3>
              <p className="mt-3">Bring your garments to our Smyrna location for in-person evaluation and care instructions.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg">Professional Cleaning</h3>
              <p className="mt-3">Each item is cleaned according to fabric type and construction for optimal results.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg">Ready for Pickup</h3>
              <p className="mt-3">Your garments are pressed, inspected, and prepared for convenient pickup.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="mt-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-xs tracking-[0.25em] uppercase text-[#d4af37] font-semibold mb-4">
            Pricing Overview
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Dry Cleaning Starting Prices
          </h2>

          <div className="mt-8 h-[2px] w-24 bg-[#d4af37]"></div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 text-white/70">
            {[
              ["Dress Shirts", "$6.89+"],
              ["Blouses", "$7.65+"],
              ["Pants / Slacks", "$7.95+"],
              ["Jeans", "$8.99+"],
              ["Jackets / Blazers", "$9.95+"],
              ["Dresses", "$17.50+"],
              ["Formal Dresses & Gowns", "$41.95+"],
              ["Suits (2–3 Piece)", "$17.90+"],
              ["Coats & Specialty Items", "Varies"],
            ].map(([item, price]) => (
              <div key={item} className="flex justify-between border-b border-white/10 pb-3">
                <span>{item}</span>
                <span className="text-white font-medium">{price}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-white/50 text-sm max-w-3xl">
            Final pricing depends on fabric type, garment size, condition, and special care requirements. Visit us in-store for an accurate evaluation.
          </p>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="mt-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-xs tracking-[0.25em] uppercase text-[#d4af37] font-semibold mb-4">
            Local Dry Cleaning
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Trusted Dry Cleaning in Smyrna, Tennessee
          </h2>

          <div className="mt-8 h-[2px] w-24 bg-[#d4af37]"></div>

          <div className="mt-10 space-y-6 text-white/70 leading-relaxed max-w-4xl">
            <p>
              Searching for dry cleaning near me in Smyrna, TN? Vila Cleaners & Alterations provides reliable garment care for residents throughout Smyrna and nearby communities including Murfreesboro and La Vergne.
            </p>
            <p>
              From business shirt cleaning and suit dry cleaning to formal wear and specialty garment care, our shop delivers consistent quality and professional handling of your clothing.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-32 mb-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="rounded-2xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Reliable Dry Cleaning When You Need It
              </h3>
              <p className="mt-2 text-white/60">
                Call or visit our Smyrna location for dependable garment care.
              </p>
            </div>
            <a href="tel:6154625145">
              <Button>Call Now</Button>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}