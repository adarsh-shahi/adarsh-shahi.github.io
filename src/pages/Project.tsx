import { useEffect, useState } from "react";
import { Octokit } from "octokit";

const octokit = new Octokit({
	auth: process.env.REACT_APP_PERSONAL_ACCESS_TOKEN,
});

const projects = new Map();
projects.set(0, "flatten-object");
projects.set(1, "n-queens");
projects.set(2, "tours-api");
projects.set(3, "react-pagination");
projects.set(4, {
	githubLink: "https://github.com/adarsh-shahi/html-css/tree/master/omnifood",
	live: "https://adarsh-omnifood.netlify.app/",
});

interface IPropjectStateType {
	name: string;
	description: string;
	html_url: string;
	homepage: string;
	topics: [];
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

	useEffect(() => {
		(async () => {
			try {
				const response = await octokit.request(
					`GET /repos/adarsh-shahi/${project.name}`
				);
				console.log(response);
			} catch (e) {
				console.log(e);
			}
			// setProject({
			// 	name: data.name,
			// 	description: data.description,
			// 	html_url: data.html_url,
			// 	homepage: data.homepage,
			// 	topics: data.topics,
			// });
		})();
	}, []);

	return (
		<div>
			<div>
				<div>{project.name}</div>
				<div>{project.description}</div>
				<div>{project.topics}</div>
				<div>{project.html_url}</div>
				<div>{project.homepage}</div>
			</div>
		</div>
	);
}
