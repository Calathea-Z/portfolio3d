import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt className="xs:w-[250px] w-full">
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className="w-full green-pink-gradient p-1 rounded-[20px] shadow-card"
			>
				<div
					options={{
						max: 45,
						scale: 1,
						speed: 450,
					}}
					className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col "
				>
					<img src={icon} alt={title} className="w-18 h-18 object-contain" />
					<h3 className="text-white text-[20px] font-bold text-center">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};
const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>
			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
			>
				I'm a software engineer with a real passion for coding. My background is
				pretty diverse, having spent some time as kitchen manager and on the
				road playing music. These experiences have taught me a lot about
				teamwork, creative problem-solving, and adapting to new situations with
				ease. When I'm not coding, I love to get out and explore, whether that's
				through travel, music, or a bike ride. I'm currently based in Durham,
				North Carolina, where I've been honing my skills in full-stack
				development. My current work primarily involves C#, Blazor, and SSMS,
				and I take pride in building robust web applications that stand the test
				of time. On the side, I dive into projects with JavaScript, React, and
				MongoDB, which keeps my development skills versatile and up-to-date. I'm
				always on the lookout for new opportunities to grow and evolve in the
				tech industry. I believe that the blend of my unique experiences and
				technical expertise makes me well-equipped to tackle the challenges that
				come my way. I'm excited about what the future holds and am open to
				exploring new avenues where I can contribute and expand my skills.
			</motion.p>
			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
