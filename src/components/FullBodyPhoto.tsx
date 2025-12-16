"use client";

import useScrollReveal from "@/hooks/useScrollReveal";

export default function FullBodyPhoto() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`py-24 px-6 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="mx-auto max-w-4xl">
        {/* QUOTE CARD */}
        <div className="relative bg-white rounded-3xl shadow-2xl px-8 py-16 text-center">
          {/* ICON KUTIP */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
              <span className="text-3xl font-bold text-purple-500">“</span>
            </div>
          </div>

          {/* FOTO DI DALAM KARTU */}
          <div className="flex justify-center mt-4">
            <img
              src="/images/foto.jpg"
              alt="Foto Saya"
              className="
                w-28
                h-28
                object-cover
                rounded-full
                ring-4
                ring-purple-200
                shadow-lg
              "
            />
          </div>

          {/* QUOTE */}
          <p className="mt-8 text-lg sm:text-xl leading-relaxed text-gray-800">
            Setiap error memberi pelajaran, setiap solusi menjadi pencapaian dalam{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-medium">
              perjalanan panjang menjadi developer lebih baik.
            </span>
          </p>

          {/* FOOTER */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-gray-300" />
            <span className="text-xs tracking-widest text-gray-500">
              TERUS BELAJAR, TERUS BERKEMBANG
            </span>
            <span className="h-px w-10 bg-gray-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
