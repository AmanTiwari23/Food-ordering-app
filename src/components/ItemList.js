import { useDispatch } from "react-redux";
import { CDN_URL } from "../Utils/constant";
import { addItem } from "../Utils/cartSlice";

const ItemList = ({ items }) => {
 
  const dispatch = useDispatch();

  const handleAddItem = (item)=>{
    dispatch(addItem(item));
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
        data-testid="foodItems"
          key={item.card.info.id}
          className="  p-2 m2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className=" w-8/12">
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
          <div className="w-4/12 flex-col items-center relative ">
            <img
              src={CDN_URL + item.card.info.imageId}
              className=" w-full p-4 h-32 object-cover rounded-lg mb-2"
            />
            <div className="absolute top-1">
              <button
                className=" flex items-center px-3 py-2 shadow-lg bg-black text-white rounded-lg hover:bg-gray-600 transition-colors"
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
