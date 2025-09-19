import React, { useRef, useState, useEffect } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Achievement from "./Achievement";
import Experience from "./Experience";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { FaUserGraduate, FaTools, FaTrophy, FaBriefcase } from "react-icons/fa";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("Education");

  // 👀 detect if Resume section is in view to show/hide BottomTabs
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  return (
    <section
      ref={ref}
      id="profile"
      className="w-full primary-p border-b-[1px] border-b-line"
    >
      {/* Title */}
      <div className="flex justify-center pt-10 items-center text-center">
        <Title title="1+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>

      {/* Top Tabs */}
      <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-6">
        {["Education", "Skills", "Experience", "Achievements"].map((tab) => (
          <li
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`resumeLi ${activeTab === tab ? "border-designColor rounded-lg" : "border-transparent"
              }`}
          >
            {tab === "Education" && "🎓"}
            {tab === "Skills" && "🪄"}
            {tab === "Experience" && "🚀"}
            {tab === "Achievements" && "🎯"} {tab}
          </li>
        ))}
      </ul>

      {/* Section Content */}
      <div className="mt-8" id='sectionContent'>
        <AnimatePresence mode="wait">
          {activeTab === "Education" && (
            <motion.div
              key="Education"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
            >
              <Education />
            </motion.div>
          )}
          {activeTab === "Skills" && (
            <motion.div
              key="Skills"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
            >
              <Skills />
            </motion.div>
          )}
          {activeTab === "Experience" && (
            <motion.div
              key="Experience"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
            >
              <Experience />
            </motion.div>
          )}
          {activeTab === "Achievements" && (
            <motion.div
              key="Achievements"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
            >
              <Achievement />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Tabs */}
      <BottomTabs
        isInsideParent={isInView}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </section>
  );
};

function BottomTabs({ isInsideParent = false, activeTab, setActiveTab }) {
  const categories = [
    { name: "Education", icon: FaUserGraduate },
    { name: "Skills", icon: FaTools },
    { name: "Experience", icon: FaBriefcase },
    { name: "Achievements", icon: FaTrophy },
  ];

  return (
   <AnimatePresence>
  {isInsideParent && (
    <motion.div
      className="fixed bottom-0 left-0 w-full z-40 bg-slate-900/40 
                 backdrop-blur-xl border-t border-slate-700/40 shadow-lg"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ y: 100 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{ willChange: "transform" }} // ✅ keep only here
    >
      <div className="flex justify-around max-w-4xl mx-auto px-4 py-3">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeTab === category.name;

          return (
            <motion.button
              key={category.name}
              onClick={() => {
                setActiveTab(category.name);
                const element = document.getElementById("sectionContent");
                if (element) {
                  const y =
                    element.getBoundingClientRect().top + window.scrollY - 80;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className={`flex flex-col items-center text-xs font-medium transition-all 
                ${isActive ? "text-white" : "text-slate-400 hover:text-white"}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className={`w-10 h-10 flex items-center justify-center rounded-full
                  ${isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
                    : "bg-transparent"}`}
                animate={{ scale: isActive ? 1.2 : 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon className="w-5 h-5" />
              </motion.div>
              {category.name}
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  )}
</AnimatePresence>

  );
}

export default Resume;
