import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { achivementData } from "../../constants";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full relative capitalize flex flex-col lgl:flex-row gap-10 lgl:gap-20"
      
    >
      
      {
        achivementData.map(({title,period,achivements},mainId)=>{
          return(
            <div className="flex-1">
            <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
              <p className="text-sm text-designColor tracking-[4px]">{period}</p>
              <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
            </div>
            <div className="mt-6 relative lgl:mt-14 w-full  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <span className="w-2 rounded-sm absolute min-h-full bg-lineColor flex flex-1 -left-[7px] opacity-60 after:w-full after:h-10 after:bg-blue after:absolute after:top-0  top-0 p-1 flex overflow-hidden">
                
                <span className="w-1 rounded-sm absolute -translate-x-1/2 left-1/2  bg-red-500 h-[20%] line-animation"></span>
              </span>
             {
              achivements.map(({title,subTitle,describe,result,media},index)=>{
                return(
    <ResumeCard title={title} subTitle={subTitle} des={describe} result={result} media={media}/>
                )
              })
             }

      
            </div>
          </div>
          )
        })
      }
    

    </motion.div>
  );
};

export default Achievement;
