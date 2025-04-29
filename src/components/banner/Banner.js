import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
// import AnimatedGridBox from './GridCard';
import GlowingGridTracer from './GridCard';
const Banner = () => {
  return (
    <section
      id="home"
      className="w-full sml:px-10 px-5 pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-start border-b-[1px] font-titleFont border-b-black"
    >
      <LeftBanner />
     <RightBanner />
     {/* <GlowingGridTracer/> */}
    </section>
  );
}

export default Banner