import React, { useState } from 'react'
import { useEffect } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';

const RestaurantMenu = () => {
 const[resInfo, setResInfo] = useState(null);

 const {resId} = useParams();

 console.log(resId)

useEffect(()=>{ 
    fetchMenu();
},[])

const fetchMenu = async () =>{
    const data = await fetch(MENU_API + resId )
    const jsonData = await data.json();
    setResInfo(jsonData.data);
    console.log(jsonData)
}

if(resInfo=== null) return ( <Shimmer/> )
const{name, cuisines, costForTwoMessage} = resInfo.cards[2].card.card.info
const {itemCards} = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.categories[0]

  return  (
    <div className='menu'>
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")} - {costForTwoMessage}</h2>
      <ul>
      {itemCards.map(item => 
      <li key={item.card.info.id}>
        {item.card.info.name} - Rs.
        {item.card.info.price/100}
       </li>)}
      </ul>
    </div>
  )
}

export default RestaurantMenu
