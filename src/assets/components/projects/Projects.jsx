import { useEffect, useState } from "react";
import axios from "axios";
import ProjcetItem from "./ProjectItem";

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
    <div className="projects-text">
      {projects.map((item) => (
        <ProjcetItem key={item._id} project={item} />
      ))}
    </div>
  );
}

export default Projects;
