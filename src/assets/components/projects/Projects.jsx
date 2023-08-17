import { useEffect, useState } from "react";
import axios from "axios";
import ProjcetItem from "./ProjectItem";
import "../../styles/projects.css";

let dummy = [
	{
		name: "portofolio",
		des: "Hello world my name is Mehmet Caran and i like coding",
		_id: "0",
	},
	{
		name: "image",
		des: "Hello world my name is Mehmet Caran and i like coding",
		_id: "1",
	},
	{
		name: "temp",
		des: "Hello world my name is Mehmet Caran and i like coding",
		_id: "2",
	},
	{
		name: "portofolio",
		des: "Hello world my name is Mehmet Caran and i like coding",
		_id: "3",
	},
	{
		name: "image",
		des: "Hello world my name is Mehmet Caran and i like coding",
		_id: "4",
	},
	{
		name: "temp",
		des: "Hello world my name is Mehmet Caran and i like coding",
		_id: "5",
	},
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
