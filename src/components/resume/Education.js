import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { educationData } from "../../constants";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >


      {
        educationData.map(({title,period,program},mainId)=>{

          return(
            <div key={mainId}>
            <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
              <p className="text-sm text-designColor tracking-[4px]">{period}</p>
              <h2 className="text-3xl md:text-4xl font-bold capitalize">{title}</h2>
            </div>
            <div className="mt-6 lgl:mt-14 w-full  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
    
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
  );
};

export default Education;
