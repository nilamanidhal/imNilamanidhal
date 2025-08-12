import { motion } from "framer-motion";
import { useState } from "react";
import educationData from "../../data/education";


// Material icons
import Card from "./Card";
import LaptopIcon from "@mui/icons-material/Laptop";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import SchoolIcon from "@mui/icons-material/School";
import CloseIcon from "@mui/icons-material/Close";
import Education from "./Education";

function About() {
  const [showModal, setShowModal] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Title */}
      <div className="lg:mb-8 mb-7">
        <h1 className="lg:text-4xl text-3xl font-bold relative inline-block after:block after:h-[5px] after:w-full after:bg-amber-300 after:rounded-full after:mt-1">
          About Me
        </h1>
      </div>

      {/* Bio Section */}
      <div className="lg:min-h-[27vh] flex flex-col justify-between items-start mb-8">
        <p className="text-[15px] text-white/80 mb-5">
       I'm a passionate and detail-oriented developer who loves turning ideas into functional, visually appealing digital experiences. With a focus on clean design, intuitive interfaces, and efficient code, I create projects that are both beautiful and impactful. Whether building interactive web apps, exploring new technologies, or refining user experiences, I'm always eager to learn, adapt, and push creative boundaries.
<br /><br />
Skilled in Java, C, HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, PHP, DSA, and SQL, I'm in my final year of B.Tech in Computer Science and Engineering at Gandhi Institute for Education and Technology, Bhubaneswar, seeking opportunities to apply my skills and contribute to innovative solutions.
        </p>

        {/* Buttons Row */}
        <div className="flex gap-4 flex-wrap">
          <a
            href="/NILAMANI_DHAL_CV.pdf"
            download="NILAMANI_DHAL_CV.pdf"
            className="bg-amber-300 text-black px-6 py-2 rounded-md hover:bg-amber-400 transition-colors shadow-xl/50 custom-resume-btn"
          >
            View Resume
          </a>

          <button
            onClick={() => setShowModal(true)}
            className="bg-amber-300 text-black px-6 py-2 rounded-md hover:bg-amber-400 transition-colors shadow-xl/50 custom-resume-btn"
          >
            View GitHub Activity
          </button>
        </div>
      </div>

      {/* Card Section */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold mb-6">What I'm Doing, Right Now</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Card
            icon={<LaptopIcon />}
            title="Web Development"
            desc="Building full-stack projects with HTML, CSS, JavaScript, React.js, Node.js, and MongoDB."
          />
          <Card
            icon={<EmojiObjectsIcon />}
            title="Data Structures and Algorithms"
            desc="I've core knowladge Data Structures and a strong foundation on problem solving skill."
          />
        </div>
      </div>

      {/* Education Section */}
      <div className="mt-12">
        {/* <h1 className="text-2xl font-bold mb-6">About My Studies</h1> */}

 <div className="flex items-center">
              <SchoolIcon
                className="text-amber-300 mr-3 scale-125 "
                fontSize="medium"
              />
               <h1 className="text-2xl font-bold ">About My Studies</h1>
            </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          {/* <div className="bg-[#1e1e1fc4] p-6 rounded-lg shadow-xl/50 outline outline-white/30"> */}
            {/* <div className="flex items-center">
              <SchoolIcon
                className="text-amber-300 mr-3 scale-125"
                fontSize="medium"
              />
              <h2 className="text-xl font-semibold ">Education</h2>
            </div> */}
{/* 
            <div className="space-y-6">
              {educationData.map((edu) => (
                <div key={edu.id} className="border p-2 rounded-xl">
                  <h3 className="font-medium mb-1">{edu.title}</h3>
                  <p className="text-sm text-gray-400">{edu.collage}</p>
                  <p className="text-sm text-green-400">{edu.marks}</p>
                  <div className="flex flex-wrap gap-x-4 mt-1 text-sm text-gray-400">
                    <span>Period • {edu.period}</span>
                  </div>
                </div>
              ))} */}

              <Education/>
            {/* </div> */}
          {/* </div> */}
        </div>
      </div>

    {/* Modal */}
{showModal && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
    <div className="bg-[#1e1e1f] p-6 rounded-lg shadow-lg relative w-[90%] max-w-2xl md:max-w-4xl">
      {/* Close Button */}
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-3 right-3 text-gray-400 hover:text-white"
      >
        <CloseIcon />
      </button>

      <img
        src="https://camo.githubusercontent.com/017219ee383722b85a4d595f2214c6b5df2bbb80de35ab683613d2596cad7cfe/68747470733a2f2f6769746875622d726561646d652d61637469766974792d67726170682e76657263656c2e6170702f67726170683f757365726e616d653d6e696c616d616e696468616c267468656d653d746f6b796f2d6e69676874"
        alt="Nilamani's GitHub Stats"
        className="rounded-lg w-full"
      />
    </div>
  </div>
)}

