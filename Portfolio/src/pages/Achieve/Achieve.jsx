import React from "react";
import { motion } from "framer-motion";
import exprienceData from "../../data/exprience";


function Achieve() {

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="mb-8">
        <h1 className="lg:text-3xl text-2xl font-bold relative inline-block after:block after:h-[5px] after:w-full after:bg-amber-300 after:rounded-full after:mt-1">
          Exprience
        </h1>
      </div>

       <section className="text-gray-300 bg-#222224 min-h-screen p-6 md:p-12 ">
      <div className="space-y-6 max-w-3xl mx-auto ">
        {exprienceData.map((exp, index) => (
          <div key={index} className="bg-#1e1e1f rounded-lg p-5 shadow hover:shadow-yellow-400 transition border-1">
            <h3 className="text-xl md:text-2xl font-semibold text-white">{exp.company}</h3>
            <p className="text-sm text-yellow-300 mb-1">{exp.duration}</p>
            <p className="text-sm italic text-gray-400 mb-2">{exp.role}</p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
    </motion.div>
  );
}

export default Achieve;
