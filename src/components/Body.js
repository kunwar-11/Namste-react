import RestuarantCard from "./RestuarentCard";
import { RESTAURANT_DATA } from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  const [restaurent, setRestaurent] = useState(null);
  const [filterd, setFilterd] = useState([]);
  const [search, setSearch] = useState("");

  const filterTopRated = () => {
    const filteredRestaurent = restaurent.filter(
      (res) => res.info.avgRating >= 4
    );
    setFilterd(filteredRestaurent);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5635511&lng=73.9325552&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const { data } = await res.json();
    setRestaurent(
      data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterd(
      data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(data.cards[2].card.card);
  };
  return (
    <main>
      <div>
        <div className="input-container">
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredData = restaurent.filter((each) =>
                each.info.name.toLowerCase().includes(search.toLowerCase())
              );
              setFilterd(filteredData);
            }}
          >
            Submit
          </button>
        </div>
        <button className="filter-btn" onClick={filterTopRated}>
          Top Rated Restuarent
        </button>
      </div>
      <div className="restaurant-container">
        {filterd &&
          filterd.map((restuarent) => (
            <RestuarantCard key={restuarent.info.id} resData={restuarent} />
          ))}
      </div>
    </main>
  );
};

export default Body;
