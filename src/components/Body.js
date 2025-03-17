import { resList } from "../utils/resList";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
 const[restList, setRestList] = useState([]);
 const[searchText, setSearchText] = useState("");

 useEffect(() => {
  fetchData();
 },[])

 const fetchData = async () => {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.676743&lng=77.161521&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  const resData = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
  setRestList(resData)
 }

 const onlineStatus = useOnlineStatus();

 if(onlineStatus == false){
  return <h1>You are offline</h1>
 }

  return restList.length === 0 ? (<Shimmer/>) : (
    <div className="body">
      <div className="filter">
      <div className="search">
        <input type="text" className="search-box" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}/>
        <button className="search-btn" onClick={() => {
          const filterestRest = resList.filter((res) => res.info.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
          setRestList(filterestRest);
        }}>Search</button>
      </div>
        <button className="filter-btn" onClick={() => 
          {setRestList(resList.filter(res => res.info.avgRating > 4.5))}}>Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
      {
        restList.map((restaurant) => 
        (
         <Link to={"/restaurant/" + restaurant.info.id}> <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>
         </Link>
         ))
      }     
      </div>
    </div>
  );
};

export default Body;