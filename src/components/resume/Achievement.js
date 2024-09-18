import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { achivementData } from "../../constants";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {
        achivementData.map(({title,period,achivements},mainId)=>{
          return(
            <div>
            <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
              <p className="text-sm text-designColor tracking-[4px]">{period}</p>
              <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
            </div>
            <div className="mt-6 lgl:mt-14 w-full  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
             {
              achivements.map(({title,subTitle,describe,result},index)=>{
                return(
    <ResumeCard title={title} subTitle={subTitle} des={describe} result={result}/>
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
