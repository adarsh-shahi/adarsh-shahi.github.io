import { NavLink } from "react-router-dom";
import { RxArrowTopRight } from "react-icons/rx";

export default function Navbar() {
	const persistantNavClass = "tracking-wider";

	const navClasses = ({ isActive }: { isActive: boolean }) =>
		`${persistantNavClass} ${isActive ? "text-blue-600" : "text-slate-800"}
  `;

	return (
		<div className="flex px-10 py-8 sticky top-0 z-10 ">
			<div className="flex items-center gap-3">
				<div className="bg-blue-600 w-4 h-4"></div>
				<NavLink to="/" className="font-bold text-2xl">
					Adarsh Shahi
				</NavLink>
				<p className="">/</p>
				<p className="tracking-widest">SOFTWARE DEVELOPER</p>
			</div>
			<div className="ml-auto flex gap-8 items-center tracking-wider">
				<NavLink className={navClasses} to="/">
					ABOUT ME
				</NavLink>
				<NavLink className={navClasses} to="/projects">
					PROJECT
				</NavLink>
				<NavLink className={navClasses} to="/contact">
					CONTACT
				</NavLink>
				<a
					href="https://drive.google.com/file/d/1T-8twqN0U_SfKKSFX9kryuf1E9GUOtBj/view?usp=sharing"
					target="_blank"
					rel="noreferrer"
					className="bg-blue-600 text-white px-3 py-2 flex items-center gap-1"
				>
					RESUME
					<RxArrowTopRight className="text-lg" />
				</a>
			</div>
		</div>
	);
}
