import RestuarantCard from "./RestuarentCard";
import { RESTAURANT_DATA } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurent, setRestaurent] = useState(RESTAURANT_DATA);

  const filterTopRated = () => {
    const filteredRestaurent = restaurent.filter(
      (res) => res.data.avgRating >= 4
    );
    setRestaurent(filteredRestaurent);
  };
  return (
    <main>
      <div>
        <button className="filter-btn" onClick={filterTopRated}>
          Top Rated Restuarent
        </button>
      </div>
      <div className="restaurant-container">
        {restaurent.map((restuarent) => (
          <RestuarantCard key={restuarent.data.id} resData={restuarent} />
        ))}
      </div>
    </main>
  );
};

export default Body;
