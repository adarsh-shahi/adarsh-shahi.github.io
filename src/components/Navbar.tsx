import { NavLink } from "react-router-dom";
import { RxArrowTopRight, RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useState } from "react";

export default function Navbar() {
	const persistantNavClass = "tracking-wider";

	const navClasses = ({ isActive }: { isActive: boolean }) =>
		`${persistantNavClass} ${isActive ? "text-blue-600" : "text-slate-800"}
  `;

	const nav = document.querySelector("#nav");

	const [isMenuActive, setMenuActive] = useState(true);
	const [isCrossActive, setCrossActive] = useState(false);

	if (isMenuActive) {
		nav?.classList.remove("opacity-100");
	} else {
		nav?.classList.add("opacity-100");
	}

	return (
		<div className="flex px-10 sm:px-5 py-8 sticky top-0 z-10 lg:text-base xl:text-lg md:text-sm bg-white">
			<div className="flex items-center flex-wrap gap-3 md:w-auto sm:w-screen">
				<div className="bg-blue-600 md:w-4 md:h-4 sm:w-3 sm:h-3"></div>
				<NavLink to="/" className="font-bold sm:text-xl md:text-2xl">
					Adarsh Shahi
				</NavLink>
				<p className="">/</p>
				<p className="tracking-widest md:text-lg sm:text-base">
					SOFTWARE DEVELOPER
				</p>
				{isMenuActive && (
					<RxHamburgerMenu
						onClick={() => {
							nav?.classList.add("opacity-100");
							setMenuActive(false);
							setCrossActive(true);
						}}
						className="text-2xl md:hidden block ml-auto cursor-pointer"
					/>
				)}
				{isCrossActive && (
					<RxCross1
						onClick={() => {
							nav?.classList.remove("opacity-100");
							setCrossActive(false);
							setMenuActive(true);
						}}
						className="text-2xl md:hidden block ml-auto cursor-pointer"
					/>
				)}
			</div>
			<div
				id="nav"
				className="ml-auto md:flex md:flex-row md:gap-8 sm:gap-4 md:opacity-100 opacity-0 md:bg-white md:w-auto md:items-center z-[-1] md:z-auto items-start md:static top-28 rounded-2xl right-5 bg-slate-300 sm:drop-shadow-2xl sm:duration-500 p-5 absolute flex flex-col tracking-wider"
			>
				<NavLink
					onClick={() => {
						setMenuActive(true);
						setCrossActive(false);
					}}
					className={navClasses}
					to="/"
				>
					ABOUT ME
				</NavLink>
				<NavLink
					onClick={() => {
						setMenuActive(true);
						setCrossActive(false);
					}}
					className={navClasses}
					to="/projects"
				>
					PROJECTS
				</NavLink>
				<NavLink
					onClick={() => {
						setMenuActive(true);
						setCrossActive(false);
					}}
					className={navClasses}
					to="/contact"
				>
					CONTACT
				</NavLink>
				<a
					href="https://drive.google.com/file/d/1Nyg8jV6yTurNnkl5Bx_MpsyiJu5UV8uO/view?usp=sharing"
					target="_blank"
					rel="noreferrer"
					className="bg-blue-600 sm:rounded-full md:rounded-none text-white px-3 py-2 flex items-center gap-1"
					onClick={() => {
						setMenuActive(true);
						setCrossActive(false);
					}}
				>
					RESUME
					<RxArrowTopRight className="text-lg" />
				</a>
			</div>
		</div>
	);
}
