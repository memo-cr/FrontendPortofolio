import Line from "./Line";
import ToolItem from "../ToolItem";
import "../../../styles/code.css"

function Codeblock(props) {
  const code = [
    `}`,
  ];
  return (
    <section className="codeblock">
      <header id="codeheader"></header>
      <Line nr="01" methods="class" propname=" Mehmet Caran ">&#123;</Line>
      <Line nr="02" dot="··" comment="// I can, because I did."></Line>
      <Line nr="03" dot="··" comment="// My vast variety of skills is continuously expanding."></Line>
      <Line nr="04" dot="··" methods="constructor">() &#123;</Line>
      <Line nr="05" dot="····" thisname="name"> <span className="string">'Mehmet caran'</span> </Line>
      <Line nr="06" dot="····" thisname="dayOfBirthTimeStamp"> <span className="number">16042004</span> </Line>
      <Line nr="07" dot="····" thisname="mail"> <span className="string">'mehmetcaran@hotmail.com'</span> </Line>
      <Line nr="08" dot="··">&#125;</Line>
      <Line nr="09" dot="··" propname="workExperience">() &#123;</Line>
      <Line nr="10" dot="····" methods="return"> [</Line>
      <Line nr="11" dot="······" >&#123; <span className="string">'2020-2022'</span>: <span className="string">'Beratung / geringfuegig / Conrad Electronics'</span> &#125;</Line>
      <Line nr="12" dot="······" >&#123; <span className="string">'2018-2023'</span>: <span className="string">'HTL Moedling - bald Ing. - ausgezeichneter Erfolg'</span> &#125;</Line>
      <Line nr="13" dot="····">]</Line>
      <Line nr="14" dot="··" >&#125;</Line>
      <Line nr="15" dot="··" propname="education">() &#123;</Line>
      <Line nr="16" dot="····" methods="return" > [</Line>
      <Line nr="17" dot="······">&#123; <span className="string">'2014-2018'</span> : <span className="string">'BG/BRG Baden Frauengasse'</span> &#125;</Line>
      <Line nr="18" dot="······">&#123; <span className="string">'2020-2022'</span> : <span className="string">'HTL Moedling - bald Ing. - ausgezeichneter Erfolg'</span> &#125;</Line>
      <Line nr="19" dot="····">]</Line>
      <Line nr="20" dot="··">&#125;</Line>
      <Line nr="21" dot="··" propname="skills">() &#123;</Line>
      <Line nr="22" dot="····" methods="return"> [</Line>
      <Line nr="23" dot="····">
        {props.tools.map((item) => (
        <ToolItem key={item._id} tool={item}  />
      ))}</Line>
      <Line nr="24" dot="····">]</Line>
      <Line nr="25" dot="··">&#125;</Line>
      <Line nr="26" >&#125;</Line>
    </section>
  );
}

export default Codeblock;
