import React from 'react'

const Title = ({title, des ,className,icon}) => {
  return (
    <div className={className + " flex flex-col gap-4 font-titleFont mb-14"}>
      <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
       {title}
      </h3>
     <span className='flex items-center gap-2 '>
      {icon}
      <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize">{des}</h1>
      </span> 
      
    </div>
  );
}

export default Title