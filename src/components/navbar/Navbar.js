import React, { useState } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import {logo} from "../../assets/index"
import { navLinksdata, socialLinks } from '../../constants';
import resume from '../../assets/resume.pdf'
import { IoEye } from "react-icons/io5";
import { FiGithub } from 'react-icons/fi';
const Navbar = () => {
  const [showMenu, setShowMenu]=useState(false)
  return (
    <div className="w-full primary-p  h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div className='border rounded-full overflow-hidden w-[50px] h-[50px] '>
        <img src={logo} className=' h-full w-full' alt="logo" />
      </div>
     
      <div className='flex items-center gap-4 lgl:gap-8'>

      <label htmlFor='resumeId' className='transition-all flex gap-2 items-center justify-center cursor-pointer active:scale-90  text-white items-center bg-sky-500 p-2 rounded-lg' >
      <IoEye className='text-xl' />
                    <a className="w-full h-full text-center " id='resumeId'  href={resume} download={true}>  Resume</a>
                  </label>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
       
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-2 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 px-2 relative">
              <div className=''>
                <img className="w-32 rounded bg-slate-500" src={logo}  alt="logo " />
                <p className="text-sm text-gray-400 mt-2">
                I Am a Dynamic software engineer with a passion for problem-solving and a strong foundation in full-stack development.
                </p>
              </div>
              <ul className="flex flex-col gap-4 ">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                <a href={socialLinks['github'].url}  target="_blank" className="bannerIcon" title='Github'>
            <FiGithub />
            </a>
            <a href={socialLinks['twitter'].url}  target="_blank" className="bannerIcon" title='twitter'>
              <FaTwitter />
            </a>
            <a  href={socialLinks['linkedIn'].url}  className="bannerIcon" title='linkedIn' target='_blank'>
              <FaLinkedinIn />
            </a>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}

        
      </div>
    </div>
  );
}

export default Navbar