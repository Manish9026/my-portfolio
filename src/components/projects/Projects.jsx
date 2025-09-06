import React, { useState, useEffect, useRef } from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard';
import { project1, project2, project3, project4 } from '../../assets/projectImages/projectImages';
import { projectData } from '../../constants';
const Projects1 = () => {
  return (
    <section
      id="projects"
      className="w-full primary-p border-b-[1px] border-b-black"
    >
      <div className="flex justify-center pt-10 items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">

        {
          projectData.map((card, index) => {
            return (
              <ProjectsCard
                title={card.title}
                des={card.des}
                src={card.src}
                gitLink={card.gitLink}
                liveUrl={card.liveUrl}
                mediaType={card?.mediaType}
              />
            )
          })
        }

      </div>
    </section>
  );
}


import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Laptop, ExternalLink, Github, Sparkles, Code2, Palette, ChevronLeft, ChevronRight, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';





export function FilterNav({ categories, activeCategory, setActiveCategory }) {
  const [activeSection, setActiveSection] = useState("");
  const [isInsideParent, setIsInsideParent] = useState(false);
  const scrollRef = useRef(null);
  const [showButtons, setShowButtons] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);


  useEffect(() => {
  const parent = document.getElementById("projects"); // replace with your parent ID
  if (!parent) return;

  let ticking = false;

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const rect = parent.getBoundingClientRect();
        const inside =
          rect.top <= window.innerHeight * 0.3 &&
          rect.bottom >= window.innerHeight * 0.3;

        setIsInsideParent(inside);
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll(); // run once on mount

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);


  useEffect(() => {
    const el = scrollRef?.current;
    if (!el) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;

      setShowButtons(scrollLeft > 0 || scrollLeft + clientWidth < scrollWidth);
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    };

    // Initial check
    handleScroll();

    el.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollByAmount = (amount) => {
    scrollRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };
  // const scrollRef = useRef(null);

const randomCategories = React.useMemo(() => {
  const allCategory = categories.find((c) => c.name === "All");
  const others = categories.filter((c) => c.name !== "All");

  // shuffle & take 5
  const shuffled = [...others].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 5);

  return [allCategory, ...selected];
}, [categories]);

  return (
    <>
      {/* 🟢 Your existing TOP sticky filter (optional) */}

      <motion.div

        className="sticky top-[100px] z-30 backdrop-blur-xl bg-slate-900/60 border border-slate-700/40 shadow-lg rounded-2xl mx-auto max-w-5xl px-1 sm:px-6 mb-16 relative  scrollbar-hide"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {/* Scroll Buttons */}
        {showButtons && canScrollLeft && (
          <button
            onClick={() => scrollByAmount(-200)}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full shadow-lg hover:bg-black/70"
          >
            <ChevronLeft size={20} />
          </button>
        )}
        {/* Right Button */}
        {showButtons && canScrollRight && (
          <button
            onClick={() => scrollByAmount(200)}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full shadow-lg hover:bg-black/70 z-10"
          >
            <ChevronRight size={20} />
          </button>
        )}

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto py-4  scrollbar-hide scroll-smooth px-10 sm:px-4 no-scrollbar  "
        >
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.name;

            return (
              <motion.button
                key={category.name}
                onClick={() => {
                  setActiveCategory(category.name);
                  document
                    .getElementById(category.name)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`flex-shrink-0 group relative px-6 py-3 rounded-xl font-semibold transition-all duration-500 overflow-hidden ${isActive
                    ? "text-white shadow-lg shadow-blue-500/30 scale-105"
                    : "text-slate-300 hover:text-white hover:scale-105"
                  }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Gradient background with glass effect */}
                <div
                  className={`absolute w-full h-full inset-0 bg-gradient-to-r ${isActive
                      ? category.color
                      : "from-slate-800/60 to-slate-700/60"
                    } backdrop-blur-md border border-white/10 transition-all duration-500 ${isActive ? "opacity-100" : "opacity-50 group-hover:opacity-80"
                    }`}
                ></div>

                {/* Button Content */}
                <div className="relative flex items-center gap-2 z-10 whitespace-nowrap">
                  <Icon className="w-5 h-5" />
                  {category.name}
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
      {/* 🟢 BOTTOM sticky nav - only visible when inside parent section */}
     <AnimatePresence>
        {isInsideParent && (
          <motion.div
            className="fixed bottom-0 left-0  w-full z-40 bg-slate-900/80 backdrop-blur-md border-t border-slate-700/50 shadow-lg"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-around max-w-5xl mx-auto px-4 py-3">
              {randomCategories.map((category) => {
                const Icon = category.icon;
                const isActive =
                  activeCategory === category.name ||
                  activeSection === category.name;

                return (
                  <button
                    key={category.name}
                    onClick={() => {
                      setActiveCategory(category.name);
                      document
                        .getElementById(category.name)
                        ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className={`flex flex-col items-center text-xs font-medium transition-all ${isActive
                      ? "text-white scale-110"
                      : "text-slate-400 hover:text-white"
                      }`}
                  >
                    <Icon className="w-5 h-5 mb-1" />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}


const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { name: 'All', icon: Sparkles, color: 'from-purple-500 to-pink-500' },
    { name: 'Web App', icon: Code2, color: 'from-blue-500 to-cyan-500' },
    { name: 'Freelance', icon: Briefcase, color: 'from-amber-500 to-yellow-500' },
    { name: 'E-Commerce', icon: Palette, color: 'from-green-500 to-emerald-500' },
    { name: 'Service', icon: Laptop, color: 'from-orange-500 to-red-500' },
    { name: '3D App', icon: Sparkles, color: 'from-violet-500 to-purple-500' },
    { name: 'Other', icon: Code2, color: 'from-teal-500 to-blue-500' }
  ];

  const techColors = {
    'React': 'from-blue-400 to-blue-600',
    'Node.js': 'from-green-400 to-green-600',
    'MongoDB': 'from-green-500 to-emerald-600',
    'Socket.io': 'from-purple-400 to-purple-600',
    'Next.js': 'from-gray-700 to-gray-900',
    'Stripe': 'from-indigo-400 to-indigo-600',
    'PostgreSQL': 'from-blue-500 to-blue-700',
    'Tailwind': 'from-cyan-400 to-cyan-600',
    'Express.js': 'from-yellow-400 to-yellow-600',
    'AWS S3': 'from-orange-400 to-orange-600',
    'Redis': 'from-red-400 to-red-600',
    'JWT': 'from-pink-400 to-pink-600',
    'Three.js': 'from-emerald-400 to-emerald-600',
    'GSAP': 'from-lime-400 to-lime-600',
    'WebGL': 'from-violet-400 to-violet-600',
    'Vue.js': 'from-green-400 to-green-600',
    'Firebase': 'from-yellow-500 to-orange-500',
    'Cloudinary': 'from-blue-400 to-blue-600',
    'JavaScript': 'from-yellow-400 to-yellow-600',
    'Chrome API': 'from-red-400 to-red-600',
    'HTML5': 'from-orange-400 to-orange-600',
    'CSS3': 'from-blue-400 to-blue-600'
  };


  const projects = projectData;
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="projects" className="  text-white py-20 relative overflow-hidden  primary-p border-b-[1px] border-b-line">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div> */}
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className=" md:mx-auto px-4 relative z-10 
     ">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-0"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >

          <div className="flex justify-center pt-10 items-center text-center">
            <Title
              title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
              des="My Projects"
              icon={<motion.div
                className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg shadow-blue-500/25"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Laptop className="w-8 h-8 text-white" />
              </motion.div>}
            />
          </div>
        </motion.div>

        {/* Enhanced Sticky Filter Navigation */}
        <FilterNav categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

        {/* Enhanced Projects Grid with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 sml:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
            // className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredProjects.map((project, index) => (


              <ProjectCard
                key={`${activeCategory}-${project?.title}`}
                project={project}
                variants={itemVariants}
                index={index}
                techColors={techColors}
              />


            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};


const ProjectCard = ({ project, variants, index, techColors }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate=useNavigate();
  return (
    <motion.div
      ref={ref}
      variants={variants}
      className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 flex flex-col border border-slate-700/50 w-full max-w-sm mx-auto max-h-[600px] will-change-transform flex-1 "
      whileHover={{
        y: -15,
        scale: 1.02,
        rotateX: 5,
        rotateY: 5
      }}
      onClick={()=>navigate(`/projects/${project?.slug}`)}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Gradient Overlay */}
      {/* <div
       className={`absolute inset-0 
        bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div> */}
      <div
        className={`absolute inset-0 
        group-hover:opacity-10 transition-opacity duration-700`}></div>

      {/* Enhanced Laptop Mockup Frame */}
      <div style={{ display: "" }} className="relative bg-gradient-to-br from-slate-700 to-slate-800 p-4 pb-3 flex-shrink-0 hidden">
        <motion.div
          className="bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl p-3 shadow-2xl "
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Laptop screen with better visibility */}
          <div className="bg-black rounded-lg overflow-hidden aspect-video relative border-2 border-slate-800 shadow-inner h-32">
            {/* Screen glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {project.mediaType === "video" ? (
              <motion.video
                src={project.src}
                className="w-full h-full object-cover relative z-10"
                autoPlay
                loop
                muted
                playsInline
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            ) : (
              <motion.img
                src={project.src}
                alt={project.title}
                className="w-full h-full object-cover relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            )}
            {/* Screen reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
          </div>
          {/* Enhanced laptop base */}
          <div className="h-2 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-b-xl mt-1 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-b-xl"></div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Glass Laptop Mockup Frame */}
      <div className="relative bg-gradient-to-br from-slate-800/70 to-slate-900/60 p-4 pb-3 flex-shrink-0 rounded-2xl backdrop-blur-xl border border-white/10 shadow-2xl ">
        <motion.div
          className="bg-gradient-to-br from-slate-700/60 to-slate-800/60 rounded-xl p-3 shadow-xl border border-white/10 backdrop-blur-md "
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Laptop screen with glass effect */}
          <div className="bg-black/70 rounded-lg overflow-hidden aspect-video relative border-2 border-slate-700/60 shadow-inner backdrop-blur-sm m-auto">
            {/* Screen glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-screen"></div>

            {project.mediaType === "video" ? (
              <motion.video
                src={project.src}
                className="w-full h-full object-cover relative z-10 "
                autoPlay
                loop
                muted
                playsInline
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            ) : (
              <motion.img
                src={project.src}
                alt={project.title}
                className="w-full h-full object-cover relative z-10 m-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            )}

            {/* Screen reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent pointer-events-none rounded-lg mix-blend-overlay"></div>
          </div>

          {/* Laptop base with glass highlight */}
          <div className="h-2 bg-gradient-to-r from-slate-800/70 via-slate-700/70 to-slate-800/70 rounded-b-xl mt-1 relative border-t border-white/10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-b-xl mix-blend-overlay"></div>
          </div>
        </motion.div>
      </div>


      {/* Enhanced Project Info */}
      <div className="p-5 flex-1 flex flex-col relative z-10 min-h-0">
        <motion.h3
          className="text-lg font-bold mb-3 text-left group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500 line-clamp-2"
          whileHover={{ x: 5 }}
        >
          {project.title}
        </motion.h3>

        <motion.p
          className="text-slate-400 text-xs leading-relaxed mb-4 text-left group-hover:text-slate-300 transition-colors duration-300 line-clamp-3 flex-1"
          whileHover={{ x: 5 }}
        >
          {project?.des}
        </motion.p>

        {/* Colorful Tech Stack */}
        {
          (Array.isArray(project?.techStack) && project?.techStack?.length > 0) &&
          (<div className="flex flex-wrap gap-2 mb-4 flex-shrink-0">
            {project?.techStack.map((tech, techIndex) => (
              <motion.span
                key={tech?.name}
                className={`px-2 py-1 bg-gradient-to-r ${techColors[tech?.name] || 'from-slate-600 to-slate-700'} text-white text-xs rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 cursor-default`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                whileHover={{
                  scale: 1.1,
                  y: -2,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
                }}
              >
                {tech?.name}
              </motion.span>
            ))}
          </div>)}

        {/* Enhanced Action Buttons */}
        <div className="flex gap-2 mt-auto flex-shrink-0">
          <motion.a
            href={project?.liveUrl}
            className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-3 py-2 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 group/btn text-xs will-change-transform"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            target='_blank'
          >
            <ExternalLink className="w-3 h-3 group-hover/btn:rotate-12 transition-transform duration-300" />
            Live Demo
          </motion.a>
          <motion.a
            href={project?.gitLink}
            className="flex-1 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white px-3 py-2 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-slate-500/30 group/btn text-xs"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            target='_blank'
          >
            <Github className="w-3 h-3 group-hover/btn:rotate-12 transition-transform duration-300" />
            Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};


export default Projects