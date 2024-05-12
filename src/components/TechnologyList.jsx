import TechnologyItem from "./TechnologyItem";
import TechnologyData from "./TechnologyItem";

const TechnologyList = ({ TechnologyData }) => {
  return (
    <ul>
      {TechnologyData.map((item) => (
        <TechnologyItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default TechnologyList;
