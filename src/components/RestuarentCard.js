import { CDN_URL } from "../utils/constant";

const RestuarantCard = ({ resData: { info } }) => {
  const { name, cuisines, avgRating, lastMileTravelString, cloudinaryImageId } =
    info;

  return (
    <div className="restaurent-card">
      <div className="restaurent-card-image">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="rest-image"
          className="restaurent-image"
        />
      </div>
      <div className="restaurent-card-body">
        <h3>{name}</h3>
        <small>{cuisines.join(", ")}</small>
        <div className="restaurent-card-rate-time">
          <h4>
            Ratings <span>{avgRating}</span>
          </h4>
          <h4>{lastMileTravelString}</h4>
        </div>
      </div>
    </div>
  );
};

export default RestuarantCard;
