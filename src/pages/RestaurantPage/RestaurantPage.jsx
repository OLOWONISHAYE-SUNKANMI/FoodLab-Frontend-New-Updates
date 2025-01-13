import React from 'react'
import Restaurants from '../../components/Restaurants/Restaurants'
import RestaurantNav from '../../components/RestaurantNav/RestaurantNav'
import { restaurant_list } from '../../assets/assets';
import './RestaurantPage.css'


const RestaurantPage = () => {
  return (
    <div>
        <RestaurantNav />
        <Restaurants restaurant_list={restaurant_list} />
    </div>
  )
}

export default RestaurantPage