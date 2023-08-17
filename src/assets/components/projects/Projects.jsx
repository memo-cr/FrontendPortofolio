import { useEffect, useState } from "react";
import axios from "axios";
import ProjcetItem from "./ProjectItem";
import "../../styles/projects.css";

let dummy = [
	{ name: "portofolio", des: "helloworld", _id: "0" },
	{ name: "image", des: "helloworld", _id: "0" },
	{ name: "temp", des: "helloworld", _id: "0" },
];

function Projects(props) {
	let [projects, setProjects] = useState([]);
	let [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const { data: response } = await axios.get(
					props.url + "projects/getAll"
				);
				setProjects(response);
			} catch (error) {
				console.error(error.message);
			}
			setLoading(false);
		};

		fetchData();
	}, []);

	return (
		<div className="pr-wrapper">
			{dummy.map((item) => (
				<ProjcetItem key={item._id} project={item} />
			))}
		</div>
	);
}

export default Projects;
