"use client";

import React, { useEffect, useRef, useState } from "react";
/* eslint-disable @next/next/no-img-element */

/* ========== DATA ========== */
const PROFILE = {
  name: "Yhogi Riswandi",
  title: "Junior JavaScript Developer",
  location: "Bekasi, Jawa Barat",
  email: "yriswandi.it@gmail.com",
  phone: "+62 857-17044-4568",
  aboutShort:
    "Fresh graduate yang bersemangat belajar tinggi. Berpengalaman membangun REST API untuk Aplikasi Video Pembelajaran. Terbiasa menulis unit testing dan bekerja kolaboratif dalam tim.",
  tech: ["JavaScript", "Spring Boot", "MySQL", "PostgreSQL", "GitHub"],
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
            Hi, I'm <span className="text-[#38bdf8] font-extrabold">{PROFILE.name.split(" ")[0]}</span> 👋 | Backend Developer
          </h2>
          <h3 className="text-2xl font-semibold text-gray-300 mb-6">{PROFILE.title}</h3>
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
          <p className="text-gray-300 leading-relaxed font-medium">{PROFILE.aboutShort}</p>

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

    case "Spring Boot":
      // Stylized green leaf / spring motif (clean, no bg)
      return (
        //<svg viewBox="0 0 64 64" className={svgClass} xmlns="" aria-hidden>
        // <g fill="none" fillRule="evenodd">
        //   <path d="M32 6c8 0 14 5 18 11 3 5 4 11 4 17 0 0-2 1-6 1-5 0-12-3-16-6-5-4-8-9-8-9s0 8 5 13c4 4 10 8 14 9 6 2 12 2 18 1" fill="#6DB33F" />
        //  <circle cx="32" cy="24" r="6" fill="#6DB33F" />
          //</g>
        //</svg>
        <svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
          <path fill="#70AD51" d="M21.822 1.248c-.338.806-.766 1.57-1.281 2.272A12.045 12.045 0 0012.03 0C5.431 0 0 5.43 0 12.031c0 3.293 1.35 6.445 3.737 8.717l.444.393a12.041 12.041 0 007.75 2.83c6.275 0 11.55-4.911 11.997-11.172.328-3.065-.572-6.941-2.106-11.55zM5.447 20.817c-.194.24-.49.38-.8.38a1.033 1.033 0 01-1.028-1.03c0-.564.465-1.03 1.028-1.03a1.032 1.032 0 01.8 1.68zm16.325-3.602c-2.969 3.954-9.31 2.622-13.375 2.812 0 0-.722.044-1.447.162 0 0 .272-.115.625-.25 2.853-.992 4.203-1.185 5.937-2.075 3.266-1.66 6.494-5.293 7.166-9.072-1.244 3.636-5.012 6.76-8.447 8.03-2.353.867-6.603 1.71-6.603 1.71l-.172-.09c-2.894-1.408-2.981-7.672 2.278-9.694 2.303-.886 4.507-.4 6.994-.992 2.656-.63 5.728-2.622 6.978-5.219 1.4 4.154 3.085 10.658.066 14.678z"/>
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
          <path fill="#00758F" fill-rule="evenodd" d="M5.46192862,4.04007684 C5.18892668,4.03501656 4.99575061,4.06967946 4.79169495,4.11446291 L4.79169495,4.15152944 L4.82901449,4.15152944 C4.95944313,4.41909158 5.18943271,4.591394 5.35034952,4.82188962 C5.47407329,5.08262038 5.59817658,5.34297163 5.72227987,5.60332288 C5.73493056,5.5909252 5.74745474,5.57865403 5.75959941,5.56625635 C5.99047454,5.40394797 6.0957283,5.14410275 6.09471625,4.74737704 C6.00211318,4.64996671 5.98832392,4.52826705 5.90837155,4.4122602 C5.80235875,4.25754224 5.59615247,4.17012595 5.46192862,4.04007684 L5.46192862,4.04007684 Z M23.478665,23.1369293 C23.6543831,23.2658398 23.772161,23.4657208 24,23.5466852 L24,23.5093657 C23.8800714,23.3573044 23.8495833,23.1474294 23.7395222,22.9880306 C23.5786054,22.8271138 23.4164236,22.6655645 23.2555068,22.5040152 C22.7821179,21.8759083 22.1818425,21.3245911 21.5432356,20.8663831 C21.0345512,20.5006515 19.8944709,20.0072745 19.6819392,19.4148426 C19.6697946,19.4021919 19.6571439,19.3896677 19.6444932,19.3770171 C20.0054174,19.3365348 20.4283301,19.2059797 20.7614228,19.1165393 C21.3210894,18.9665021 21.8214243,19.0054662 22.3990549,18.8560615 C22.6600387,18.781296 22.9203899,18.7066569 23.1808677,18.6329033 L23.1808677,18.4834987 C22.8887632,18.1836773 22.6805328,17.7869515 22.3622414,17.5155942 C21.5283078,16.8061434 20.6188495,16.0966926 19.6818127,15.5056522 C19.1626283,15.1774933 18.5200996,14.9645821 17.969415,14.6865199 C17.7842089,14.5931578 17.4590861,14.5444526 17.3365009,14.3887226 C17.0476856,14.0198284 16.8899314,13.5523853 16.6667732,13.1228943 C16.1997097,12.2230506 15.740363,11.2403448 15.3263059,10.293567 C15.044322,9.6481287 14.8597484,9.01154587 14.5076796,8.43227067 C12.8174206,5.65329311 10.9976185,3.97581132 8.17942382,2.3270466 C7.57927498,1.97649592 6.85742648,1.83809735 6.09471625,1.65719245 C5.68546635,1.6325236 5.27545742,1.60734872 4.86620752,1.58267987 C4.61635635,1.47831166 4.35651113,1.17267094 4.12184079,1.02427832 C3.18796669,0.434503045 0.792811133,-0.848656668 0.10157731,0.838313141 C-0.335124586,1.90286889 0.753847001,2.94174374 1.14361483,3.48142227 C1.4172493,3.85980447 1.76704094,4.2842352 1.96287366,4.70967798 C2.09127818,4.98938478 2.11316388,5.27010364 2.22385744,5.56600333 C2.49432924,6.29518923 2.7293791,7.08838764 3.07929725,7.76241652 C3.25653344,8.10322617 3.45173363,8.46263233 3.67539786,8.76738751 C3.81265788,8.95449125 4.04720171,9.03684725 4.08401522,9.32578906 C3.85465817,9.64749617 3.84150145,10.1466925 3.7125909,10.5541713 C3.13065906,12.3887747 3.35014857,14.6686824 4.19660638,16.0266077 C4.45594557,16.443195 5.06773305,17.3374725 5.90837155,16.9942592 C6.64375629,16.6946908 6.47980332,15.76613 6.69018433,14.9469976 C6.73749792,14.760906 6.70865434,14.624405 6.80176344,14.5003017 L6.80176344,14.5373682 C7.02542767,14.9840642 7.2488389,15.4307601 7.47199711,15.8773296 C7.96815726,16.6759678 8.84826592,17.5111665 9.59415073,18.0739958 C9.98037636,18.3659737 10.2848785,18.8709894 10.7852134,19.0419002 L10.7852134,19.0040746 L10.7478939,19.0040746 C10.6504835,18.8536579 10.4989282,18.790531 10.3759635,18.6694638 C10.0844916,18.3836847 9.76050733,18.0287063 9.51938514,17.7014329 C8.84080201,16.780589 8.24153872,15.7725818 7.69553484,14.7235864 C7.43455106,14.2224925 7.20785066,13.6697838 6.98785512,13.1600874 C6.90322199,12.9633691 6.90423404,12.6662043 6.72737736,12.5643663 C6.48650818,12.9378147 6.13190928,13.2401663 5.94556458,13.6811694 C5.64776729,14.386319 5.60943569,15.2461865 5.49899515,16.1379338 C5.43371758,16.1614641 5.46268766,16.1453977 5.42422956,16.1750003 C4.90555118,16.0502645 4.72350772,15.5164053 4.53096418,15.0584502 C4.04378602,13.9006589 3.95333357,12.0360734 4.38206553,10.7030699 C4.4930121,10.3583386 4.99499157,9.27202362 4.79131543,8.95347919 C4.69441112,8.63544079 4.37510765,8.45187925 4.19635337,8.20885945 C3.97420721,7.90853201 3.75332613,7.5134509 3.59974672,7.16644241 C3.20150293,6.26368901 3.01528474,5.25024206 2.59540827,4.33749461 C2.39451528,3.90142525 2.0550972,3.45966308 1.77627595,3.07166635 C1.46759906,2.64204884 1.12185564,2.32578153 0.882884062,1.80583808 C0.797744903,1.62126448 0.681991069,1.32587082 0.808244978,1.13598393 C0.848094658,1.00783242 0.905022773,0.954446496 1.03190922,0.912572704 C1.24810955,0.746089595 1.84889092,0.967982736 2.07394674,1.06147135 C2.67055338,1.30929841 3.16924367,1.54548684 3.67489184,1.88035066 C3.91740561,2.04126747 4.16295554,2.35272751 4.45607208,2.43887872 L4.79118892,2.43887872 C5.31568662,2.5591868 5.90280525,2.47645128 6.39200751,2.62509691 C7.25744137,2.8881048 8.0329288,3.29722819 8.73719284,3.74202653 C10.8826237,5.09653615 12.6370217,7.02526068 13.8370664,9.32578906 C14.030116,9.69620133 14.1138635,10.0496617 14.2836358,10.4427187 C14.6265961,11.2350315 15.0591233,12.0501156 15.4004389,12.825097 C15.7408691,13.5978013 16.0728232,14.3779695 16.5541821,15.0213837 C16.8071959,15.3594102 17.7850944,15.5408211 18.2297663,15.7288104 C18.5412263,15.8602511 19.0514287,15.9976376 19.3460633,16.1750003 C19.9100312,16.5151775 20.4556556,16.9197466 20.9842015,17.292183 C21.2483479,17.4785277 22.0606489,17.886639 22.1006251,18.2223884 C20.7916579,18.1877255 19.7916207,18.3092986 18.9366869,18.6695903 C18.6936671,18.7716814 18.3064295,18.7747176 18.2664533,19.0787137 C18.4000446,19.2186304 18.4211712,19.4281259 18.527437,19.6000488 C18.7309867,19.9304848 19.0755915,20.3728795 19.3833829,20.6053993 C19.7195118,20.8590456 20.0657612,21.130403 20.4255469,21.3498925 C21.0663045,21.7407989 21.7818276,21.9638306 22.3984224,22.3551165 C22.7632683,22.5861182 23.1241926,22.8764515 23.478665,23.1369293 L23.478665,23.1369293 Z"/></svg>
      
    );

    case "PostgreSQL":
      // Simplified elephant head (Postgres blue)
      return (
        <svg viewBox="0 0 64 64" className={svgClass} xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M10 38c0-12 8-22 22-22s22 10 22 22c0 6-6 12-14 12-6 0-8-2-12-2-6 0-18-2-18-10z" fill="#336791" />
          <ellipse cx="30" cy="30" rx="3" ry="3" fill="#f0f7fb" />
          <path d="M36 34c-3 2-6 2-9 1" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
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

      <style jsx>{`
        .no-scrollbar {
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          height: 10px;
        }
        .no-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.06);
          border-radius: 999px;
        }
        .no-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
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
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="2" y="5" width="20" height="14" rx="2" stroke="#60a5fa" strokeWidth="1.6" />
      <path d="M3 7.5l9 6 9-6" stroke="#60a5fa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M21 12.1a9 9 0 1 0-1.7 5.1L21 21l-2.8-1.4A9 9 0 0 0 21 12.1z" stroke="#34d399" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 14c-.2-.1-1.1-.6-1.2-.7-.2-.2-.4-.3-.6 0-.2.3-.8.7-1.1.9-.3.2-.6.1-.8-.2-.2-.3-.8-1-1-1.3-.3-.3 0-.5.2-.8.2-.3.5-.8.7-1 .3-.2.1-.5 0-.7-.1-.2-1-.9-1.4-1.1-.4-.2-.6-.2-.8 0-1.2.7-1.8 1.8-1.8 3.1 0 1.4.8 2.8 1.9 3.7 1.4 1.2 3.2 1.9 5 1.8.6 0 1-.5 1.1-1.1.1-.4.2-.8.1-1.1-.1-.3-.4-.5-.6-.6z" stroke="#34d399" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="2" y="3" width="20" height="18" rx="2" stroke="#60a5fa" strokeWidth="1.4" />
      <path d="M7 10v6M11 10v6M15 10v6" stroke="#60a5fa" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
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


