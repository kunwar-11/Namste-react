import RestuarantCard from "./RestuarentCard";
import { RESTAURANT_DATA } from "../utils/mockData";

const Body = () => {
  return (
    <main>
      <div className="search-bar">Search</div>
      <div className="restaurant-container">
        {RESTAURANT_DATA.map((restuarent) => (
          <RestuarantCard key={restuarent.data.id} resData={restuarent} />
        ))}
      </div>
    </main>
  );
};

export default Body;
