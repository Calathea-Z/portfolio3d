import {
	backendNew,
	calathea,
	website,
	javascript,
	sql,
	sanity,
	melodious,
	toYourDoor,
	shoestring,
	guitar,
	reactjs,
	nextjs,
	tailwind,
	nodejs,
	react3d,
	blazor,
	csharp,
	mongodb,
	git,
	forvisLogo,
	gaLogo,
	avlLogo,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "C# | Blazor Developer",
		icon: website,
	},
	{
		title: " JS | React Developer",
		icon: react3d,
	},
	{
		title: "SQL | MongoDB | Sanity.io",
		icon: backendNew,
	},
];

const technologies = [
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Next.js",
		icon: nextjs,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Git",
		icon: git,
	},

	{
		name: "SQL",
		icon: sql,
	},
	{
		name: "C#",
		icon: csharp,
	},
	{
		name: "Blazor",
		icon: blazor,
	},
];

const experiences = [
	{
		title: "Full Stack C# Developer",
		company_name: "FORVIS",
		icon: forvisLogo,
		iconBg: "#FFFFFF",
		date: "June 2023 - Current",
		points: [
			"Full-stack C# developer specializing in creating custom web applications using Blazor and .NET, enhancing business operations through advanced technology solutions.",
			"Collaborated with a team to design, develop, and maintain a suite of workflow platforms aimed at streamlining work processes, significantly improving efficiency and productivity",
			"Utilized SQL Server Management Studio (SSMS) for database management, ensuring robust, secure, and scalable data storage solutions that support the complex needs of custom web applications",
		],
	},
	{
		title: "Full Stack React Developer",
		company_name: "Calathea Designs",
		icon: calathea,
		iconBg: "#383E56",
		date: "February 2023 - Current",
		points: [
			"Collaborated closely with clients to design and develop custom websites and e-commerce applications that perfectly match their unique needs, focusing on modern, efficient solutions using Next.js, Tailwind CSS, and JavaScript.",
			"Integrated MongoDB for robust data management and Sanity.io for content management, enhancing user experience by enabling clients to easily update and manage their sites with minimal technical assistance.",
			"Leveraged the latest web development technologies and frameworks, including Next.js and Tailwind CSS, to create dynamic, responsive, and visually appealing websites that drive engagement and support business goals",
		],
	},
	{
		title: "Software Engineering Fellow",
		company_name: "General Assembly",
		icon: gaLogo,
		iconBg: "#E6DEDD",
		date: "Oct 2022 - Feb 2023",
		points: [
			"Full Stack software engineering fellow in an intensive, twelve-week, 450+ hour program.",
			"Focused on Front End technologies such as Javascript, CSS, HTML, & React.",
			"Focused on Back End technologies such as Python, Node.js, Express.js, Mongoose, MongoDB, RESTful Routing, & PostgreSQL.",
			"Developed a portfolio of individual and group projects often completed in 1 week sprints.",
		],
	},
	{
		title: "Chef / Head Kitchen Manager",
		company_name: "Asheville Pizza and Brewing Co.",
		icon: avlLogo,
		iconBg: "#383E56",
		date: "Aug 2011 - Oct 2022",
		points: [
			"Successfully led a team of 40 employees and maintained a high level of employee satisfaction and retention, achieving a 93% retention rate during a challenging period marked by the COVID-19 pandemic.",
			"Designed, developed, and implemented multiple Point-of-Sale systems, resulting in streamlined business operations and a 15% increase in profits for the restaurant.",
			"Crafted and implemented a comprehensive back-of-house training manual, resulting in heightened consistency in food products and a more efficient and effective staff",
		],
	},
	{
		title: " Professional Musician / Band Manager",
		company_name: "Makayan",
		icon: guitar,
		iconBg: "#E6DEDD",
		date: "Aug 2011 - Nov-2015",
		points: [
			"As the band / tour manager, I oversaw and executed all operational responsibilities, including website design and maintenance, social media management, show booking, and financial accounting",
			"Collaborated on the songwriting and production of a full-length studio album entitled 'Smile', recorded in Asheville, NC.",
			"Performed on guitar, keyboards, and vocals.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "Melodious",
		description:
			"This playlist generator app offers a personalized music experience for music lovers. The app utilizes Spotify and OpenAI APIs to generate artist suggestions based on the user's input prompt and serves as a Spotify controller for convenient play. If you'd like to access the app and try it out, please don't hesitate to get in touch",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "next.js",
				color: "green-text-gradient",
			},
			{
				name: "tailwind.css",
				color: "pink-text-gradient",
			},
			{
				name: "recoil",
				color: "orange-text-gradient",
			},
			{
				name: "openAI",
				color: "blue-text-gradient",
			},
		],
		image: melodious,
		source_code_link: "https://github.com/Calathea-Z/Melodious",
		demo_code_link: "https://www.youtube.com/watch?v=xzMnZkHFiNs",
	},
	{
		name: "To Your Door",
		description:
			"This app was built through reverse-engineering of top delivery apps. Built with React Native, it's fast and easy to use on your mobile device. The database is a breeze to update thanks to Sanity.io and it looks great using Tailwind.css styling.",
		tags: [
			{
				name: "react native",
				color: "blue-text-gradient",
			},
			{
				name: "sanity.io",
				color: "green-text-gradient",
			},
			{
				name: "tailwind.css",
				color: "pink-text-gradient",
			},
			{
				name: "redux",
				color: "orange-text-gradient",
			},
			{
				name: "expo",
				color: "blue-text-gradient",
			},
		],
		image: toYourDoor,
		source_code_link:
			"https://github.com/Calathea-Z/To-Your-Door-Delivery-App-Case-Study-",
		demo_code_link: "https://www.youtube.com/shorts/h0LDTesEako",
	},
	{
		name: "ShoeString",
		description:
			"ShoesString is a digital guest book for people all over the world to share their thoughts on interesting travel locations and experiences with their friends. My programming partner and I built the app using React, Next.js, Node.js, Express.js, and MongoDB in a one week sprint.",
		tags: [
			{
				name: "mongoDB",
				color: "blue-text-gradient",
			},
			{
				name: "express.js",
				color: "green-text-gradient",
			},
			{
				name: "react",
				color: "pink-text-gradient",
			},
			{
				name: "node.js",
				color: "orange-text-gradient",
			},
			{
				name: "restAPI",
				color: "blue-text-gradient",
			},
		],
		image: shoestring,
		source_code_link: "https://github.com/Calathea-Z/ShoeString-frontend-v2",
		demo_code_link: "https://shoe-string-frontend-v2.vercel.app/",
	},
];

export { services, technologies, experiences, testimonials, projects };
