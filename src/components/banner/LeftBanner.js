import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import resume from '../../assets/resume.pdf'
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Manish Maurya</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I Am a Dynamic software engineer with a passion for problem-solving and a strong foundation in full-stack development. Proficient in Java, Python, JavaScript, and SQL, with hands-on experience in front-end (HTML, CSS, React) and back-end (Node.js, Express.js) technologies. Proven ability to collaborate with cross-functional teams to deliver high-quality software solutions. Seeking to leverage technical skills and enthusiasm for innovation in a challenging software development role.
        </p>
      </div>
      <div className="flex flex-col flex-wrap xl:flex-row gap-6 lgl:gap-2 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            <span className="bannerIcon">
              <FaTwitter />
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>

          
        </div>
        <label htmlFor='resume' className='transition-all  cursor-pointer active:scale-90 md:min-w-[200px] md:max-w-[300px] w-full bg-fuchsia-800  rounded-sm lg:mt-2 lg:rounded-md capitalize p-2 flex justify-center bg-slate-500 text-white items-center' >
            <a className="w-full h-full text-center " id='resume'  href={resume} download={true}> download resume</a>
          </label>
      </div>
    </div>
  );
}

export default LeftBanner