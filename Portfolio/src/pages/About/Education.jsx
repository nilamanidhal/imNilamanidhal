// import { motion } from "framer-motion";
// import { useState, useEffect, useRef } from "react";
// import SchoolIcon from "@mui/icons-material/School";
// import educationDetails from "../../data/education";

// // Education card component
// function EducationCard({
//   degree,
//   institution,
//   year,
//   performance,
//   performancePercent,
//   description,
//   focusAreas = [],
//   tags = [],
//   defaultOpen = false,
//   icon
// }) {
//   const [isOpen, setIsOpen] = useState(defaultOpen);
//   const [progress, setProgress] = useState(0);
//   const ref = useRef(null);

//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           let start = 0;
//           const duration = 900;
//           const stepTime = 16;
//           const steps = Math.max(1, Math.round(duration / stepTime));
//           const inc = performancePercent / steps;
//           const id = setInterval(() => {
//             start += inc;
//             if (start >= performancePercent) {
//               setProgress(performancePercent);
//               clearInterval(id);
//             } else setProgress(start);
//           }, stepTime);
//         }
//       },
//       { threshold: 0.35 }
//     );

//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, [performancePercent]);

//   return (
//     <div
//       ref={ref}
//       className="bg-[#222224] border border-yellow-500/20 rounded-2xl p-5 shadow-lg transition-shadow hover:shadow-xl"
//     >
//       {/* Header */}
//       <button
//         onClick={() => setIsOpen((s) => !s)}
//         className="w-full flex items-center justify-between gap-4"
//         aria-expanded={isOpen}
//       >
//         <div className="flex items-center gap-4">
//           <div className="w-12 h-12 rounded-lg bg-yellow-500 flex items-center justify-center text-black shadow-md">
//             {icon || <SchoolIcon />}
//           </div>
//           <div className="text-left">
//             <h3 className="text-lg md:text-xl font-bold text-white">{degree}</h3>
//             <p className="text-sm text-yellow-300 mt-1">{year}</p>
//           </div>
//         </div>
//         <div className="text-sm text-yellow-300">{isOpen ? "▲" : "▼"}</div>
//       </button>

//       {/* Details */}
//       <div className={`mt-4 transition-all ${isOpen ? "opacity-100 max-h-[1000px]" : "opacity-0 max-h-0 overflow-hidden"}`}>
//         <div className="flex items-center gap-4 text-sm text-gray-300 mb-2">
//           <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="none">
//             <path d="M12 3l9 4.5-9 4.5L3 7.5 12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//             <path d="M21 12v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//             <path d="M3 12v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//             <path d="M7 18h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//           </svg>
//           <span>{institution}</span>
//           <span className="mx-2 text-gray-500">•</span>
//           <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="none">
//             <path d="M7 10h10M7 14h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//             <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
//           </svg>
//           <span className="text-sm text-gray-300">{year}</span>
//         </div>

//         {/* Performance */}
//         <div className="flex items-center justify-between mt-3 mb-2">
//           <div className="flex items-center gap-2 text-sm text-white">
//             <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="none">
//               <path d="M12 8v4l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//               <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
//             </svg>
//             <span className="font-semibold">Performance</span>
//           </div>
//           <div className="text-sm text-yellow-300 font-medium">{performance}</div>
//         </div>

//         {/* Progress Bar */}
//         <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden mb-3">
//           <div
//             className="h-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all"
//             style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
//           ></div>
//         </div>

//         {/* Description */}
//         <p className="text-sm text-gray-300 mb-4">{description}</p>

//         {/* Focus Areas */}
//         {focusAreas?.length > 0 && (
//           <div className="mb-3">
//             <h4 className="text-sm text-gray-400 mb-2 uppercase tracking-wide">Key Focus Areas</h4>
//             <div className="flex flex-wrap gap-2">
//               {focusAreas.map((f, i) => (
//                 <span key={i} className="text-xs px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300">{f}</span>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Tags */}
//         {tags?.length > 0 && (
//           <div className="flex flex-wrap gap-2 mb-2">
//             {tags.map((t, i) => (
//               <span key={i} className="text-xs px-3 py-1 rounded-full bg-yellow-500 text-black">{t}</span>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default function Education() {
//   const [selected, setSelected] = useState(0);

//   return (
//     <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
//       <div className="flex flex-col lg:flex-row gap-6">
        
