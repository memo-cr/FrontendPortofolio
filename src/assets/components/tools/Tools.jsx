import { useEffect, useState } from "react";
import axios from "axios";
import ToolItem from "./ToolItem";
import Codeblock from "./Code/Codeblock";

function Tools(props) {
  let [tools, setTools] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(props.url + "tools/getAll");
        setTools(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <section className="tools">
      <Codeblock tools={tools} />
    </section>
  );
}

export default Tools;
