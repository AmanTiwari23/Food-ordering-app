import { CDN_URL } from "../Utils/constant";
const RestorentCard = (props) => {
  const { resdata } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resdata?.info;
  const { deliveryTime } = resdata.info.sla;
  

  return (
    <div className="m-4 p-2 w-72 h-80 bg-gray-100 rounded-lg hover:bg-gray-300 ">
      <img
        className="rounded-lg object-cover h-40 w-72"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
       <span className="flex space-x-2">
       <h4>{avgRating} star</h4> <h1 className="font-bold">.</h1>
       <h4>{deliveryTime} mins</h4>
       </span>
      <h4 className="truncate ...">
        {cuisines.join(", ")   }
      </h4>
    </div>
  );
};

export default RestorentCard;
