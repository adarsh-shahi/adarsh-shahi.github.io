import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageLyout() {
	return (
		<div className="font-poppins flex flex-col min-h-screen">
			<Navbar />
			<Outlet />
			<div className="mt-auto">
				<Footer />
			</div>
		</div>
	);
}
