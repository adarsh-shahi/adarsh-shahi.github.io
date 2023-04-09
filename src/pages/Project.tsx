import { useEffect, useState } from "react";
import { Octokit } from "octokit";
import { RxArrowTopRight } from "react-icons/rx";

const octokit = new Octokit({
	auth: process.env.REACT_APP_PERSONAL_ACCESS_TOKEN,
});

const projects = new Map();
projects.set(0, "flatten-object");
projects.set(1, "n-queens");
projects.set(2, "tours-api");
projects.set(3, "react-pagination");
// projects.set(4, {
// 	name: "omniofood",
// 	githubLink: "https://github.com/adarsh-shahi/html-css/tree/master/omnifood",
// 	live: "https://adarsh-omnifood.netlify.app/",
// });

interface IPropjectStateType {
	name: string;
	description: string;
	html_url: string;
	homepage: string;
	topics: string[];
}

const projectInitialValue: IPropjectStateType = {
	name: projects.get(0),
	description: "",
	html_url: "",
	homepage: "",
	topics: [],
};

export default function Project() {
	const [project, setProject] =
		useState<IPropjectStateType>(projectInitialValue);

	const activeProjectName = "bg-blue-500 p-2 rounded-lg text-white";

	const getProjectInfo = async (projectName: string) => {
		const { data } = await octokit.request(
			`GET /repos/adarsh-shahi/${projectName}`
		);
		const { name, description, html_url, homepage, topics } = data;
		setProject({
			name,
			description,
			html_url,
			homepage,
			topics,
		});
	};

	useEffect(() => {
		(async () => {
			try {
				getProjectInfo(projects.get(0));
			} catch (e) {
				console.log(e);
			}
		})();
	}, []);

	const handleProjectNameClick = (key: number) => {
		getProjectInfo(projects.get(key));
	};

	const renderedProjectNames: any = [];
	projects.forEach((value, key) => {
		if (typeof value === "object")
			renderedProjectNames.push(
				<div
					className="cursor-pointer"
					key={key}
					onClick={() => handleProjectNameClick(key)}
				>
					{value.name}
				</div>
			);
		else
			renderedProjectNames.push(
				<div
					className={`cursor-pointer ${
						project.name === projects.get(key)
							? activeProjectName
							: "hover:bg-blue-100 p-2 rounded-lg"
					}`}
					key={key}
					onClick={() => handleProjectNameClick(key)}
				>
					{value}
				</div>
			);
	});

	return (
		<div className="grow flex justify-center items-center">
			<div className="flex md:flex-row sm:flex-col gap-10 shadow-2xl p-10 rounded-3xl md:w-auto sm:w-screen">
				<div className="flex flex-col md:gap-10 sm:gap-5 md:border-r-2 md:border-b-0 sm:border-b-2 sm:border-gray-400 md:pr-5 md:pb-0 sm:pb-5 capitalize">
					{renderedProjectNames}
				</div>
				<div className="md:w-96 sm:w-auto flex flex-col gap-5">
					<div>{project.description}</div>
					<div className="flex gap-5">
						<a
							className="flex items-center gap-2 border-2 border-gray-600 px-2 text-lg rounded-md hover:text-white hover:bg-gray-800"
							target="_blank"
							rel="noreferrer"
							href={project.html_url}
						>
							Github
							<RxArrowTopRight />
						</a>
						{project.homepage && !project.homepage.includes("npm") ? (
							<a
								className="flex items-center gap-2 border-2 border-gray-600 px-2 text-lg rounded-md hover:text-white hover:bg-gray-800"
								target="_blank"
								rel="noreferrer"
								href={project.homepage}
							>
								Live
								<RxArrowTopRight />
							</a>
						) : (
							""
						)}
						{project.homepage && project.homepage.includes("npm") ? (
							<a
								className="flex items-center gap-2 border-2 border-gray-600 px-2 text-lg rounded-md hover:text-white hover:bg-gray-800"
								target="_blank"
								rel="noreferrer"
								href={project.homepage}
							>
								NPM
								<RxArrowTopRight />
							</a>
						) : (
							""
						)}
					</div>
					<div className="flex gap-5 flex-wrap mt-auto">
						{project.topics.map((topic) => (
							<div className="bg-purple-800 text-white px-3 py-1 rounded-2xl text-sm">
								{topic}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
