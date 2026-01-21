"use client";

import Image from "next/image";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function FullBodyPhoto() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`py-28 px-6 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="mx-auto max-w-md">
        {/* ELECTRIC CARD */}
        <div className="electric-card relative rounded-3xl p-[2px]">
          <div className="electric-card-inner relative rounded-3xl px-8 py-14 text-center">
            {/* BADGE */}
            <span className="inline-block mb-4 rounded-full bg-white/10 px-3 py-1 text-xs tracking-wider text-cyan-300">
              FEATURED
            </span>

            {/* TITLE */}
            <h2 className="text-2xl font-semibold text-white">
              Electric Card
            </h2>

            {/* SUBTITLE */}
            <p className="mt-3 text-sm leading-relaxed text-gray-300">
              Setiap error memberi pelajaran, setiap solusi membentuk
              developer yang lebih kuat.
            </p>

            {/* AVATAR */}
            <div className="mt-8 flex justify-center">
              <div className="electric-avatar">
                <Image
                  src="/images/foto.jpg"
                  alt="Foto Saya"
                  width={96}
                  height={96}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* FOOTER */}
            <div className="mt-10 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-white/20" />
              <span className="text-[10px] tracking-widest text-gray-400">
                KEEP EVOLVING
              </span>
              <span className="h-px w-8 bg-white/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
