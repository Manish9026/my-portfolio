import React from 'react'

const ResumeCard = ({title,subTitle,result,des,media}) => {
  return (
    <div className="w-full h-1/3 group flex flex-1">
      <div className="w-10 h-[6px] bg-lineColor bgOpacity mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center group-hover:bg-designColor/30 bg-lineColor bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-gray-600/70 inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-4 lgl:gap-6 shadow-shadowOne">
        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
          <div>
            <h3 className=" capitalize text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
              {subTitle}
            </p>
          </div>
          <div>
            <p className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium capitalize">
              {result}
            </p>
          </div>
        </div>
       { des && <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
          {des}
        </p>}
        {/* {
          media && (
            <a href={media} target="_blank" rel="noreferrer" className="text-sm md:text-base font-medium text-gray-400 hover:text-designColor duration-300"/>
          )

        } */}
         
{(media) && (<a href={media?.link} target="_blank" rel="noreferrer" className="text-sm md:text-base font-medium text-gray-400 hover:text-designColor bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 flex flex-col border border-slate-700/50 py-2 center text-center cursor-pointer hover:-translate-y-1 hover:scale-105  will-change-transform">{media?.title ?? "view"}</a>)}
         
      </div>
    </div>

  );
}

export default ResumeCard