//         {/* Left Sidebar */}
//         <aside className="lg:w-1/3 bg-[#222224] rounded-2xl p-5 border border-yellow-500/20 shadow-lg mt-7">
//           <div className="space-y-3">
//             {educationDetails.map((e, i) => (
//               <div
//                 key={e.id}
//                 onClick={() => setSelected(i)}
//                 className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${selected === i ? 'bg-neutral-400 text-black shadow-md' : 'bg-gray-800/50 hover:bg-gray-700/70 text-white'}`}
//               >
//                 <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${selected === i ? 'bg-black text-yellow-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
//                   <SchoolIcon fontSize="small" />
//                 </div>
//                 <div className="flex-1 text-left">
//                   <div className="text-xs text-yellow-300">{e.year}</div>
//                   <div className="font-semibold">{e.title}</div>
//                 </div>
//                 <div className="text-sm text-yellow-300">{selected === i ? 'Selected' : '>'}</div>
//               </div>
//             ))}
//           </div>
//         </aside>

//         {/* Right Content */}
//         <main className="lg:flex-1">
//           <div className="bg-[#222224] rounded-2xl p-6 border border-yellow-500/20 shadow-lg">
//             <EducationCard
//               degree={educationDetails[selected].degree}
//               institution={educationDetails[selected].institution}
//               year={educationDetails[selected].year}
//               performance={educationDetails[selected].performance}
//               performancePercent={educationDetails[selected].performancePercent}
//               description={educationDetails[selected].description}
//               focusAreas={educationDetails[selected].focusAreas}
//               tags={educationDetails[selected].tags}
//               defaultOpen={true}
//               icon={<SchoolIcon />}
//             />

//             {/* Other Education Entries */}
//             <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
//               {educationDetails
//                 .filter((_, idx) => idx !== selected)
//                 .map((e) => (
//                   <div key={e.id} className="bg-[#222224] rounded-xl p-4 border border-yellow-500/20">
//                     <div className="flex items-start gap-3">
//                       <div className="w-10 h-10 rounded-lg bg-yellow-500 flex items-center justify-center text-black">
//                         <SchoolIcon fontSize="small" />
//                       </div>
//                       <div>
//                         <div className="text-xs text-yellow-300">{e.year}</div>
//                         <div className="font-semibold text-white">{e.title}</div>
//                         <div className="text-sm text-gray-300 mt-2">{e.institution}</div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//             </div>
//           </div>
//         </main>
//       </div>
//     </motion.div>
//   );
// }





import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import SchoolIcon from "@mui/icons-material/School";
import educationDetails from "../../data/education";

