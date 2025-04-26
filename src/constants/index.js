import { project1, project2,project3 ,project4, project5, project6, project7} from "../assets/projectImages/projectImages";


export const socialLinks={
  instagram:{
    name:'instagram',
    url:"https://www.instagram.com/",
  }
 
,
github:{
  name:'github',
  url:"https://github.com/Manish9026",
},
linkedIn:{
  name:'linkedIn',
  url:"https://www.linkedin.com/in/manish-maurya-6a32b8301/",
},
twitter:{
  url:"https://x.com/",
  name:"twitter"
}
}



export const navLinksdata = [
  {
    _id: 1001,
    title: "Home",
    link: "home",
  },
  {
    _id: 1002,
    title: "Features",
    link: "features",
  },
  {
    _id: 1003,
    title: "Projects",
    link: "projects",
  },
  {
    _id: 1004,
    title: "Resume",
    link: "profile",
  },
  {
    _id: 1005,
    title: "Testimonial",
    link: "testimonial",
  },
  {
    _id: 1006,
    title: "Contact",
    link: "contact",
  },
];

export const achivementData=[{
  title:"Certificates",period:"2022-2024",achivements:[{
    title:"java programming ",
    subTitle:"With core and advance concepts ",
    describe:"",
    issue:{
      from:"NPTEl",
      date:'24/08/2023'
    },
    result:"success"
  
  },
  {
    title:"c programming language ",
    subTitle:"With all basic concepts",
    describe:"",
    issue:{
      from:"NPTEl ",
      date:'24/08/2023'
    },
    result:"success"
  
  }]
},{
  title:"Participations & Competition",period:"2023-2024",
  achivements:[{
    title:"Tech competition  ",
    subTitle:"with skiilyst ",
    describe:"",
    issue:{
      from:"skiilyst",
      date:'24/08/2023'
    },
    result:"success"
  
  },
  {
    title:"Quiz competition  ",
    subTitle:"with GeeksforGeek  ",
    describe:"",
    issue:{
      from:"GeeksforGeek",
      date:'24/08/2023'
    },
    result:"success"
  
  }]
}]

export const educationData=[
  {period:"2020-2025",title:"Education Quality",program:[
  {
    title:"Bechalor of computer science and Application",
    subTitle:"IIMT University (2022 - 2025)",
    result:"8/10",
    des:""
  },
  {
    title:"12 th",
    subTitle:"rajkiya ashram paddhati vidyalaya (2020 - 2022)",
    result:"79.4%",
    des:""
  },
  {
    title:"10 th",
    subTitle:"rajkiya ashram paddhati vidyalaya (2020)",
    result:"79.4%",
    des:""
  }
]},{
  period:"2022-2024",
  title:"devlopment cources",
  program:[{
    title:"java programming language",
    subTitle:"Throught NPTEL Exam",
    des:"",
    result:"india"
  },{
    title:"c programming language",
    subTitle:"Throught NPTEL Exam",
    des:"",
    result:"india"
  }]
}]

export const skillData=[
  {
  title:"Development Skill",
  skills:[{
    title:"react",result:"90%"
  },{
    title:"css3",result:"85%"
  },{
    title:"HTML 5",result:"100%"
  },{
    title:"javascript",result:"90%"
  },{
    title:"node js",result:"75%"
  },{
    title:"Express js",result:"90%"
  },{
    title:"react native",result:"45%"
  }]
},
{
  title:"Database skill",
  skills:[{
    title:"mongodb",
    result:"80%"
  },{
    title:"mysql",
    result:"90%"
  },{
    title:"postGress",
    result:"70%"
  },{
    title:"SQL server",
    result:"80%"
  }]
},
{
  title:"design tools",
  skills:[{
    title:"figma",
    result:"70%"
  }]
}
]

