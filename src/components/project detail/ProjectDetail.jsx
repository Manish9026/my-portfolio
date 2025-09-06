import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  ExternalLink,
  Github,
  Calendar,
  Code2,
  Palette,
  Database,
  Globe,
  Smartphone,
  Star,
  Users,
  TrendingUp,
  ArrowRight,
  Play,
  Clock,
  CheckCircle,
  Heart,
  Zap,
  Shield,
  BarChart3,
  Layers,
  Eye
} from 'lucide-react';
import Navbar from '../navbar/Navbar';
import { useParams } from 'react-router-dom';
import { projectData } from '../../constants';




gsap.registerPlugin(ScrollTrigger);
const featureVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: "easeOut",
    },
  }),
};

const ProjectDetails = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const sliderRef = useRef(null);
  const [project, setProject] = React.useState(null);

  const { projectId } = useParams();

  useEffect(() => {


    if (!projectId) return;

    setProject(projectData.find((proj) => proj.slug.toString() === projectId.toString()));

    gsap.registerPlugin(ScrollTrigger);

    // Simple hero section animations
    const heroTl = gsap.timeline({ delay: 0.2 });

    if (titleRef.current) {
      heroTl.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );
    }

    if (descriptionRef.current) {
      heroTl.fromTo(descriptionRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      );
    }

    if (buttonsRef.current) {
      heroTl.fromTo(buttonsRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      );
    }

    if (sliderRef.current) {
      heroTl.fromTo(sliderRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      );
    }

    // Simple scroll trigger animations
    ScrollTrigger.batch(".fade-up", {
      onEnter: (elements) => {
        gsap.fromTo(elements,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" }
        );
      },
      once: true,
      start: "top 80%"
    });


    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);



  const projectImages = [
    'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  ];

  const techStack = [
    { name: 'React', icon: Code2, color: 'text-blue-400', bgColor: 'bg-blue-500/20' },
    { name: 'TypeScript', icon: Zap, color: 'text-blue-300', bgColor: 'bg-blue-600/20' },
    { name: 'Tailwind', icon: Palette, color: 'text-teal-400', bgColor: 'bg-teal-500/20' },
    { name: 'Node.js', icon: Database, color: 'text-green-400', bgColor: 'bg-green-500/20' },
    { name: 'MongoDB', icon: Database, color: 'text-green-300', bgColor: 'bg-green-600/20' },
    { name: 'Next.js', icon: Globe, color: 'text-gray-300', bgColor: 'bg-gray-500/20' },
  ];

  const projectMetrics = [
    { label: 'Users', value: '50K+', icon: Users, color: 'text-purple-400' },
    { label: 'Rating', value: '4.9', icon: Star, color: 'text-yellow-400' },
    { label: 'Growth', value: '200%', icon: TrendingUp, color: 'text-green-400' },
  ];

  const keyFeatures = [
    { title: 'Real-time data visualization', icon: BarChart3 },
    { title: 'Responsive design across all devices', icon: Smartphone },
    { title: 'Advanced analytics dashboard', icon: TrendingUp },
    { title: 'User authentication & security', icon: Shield },
    { title: 'Performance optimized', icon: Zap },
    { title: 'Modern UI/UX principles', icon: Layers },
  ];

  return (
    <>
      <Navbar navType='link'/>
    <div className="min-h-screen primary-p bg-dark-primary text-white overflow-hidden">
      {/* Hero Section with Enhanced Slider */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-600/10 to-teal-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Project Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-500/30 text-purple-300 rounded-full text-sm font-semibold transform hover:scale-105 transition-all duration-300">
                  <Star className="w-4 h-4 mr-2" />
                  {project?.category || 'Web Application'}
                </div>

                <h1
                  ref={titleRef}
                  className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight opacity-0"
                >
                  {project?.title || 'Project Name'}
                </h1>

                <p
                  ref={descriptionRef}
                  className="text-xl text-gray-300 leading-relaxed max-w-2xl opacity-0"
                >
                  {project?.des || 'An innovative platform that revolutionizes portfolio management with real-time data visualization and seamless user experience.'}
                </p>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-400">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-purple-400" />
                  {/* <span>December 2024</span> */}
                  <span>{project?.duration ?? ""}</span>
                </div>
                <div className="flex items-center">
                  <Smartphone className="w-5 h-5 mr-2 text-blue-400" />
                  <span>Web & Mobile</span>
                </div>
              </div>

              <div
                ref={buttonsRef}
                className="flex flex-wrap gap-6 opacity-0"
              >
                <a href={project?.liveUrl} target='_blank' className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold flex items-center space-x-3 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-110 hover:-translate-y-1 transform transition-all duration-500">
                  <Eye className="w-5 h-5" />
                  <span>View Live Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </a>
                <a href={project?.gitLink} target='_blank' className="group bg-dark-secondary/50 backdrop-blur-sm border border-gray-600/30 text-gray-200 px-8 py-4 rounded-2xl font-semibold flex items-center space-x-3 hover:bg-dark-secondary hover:border-gray-500/50 hover:scale-110 hover:-translate-y-1 transform transition-all duration-500">
                  <Github className="w-5 h-5" />
                  <span>Explore Code</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Enhanced Image Slider */}
            <div
              ref={sliderRef}
              className="relative opacity-0"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl  ">
                <Swiper

                  modules={[Navigation, Pagination, Autoplay]}
                  slidesPerView={1}
                  spaceBetween={20}
                  breakpoints={{
                    1024: {
                      slidesPerView: 1,
                      spaceBetween: 30,
                    },
                  }}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  loop={true}
                  speed={500}
                  className="project-swiper lg:w-full  w-[70vw]"
                >
                  {project?.media && project?.media.map((media, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative aspect-[16/10] rounded-xl overflow-hidden group">

                      {
                        media?.type === 'video' ? (
                          <video
                            src={media?.url}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            autoPlay
                            loop
                            muted
                            playsInline
                          />
                        ) : ( <img
                          src={media?.url}
                          alt={`Project screenshot ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />)

                      }
                       
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform duration-300 cursor-pointer">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="py-20 bg-dark-secondary/30 backdrop-blur-sm relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-up">
            <h2 className="text-5xl font-bold text-white mb-8">Project Overview</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-16">
             { project?.detailedDes ?? "This comprehensive portfolio management platform combines modern design principles with powerful functionality. Built with performance in mind, it features real-time data visualization, responsive design, and an intuitive user experience that makes portfolio tracking effortless and engaging."}
            </p>
          </div>

          {/* Timeline Section */}
          {(project?.timeline && Array.isArray(project?.timeline) && project?.timeline?.length > 0) &&
            (<TimelineSection timelineData={project?.timeline ?? []} />)}
        </div>
      </section>

      {/* Technology Stack Section */}
      {(project?.techStack && Array.isArray(project?.techStack) && project?.techStack?.length > 0) && (<section className="py-20 bg-dark-primary relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 fade-up">
            <h2 className="text-5xl font-bold text-white mb-6">Technology Stack</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with modern, scalable technologies to ensure performance,
              reliability, and exceptional user experience.
            </p>
          </div>

          <TechStackCard techStack={project?.techStack ?? []} />
        </div>
      </section>)}

      {/* Key Features Section */}
      {project?.features && (<motion.section

        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}

        className="py-20 bg-dark-secondary/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-up">
            <h2 className="text-5xl font-bold text-white mb-6">Key Features</h2>
            <p className="text-xl text-gray-300">Innovative solutions crafted with precision and care</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {project?.features.map((feature, index) => (
              <motion.div
                key={index}
                custom={index} // Pass index for stagger
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={featureVariants}
                className="group p-8 bg-dark-accent/30 backdrop-blur-sm border border-gray-600/20 rounded-2xl hover:bg-dark-accent/50 hover:border-purple-500/30 transition-all duration-300 cursor-pointer opacity-0"
              >
                <div className="flex items-center mb-4">
                  {feature?.icon && (<div className="w-12 h-12 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-purple-400" />
                  </div>)}
                  <Heart className="w-5 h-5 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-200 transition-all duration-300">
                  {feature?.title}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16 fade-up">
            <a href={project?.liveUrl} target='_blank' className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-6 rounded-2xl font-semibold text-lg flex items-center space-x-3 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-110 hover:-translate-y-2 transform transition-all duration-500">
              <Eye className="w-6 h-6" />
              <span>View Live Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-300" />
            </a>
            <a href={project?.gitLink} target='_blank' className="group bg-dark-accent/50 backdrop-blur-sm border border-gray-600/30 text-gray-200 px-12 py-6 rounded-2xl font-semibold text-lg flex items-center space-x-3 hover:bg-dark-accent hover:border-gray-500/50 hover:scale-110 hover:-translate-y-2 transform transition-all duration-500">
              <Github className="w-6 h-6" />
              <span>Explore Code</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </motion.section>)}

      {/* Project Metrics */}
      {project?.metrics && (<section className="py-20 bg-dark-primary fade-up">
        <div className="container mx-auto px-4">
          <ProjectMetrics metrics={projectMetrics} />
        </div>
      </section>)}
    </div>
    </>
    

  );
};







const ProjectMetrics = ({ metrics }) => {
  const ref = useRef(null);
  const cardsRef = useRef([]);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (isInView) {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            { y: 60, opacity: 0, scale: 0.9 },
            { y: 0, opacity: 1, scale: 1, duration: 0.8, delay: index * 0.2, ease: "power2.out" }
          );
        }
      });
    }
  }, [isInView]);

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
      {metrics.map((metric, index) => (
        <div
          ref={(el) => (cardsRef.current[index] = el)}
          key={index}
          className="group text-center p-10 bg-dark-accent/30 backdrop-blur-sm border border-gray-600/20 rounded-3xl hover:bg-dark-accent/50 hover:border-purple-500/30 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden opacity-0"
        >
          <div className="mb-6 flex justify-center">
            <div
              className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl flex items-center justify-center group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <metric.icon className="w-12 h-12 text-white" />
            </div>
          </div>

          <div className="space-y-4 relative z-10">
            <div
              className={`text-5xl font-bold ${metric.color} transition-all duration-300`}
            >
              {metric?.value}
            </div>
            <div className="text-gray-300 font-semibold text-xl group-hover:text-white transition-all duration-300">{metric?.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};




const TechStackCard = ({ techStack }) => {
  const ref = useRef(null);
  const cardsRef = useRef([]);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              delay: index * 0.1,
              ease: 'power2.out',
            }
          );
        }
      });
    }
  }, [isInView]);

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
      {techStack.map((tech, index) => (
        <div
          ref={(el) => (cardsRef.current[index] = el)}
          key={index}
          className={`relative group ${tech.bgColor} backdrop-blur-lg rounded-2xl p-6 text-center transform transition-all duration-300 border border-gray-600/20 hover:border-purple-500/30 cursor-pointer hover:scale-105 hover:-translate-y-2 opacity-0`}
        >
          {/* Icon */}
          <div className="mb-4 flex justify-center">
            <div className="w-16 h-16 bg-dark-accent/50 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-gray-600/30 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300">
              <tech.icon
                className={`w-8 h-8 ${tech.color} group-hover:scale-110 transition-all duration-300`}
              />
            </div>
          </div>

          {/* Name */}
          <h3 className="text-white font-semibold text-lg group-hover:text-purple-200 transition-colors duration-300">
            {tech.name}
          </h3>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/15 group-hover:to-blue-600/15 rounded-2xl transition-all duration-500 opacity-0 group-hover:opacity-100 z-0 group-hover:blur-sm" />

          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg group-hover:shadow-purple-500/25" />
        </div>
      ))}
    </div>
  );
};




gsap.registerPlugin(ScrollTrigger);

const TimelineSection = ({ timelineData }) => {
  const timelineRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef([]);
  const iconsRef = useRef([]);
  const isInView = useInView(timelineRef, { once: true, margin: "-100px" });

  // const timelineData = [
  //   {
  //     icon: Clock,
  //     title: 'TIMELINE',
  //     value: '3 months',
  //     subtitle: 'Development Duration',
  //     color: 'from-purple-500 to-purple-600',
  //     iconBg: 'bg-purple-500',
  //     textColor: 'text-purple-400',
  //     delay: 0,
  //   },
  //   {
  //     icon: Calendar,
  //     title: 'RELEASE DATE',
  //     value: 'December 2024',
  //     subtitle: 'Project Completion',
  //     color: 'from-blue-500 to-blue-600',
  //     iconBg: 'bg-blue-500',
  //     textColor: 'text-blue-400',
  //     delay: 200,
  //   },
  //   {
  //     icon: Star,
  //     title: 'STATUS',
  //     value: 'Completed',
  //     subtitle: 'Current Phase',
  //     color: 'from-green-500 to-green-600',
  //     iconBg: 'bg-green-500',
  //     textColor: 'text-green-400',
  //     delay: 400,
  //   },
  //   {
  //     icon: Star,
  //     title: 'STATUS',
  //     value: 'Completed',
  //     subtitle: 'Current Phase',
  //     color: 'from-green-500 to-green-600',
  //     iconBg: 'bg-green-500',
  //     textColor: 'text-green-400',
  //     delay: 500,
  //   },
  // ];

  useEffect(() => {
    if (isInView && timelineRef.current) {
      // Animate the connecting line
      gsap.fromTo(lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 2,
          ease: "power2.out",
          delay: 0.5,
          transformOrigin: "left center"
        }
      );

      // Animate icons
      iconsRef.current.forEach((icon, index) => {
        if (icon) {
          gsap.fromTo(icon,
            { scale: 0, rotation: -180, y: 20 },
            {
              scale: 1,
              rotation: 0,
              y: 0,
              duration: 0.8,
              delay: 0.8 + (index * 0.2),
              ease: "back.out(1.7)"
            }
          );
        }
      });

      // Animate cards
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: 1 + (index * 0.2),
              ease: "power2.out"
            }
          );
        }
      });
    }
  }, [isInView]);

  return (
    <div ref={timelineRef} className="relative py-16">
      {/* Connecting Line - Desktop Only */}
      <div className="absolute top-16 left-0 right-0 h-0.5 bg-gray-700/30 hidden lg:block">
        <div
          ref={lineRef}
          className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 origin-left"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>

      {/* Timeline Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
        {timelineData.map((item, index) => (
          <div key={index} className="relative">
            {/* Floating Icon */}
            <div
              ref={(el) => (iconsRef.current[index] = el)}
              className={`absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 ${item.iconBg} rounded-2xl flex items-center justify-center shadow-lg z-20 lg:shadow-xl`}
              style={{ transform: 'translateX(-50%) scale(0)' }}
            >
              <item.icon className="w-8 h-8 text-white" />
            </div>

            {/* Card */}
            <div
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-dark-secondary/60 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-8 pt-12 hover:bg-dark-secondary/80 mt-2 hover:border-gray-600/60 transition-all duration-300 group relative overflow-hidden opacity-0"
            >
              {/* Background Gradient Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              {item.title === 'STATUS' && (
                <div className="inline-flex absolute top-0 right-5 items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-semibold mt-4">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Completed
                </div>
              )}
              <div className="text-center space-y-4 relative z-10">
                {/* Title */}
                <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                  {item.title}
                </h3>

                {/* Main Value */}
                <div className={`text-3xl lg:text-4xl font-bold ${item.textColor} group-hover:scale-105 transition-transform duration-300`}>
                  {item.value}
                </div>

                {/* Subtitle */}
                <p className="text-gray-500 text-sm font-medium">
                  {item.subtitle}
                </p>

                {/* Status Badge for Completed */}

              </div>

              {/* Card Border Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`} />
            </div>

            {/* Mobile Connecting Line */}
            {index < timelineData.length - 1 && (
              <div className="lg:hidden flex justify-center mt-6">
                <div className="w-0.5 h-8 bg-gradient-to-b from-gray-600 to-transparent" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};




export default ProjectDetails;