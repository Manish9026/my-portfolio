// import React from 'react'
import { motion ,AnimatePresence} from 'framer-motion';
import { skillsData } from '../../constants';


export const SkillCard = ({ title, skills, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="glass  glass-hover rounded-3xl p-8 transition-all duration-300"
    >
      <motion.h2 
        className="text-3xl font-bold mb-8 gradient-text text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.2 + 0.3 }}
      >
        {title}
      </motion.h2>
      
      <div className="space-y-6">
        {skills.map((skill, skillIndex) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 + skillIndex * 0.1 + 0.5 }}
            className="space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <skill.icon className="w-6 h-6 text-primary" />
                <span className="text-lg font-medium text-foreground">
                  {skill.name}
                </span>
              </div>
              <span className="text-lg font-bold text-primary">
                {skill.level}%
              </span>
            </div>
            
            <div className="relative h-3 bg-secondary rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, hsl(var(--gradient-start)), hsl(var(--gradient-mid)), hsl(var(--gradient-end)))',
                }}
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ 
                  duration: 1.5, 
                  delay: index * 0.2 + skillIndex * 0.1 + 0.8,
                  ease: "easeOut"
                }}
              />
              <motion.div
                className="absolute top-0 left-0 h-full w-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, hsl(var(--gradient-start)), hsl(var(--gradient-mid)), hsl(var(--gradient-end)))',
                  opacity: 0.3,
                }}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2 + skillIndex * 0.1 + 1.5,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

  const Skills = () => {
  return (
    <div className="min-h-screen bg-bodyColor p-0 md:p-6">
      <motion.div
        className="text-center mb-16"
      >
        <h1 className="text-6xl font-bold gradient-text mb-4">
          Technical Skills
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise across development, 
          database management, and design tools.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <AnimatePresence >

       
        {skillsData.map((category, index) => (
          <SkillCard
            key={category.title}
            title={category.title}
            skills={category.skills}
            index={index}
          />
        ))}
         </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="text-center mt-16"
      >
        <div className="glass rounded-2xl p-8 max-w-2xl mx-auto animate-pulse-glow">
          <h3 className="text-2xl font-bold gradient-text mb-4">
            Always Learning, Always Growing
          </h3>
          <p className="text-muted-foreground">
            These skills represent my current expertise level. I'm constantly 
            exploring new technologies and refining my craft to stay at the 
            forefront of modern development.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;