// Education card component (self-contained)
function EducationCard({
  degree,
  institution,
  year,
  performance,
  performancePercent,
  description,
  focusAreas = [],
  tags = [],
  defaultOpen = false,
  icon
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 900;
          const stepTime = 16;
          const steps = Math.max(1, Math.round(duration / stepTime));
          const inc = (performancePercent || 0) / steps;
          const id = setInterval(() => {
            start += inc;
            if (start >= (performancePercent || 0)) {
              setProgress(performancePercent || 0);
              clearInterval(id);
            } else setProgress(start);
          }, stepTime);
        }
      },
      { threshold: 0.35 }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [performancePercent]);

  return (
    <div
      ref={ref}
      className="bg-[#222224] border border-yellow-500/20 rounded-2xl p-5 shadow-sm transition-shadow hover:shadow-md"
    >
      {/* Header */}
      <button
        onClick={() => setIsOpen((s) => !s)}
        className="w-full flex items-center justify-between gap-4 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center text-black shadow-sm"
               style={{ backgroundColor: "#f59e0b" /* yellow-500 */ }}>
            {icon || <SchoolIcon />}
          </div>

          <div className="flex flex-col">
            <h3 className="text-lg md:text-xl font-semibold text-white leading-snug">{degree}</h3>
            <p className="text-sm text-yellow-300 mt-1">{year}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-yellow-300 select-none">{isOpen ? "▲" : "▼"}</span>
        </div>
      </button>

      {/* Details */}
      <div className={`mt-4 transition-all duration-300 ease-[cubic-bezier(.2,.8,.2,1)] ${isOpen ? "opacity-100 max-h-[1200px] mt-4" : "opacity-0 max-h-0 overflow-hidden"}`}>
        <div className="flex items-center gap-3 text-sm text-gray-300 mb-2">
          <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3l9 4.5-9 4.5L3 7.5 12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 12v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 12v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 18h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-gray-200">{institution}</span>
          <span className="mx-2 text-gray-500">•</span>
          <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10h10M7 14h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          <span className="text-sm text-gray-300">{year}</span>
        </div>

        {/* Performance */}
        {performance != null && (
          <div className="flex items-center justify-between mt-3 mb-2">
            <div className="flex items-center gap-2 text-sm text-white">
              <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8v4l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              <span className="font-medium">Performance</span>
            </div>
            <div className="text-sm text-yellow-300 font-medium">{performance}</div>
          </div>
        )}

        {/* Progress Bar */}
        {performancePercent != null && (
          <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden mb-3">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all"
              style={{ width: `${Math.min(100, Math.max(0, Math.round(progress)))}%` }}
            />
          </div>
        )}

        {/* Description */}
        {description && <p className="text-sm text-gray-300 mb-4">{description}</p>}

        {/* Focus Areas */}
        {focusAreas?.length > 0 && (
          <div className="mb-3">
            <h4 className="text-sm text-gray-400 mb-2 uppercase tracking-wide">Key Focus Areas</h4>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((f, i) => (
                <span key={i} className="text-xs px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300">{f}</span>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((t, i) => (
              <span key={i} className="text-xs px-3 py-1 rounded-full bg-yellow-500 text-black">{t}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Main Education component (full)
export default function Education() {
  const [selected, setSelected] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="px-2 sm:px-6 lg:px-0"
    >
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Sidebar - on mobile: horizontal scroll; on lg: vertical column */}
        <aside className="lg:w-1/3 bg-[#222224] rounded-2xl p-4 border border-yellow-500/12 shadow-sm mt-6">
          <div className="overflow-x-auto lg:overflow-visible -mx-4 lg:mx-0 px-4 lg:px-0">
            <div className="flex lg:flex-col gap-3">
              {educationDetails.map((e, i) => {
                const isActive = selected === i;
                return (
                  <button
                    key={e.id}
                    onClick={() => setSelected(i)}
                    className={`min-w-[240px] lg:min-w-0 flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all text-left
                      ${isActive
                        ? "bg-yellow-400/8 ring-1 ring-yellow-400/12 text-yellow-300"
                        : "bg-gray-800/50 hover:bg-gray-700/60 text-white"
                      }`}
                    type="button"
                  >
                    <div className={`w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0
                      ${isActive ? "bg-yellow-400/20 text-yellow-400" : "bg-yellow-500/20 text-yellow-400"}`}>
                      <SchoolIcon fontSize="small" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-yellow-300">{e.year}</div>
                      <div className="font-medium truncate text-white">{e.title}</div>
                    </div>

                    {/* dot indicator when selected */}
                    <div className="ml-2 flex items-center">
                      {isActive ? (
                        <span className="w-2.5 h-2.5 rounded-full bg-fuchsia-900 shadow-[0_0_8px_rgba(245,158,11,0.18)]" />
                      ) : (
                        <span className="text-gray-400 hidden sm:inline">›</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Right Content */}
        <main className="lg:flex-1">
          <div className="bg-[#222224] rounded-2xl p-5 sm:p-6 border border-yellow-500/12 shadow-sm mt-6">
            <EducationCard
              degree={educationDetails[selected].degree}
              institution={educationDetails[selected].institution}
              year={educationDetails[selected].year}
              performance={educationDetails[selected].performance}
              performancePercent={educationDetails[selected].performancePercent}
              description={educationDetails[selected].description}
              focusAreas={educationDetails[selected].focusAreas}
              tags={educationDetails[selected].tags}
              defaultOpen={true}
              icon={<SchoolIcon />}
            />

            {/* Compact other entries */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {educationDetails
                .filter((_, idx) => idx !== selected)
                .map((e) => (
                  <div key={e.id} className="bg-[#222224] rounded-xl p-4 border border-yellow-500/10">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-yellow-500 flex items-center justify-center text-black flex-shrink-0">
                        <SchoolIcon fontSize="small" />
                      </div>
                      <div>
                        <div className="text-xs text-yellow-300">{e.year}</div>
                        <div className="font-semibold text-white">{e.title}</div>
                        <div className="text-sm text-gray-300 mt-1">{e.institution}</div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </main>
      </div>
    </motion.div>
  );
}
