import { useEffect, useState } from "react"


const useFetchData = () =>{
    const [listOfRestorent,setListOfRestorent] = useState([]);
    const [filteredRestro,setFilteredRestro]= useState([]);
    useEffect(()=>{
        fetchData();
        },[])

        const fetchData = async ()=>{
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json =  await data.json();

            setListOfRestorent(
                json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
              );

              setFilteredRestro(
                json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
              )

        }

        return {listOfRestorent,filteredRestro};
}

export default useFetchData;