import LeftContent from "./LeftContent";
import RightItem from "./RightItem";
import "./PublicReations.scss";
import PRData from "../assets/api/PRData";

const PublicReations = () => {
  return (
    <div className="con-box con3 box2">
      <div className="inner">
        <div className="left">
          <LeftContent />
        </div>
        <ul>
          {PRData.map((item) => (
            <RightItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PublicReations;
