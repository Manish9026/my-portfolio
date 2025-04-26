import React from 'react'
// import { bannerImg } from "../../assets/index";
import bannerImg from '../../assets/images/image3.png'
// import bannerImg from '../../assets/images/image4.JPG'


const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2  pt-20 flex justify-center items-center relative overflow-hidden">
      
      <div className="relative bottom-0 w-[300px] h-[300px] lgl:w-[450px] lgl:h-[450px] bg-gradient-to-r sml:rounded-full  from- to-[#202327] shadow-shadowOne  flex justify-center items-center z-20">
      <img
        className="relative w-[300px] -top-8  h-[400px] lgl:w-[400px] lgl:h-[500px] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
    
    <span className=' absolute w-full bg-bodyColor  bottom-0 z-40 h-10'> 

    </span>

      </div>
    </div>
  );
}

export default RightBanner