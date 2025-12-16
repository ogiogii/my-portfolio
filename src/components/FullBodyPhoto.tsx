"use client";

import useScrollReveal from "../hooks/useScrollReveal";


export default function FullBodyPhoto() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <img src="/fullbody.jpg" alt="Full Body" />
    </section>
  );
}
