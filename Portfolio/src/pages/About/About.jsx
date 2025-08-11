import { motion } from "framer-motion";
import { useState } from "react";
import educationData from "../../data/education";

// Material icons
import Card from "./Card";
import LaptopIcon from "@mui/icons-material/Laptop";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import SchoolIcon from "@mui/icons-material/School";
import CloseIcon from "@mui/icons-material/Close";

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
          Aspiring Full-Stack Developer skilled in Java, C, HTML, CSS, JavaScript, React,
          Node.js, Express.js, MongoDB, PHP, DSA and SQL. Passionate about web
          development and problem-solving. Currently in Final year of Bachelor of
          Technology in Computer Science and Engineering at
          Gandhi Institute for Education and Technology, Bhubaneswar. Seeking opportunities to apply
          and expand my skills in a professional setting.
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
        <h1 className="text-2xl font-bold mb-6">About My Studies</h1>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          <div className="bg-[#1e1e1fc4] p-6 rounded-lg shadow-xl/50 outline outline-white/30">
            <div className="flex items-center mb-4">
              <SchoolIcon
                className="text-amber-300 mr-3 scale-125"
                fontSize="medium"
              />
              <h2 className="text-xl font-semibold">Education</h2>
            </div>

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
              ))}
            </div>
          </div>
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
