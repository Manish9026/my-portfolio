import React ,{useNavigate} from 'react'
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const  ProjectsCard = ({ title, des, src,gitLink,liveUrl,mediaType }) => {

  // const navigate = useNavigate();
  return (
    <div className="w-full p-4 xl:px-8 h-auto xl:py-5 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-secondary group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900  hover:-translate-y-2 transition-all ease duration-700 max-w-[350px]">
      <div className="w-full  aspect-video overflow-hidden rounded-lg">
       {mediaType=="image"? <img
          className="w-full h-60 object-fill aspect-video duration-300 cursor-pointer "
          src={src}
          alt="src"
        />:<video src={src} className='w-full h-full aspect-video' autoPlay ></video>}
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2" >
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer" onClick={()=>window.location.href=(gitLink)
            }>
                <BsGithub />
              </span>
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer" onClick={()=>window.location.href=(liveUrl)
            }>
                <FaGlobe />
              </span>
            </div>
          </div>
          <p className="text-sm py-2 mt-3 hover:text-gray-100 duration-300 break-normal">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard