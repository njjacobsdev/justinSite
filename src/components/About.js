// src/components/About.js
export default function About() {
  return (
    <section id="about" className="bg-white">
      {/* Banner with background image */}
      <div
        className="w-full h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/tile_banner_resized.webp')" }}
      >
        <h2 className="text-5xl font-bold text-white drop-shadow-lg">
          About Us
        </h2>
      </div>

      {/* Section content */}
      <div className="flex flex-col items-center px-8 py-16">
        <div className="max-w-3xl text-center space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            We’re your trusted local handyman service right here in Southeast
            Wisconsin. As a small, community-focused business, we take pride in
            helping our neighbors with the wide variety of repairs, improvements,
            and projects that keep your home running smoothly.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            From fixing leaky faucets and repairing drywall to installing light
            fixtures, updating rooms, assembling furniture, or tackling those odd
            jobs that always seem to pile up — we’re here to take the stress off
            your shoulders. No task is too small, and we treat every project with
            the same care and attention to detail.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Because we live and work in this community, we understand the
            importance of dependable service, fair pricing, and treating every
            home like our own. Whether you need a quick repair, seasonal
            maintenance, or ongoing help with projects, we’re here to make your
            life easier.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed font-semibold">
            When you support us, you’re supporting a local Wisconsin business
            that’s committed to quality, reliability, and serving our neighbors.
          </p>
        </div>
      </div>
    </section>
  );
}