{/* add */}

    </motion.div>
  );
}

export default About;





// add

// import { motion } from "framer-motion";
// import { useState, useEffect, useRef } from "react";
// import LaptopIcon from "@mui/icons-material/Laptop";
// import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
// import SchoolIcon from "@mui/icons-material/School";
// import CloseIcon from "@mui/icons-material/Close";
// import Card from "./Card";


// // Education card component (self-contained)
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
//   icon // react node
// }) {
//   const [isOpen, setIsOpen] = useState(defaultOpen);
//   const [progress, setProgress] = useState(0);
//   const ref = useRef(null);

//   useEffect(() => {
//     // animate when card enters viewport
//     const obs = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           // animate up to performancePercent
//           let start = 0;
//           const duration = 900; // ms
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
//       className="bg-[#071025] border border-purple-500/10 rounded-2xl p-5 shadow-xl transition-shadow hover:shadow-2xl"
//     >
//       {/* header */}
//       <button
//         onClick={() => setIsOpen((s) => !s)}
//         className="w-full flex items-center justify-between gap-4"
//         aria-expanded={isOpen}
//       >
//         <div className="flex items-center gap-4">
//           <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-700 to-purple-500 flex items-center justify-center text-white shadow-md">
//             {icon || <SchoolIcon />}
//           </div>
//           <div className="text-left">
//             <h3 className="text-lg md:text-xl font-bold text-white">{degree}</h3>
//             <p className="text-sm text-purple-300 mt-1">{year}</p>
//           </div>
//         </div>

//         <div className="text-sm text-purple-300">{isOpen ? "▲" : "▼"}</div>
//       </button>

//       {/* details */}
//       <div className={`mt-4 transition-all ${isOpen ? "opacity-100 max-h-[1000px]" : "opacity-0 max-h-0 overflow-hidden"}`}>
//         <div className="flex items-center gap-4 text-sm text-gray-300 mb-2">
//           {/* institute */}
//           <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M12 3l9 4.5-9 4.5L3 7.5 12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//             <path d="M21 12v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//             <path d="M3 12v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//             <path d="M7 18h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//           </svg>
//           <span>{institution}</span>
//           <span className="mx-2 text-gray-600">•</span>
//           <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M7 10h10M7 14h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//             <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
//           </svg>
//           <span className="text-sm text-gray-300">{year}</span>
//         </div>

//         {/* performance label + value */}
//         <div className="flex items-center justify-between mt-3 mb-2">
//           <div className="flex items-center gap-2 text-sm text-gray-200">
//             <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M12 8v4l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//               <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
//             </svg>
//             <span className="font-semibold">Performance</span>
//           </div>
//           <div className="text-sm text-purple-300 font-medium">{performance}</div>
//         </div>

//         {/* progress */}
//         <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden mb-3">
//           <div
//             className="h-2 rounded-full bg-gradient-to-r from-purple-500 via-purple-400 to-pink-500 transition-all"
//             style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
//           ></div>
//         </div>

//         {/* description */}
//         <p className="text-sm text-gray-300 mb-4">{description}</p>

//         {/* Key focus areas (title BEFORE tags) */}
//         {focusAreas?.length > 0 && (
//           <div className="mb-3">
//             <h4 className="text-sm text-gray-400 mb-2 uppercase tracking-wide">Key Focus Areas</h4>
//             <div className="flex flex-wrap gap-2">
//               {focusAreas.map((f, i) => (
//                 <span key={i} className="text-xs px-3 py-1 rounded-full bg-purple-700/20 text-purple-200">{f}</span>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* tags */}
//         {tags?.length > 0 && (
//           <div className="flex flex-wrap gap-2 mb-2">
//             {tags.map((t, i) => (
//               <span key={i} className="text-xs px-3 py-1 rounded-full bg-purple-600 text-white">{t}</span>
//             ))}
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }

