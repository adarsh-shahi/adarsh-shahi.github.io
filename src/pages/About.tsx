import {
	GrInstagram,
	GrTwitter,
	GrLinkedinOption,
	GrGithub,
} from "react-icons/gr";
import { Link } from "react-router-dom";

export default function About() {
	return (
		<div className="bg-gradient-to-r from-[#E6DACE] to-40% to-white from-40% to grow w-screen relative">
			<div className="flex justify-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
				<section className="bg-[#F4ECE6]  w-80 drop-shadow-xl relative hover:-translate-y-3 duration-300">
					<div className="flex flex-col gap-8 items-center py-8">
						<img
							className="rounded-full w-48 h-48"
							src={window.location.origin + "/Adarsh_Shahi_whiteBg.jpg"}
							alt="adarsh shahi"
						/>
						<div className="text-center text-2xl font-semibold">
							<h3>Adarsh </h3>
							<h3>Shahi</h3>
						</div>
						<div className="bg-blue-600 w-16 h-1"></div>
						<p className="tracking-widest text-lg">SOFTWARE DEVELOPER</p>
					</div>
					<div className="flex text-xl py-4 gap-5 justify-center bg-white absolute bottom-0 w-full">
						<a
							href="https://twitter.com/_adarsh_shahi"
							target="_blank"
							rel="noreferrer"
						>
							<GrTwitter />
						</a>
						<a
							href="https://www.instagram.com/_adarsh_shahi"
							target="_blank"
							rel="noreferrer"
						>
							<GrInstagram />
						</a>
						<a
							href="https://github.com/adarsh-shahi"
							target="_blank"
							rel="noreferrer"
						>
							<GrGithub />
						</a>
						<a
							href="https://www.linkedin.com/in/adarsh-shahi/"
							target="_blank"
							rel="noreferrer"
						>
							<GrLinkedinOption />
						</a>
					</div>
				</section>
				<section className="p-8 w-96 flex flex-col gap-5">
					<h1 className="text-8xl font-semibold">Hello</h1>
					<p className="font-medium text-lg">
						As a software developer, I specialize in using the latest
						technologies like TypeScript, React, Node.js, MongoDB, and
						PostgreSQL to build scalable and user-friendly web and mobile
						applications. With a passion for problem-solving and a commitment to
						high-quality code, I can help you create custom applications or
						improve existing ones. Let me bring your ideas to life!
					</p>
					<div className="flex gap-5 tracking-widest">
						<a
							href="https://drive.google.com/file/d/1T-8twqN0U_SfKKSFX9kryuf1E9GUOtBj/view?usp=sharing"
							target="_blank"
							rel="noreferrer"
							className="bg-blue-600 border-2 border-blue-600 text-white px-3 py-1 hover:-translate-y-1 duration-500"
						>
							RESUME
						</a>
						<Link
							to="/projects"
							className="border-2 border-black px-3 py-1 hover:-translate-y-1 duration-500"
						>
							PROJECTS
						</Link>
					</div>
				</section>
			</div>
		</div>
	);
}
