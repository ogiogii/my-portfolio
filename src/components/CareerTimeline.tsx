"use client";

import useScrollReveal from "@/hooks/useScrollReveal";

export default function CareerTimeline() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {/* ===== HEADER ===== */}
      <div className="mx-auto max-w-3xl text-center py-24 px-6">
        <h2 className="text-4xl font-semibold text-white-900">
          Perjalanan{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Karir
          </span>
        </h2>

        {/* underline */}
        <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />

        <p className="mt-6 text-base leading-relaxed text-gray-600">
          Setiap langkah adalah pengalaman berharga dalam perjalanan profesional
          saya, membentuk skill dan karakter sebagai seorang developer.
        </p>
      </div>

      {/* ===== TIMELINE ===== */}
      <div className="relative mx-auto max-w-4xl px-6 pb-32">
        {/* garis tengah */}
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-purple-400 to-pink-400" />

        {/* ITEM 1 */}
        <div className="relative mb-20 flex items-center">
          <div className="w-1/2 pr-12 text-right">
            <span className="inline-block rounded-full bg-purple-100 px-4 py-1 text-xs font-medium text-purple-600">
              2024
            </span>
            <h3 className="mt-3 text-lg font-semibold text-white-900">
              Mulai Belajar Programming
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Memulai perjalanan di dunia programming dengan fokus pada web
              development.
            </p>
          </div>

          {/* titik */}
          <div className="absolute left-1/2 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-white ring-4 ring-purple-400" />
        </div>

        {/* ITEM 2 */}
        <div className="relative mb-20 flex items-center">
          <div className="w-1/2 pl-12 ml-auto text-left">
            <span className="inline-block rounded-full bg-pink-100 px-4 py-1 text-xs font-medium text-pink-600">
              2025
            </span>
            <h3 className="mt-3 text-lg font-semibold text-white-900">
              Membangun Project
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Mengembangkan website portfolio, belajar Next.js, Tailwind CSS, React.js, PHP, Bootstrap, Laravel, MySQL, PostgreSQL, Github,
              dan membuat tampilan modern.
            </p>
          </div>

          <div className="absolute left-1/2 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-white ring-4 ring-pink-400" />
        </div>

        {/* ITEM 3 */}
        <div className="relative flex items-center">
          <div className="w-1/2 pr-12 text-right">
            <span className="inline-block rounded-full bg-purple-100 px-4 py-1 text-xs font-medium text-purple-600">
              Selanjutnya
            </span>
            <h3 className="mt-3 text-lg font-semibold text-white-900">
              Berkembang & Konsisten
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Terus belajar, memperdalam skill, dan membangun produk yang
              bermanfaat bagi banyak orang.
            </p>
          </div>

          <div className="absolute left-1/2 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-white ring-4 ring-purple-400" />
        </div>
      </div>
    </section>
  );
}
