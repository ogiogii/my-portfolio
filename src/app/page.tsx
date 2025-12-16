"use client";

import React, { useEffect, useRef, useState } from "react";
import FullBodyPhoto from "../components/FullBodyPhoto";
import CareerTimeline from "@/components/CareerTimeline";


/* eslint-disable @next/next/no-img-element */

/* ========== DATA ========== */
const PROFILE = {
  name: "Yhogi Riswandi",
  title: "Web Developer",
  location: "Bekasi, Jawa Barat",
  email: "yriswandi.it@gmail.com",
  phone: "+62 857-1704-4568",
  aboutShort:
    "Web Developer yang fokus pada pengembangan backend dan integrasi sistem. Berpengalaman membangun RESTful API, mengelola database relasional, serta memastikan performa dan keamanan aplikasi.",
  tech: ["JavaScript", "React.js","Bootstrap 5", "PHP", "Laravel" , "MySQL", "PostgreSQL", "GitHub"],
  education: "Universitas Bani Saleh (2021–2025) — Teknik Informatika",
  profileImage: "/Profil.jpeg",
};

const PROJECTS = [
  {
    id: 1,
    title: "Mini Project – Sistem Operasional Gym",
    image: "/projects/1.jpg",
    desc:
      "Prototype backend service — endpoint auth, product, membership. Didesain untuk integrasi mobile dan admin panel.",
    repo: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "System HRD Finance",
    image: "/projects/2.jpg",
    desc: "Sistem HRD & finance sederhana (laporan payroll, manajemen karyawan, export CSV).",
    repo: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Mini Project – Sistem Operasional Gym (v2)",
    image: "/projects/3.jpg",
    desc: "Perbaikan flow autentikasi & dokumentasi OpenAPI untuk developer integrasi.",
    repo: "#",
    demo: "#",
  },
];

/* ========== PAGE ========== */
export default function Page() {
  return (
    <main className="min-h-screen bg-[#071028] text-white antialiased">
      <Header />
      <Hero />
      <AboutSection />
      <CareerTimeline />
      <FullBodyPhoto />
      <ProjectsCarousel />
      <ContactSection />
      <footer className="border-t border-gray-800 mt-16 py-8 text-center text-sm text-gray-400 font-medium">
        © {new Date().getFullYear()} {PROFILE.name} — All Rights Reserved.
      </footer>
    </main>
  );
}