export const testimonialData=[{
  nationality:"india",
  name:"lucky pandey",
  post:"WOS CO-Founder",
  src:"https://media.licdn.com/dms/image/v2/D5603AQEv9cDehxkQLA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719347730832?e=1750896000&v=beta&t=nVjK3b2IHA_vKYsA776yhJMmJquoeQyXoY-YzEZbS2s",
  workTitle:"publication web app design",
  workThrough:"via personal",
  des:"The publication web app has exceeded my expectations in terms of design and usability. The sleek, intuitive interface makes content management seamless, allowing us to easily publish and organize articles. The responsive design ensures our readers have a great experience on both desktop and mobile. As a founder, I appreciate how quickly I can manage posts and track performance. There’s still room for improvement with advanced analytics and some UX refinements, but overall, it’s an outstanding platform that has streamlined our publishing process.",rating:5,
},
{
  nationality:"india",
  name:"lucky pandey",
  post:"WOS CO-Founder",
  src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR55pAiPEgwqlhdiKj0RPXvkD5enC8C6ktHLg&s",
  workTitle:"publication web app design",
  workThrough:"via personal",
  des:"The publication web app has exceeded my expectations in terms of design and usability. The sleek, intuitive interface makes content management seamless, allowing us to easily publish and organize articles. The responsive design ensures our readers have a great experience on both desktop and mobile. As a founder, I appreciate how quickly I can manage posts and track performance. There’s still room for improvement with advanced analytics and some UX refinements, but overall, it’s an outstanding platform that has streamlined our publishing process.",rating:5,
}]

export const projectData=[
  {
    title:"social media (rapid blog)",
    des:"Rapid-blog is a social media platform designed for meaningful connections and vibrant communities. Users can create profiles, share posts, join groups, and engage with content.That is oraginally build with [react,mongoDB,express js, Node js,]",
    src:project1,
    mediaType:"image",

    gitLink:"https://github.com/Manish9026/Blog-app",
    liveUrl:"https://rapid-blog.vercel.app/"
  },
  {
    title:"Digital Product Sell",
    des:"An all-in-one platform to sell digital products like eBooks, videos, designs, and files. Upload, manage, and securely deliver digital content to buyers with ease. Features include instant downloads, secure access, responsive design, and smooth payment integration — perfect for creators, freelancers, and businesses to grow their online store.",
    src:project6,
    mediaType:"image",

    gitLink:"https://github.com/Manish9026/digital-sell-app",
    liveUrl:"https://digital-sell.vercel.app/"
  },
  {
    title:"Journeylog (traveling Allowance)",
    des:"Journeylog is a type of Travel Reporting & Allowance Management web App! 🚀 \n it's provides multiple features like \n Add, update, and delete travel records across different companies \n Manage payment records efficiently\n Print statements in JPG and PDF formats\nGet a clear overview of travel costs, remaining balances, and wallet balance That is oraginally build with [react,mongoDB,express js, Node js,]",
    src:project5,
    mediaType:"video",
    gitLink:"https://github.com/Manish9026/Blog-app",
    liveUrl:"https://rapid-blog.vercel.app/"
  }
  ,
  {
    title:"e-commerce (shop india)",
    des:"ShopIndia is a modern e-commerce platform designed to provide a seamless shopping experience. It allows users to browse products, make purchases, and track orders effortlessly.That is oraginally build with [react,mongoDB,express js, Node js]",
    src:project2,
    mediaType:"image",

    gitLink:"https://github.com/Manish9026/shopIndia",
    liveUrl:"https://shopindia.vercel.app/"
  },
  {
    title:"3D visualization App",
    des:"A fast and interactive 3D model viewer that lets users upload, rotate, zoom, and explore 3D objects with ease. Supports popular formats like .glb, .gltf, and .obj, with smooth performance on all devices.",
    src:project7,
    mediaType:"image",

    gitLink:"https://github.com/Manish9026/3D-Viewer",
    liveUrl:"https://3-d-viewer-black.vercel.app/"
  },
  {
    title:"service (ENG-MATES)",
    des:"",
    mediaType:"image",

    src:project3,
    gitLink:"https://github.com/Manish9026/ENG-MATES",
    liveUrl:"https://eng-mates.vercel.app/"
  },
  ,{
    title:"Booking web app",
    des:"",
    src:project4,
    mediaType:"image",

    gitLink:"https://github.com/Manish9026/booking-app",
    liveUrl:"https://booking-app-self-mu.vercel.app/"
  },
  

  
]