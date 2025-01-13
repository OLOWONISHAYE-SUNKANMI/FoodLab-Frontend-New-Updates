import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext.jsx';
// import { AuthContext } from '../../context/AuthContext.jsx'; // Import AuthContext
import './FoodDisplay.css';
import 'material-design-icons/iconfont/material-icons.css';

const FoodDisplay = ({ category }) => {
  const { restaurant_list } = useContext(StoreContext);
  const navigate = useNavigate();

const handleNavigate = (restaurantId) => {
  const token = localStorage.getItem('foodLabToken');
  if (token) {
    navigate(`/restaurant/${restaurantId}`);
  } else {
    navigate('/login');
  }
};

const handleSeeAllRestaurants = () => {
  const token = localStorage.getItem('foodLabToken');
  if (token) {
    navigate('/restaurants'); 
  } else {
    navigate('/login');
  }
};

  return (
    <div className='food-display' id='food-display'>
      <h2>Top Restaurant Near You</h2>
      <div className='food-display-list'>
        {restaurant_list && restaurant_list.length > 0 ? (
          restaurant_list.map((item, index) => (
            <div
              key={index}
              className={category === 'All' || category === item.category
                ? 'food-display-list-item'
                : 'food-display-list-item hidden'}
            >
              <img
                className='item-image cursor-pointer'
                src={item.image}
                alt={item.name || 'Food item'}
                onClick={() => handleNavigate(item.id)}
              />
              <h3
                className='item-restaurant cursor-pointer text-black text-left'
                onClick={() => handleNavigate(item.id)}
              >
                {item.restaurant}
              </h3>

              <div className='item-details text-left text-gray-500'>
                <p className='item-price'>₦ {item.price_range}</p>
                <p className='slash'> | </p>
                <p className='item-time'><i className='material-icons'>schedule</i> {item.delivery_time}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No food items available</p>
        )}
      </div>
      <div className='flex justify-center mt-6'>
        <button
          className='p-2 bg-blue-500 text-white rounded hover:bg-blue-700'
          onClick={handleSeeAllRestaurants}
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default FoodDisplay;