/* ========== Header ========== */
function Header() {
  return (
    <header className="bg-[#071227]/90 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="bg-[#38bdf8] text-[#071227] font-bold rounded-full w-10 h-10 flex items-center justify-center">YR</div>
          <div>
            <h1 className="font-bold leading-tight text-lg">{PROFILE.name}</h1>
            <p className="text-xs text-gray-300 font-medium">{PROFILE.title}</p>
          </div>
        </div>

        <nav className="space-x-6 text-sm text-gray-300 hidden md:block">
          <a href="#home" className="hover:text-white font-medium">Home</a>
          <a href="#about" className="hover:text-white font-medium">About</a>
          <a href="#projects" className="hover:text-white font-medium">Projects</a>
          <a href="#contact" className="hover:text-white font-medium">Contact</a>
        </nav>
      </div>
    </header>
  );
}

/* ========== Hero ========== */
function Hero() {
  return (
    <section id="home" className="max-w-6xl mx-auto px-6 py-20 md:py-24">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-2/3 text-left">
          <h2 className="text-5xl md:text-6xl font-bold mb-3 leading-tight">
            Hi, I'm <span className="text-[#38bdf8] font-extrabold">{PROFILE.name.split(" ")[0]}</span> 👋 
          </h2>
          <h3 className="text-5xl md:text-6xl font-bold mb-3 leading-tight"> Web Developer</h3>
          <h3 className="text-2xl font-semibold text-gray-300 mb-6"></h3>
          <p className="text-gray-400 leading-relaxed max-w-2xl mb-8 font-medium">{PROFILE.aboutShort}</p>

          <div className="flex gap-4">
            <a href="#projects" className="bg-[#38bdf8] text-[#071227] font-bold px-6 py-3 rounded-md hover:bg-[#0ea5e9] transition">Lihat Projects</a>
            <a href="#contact" className="border border-gray-700 text-gray-300 font-semibold px-6 py-3 rounded-md hover:bg-gray-800 transition">Hubungi Saya</a>
          </div>
        </div>

        <aside className="md:w-1/3 flex flex-col items-center">
          <img src={PROFILE.profileImage} alt={PROFILE.name} className="w-48 h-48 object-cover rounded-2xl shadow-lg" />
          <div className="text-center mt-4">
            <h4 className="font-bold text-lg">{PROFILE.name}</h4>
            <p className="text-gray-300 text-sm font-medium">{PROFILE.location}</p>
            <p className="text-gray-300 text-sm mt-1 font-medium">{PROFILE.email} • {PROFILE.phone}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

/* ========== About ========== */
function AboutSection() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-[#38bdf8] mb-6">About Me</h2>

      <div className="bg-[#071428] border border-gray-800/60 rounded-2xl p-6 shadow-lg grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <p className="text-gray-300 leading-relaxed font-medium">Saya adalah fresh graduate Teknik Informatika dengan minat utama pada pengembangan web dan backend system. Memiliki pengalaman dalam membangun REST API, mengelola autentikasi, serta integrasi database seperti MySQL dan PostgreSQL.</p>

          <div>
            <h3 className="text-lg font-bold text-gray-100 mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {PROFILE.tech.map((t) => (
                <div key={t} className="flex items-center gap-3 px-4 py-2 rounded-xl bg-[#071826] border border-gray-800/50">
                  <BadgeIcon name={t} />
                  <span className="text-sm text-gray-200 font-semibold">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="flex flex-col justify-between">
          <div>
            <h4 className="text-base font-bold text-gray-100 mb-2">Pendidikan</h4>
            <p className="text-gray-300 text-sm font-medium">{PROFILE.education}</p>
            
          </div>

          <div className="mt-4 text-sm text-gray-400">
            <p className="mb-1"><span className="text-gray-200 font-semibold">Lokasi:</span> <span className="font-medium">{PROFILE.location}</span></p>
            <p className="mb-1"><span className="text-gray-200 font-semibold">Email:</span> <span className="font-medium">{PROFILE.email}</span></p>
            <p><span className="text-gray-200 font-semibold">Telp:</span> <span className="font-medium">{PROFILE.phone}</span></p>
          </div>
        </aside>
      </div>
    </section>
  );
}

/* ========== BadgeIcon (accurate, no-bg, original colors, larger) ========== */
function BadgeIcon({ name }: { name: string }) {
  const svgClass = "w-10 h-10 flex-shrink-0"; // besar & jelas
  switch (name) {
    case "JavaScript":
      // Yellow square with "JS" (official-ish)
      return (
        <svg viewBox="0 0 256 256" className={svgClass} xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <rect width="256" height="256" rx="28" fill="#F7DF1E" />
          <text x="50%" y="62%" textAnchor="middle" dominantBaseline="middle" fill="#000" fontSize="120" fontWeight="700" fontFamily="Segoe UI, Arial">JS</text>
        </svg>
      );

    case "React.js":
      // Stylized green leaf / spring motif (clean, no bg)
      return (
        //<svg viewBox="0 0 64 64" className={svgClass} xmlns="" aria-hidden>
        // <g fill="none" fillRule="evenodd">
        //   <path d="M32 6c8 0 14 5 18 11 3 5 4 11 4 17 0 0-2 1-6 1-5 0-12-3-16-6-5-4-8-9-8-9s0 8 5 13c4 4 10 8 14 9 6 2 12 2 18 1" fill="#6DB33F" />
        //  <circle cx="32" cy="24" r="6" fill="#6DB33F" />
          //</g>
        //</svg>
       <svg width="34px" height="34px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <g>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path fillRule="nonzero" d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-.528 2.994c.175.21.351.414.528.609.177-.195.353-.398.528-.609a24.883 24.883 0 0 1-1.056 0zm-1.995-.125a20.678 20.678 0 0 1-2.285-.368c-.075.35-.132.69-.17 1.016-.19 1.583.075 2.545.478 2.777.403.233 1.368-.019 2.645-.974.263-.197.528-.416.794-.655a20.678 20.678 0 0 1-1.462-1.796zm7.331-.368c-.717.16-1.483.284-2.285.368a20.678 20.678 0 0 1-1.462 1.796c.266.24.531.458.794.655 1.277.955 2.242 1.207 2.645.974.403-.232.667-1.194.479-2.777a11.36 11.36 0 0 0-.17-1.016zm1.45-.387c.577 2.639.274 4.74-1.008 5.48-1.282.74-3.253-.048-5.25-1.867-1.997 1.819-3.968 2.606-5.25 1.866-1.282-.74-1.585-2.84-1.009-5.48C3.167 14.794 1.5 13.48 1.5 12s1.667-2.793 4.241-3.614c-.576-2.639-.273-4.74 1.009-5.48 1.282-.74 3.253.048 5.25 1.867 1.997-1.819 3.968-2.606 5.25-1.866 1.282.74 1.585 2.84 1.009 5.48C20.833 9.206 22.5 10.52 22.5 12s-1.667 2.793-4.241 3.614zm-7.32-9.779a11.36 11.36 0 0 0-.793-.655C8.868 4.225 7.903 3.973 7.5 4.206c-.403.232-.667 1.194-.479 2.777.04.327.096.666.17 1.016a20.678 20.678 0 0 1 2.286-.368c.475-.653.965-1.254 1.462-1.796zm3.585 1.796c.802.084 1.568.209 2.285.368.075-.35.132-.69.17-1.016.19-1.583-.075-2.545-.478-2.777-.403-.233-1.368.019-2.645.974a11.36 11.36 0 0 0-.794.655c.497.542.987 1.143 1.462 1.796zm-1.995-.125c-.175-.21-.351-.414-.528-.609-.177.195-.353.398-.528.609a24.884 24.884 0 0 1 1.056 0zm-4.156 7.198a24.884 24.884 0 0 1-.528-.914c-.095.257-.183.51-.263.761.257.056.521.107.79.153zm1.932.234a22.897 22.897 0 0 0 3.392 0A22.897 22.897 0 0 0 15.392 12a22.897 22.897 0 0 0-1.696-2.938 22.897 22.897 0 0 0-3.392 0A22.897 22.897 0 0 0 8.608 12a22.897 22.897 0 0 0 1.696 2.938zm5.852-4.728c.095-.257.183-.51.263-.761a17.974 17.974 0 0 0-.79-.153 24.884 24.884 0 0 1 .527.914zM6.13 9.837c-.34.11-.662.23-.964.36C3.701 10.825 3 11.535 3 12c0 .465.7 1.175 2.166 1.803.302.13.624.25.964.36.222-.7.497-1.426.825-2.163a20.678 20.678 0 0 1-.825-2.163zm1.45-.388c.081.25.169.504.264.76a24.884 24.884 0 0 1 .528-.913c-.27.046-.534.097-.791.153zm10.29 4.714c.34-.11.662-.23.964-.36C20.299 13.175 21 12.465 21 12c0-.465-.7-1.175-2.166-1.803a11.36 11.36 0 0 0-.964-.36c-.222.7-.497 1.426-.825 2.163.328.737.603 1.462.825 2.163zm-1.45.388c-.081-.25-.169-.504-.264-.76a24.884 24.884 0 0 1-.528.913c.27-.046.534-.097.791-.153z"/>
    </g>
</svg>
    );

    case "Bootstrap 5":
    return (

        <svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z"/>
        </svg>
    );

    case "PHP":
      return (
      <svg fill="#312f81ff" width="34px" height="34px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.205 13.759h-1.178l-0.645 3.309h1.047c0.056 0.004 0.122 0.007 0.188 0.007 0.507 0 0.978-0.149 1.374-0.405l-0.010 0.006c0.371-0.33 0.623-0.786 0.688-1.301l0.001-0.010c0.048-0.138 0.076-0.296 0.076-0.461 0-0.291-0.087-0.562-0.236-0.788l0.003 0.005c-0.297-0.234-0.676-0.376-1.089-0.376-0.077 0-0.154 0.005-0.229 0.015l0.009-0.001zM26.448 15.486c-0.075 0.398-0.208 0.753-0.39 1.076l0.009-0.017c-0.194 0.338-0.427 0.628-0.698 0.876l-0.003 0.002c-0.316 0.302-0.699 0.538-1.125 0.682l-0.021 0.006c-0.441 0.131-0.947 0.207-1.472 0.207-0.048 0-0.095-0.001-0.142-0.002l0.007 0h-1.475l-0.409 2.102h-1.722l1.537-7.905h3.31c0.073-0.007 0.159-0.011 0.245-0.011 0.754 0 1.438 0.304 1.934 0.796l-0-0c0.319 0.41 0.512 0.933 0.512 1.5 0 0.245-0.036 0.482-0.103 0.705l0.004-0.017zM16.955 18.317l0.679-3.498c0.035-0.095 0.055-0.204 0.055-0.318 0-0.183-0.052-0.354-0.142-0.499l0.002 0.004c-0.195-0.142-0.439-0.228-0.703-0.228-0.055 0-0.109 0.004-0.162 0.011l0.006-0.001h-1.365l-0.88 4.53h-1.709l1.537-7.906h1.708l-0.409 2.102h1.522c0.093-0.010 0.2-0.016 0.309-0.016 0.625 0 1.205 0.193 1.683 0.524l-0.010-0.006c0.257 0.291 0.414 0.676 0.414 1.097 0 0.188-0.031 0.369-0.089 0.538l0.003-0.012-0.715 3.679zM11.926 17.423c-0.316 0.303-0.699 0.538-1.125 0.682l-0.021 0.006c-0.441 0.131-0.947 0.207-1.471 0.207-0.047 0-0.095-0.001-0.142-0.002l0.007 0h-1.476l-0.409 2.101h-1.722l1.537-7.905h3.312c0.073-0.007 0.159-0.011 0.245-0.011 0.754 0 1.438 0.304 1.934 0.796l-0-0c0.319 0.41 0.511 0.933 0.511 1.5 0 0.246-0.036 0.483-0.103 0.707l0.004-0.017c-0.146 0.774-0.533 1.441-1.079 1.934l-0.003 0.003zM16 8.112c-8.281 0-14.996 3.531-14.996 7.888s6.714 7.889 14.996 7.889 14.996-3.533 14.996-7.889-6.714-7.888-14.996-7.888zM9.764 13.759h-1.18l-0.644 3.309h1.047c0.056 0.004 0.121 0.007 0.187 0.007 0.507 0 0.979-0.149 1.375-0.405l-0.010 0.006c0.371-0.329 0.622-0.786 0.686-1.301l0.001-0.010c0.049-0.138 0.077-0.297 0.077-0.462 0-0.29-0.086-0.561-0.235-0.786l0.003 0.005c-0.297-0.234-0.676-0.376-1.089-0.376-0.077 0-0.154 0.005-0.229 0.015l0.009-0.001z"></path>
      </svg>
    );

      case "Laravel":
        return (
        <svg fill="#000000" width="34px" height="34px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.143 23.585l10.46-5.97-4.752-2.736-10.453 6.019zM24.084 11.374l-4.757-2.736v5.417l4.758 2.737zM24.559 5.078l-4.756 2.736 4.756 2.736 4.755-2.737zM9.911 18.928l2.76-1.589v-11.934l-4.758 2.738v11.934zM7.437 1.846l-4.756 2.737 4.756 2.737 4.753-2.737zM2.204 5.406v18.452l10.464 6.022v-5.471l-5.472-3.096c-0.018-0.013-0.032-0.027-0.051-0.039-0.014-0.013-0.030-0.023-0.044-0.034l-0.001-0.003c-0.015-0.015-0.028-0.031-0.039-0.049l-0.001-0.001c-0.014-0.013-0.025-0.028-0.035-0.045l-0.001-0.001h-0.003c-0.008-0.015-0.016-0.035-0.024-0.055l-0.001-0.004c-0.007-0.015-0.015-0.032-0.022-0.051l-0.001-0.003c-0.004-0.020-0.008-0.045-0.010-0.070l-0-0.002c-0.003-0.015-0.006-0.033-0.008-0.051l-0-0.001v-12.759l-2.757-1.59zM24.085 23.857v-5.422l-10.464 5.974v5.47zM29.789 14.055v-5.417l-4.756 2.737v5.417zM30.725 7.69c0.011 0.038 0.018 0.081 0.018 0.126v0 6.513c-0 0.176-0.095 0.329-0.237 0.411l-0.002 0.001-5.468 3.149v6.241c-0 0.175-0.095 0.328-0.236 0.411l-0.002 0.001-11.416 6.57c-0.024 0.013-0.052 0.025-0.081 0.033l-0.003 0.001-0.030 0.013c-0.036 0.011-0.078 0.017-0.121 0.017s-0.085-0.006-0.125-0.018l0.003 0.001c-0.015-0.004-0.027-0.009-0.039-0.016l0.001 0.001c-0.031-0.011-0.057-0.021-0.082-0.033l0.004 0.002-11.413-6.57c-0.144-0.084-0.239-0.237-0.239-0.412v0-19.548c0-0.044 0.007-0.087 0.019-0.127l-0.001 0.003c0.004-0.015 0.013-0.025 0.018-0.040 0.009-0.029 0.019-0.053 0.030-0.076l-0.001 0.003c0.008-0.016 0.018-0.030 0.029-0.042l-0 0 0.042-0.057 0.047-0.034c0.018-0.015 0.034-0.030 0.052-0.043h0.001l5.708-3.285c0.068-0.040 0.15-0.064 0.237-0.064s0.169 0.024 0.239 0.065l-0.002-0.001 5.71 3.285c0.019 0.013 0.035 0.027 0.051 0.042l-0-0 0.048 0.034c0.016 0.018 0.025 0.038 0.042 0.057 0.012 0.012 0.022 0.026 0.031 0.041l0.001 0.001c0.010 0.020 0.020 0.044 0.029 0.069l0.001 0.004 0.016 0.040c0.011 0.035 0.018 0.076 0.018 0.118 0 0.002 0 0.004-0 0.006v-0 12.208l4.756-2.737v-6.241c0-0.001 0-0.002 0-0.002 0-0.043 0.006-0.085 0.017-0.125l-0.001 0.003c0.004-0.013 0.013-0.025 0.016-0.040 0.010-0.030 0.020-0.054 0.032-0.078l-0.002 0.004c0.009-0.015 0.023-0.025 0.032-0.042 0.015-0.019 0.027-0.038 0.042-0.054 0.014-0.013 0.029-0.025 0.045-0.035l0.001-0.001c0.018-0.013 0.033-0.029 0.052-0.040h0.001l5.708-3.286c0.068-0.040 0.15-0.064 0.237-0.064s0.169 0.024 0.239 0.065l-0.002-0.001 5.708 3.286c0.020 0.013 0.034 0.027 0.053 0.039 0.015 0.013 0.032 0.023 0.046 0.035 0.016 0.018 0.028 0.038 0.043 0.056 0.011 0.012 0.021 0.026 0.030 0.040l0.001 0.001c0.012 0.022 0.022 0.047 0.030 0.073l0.001 0.003c0.008 0.012 0.014 0.025 0.019 0.039l0 0.001z"></path>
        </svg>

        );

    case "MySQL":
      // Simplified dolphin silhouette in MySQL teal
      return (
        // <svg viewBox="0 0 64 64" className={svgClass} xmlns="http://www.w3.org/2000/svg" aria-hidden>
        //   <path d="M6 34c6-8 18-12 28-8 4 2 8 5 14 6-4 6-14 10-26 8-8-1-14-5-16-6z" fill="#00758F" />
        //   <path d="M44 24c0 0 6-2 8-1 1 1 1 3 0 4-2 2-6 1-8 1" fill="#005f6d" />
        // </svg>
        <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="#00758F" fillRule="evenodd" d="M5.46192862,4.04007684 C5.18892668,4.03501656 4.99575061,4.06967946 4.79169495,4.11446291 L4.79169495,4.15152944 L4.82901449,4.15152944 C4.95944313,4.41909158 5.18943271,4.591394 5.35034952,4.82188962 C5.47407329,5.08262038 5.59817658,5.34297163 5.72227987,5.60332288 C5.73493056,5.5909252 5.74745474,5.57865403 5.75959941,5.56625635 C5.99047454,5.40394797 6.0957283,5.14410275 6.09471625,4.74737704 C6.00211318,4.64996671 5.98832392,4.52826705 5.90837155,4.4122602 C5.80235875,4.25754224 5.59615247,4.17012595 5.46192862,4.04007684 L5.46192862,4.04007684 Z M23.478665,23.1369293 C23.6543831,23.2658398 23.772161,23.4657208 24,23.5466852 L24,23.5093657 C23.8800714,23.3573044 23.8495833,23.1474294 23.7395222,22.9880306 C23.5786054,22.8271138 23.4164236,22.6655645 23.2555068,22.5040152 C22.7821179,21.8759083 22.1818425,21.3245911 21.5432356,20.8663831 C21.0345512,20.5006515 19.8944709,20.0072745 19.6819392,19.4148426 C19.6697946,19.4021919 19.6571439,19.3896677 19.6444932,19.3770171 C20.0054174,19.3365348 20.4283301,19.2059797 20.7614228,19.1165393 C21.3210894,18.9665021 21.8214243,19.0054662 22.3990549,18.8560615 C22.6600387,18.781296 22.9203899,18.7066569 23.1808677,18.6329033 L23.1808677,18.4834987 C22.8887632,18.1836773 22.6805328,17.7869515 22.3622414,17.5155942 C21.5283078,16.8061434 20.6188495,16.0966926 19.6818127,15.5056522 C19.1626283,15.1774933 18.5200996,14.9645821 17.969415,14.6865199 C17.7842089,14.5931578 17.4590861,14.5444526 17.3365009,14.3887226 C17.0476856,14.0198284 16.8899314,13.5523853 16.6667732,13.1228943 C16.1997097,12.2230506 15.740363,11.2403448 15.3263059,10.293567 C15.044322,9.6481287 14.8597484,9.01154587 14.5076796,8.43227067 C12.8174206,5.65329311 10.9976185,3.97581132 8.17942382,2.3270466 C7.57927498,1.97649592 6.85742648,1.83809735 6.09471625,1.65719245 C5.68546635,1.6325236 5.27545742,1.60734872 4.86620752,1.58267987 C4.61635635,1.47831166 4.35651113,1.17267094 4.12184079,1.02427832 C3.18796669,0.434503045 0.792811133,-0.848656668 0.10157731,0.838313141 C-0.335124586,1.90286889 0.753847001,2.94174374 1.14361483,3.48142227 C1.4172493,3.85980447 1.76704094,4.2842352 1.96287366,4.70967798 C2.09127818,4.98938478 2.11316388,5.27010364 2.22385744,5.56600333 C2.49432924,6.29518923 2.7293791,7.08838764 3.07929725,7.76241652 C3.25653344,8.10322617 3.45173363,8.46263233 3.67539786,8.76738751 C3.81265788,8.95449125 4.04720171,9.03684725 4.08401522,9.32578906 C3.85465817,9.64749617 3.84150145,10.1466925 3.7125909,10.5541713 C3.13065906,12.3887747 3.35014857,14.6686824 4.19660638,16.0266077 C4.45594557,16.443195 5.06773305,17.3374725 5.90837155,16.9942592 C6.64375629,16.6946908 6.47980332,15.76613 6.69018433,14.9469976 C6.73749792,14.760906 6.70865434,14.624405 6.80176344,14.5003017 L6.80176344,14.5373682 C7.02542767,14.9840642 7.2488389,15.4307601 7.47199711,15.8773296 C7.96815726,16.6759678 8.84826592,17.5111665 9.59415073,18.0739958 C9.98037636,18.3659737 10.2848785,18.8709894 10.7852134,19.0419002 L10.7852134,19.0040746 L10.7478939,19.0040746 C10.6504835,18.8536579 10.4989282,18.790531 10.3759635,18.6694638 C10.0844916,18.3836847 9.76050733,18.0287063 9.51938514,17.7014329 C8.84080201,16.780589 8.24153872,15.7725818 7.69553484,14.7235864 C7.43455106,14.2224925 7.20785066,13.6697838 6.98785512,13.1600874 C6.90322199,12.9633691 6.90423404,12.6662043 6.72737736,12.5643663 C6.48650818,12.9378147 6.13190928,13.2401663 5.94556458,13.6811694 C5.64776729,14.386319 5.60943569,15.2461865 5.49899515,16.1379338 C5.43371758,16.1614641 5.46268766,16.1453977 5.42422956,16.1750003 C4.90555118,16.0502645 4.72350772,15.5164053 4.53096418,15.0584502 C4.04378602,13.9006589 3.95333357,12.0360734 4.38206553,10.7030699 C4.4930121,10.3583386 4.99499157,9.27202362 4.79131543,8.95347919 C4.69441112,8.63544079 4.37510765,8.45187925 4.19635337,8.20885945 C3.97420721,7.90853201 3.75332613,7.5134509 3.59974672,7.16644241 C3.20150293,6.26368901 3.01528474,5.25024206 2.59540827,4.33749461 C2.39451528,3.90142525 2.0550972,3.45966308 1.77627595,3.07166635 C1.46759906,2.64204884 1.12185564,2.32578153 0.882884062,1.80583808 C0.797744903,1.62126448 0.681991069,1.32587082 0.808244978,1.13598393 C0.848094658,1.00783242 0.905022773,0.954446496 1.03190922,0.912572704 C1.24810955,0.746089595 1.84889092,0.967982736 2.07394674,1.06147135 C2.67055338,1.30929841 3.16924367,1.54548684 3.67489184,1.88035066 C3.91740561,2.04126747 4.16295554,2.35272751 4.45607208,2.43887872 L4.79118892,2.43887872 C5.31568662,2.5591868 5.90280525,2.47645128 6.39200751,2.62509691 C7.25744137,2.8881048 8.0329288,3.29722819 8.73719284,3.74202653 C10.8826237,5.09653615 12.6370217,7.02526068 13.8370664,9.32578906 C14.030116,9.69620133 14.1138635,10.0496617 14.2836358,10.4427187 C14.6265961,11.2350315 15.0591233,12.0501156 15.4004389,12.825097 C15.7408691,13.5978013 16.0728232,14.3779695 16.5541821,15.0213837 C16.8071959,15.3594102 17.7850944,15.5408211 18.2297663,15.7288104 C18.5412263,15.8602511 19.0514287,15.9976376 19.3460633,16.1750003 C19.9100312,16.5151775 20.4556556,16.9197466 20.9842015,17.292183 C21.2483479,17.4785277 22.0606489,17.886639 22.1006251,18.2223884 C20.7916579,18.1877255 19.7916207,18.3092986 18.9366869,18.6695903 C18.6936671,18.7716814 18.3064295,18.7747176 18.2664533,19.0787137 C18.4000446,19.2186304 18.4211712,19.4281259 18.527437,19.6000488 C18.7309867,19.9304848 19.0755915,20.3728795 19.3833829,20.6053993 C19.7195118,20.8590456 20.0657612,21.130403 20.4255469,21.3498925 C21.0663045,21.7407989 21.7818276,21.9638306 22.3984224,22.3551165 C22.7632683,22.5861182 23.1241926,22.8764515 23.478665,23.1369293 L23.478665,23.1369293 Z"/></svg>
      
    );

    case "PostgreSQL":
      // Simplified elephant head (Postgres blue)
      return (
        <svg fill="#ffffffff" width="34px" height="34px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.295 9.929c-0.010 0.155-0.082 0.292-0.191 0.387l-0.001 0.001c-0.131 0.143-0.306 0.243-0.504 0.278l-0.005 0.001c-0.028 0.004-0.061 0.007-0.094 0.007h-0c-0.001 0-0.003 0-0.004 0-0.312 0-0.58-0.189-0.694-0.46l-0.002-0.005c-0.030-0.221 0.33-0.388 0.701-0.44s0.764 0.011 0.794 0.231zM14.385 10.443c-0.121 0.311-0.418 0.528-0.766 0.528-0.004 0-0.007-0-0.011-0h0.001c-0 0-0 0-0 0-0.036 0-0.070-0.003-0.105-0.007l0.004 0c-0.261-0.047-0.483-0.191-0.63-0.392l-0.002-0.003c-0.082-0.094-0.132-0.219-0.132-0.354 0-0 0-0.001 0-0.001v0c0.012-0.077 0.055-0.143 0.115-0.185l0.001-0.001c0.152-0.084 0.334-0.133 0.528-0.133 0.083 0 0.164 0.009 0.242 0.026l-0.007-0.001c0.395 0.055 0.803 0.242 0.764 0.523zM25.403 18.086l-0.107-0.134-0.044-0.055c0.457-0.846 0.725-1.853 0.725-2.921 0-0.488-0.056-0.962-0.162-1.418l0.008 0.042c-0.070-0.453-0.111-0.976-0.111-1.508 0-0.007 0-0.014 0-0.021v0.001c0.023-0.501 0.076-0.97 0.158-1.429l-0.010 0.066c0.089-0.464 0.14-0.998 0.14-1.544 0-0.051-0-0.101-0.001-0.151l0 0.008c0.012-0.049 0.019-0.104 0.019-0.162 0-0.027-0.002-0.053-0.004-0.079l0 0.003c-0.4-1.58-1.151-2.949-2.168-4.073l0.007 0.008c-0.911-1.068-2.031-1.929-3.3-2.523l-0.060-0.025c0.696-0.149 1.496-0.234 2.316-0.234 0.075 0 0.15 0.001 0.225 0.002l-0.011-0c0.045-0.001 0.097-0.002 0.15-0.002 2.378 0 4.496 1.109 5.866 2.838l0.012 0.016c0.028 0.036 0.056 0.077 0.080 0.12l0.003 0.005c0.904 1.694-0.345 7.842-3.732 13.172zM25.117 9.322c-0.016 0.455-0.064 0.886-0.14 1.307l0.008-0.055c-0.078 0.425-0.134 0.931-0.157 1.445l-0.001 0.025c-0 0.017-0 0.036-0 0.056 0 0.567 0.042 1.124 0.124 1.668l-0.008-0.061c0.085 0.377 0.134 0.809 0.134 1.254 0 0.763-0.144 1.493-0.407 2.162l0.014-0.040c-0.076-0.131-0.155-0.289-0.224-0.453l-0.011-0.029c-0.066-0.159-0.209-0.416-0.406-0.77-0.769-1.38-2.571-4.611-1.649-5.929 0.474-0.678 1.676-0.707 2.722-0.579zM24.406 20.907c-0.051-1.039 0.336-1.148 0.746-1.263q0.085-0.023 0.169-0.051c0.050 0.044 0.105 0.087 0.162 0.125l0.005 0.003c0.62 0.273 1.342 0.431 2.102 0.431 0.592 0 1.161-0.096 1.693-0.274l-0.038 0.011c-0.344 0.293-0.736 0.544-1.16 0.738l-0.031 0.013c-0.644 0.264-1.391 0.429-2.173 0.454l-0.010 0c-0.119 0.018-0.256 0.029-0.395 0.029-0.386 0-0.754-0.080-1.087-0.224l0.018 0.007zM23.293 22.933c-0.021 0.221-0.045 0.47-0.077 0.745l-0.182 0.548c-0.014 0.040-0.022 0.086-0.023 0.134v0c0.001 0.027 0.001 0.058 0.001 0.089 0 0.355-0.053 0.699-0.151 1.022l0.006-0.025c-0.116 0.389-0.196 0.84-0.223 1.305l-0.001 0.016c-0.052 1.684-1.355 3.047-3.008 3.194l-0.013 0.001c-1.894 0.406-2.23-0.621-2.526-1.527q-0.045-0.142-0.096-0.283c-0.16-0.652-0.252-1.401-0.252-2.171 0-0.36 0.020-0.715 0.059-1.065l-0.004 0.043c0.006-0.128 0.009-0.279 0.009-0.43 0-1.026-0.154-2.016-0.441-2.948l0.019 0.071q0.008-0.55 0.024-1.114c0-0.003 0-0.008 0-0.012 0-0.046-0.007-0.090-0.020-0.132l0.001 0.003c-0.014-0.1-0.033-0.188-0.058-0.273l0.003 0.013c-0.141-0.521-0.496-0.941-0.964-1.164l-0.011-0.005c-0.176-0.088-0.384-0.14-0.605-0.14-0.104 0-0.205 0.011-0.302 0.033l0.009-0.002c0.128-0.47 0.26-0.854 0.412-1.228l-0.026 0.073 0.066-0.177c0.074-0.2 0.167-0.407 0.266-0.626 0.546-1.124 0.865-2.445 0.865-3.841 0-0.938-0.144-1.842-0.411-2.692l0.017 0.063c-0.183-1.108-1.135-1.943-2.281-1.943-0.18 0-0.356 0.021-0.524 0.060l0.016-0.003c-0.796 0.104-1.516 0.338-2.171 0.682l0.035-0.017q-0.124 0.063-0.245 0.13c0.091-2.147 0.896-4.090 2.181-5.615l-0.012 0.014c0.118-0.119 0.242-0.232 0.37-0.338l0.009-0.007c0.069-0.014 0.13-0.042 0.182-0.081l-0.001 0.001c0.893-0.654 2.014-1.047 3.227-1.047 0.097 0 0.193 0.002 0.288 0.007l-0.013-0.001c0.526 0.008 1.034 0.044 1.534 0.108l-0.067-0.007c2.043 0.393 3.787 1.463 5.032 2.963l0.011 0.014c0.748 0.869 1.354 1.887 1.766 2.998l0.022 0.069c-0.257-0.069-0.552-0.109-0.856-0.109-0.983 0-1.868 0.416-2.49 1.081l-0.002 0.002c-1.24 1.773 0.679 5.215 1.601 6.869 0.169 0.303 0.315 0.565 0.361 0.676 0.26 0.601 0.587 1.118 0.98 1.577l-0.007-0.008c0.087 0.109 0.171 0.214 0.236 0.306-0.501 0.144-1.401 0.478-1.319 2.146-0.015 0.195-0.053 0.558-0.104 1.018-0.054 0.269-0.098 0.597-0.123 0.93l-0.002 0.028zM14.091 17.219l-0.066 0.176c-0.137 0.328-0.279 0.745-0.397 1.172l-0.019 0.081c-0.893-0.013-1.695-0.395-2.261-1.001l-0.002-0.002c-0.632-0.667-1.020-1.57-1.020-2.564 0-0.198 0.015-0.392 0.045-0.582l-0.003 0.021c0.097-0.72 0.153-1.551 0.153-2.396 0-0.502-0.020-0.999-0.058-1.491l0.004 0.065c-0.006-0.107-0.012-0.201-0.015-0.275 0.805-0.611 1.824-0.98 2.929-0.98 0.132 0 0.262 0.005 0.391 0.015l-0.017-0.001c0.554 0.129 0.971 0.588 1.037 1.153l0.001 0.006c0.238 0.728 0.375 1.566 0.375 2.435 0 1.266-0.291 2.464-0.809 3.532l0.021-0.048c-0.105 0.233-0.204 0.453-0.289 0.682zM11.474 22.203c-0.205-0.052-0.385-0.128-0.549-0.227l0.009 0.005c0.172-0.073 0.375-0.134 0.585-0.173l0.019-0.003c1.604-0.33 1.851-0.563 2.392-1.25 0.124-0.157 0.264-0.336 0.459-0.553 0.040-0.045 0.072-0.099 0.091-0.159l0.001-0.003c0.213-0.189 0.34-0.137 0.546-0.052 0.227 0.125 0.395 0.336 0.46 0.587l0.001 0.007c0.023 0.065 0.037 0.139 0.037 0.217 0 0.125-0.035 0.242-0.095 0.341l0.002-0.003c-0.645 0.882-1.676 1.449-2.839 1.449-0.4 0-0.785-0.067-1.144-0.191l0.025 0.007zM3.967 15.846c-0.651-1.985-1.181-4.34-1.494-6.764l-0.021-0.199c-0.061-0.322-0.095-0.693-0.095-1.071 0-1.806 0.789-3.427 2.041-4.537l0.006-0.005c2.295-1.623 6.048-0.676 7.633-0.163l-0.012 0.012c-1.535 1.872-2.466 4.292-2.466 6.928 0 0.090 0.001 0.18 0.003 0.27l-0-0.013c-0 0.103 0.008 0.249 0.020 0.449 0.033 0.41 0.052 0.888 0.052 1.371 0 0.802-0.052 1.592-0.154 2.367l0.010-0.091c-0.033 0.206-0.051 0.444-0.051 0.686 0 1.231 0.482 2.35 1.269 3.177l-0.002-0.002q0.151 0.158 0.315 0.297c-0.433 0.464-1.375 1.49-2.377 2.696-0.709 0.853-1.199 0.689-1.36 0.636-0.685-0.368-1.222-0.939-1.538-1.631l-0.009-0.022c-0.684-1.252-1.286-2.708-1.73-4.232l-0.039-0.157zM30.445 19.403c-0.019-0.057-0.043-0.106-0.072-0.151l0.002 0.003c-0.174-0.329-0.596-0.427-1.259-0.29-2.066 0.426-2.866 0.164-3.156-0.024 1.617-2.452 2.918-5.292 3.751-8.326l0.049-0.209c0.339-1.313 0.997-4.403 0.153-5.913-0.059-0.112-0.122-0.208-0.192-0.298l0.003 0.004c-1.563-1.955-3.948-3.196-6.623-3.196-0.076 0-0.152 0.001-0.227 0.003l0.011-0c-0.042-0.001-0.091-0.001-0.141-0.001-1.342 0-2.633 0.22-3.838 0.625l0.085-0.025q-0.321-0.060-0.645-0.102c-0.488-0.093-1.053-0.151-1.631-0.16l-0.008-0c-0.083-0.004-0.18-0.006-0.278-0.006-1.315 0-2.538 0.394-3.557 1.071l0.024-0.015c-1.071-0.401-5.984-2.056-9.025 0.098-1.489 1.27-2.426 3.147-2.426 5.244 0 0.405 0.035 0.802 0.102 1.188l-0.006-0.041c0.335 2.698 0.879 5.126 1.632 7.461l-0.079-0.284c0.493 1.716 1.103 3.201 1.852 4.6l-0.061-0.124c0.433 0.984 1.182 1.764 2.116 2.225l0.026 0.012c0.168 0.049 0.361 0.078 0.561 0.078 0.742 0 1.392-0.391 1.756-0.979l0.005-0.009c1.001-1.204 1.987-2.282 2.43-2.758 0.502 0.279 1.097 0.451 1.731 0.471l0.006 0 0.001 0.005q-0.158 0.188-0.309 0.382c-0.424 0.538-0.512 0.649-1.875 0.93-0.388 0.080-1.418 0.292-1.433 1.014-0 0.004-0 0.008-0 0.013 0 0.147 0.043 0.284 0.117 0.399l-0.002-0.003c0.312 0.395 0.751 0.678 1.254 0.788l0.015 0.003c0.399 0.13 0.859 0.205 1.335 0.205 1.1 0 2.106-0.398 2.884-1.058l-0.006 0.005c-0.024 0.418-0.037 0.908-0.037 1.401 0 1.753 0.171 3.467 0.496 5.125l-0.027-0.167c0.382 1.373 1.616 2.367 3.084 2.38h0.002c0.369-0.003 0.726-0.046 1.070-0.124l-0.033 0.006c1.919-0.171 3.431-1.705 3.567-3.619l0.001-0.012c0.188-1.088 0.502-3.593 0.673-5.125 0.008-0.065 0.034-0.123 0.072-0.171l-0.001 0.001c0.001-0.001 0.087-0.059 0.534 0.038l0.055 0.009 0.317 0.028 0.019 0.001c0.095 0.004 0.207 0.007 0.319 0.007 1.024 0 2.002-0.2 2.895-0.564l-0.051 0.018c0.805-0.373 2.256-1.29 1.993-2.087z"></path>
      </svg>
      );

    case "GitHub":
      // GitHub mark (white) — no background
      return (
        <svg viewBox="0 0 24 24" className={svgClass} xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path fill="#FFFFFF" d="M12 .5A12 12 0 001.9 18.3c.4.1.6-.2.6-.4v-1.5c-2.4.5-3-1.1-3-1.1-.4-1 .1-1 .1-1 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.2.7-1.5-2.6-.3-5.4-1.3-5.4-6 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11 11 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.9 1.2 1.9 1.2 3.2 0 4.7-2.8 5.7-5.5 6 .4.4.7 1 .7 2.1v3.1c0 .3.2.7.8.6A12 12 0 0 0 12 .5z" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 24 24" className={svgClass} xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <circle cx="12" cy="12" r="8" stroke="#94a3b8" strokeWidth="1.2" fill="none" />
        </svg>
      );
  }
}

/* ========== Projects carousel ========== */
function ProjectsCarousel() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const autoplayRef = useRef<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  function scrollNext(): void {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth / 2;
    el.scrollBy({ left: step, behavior: "smooth" });
  }
  function scrollPrev(): void {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth / 2;
    el.scrollBy({ left: -step, behavior: "smooth" });
  }

  useEffect(() => {
    function start() {
      stop();
      autoplayRef.current = window.setInterval(() => {
        const el = scrollerRef.current;
        if (!el) return;
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
          el.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollNext();
        }
      }, 3000);
    }
    function stop() {
      if (autoplayRef.current) {
        window.clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    }

    if (!isHovering) start();
    else stop();

    return () => stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHovering]);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-[#38bdf8]">Projects</h2>
        <div className="flex gap-2">
          <button aria-label="previous" onClick={scrollPrev} className="bg-[#0b1220] hover:bg-[#0e1a2b] text-gray-200 p-2 rounded-md shadow">◀</button>
          <button aria-label="next" onClick={scrollNext} className="bg-[#0b1220] hover:bg-[#0e1a2b] text-gray-200 p-2 rounded-md shadow">▶</button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="relative flex gap-6 overflow-x-auto pb-4 scroll-smooth no-scrollbar"
        style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
      >
        {PROJECTS.map((p) => (
          <article key={p.id} data-card className="flex-shrink-0 w-[320px] sm:w-[380px] md:w-[460px] rounded-2xl overflow-hidden shadow-lg bg-[#071022] relative" style={{ scrollSnapAlign: "start" }}>
            <div className="w-full h-56 md:h-64 relative">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" draggable={false} />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <h3 className="text-white text-lg font-semibold drop-shadow-md">{p.title}</h3>
              </div>
            </div>

            <div className="p-4 bg-transparent text-gray-300">
              <p className="text-sm line-clamp-3 font-medium">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ========== Contact ========== */
function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  function sendMail(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const subject = encodeURIComponent(`Pesan dari ${name || "Pengunjung"}`);
    const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`);
    const mailto = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSending(true);
    window.location.href = mailto;
    setTimeout(() => setSending(false), 800);
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-[#38bdf8] mb-6">Contact</h2>

      <div className="bg-[#071428] border border-gray-800/60 rounded-2xl p-6 shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <p className="text-gray-300 font-medium">Hubungi saya lewat:</p>
          <div className="flex flex-wrap gap-3">
            <ContactBtn href={`mailto:${PROFILE.email}`} label="Email" icon={<MailIcon />} />
            <ContactBtn href={`https://wa.me/${PROFILE.phone.replace(/\D/g, "")}`} label="WhatsApp" icon={<WhatsAppIcon />} />
            <ContactBtn href={`https://www.linkedin.com/in/`} label="LinkedIn" icon={<LinkedInIcon />} />
            <ContactBtn href={`https://github.com/`} label="GitHub" icon={<GitHubIcon />} />
            
          </div>
          <p className="text-sm text-gray-400 mt-6 font-medium">Atau kirim pesan langsung lewat form di sebelah kanan. Saya akan membalas secepatnya.</p>
        </div>

        <div>
          <p className="text-gray-300 mb-4 font-medium">Atau kirim pesan langsung lewat form ini:</p>

          <form onSubmit={sendMail} className="space-y-3">
            <input type="text" placeholder="Nama kamu" value={name} onChange={(e) => setName(e.target.value)} required className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/30 font-medium" />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/30 font-medium" />
            <textarea placeholder="Pesan" value={message} onChange={(e) => setMessage(e.target.value)} rows={5} required className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/30 resize-none font-medium" />
            <button type="submit" disabled={sending} className="w-full bg-[#38bdf8] text-[#071227] font-bold py-3 rounded-lg hover:bg-[#0ea5e9] transition disabled:opacity-60">{sending ? "Membuka email..." : "Kirim"}</button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ========== ContactBtn & icons (bigger) ========== */
function ContactBtn({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#071826] border border-gray-800/50 hover:bg-[#0e1a2b] transition text-gray-200 font-medium" aria-label={label}>
      <span className="w-8 h-8">{icon}</span>
      <span className="text-sm font-semibold">{label}</span>
    </a>
  );
}

function MailIcon() {
  return (
    <svg width="34px" height="34px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 11.9556C2 8.47078 2 6.7284 2.67818 5.39739C3.27473 4.22661 4.22661 3.27473 5.39739 2.67818C6.7284 2 8.47078 2 11.9556 2H20.0444C23.5292 2 25.2716 2 26.6026 2.67818C27.7734 3.27473 28.7253 4.22661 29.3218 5.39739C30 6.7284 30 8.47078 30 11.9556V20.0444C30 23.5292 30 25.2716 29.3218 26.6026C28.7253 27.7734 27.7734 28.7253 26.6026 29.3218C25.2716 30 23.5292 30 20.0444 30H11.9556C8.47078 30 6.7284 30 5.39739 29.3218C4.22661 28.7253 3.27473 27.7734 2.67818 26.6026C2 25.2716 2 23.5292 2 20.0444V11.9556Z" fill="white"/>
          <path d="M22.0515 8.52295L16.0644 13.1954L9.94043 8.52295V8.52421L9.94783 8.53053V15.0732L15.9954 19.8466L22.0515 15.2575V8.52295Z" fill="#EA4335"/>
          <path d="M23.6231 7.38639L22.0508 8.52292V15.2575L26.9983 11.459V9.17074C26.9983 9.17074 26.3978 5.90258 23.6231 7.38639Z" fill="#FBBC05"/>
          <path d="M22.0508 15.2575V23.9924H25.8428C25.8428 23.9924 26.9219 23.8813 26.9995 22.6513V11.459L22.0508 15.2575Z" fill="#34A853"/>
          <path d="M9.94811 24.0001V15.0732L9.94043 15.0669L9.94811 24.0001Z" fill="#C5221F"/>
          <path d="M9.94014 8.52404L8.37646 7.39382C5.60179 5.91001 5 9.17692 5 9.17692V11.4651L9.94014 15.0667V8.52404Z" fill="#C5221F"/>
          <path d="M9.94043 8.52441V15.0671L9.94811 15.0734V8.53073L9.94043 8.52441Z" fill="#C5221F"/>
          <path d="M5 11.4668V22.6591C5.07646 23.8904 6.15673 24.0003 6.15673 24.0003H9.94877L9.94014 15.0671L5 11.4668Z" fill="#4285F4"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="34px" height="34px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z" fill="#BFC8D0"/>
        <path d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" fill="url(#paint0_linear_87_7264)"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z" fill="white"/>
        <path d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z" fill="white"/>
      <defs>
        <linearGradient id="paint0_linear_87_7264" x1="26.5" y1="7" x2="4" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#5BD066"/>
        <stop offset="1" stopColor="#27B43E"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="34px" height="34px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="28" height="28" rx="14" fill="#1275B1"/>
          <path d="M12.6186 9.69215C12.6186 10.6267 11.8085 11.3843 10.8093 11.3843C9.81004 11.3843 9 10.6267 9 9.69215C9 8.7576 9.81004 8 10.8093 8C11.8085 8 12.6186 8.7576 12.6186 9.69215Z" fill="white"/>
          <path d="M9.24742 12.6281H12.3402V22H9.24742V12.6281Z" fill="white"/>
          <path d="M17.3196 12.6281H14.2268V22H17.3196C17.3196 22 17.3196 19.0496 17.3196 17.2049C17.3196 16.0976 17.6977 14.9855 19.2062 14.9855C20.911 14.9855 20.9008 16.4345 20.8928 17.5571C20.8824 19.0244 20.9072 20.5219 20.9072 22H24V17.0537C23.9738 13.8954 23.1508 12.4401 20.4433 12.4401C18.8354 12.4401 17.8387 13.1701 17.3196 13.8305V12.6281Z" fill="white"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M12 .5A12 12 0 001.9 18.3c.4.1.6-.2.6-.4v-1.5c-2.4.5-3-1.1-3-1.1-.4-1 .1-1 .1-1 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.2.7-1.5-2.6-.3-5.4-1.3-5.4-6 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11 11 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.9 1.2 1.9 1.2 3.2 0 4.7-2.8 5.7-5.5 6 .4.4.7 1 .7 2.1v3.1c0 .3.2.7.8.6A12 12 0 0 0 12 .5z" />
    </svg>
  );
}   


