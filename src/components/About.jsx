import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div 
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-1 rounded-[20px] shadow-card'
      >
        <div
        options={{
          max:45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col '
        >
          <img src={icon} alt={title} className='w-18 h-18 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>

      </motion.div>

    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I am a passionate software engineer with a deep love for coding. My
        background as a touring musician and kitchen manager has instilled in me
        a unique perspective on teamwork, problem-solving, and the ability to
        adapt to new environments. When I'm not coding you'll most likely find
        me exploring new places, attending concerts, or riding my bike. Travel
        and new experiences are a huge part of my life. I believe that exposure
        to different cultures and ways of thinking has helped me to approach
        problems in new and innovate ways. Currently, I reside in Asheville,
        North Carolina, where I work with my coding partner, Suzie the French
        Bulldog. I am open to relocating and always on the lookout for new
        opportunities to grow and develop my skills. I am excited to continue my
        journey in the tech industry and can't wait to see where it takes me
        next.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

      </div>
    </>
  );
};

export default SectionWrapper (About, "about");
