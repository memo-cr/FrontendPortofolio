import { useEffect, useState } from "react";
import axios from "axios";
import ToolItem from "./ToolItem";

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
      {tools.map((item) => (
        <ToolItem key={item._id} tool={item} />
      ))}
    </section>
  );
}

export default Tools;
