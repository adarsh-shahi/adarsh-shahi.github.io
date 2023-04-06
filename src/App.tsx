import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLyout from "./components/PageLayout";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<PageLyout />}>
					<Route index element={<About />} />
					<Route path="/projects" element={<Project />} />
					<Route path="/contact" element={<Contact />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
