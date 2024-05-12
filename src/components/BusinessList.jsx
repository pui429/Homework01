import BusinessItem from "./BusinessItem";
import businessData from "./BusinessItem";

const BusinessList = ({ businessData }) => {
  return (
    <ul>
      {businessData.map((item) => (
        <BusinessItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default BusinessList;
