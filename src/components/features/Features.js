import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaDatabase, FaVial } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const cardDetail = [
  { title: "App Devlopment", des: "With using some technology :- react-native ,CSS,RestFull API,Node js", icon: <FaMobile /> },
  {
    title: "Web Devlopment",
    des: "With using some technology :- React,CSS,Tailwind,RestFull API,Node js,Express js", icon: <AiFillAppstore />
  },
  { title: "Testing", des: "With using some techniqu :- Unit ,Integration,System & User Acceptance Testing", icon: <FaVial /> },
  { title: "Database Designer", des: "I know about mongoDB,mySQL,SQL server,postgress and many more.   with using DFD,ERD & Normalization ", icon: <FaDatabase /> }
]
const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {
          cardDetail.map((card, index) => {
            return (
              <Card title={card.title} des={card.des} icon={card.icon} key={index} />
            )
          })
        }
        {/* <Card
          title="App Development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimisation"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<SiProgress />}
        />
        <Card
          title="Mobile Development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<FaGlobe />}
        /> */}
      </div>
    </section>
  );
}

export default Features