// // Main About page (full code)
// export default function About() {
//   const [showModal, setShowModal] = useState(false);
//   const educationData = [
//     {
//       id: 1,
//       title: "Bachelor",
//       year: "2022 - 2026",
//       degree: "Bachelor of Technology in Computer Science and Application",
//       institution: "Gandhi Institute for Education and Technology",
//       performance: "8.44 SGPA",
//       performancePercent: 84.4,
//       description: "Focusing on computer science fundamentals, software development, and applications.",
//       focusAreas: ["Programming", "Data Structures", "Algorithms", "Web Development"],
//       tags: ["React", "Node.js", "DSA"],
//     },
//     {
//       id: 2,
//       title: "Intermediate",
//       year: "2020 - 2022",
//       degree: "Intermediate (Science - P,C,M)",
//       institution: "Shanti Institute of Management and Studies HS",
//       performance: "83%",
//       performancePercent: 83,
//       description: "Studied Physics, Chemistry and Mathematics with focus on scientific principles.",
//       focusAreas: ["Physics", "Chemistry", "Mathematics", "Critical Thinking"],
//       tags: ["Calculus", "Lab Work"],
//     },
//     {
//       id: 3,
//       title: "Matriculation",
//       year: "2020",
//       degree: "Matriculation",
//       institution: "Laxmi Narayan Nodal HS",
//       performance: "55%",
//       performancePercent: 55,
//       description: "Completed basic education with focus on foundational knowledge.",
//       focusAreas: ["Language Arts", "Mathematics", "Science", "Social Studies"],
//       tags: ["Fundamentals"],
//     },
//   ];

//   const [selected, setSelected] = useState(0);

//   return (
//     <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
//       {/* Title */}
//       <div className="mb-8">
//         <h1 className="text-3xl md:text-4xl font-bold text-purple-300 mb-4">About My Studies</h1>
//       </div>

//       <div className="flex flex-col lg:flex-row gap-6">
//         {/* left sidebar timeline */}
//         <aside className="lg:w-1/3 bg-[#071025] rounded-2xl p-5 border border-purple-500/10 shadow-lg">
//           <h2 className="text-lg font-semibold text-gray-200 mb-4">Education Timeline</h2>
//           <div className="space-y-3">
//             {educationData.map((e, i) => (
//               <div
//                 key={e.id}
//                 onClick={() => setSelected(i)}
//                 className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${selected === i ? 'bg-purple-700/60 text-white shadow-md' : 'bg-purple-900/10 hover:bg-purple-700/20'}`}
//               >
//                 <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${selected === i ? 'bg-purple-200 text-purple-900' : 'bg-purple-800/30 text-purple-300'}`}>
//                   <SchoolIcon fontSize="small" />
//                 </div>
//                 <div className="flex-1 text-left">
//                   <div className="text-xs text-purple-300">{e.year}</div>
//                   <div className="font-semibold">{e.title}</div>
//                 </div>
//                 <div className="text-sm text-purple-300">{selected === i ? 'Selected' : '>'}</div>
//               </div>
//             ))}
//           </div>
//         </aside>

//         {/* right content */}
//         <main className="lg:flex-1">
//           <div className="bg-[#071025] rounded-2xl p-6 border border-purple-500/10 shadow-lg">
//             <EducationCard
//               degree={educationData[selected].degree}
//               institution={educationData[selected].institution}
//               year={educationData[selected].year}
//               performance={educationData[selected].performance}
//               performancePercent={educationData[selected].performancePercent}
//               description={educationData[selected].description}
//               focusAreas={educationData[selected].focusAreas}
//               tags={educationData[selected].tags}
//               defaultOpen={true}
//               icon={<SchoolIcon />}
//             />

//             {/* small spacer and add other cards in collapsed style below */}
//             <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
//               {/* show the other entries as compact cards */}
//               {educationData
//                 .filter((_, idx) => idx !== selected)
//                 .map((e) => (
//                   <div key={e.id} className="bg-[#081428] rounded-xl p-4 border border-purple-500/6">
//                     <div className="flex items-start gap-3">
//                       <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-700 to-purple-500 flex items-center justify-center text-white">
//                         <SchoolIcon fontSize="small" />
//                       </div>
//                       <div>
//                         <div className="text-xs text-purple-300">{e.year}</div>
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












