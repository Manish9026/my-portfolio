import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { educationData } from "../../constants";

const Education = () => {
  return (
    <AnimatePresence mode="wait">
    <motion.div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1, transform:{}, transition: { duration: 0.5 } }}
      initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
      className="w-full capitalize flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >


      {
        educationData.map(({title,period,program},mainId)=>{

          return(
            <div key={mainId} className="flex-1 ">
            <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
              <p className="text-sm text-designColor tracking-[4px]">{period}</p>
              <h2 className="text-3xl md:text-4xl font-bold capitalize">{title}</h2>
            </div>
            <div className="mt-6 relative lgl:mt-14 w-full  flex flex-col gap-10">
              <span className="w-2 rounded-sm absolute min-h-full bg-lineColor flex flex-1 -left-[7px] opacity-60 after:w-full after:h-10 after:bg-blue after:absolute after:top-0  top-0 p-1 flex overflow-hidden">
                
                <span className="w-1 rounded-sm absolute -translate-x-1/2 left-1/2  bg-red-500 h-[20%] line-animation"></span>
              </span>
    
              {
                program.map((data,id)=>{
                  return(
                    <ResumeCard title={data.title} subTitle={data.subTitle} result={data.result} des={data.des} key={id}/>
                  )
                })
              }

            </div>
          </div>
          )
        })
      }
    
    </motion.div>
    </AnimatePresence>
  );
};

export default Education;
