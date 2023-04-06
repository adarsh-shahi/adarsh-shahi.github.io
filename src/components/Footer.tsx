import {
	GrInstagram,
	GrTwitter,
	GrLinkedinOption,
	GrGithub,
} from "react-icons/gr";

export default function Footer() {
	return (
		<div className="px-10 py-6 flex">
			<div>
				<p>&copy; 2023 by Adarsh Shahi</p>
				<p>Pune, India</p>
			</div>
			<section className="ml-auto flex gap-20 items-center">
				<div className="flex flex-col gap-3 text-center">
					<p>Write</p>
					<a href="mailto:adarshshahi1009@gmail.com">
						adarshshahi1009@gmail.com
					</a>
				</div>
				<div className="flex flex-col gap-3 text-center">
					<p>Connect</p>
					<div className="flex text-xl gap-5">
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
				</div>
			</section>
		</div>
	);
}
