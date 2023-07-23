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

  const code = `
    class Mehmet Caran {
    ··// I can, because I did.
    ··// My vast variety of skills is continuously expanding.
    ··constructor() {
    ····this.name = 'Mehmet Caran'
    ····this.dayOfBirthTimestamp = 16042004
    ····this.email = 'mehmetcaran@hotmail.com'
    ··}
    ··workExperience() {
    ····return [
    ······{ '2020-2022' : 'Beratung / geringfuegig / Conrad Electronics' }
    ······{ '2022-2022' : 'Instandhaltung / Praktikum / Klinger Fluid Control ' }
    ····]
    ··}
    ··education() {
    ····return [
    ······{ '2014-2018': 'BG/BRG Baden Frauengasse' },
    ······{ '2018-2023': 'HTL Moedling - bald Ing. - ausgezeichneter Erfolg' }
    ····]
    ··}
    ··skills() {
    ····return [ 'HTML/CSS/JS', 'Vue']
    ··}`;

  return (
    <section className="tools">
      <div className="codeblock">{code}</div>

      {tools.map((item) => (
        <ToolItem key={item._id} tool={item} />
      ))}
    </section>
  );
}

export default Tools;
