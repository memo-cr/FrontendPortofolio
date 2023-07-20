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
    <div className="tools-text">
      {tools.map((item) => (
        <ToolItem key={item._id} tool={item} />
      ))}
    </div>
  );
}

export default Tools;
