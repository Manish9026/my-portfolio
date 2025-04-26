import React,{useState} from 'react'
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from '../layouts/Title'
import { testimonialOne,testimonialTwo, quote } from "../../assets";
import { testimonialData } from '../../constants';
import { FaQuoteLeft } from 'react-icons/fa';


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute -top-16 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute -top-16 left-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
      const [dotActive, setDocActive] = useState(0);
     const settings = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1,
       nextArrow:<SampleNextArrow />,
       prevArrow:<SamplePrevArrow />,
       beforeChange: (prev, next) => {
         setDocActive(next);
       },
       appendDots: (dots) => (
         <div
           style={{
             borderRadius: "10px",
             padding: "10px",
           }}
         >
           <ul
             style={{
               display: "flex",
               gap: "15px",
               justifyContent: "center",
               marginTop: "20px",
             }}
           >
             {" "}
             {dots}{" "}
           </ul>
         </div>
       ),
       customPaging: (i) => (
         <div
           style={
             i === dotActive
               ? {
                   width: "12px",
                   height: "12px",
                   color: "blue",
                   background: "#ff014f",
                   borderRadius: "50%",
                   cursor: "pointer",
                 }
               : {
                   width: "12px",
                   height: "12px",
                   color: "blue",
                   background: "gray",
                   borderRadius: "50%",
                   cursor: "pointer",
                 }
           }
         ></div>
       ),
     };
  return (
    <section
      id="testimonial"
      className="w-full  border-b-[1px] border-b-black primary-p"
    >
      <div className="flex pt-10 justify-center items-center text-center">
        <Title title="WHAT CLIENTS SAY" des="Testimonial" />
      </div>
      <div className="max-w-6xl mx-auto">
        {/* ================ Slider One ================== */}
        <Slider className='' {...settings}>

          {
          testimonialData.map(({des,post,workThrough,workTitle,name,nationality,rating,src},id)=>{

            return (
              <div className="border rounded-md border-slate-600 w-full max-h-[70%] py-10 bg-gradient-to-r from-[#1d154b] to-[#1d154b] p-4 lgl:p-8 flex flex-col  gap-4 lgl:gap-8 ">
              <div className="flex flex-wrap justify-start sml:justify-start lgl:items-center pb-6 gap-4 border-b-2 border-b-gray-700">

                <img src={src} className='asspect-video rounded-md object-contain max-w-[250px]'  alt="" />
                <div>
                  <h2 className=' capitalize text-xl lgl:text-2xl font-medium tracking-wide'>{name}</h2>
                  <p className='text-base text-gray-400'>{post}</p>
                  <p className='text-base text-designColor capitalize'>{nationality}</p>
                  <h3 className=" capitalize text-lg lgl:text-xl font-medium tracking-wide mt-3">
                   {workTitle}
                  </h3>
                  <p className="text-base text-gray-400 ">
                    {workThrough}
                  </p>
                  <div className="text-yellow-500 flex gap-1">
                  {
                    Array(rating).fill(null).map((_,id)=>{
                      return(
                        <RiStarFill key={id}/>

                      )
                    })
                  }
                 
                </div>
                </div>
               
              </div>
              <p className="text-base font-titleFont text-gray-400 p-2 font-medium tracking-wide leading-6">
              <FaQuoteLeft className='mb-2'/>
               {des}
              </p>
            </div>
            )
          })
         }
       
          

         
        </Slider>
      </div>
    </section>
  );
}

export default Testimonial