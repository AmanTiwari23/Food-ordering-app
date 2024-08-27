import { useDispatch } from "react-redux";
import { CDN_URL } from "../Utils/constant";
import { addItem } from "../Utils/cartSlice";

const ItemList = ({ items }) => {
 
  const dispatch = useDispatch();

  const handleAddItem = (item)=>{
    dispatch(addItem(item));
  }

  return (
    <div>
      {items.map((item) => (
        <div
        data-testid="foodItems"
          key={item.card.info.id}
          className="  p-2 m2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className=" w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs"> {item.card.info.description}</p>
          </div>
          <div className="w-3/12 rounded-lg relative ">
            <img
              src={CDN_URL + item.card.info.imageId}
              className=" w-full p-4 h-32 object-cover rounded-lg"
            />
            <div className="absolute top-1">
              <button
                className="px-2 py-1  mx-4 shadow-lg bg-black text-white rounded-lg"
                onClick={ ()=> handleAddItem(item)}
              >
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
