import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const gridSize = 15;

const GridCell = ({ isActive }) => {
  return (
    <div style={{
        // boxShadow: "0 0 10px 2pxrgb(196, 112, 240)",
        // background:"rgba(30, 18, 73, 0.62)"
      }} className="relative hover:bg-slate-500  w-full h-full bg-bodyColor/80 overflow-hidden">
      {isActive && (
        <motion.div
          className="absolute w-full h-full rounded-sm pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          style={{
            // boxShadow: "0 0 10px 2pxrgb(196, 112, 240)",
           background:"rgba(102, 72, 213, 0.62)"
          }}
        />
      )}
    </div>
  );
};

const GlowingGridTracer = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % (gridSize * gridSize));
    }, 1050); // Change speed here (ms)
    return () => clearInterval(interval);
  }, []);

  const cells = [];
  for (let i = 0; i < gridSize * gridSize; i++) {
    cells.push(<GridCell key={i} isActive={i === activeIndex} />);
  }

  return (
    <div className=" absolute transform translate-z-[10px]  flex flex-1 w-full h-full top-0 justify-center items-center left-0">
      <div className="grid grid-cols-10 grid-rows-10 gap-[1px] w-full h-full bg-slate-600 p-[1px]">
        {cells}
      </div>
    </div>
  );
};

export default GlowingGridTracer;
