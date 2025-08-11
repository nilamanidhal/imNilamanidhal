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
          Experience
        </h1>
      </div>

      <section className="relative max-w-3xl mx-auto min-h-screen px-6 md:px-12">
        {/* Animated Timeline line */}
        <motion.div
          className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-yellow-400 transform md:-translate-x-1/2"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
        ></motion.div>

        <div className="space-y-12">
          {exprienceData.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative flex items-start md:items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Animated Dot */}
              <motion.div
                className="absolute left-4 md:left-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-gray-900 transform md:-translate-x-1/2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                viewport={{ once: true }}
              ></motion.div>

              {/* Card */}
              <motion.div
                className="bg-[#1e1e1f] rounded-lg p-5 shadow hover:shadow-yellow-400 transition border border-gray-700 w-full md:w-5/12"
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  {exp.company}
                </h3>
                <p className="text-sm text-yellow-300 mb-1">{exp.duration}</p>
                <p className="text-sm italic text-gray-400 mb-2">{exp.role}</p>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

export default Achieve;
