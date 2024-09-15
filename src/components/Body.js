import RestorentCard from "./RestorentCard";
import { useContext, useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import useFetchData from "../Utils/useFetchData";
import UserContext from "../Utils/UserContext";

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

  const { loggedInUser, setUserInfo } = useContext(UserContext);

  return listOfRestorent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="  bg-gray-100  m-auto">
      <div className="filter flex items-center justify-between bg-gray-100 rounded-lg shadow-md">
        <div className="search flex items-center flex-grow mr-4">
          <input
            type="text"
            data-testid="searchInput"
            className=" border border-gray-300 rounded-lg px-4 py-2 w-full"
            value={searchText}
            placeholder="Search restaurents"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="ml-4 px-4 py-2 bg-blue-300 m-4 rounded-lg shadow hover:bg-blue-500 transition duration-200 text-white"
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

        <button
          className="px-4 py-2 bg-blue-300 text-white rounded-lg shadow hover:bg-blue-500 transition duration-200 mr-4"
          onClick={() => {
            const filterresList = listOfRestorent.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRestro(filterresList);
          }}
        >
          TopratedRestaurants
        </button>

        <div className="flex items-center">
          <label className="mr-2">UserName: </label>
          <input
            className="border border-gray-300 rounded-lg  px-4 py-2"
            value={loggedInUser}
            onChange={(event) => setUserInfo(event.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-6 max-w-screen mx-auto">
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
