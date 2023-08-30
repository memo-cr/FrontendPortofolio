import { useEffect, useState } from "react";
import axios from "axios";
import ContentItem from "./ContentItem";

function Content(props) {
  let [contents, setContents] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          props.url + props.type ? "projects/getAll" : "tools/getAll"
        );
        setContents(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="pr-wrapper">
      {contents.map((item) => (
        <ContentItem key={item._id} project={item} />
      ))}
    </div>
  );
}

export default Content;
