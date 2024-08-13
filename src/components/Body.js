import RestorentCard from "./RestorentCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import useFetchData from "../Utils/useFetchData";

const Body = () => {
  const {
    listOfRestorent,
    filteredRestro,
    setFilteredRestro,
    setListOfRestorent,
  } = useFetchData();

  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Oops its looks like your internet is not connected</h1>;
  }

  return listOfRestorent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="  bg-gray-100  m-auto">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            className=" border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRestro = listOfRestorent.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestro(filteredRestro);
            }}
          >
            Search
          </button>
        </div>

        <div className="search m-4 p-4">
          <button
            className="px-4 py-2 bg-gray-300 m-4 rounded-lg"
            onClick={() => {
              const filterresList = listOfRestorent.filter(
                (res) => res.info.avgRating > 4.5
              );
              setListOfRestorent(filterresList);
            }}
          >
            Top rated Restorent
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center rounded-lg m-auto p-4">
        {filteredRestro.map((restorent) => (
          <Link
            key={restorent.info.id}
            to={"/restaurants/" + restorent.info.id}
          >
            <RestorentCard resdata={restorent} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
