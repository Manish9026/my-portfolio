import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard';
import { project1, project2,project3 ,project4} from '../../assets/projectImages/projectImages';
import { projectData } from '../../constants';
const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">

        {
          projectData.map((card,index)=>{
            return(
              <ProjectsCard
              title={card.title}
              des={card.des}
              src={card.src}
              gitLink={card.gitLink}
              liveUrl={card.liveUrl}
              />
            )
          })
        }
       
      </div>
    </section>
  );
}

export default Projects