import TechnologyList from "./TechnologyList";
import "./Technology.scss";
import TechnologyData from "../assets/api/TechnologyData";

const Technology = () => {
  return (
    <div className="con-box con2 box1">
      <div className="inner">
        <h2>TECHNOLOGICAL INNOVATION</h2>
        <TechnologyList TechnologyData={TechnologyData} />
      </div>
    </div>
  );
};

export default Technology;
