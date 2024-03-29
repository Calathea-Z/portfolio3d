import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		const messageBody = `Name: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`;

		emailjs
			.send(
				"service_ipedruz",
				"template_i71krge",
				{
					from_name: form.name,
					to_name: "Zach",
					from_email: form.email,
					to_email: "zsykes21@gmail.com",
					message: messageBody,
				},
				"CdsvoqzAtZyIJxv7f"
			)
			.then(
				() => {
					setLoading(false);
					Swal.fire({
						title: "Thanks!",
						text: "I'll get back to you soon!",
						icon: "success",
						confirmButtonText: "Cool",
					});

					setForm({
						name: "",
						email: "",
						message: "",
					});
				},
				(err) => {
					setLoading(false);
					console.log(err);
					Swal.fire({
						title: "Error!",
						text: "Sorry about that, something went wrong. Please try again!",
						icon: "error",
						confirmButtonText: "OK",
					});
				}
			);
	};
	return (
		<div className="xl:flex-row flex-col-reverse flex gap-10 overflow-hidden ">
			<motion.div
				variants={slideIn("left", "tween", 0, 0.2, 1)}
				className="flex-1 bg-black-100 p-8 rounded-2xl"
			>
				<p className={styles.sectionSubText}>Get in touch</p>
				<div className="flex md:flex-row flex-col justify-between">
					<h3 className={styles.sectionHeadText}>Contact.</h3>
					<div className="flex items-center gap-1">
						<SocialIcon
							url="https://gitlab.com/Zach.Sykes"
							bgColor="gray"
							className="hover:opacity-70"
							style={{ height: 40, width: 40 }}
							target="_blank"
							rel="noopener noreferrer"
						/>
						<SocialIcon
							url="https://github.com/Calathea-Z"
							bgColor="gray"
							className="hover:opacity-70"
							style={{ height: 40, width: 40 }}
							target="_blank"
							rel="noopener noreferrer"
						/>
						<SocialIcon
							url="https://www.linkedin.com/in/zach-sykes"
							bgColor="gray"
							style={{ height: 40, width: 40 }}
							className="hover:opacity-70"
							target="_blank"
							rel="noopener noreferrer"
						/>
					</div>
				</div>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="mt-12 flex flex-col gap-8"
				>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Name</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="What's your name?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
							required
						></input>
					</label>

					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Email</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="What's your email?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
							required
						></input>
					</label>

					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Message</span>
						<textarea
							rows="7"
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="Your message here."
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
							required
						></textarea>
					</label>

					<button
						type="submit"
						className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
					>
						{loading ? "Sending..." : "Send"}
					</button>
				</form>
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
