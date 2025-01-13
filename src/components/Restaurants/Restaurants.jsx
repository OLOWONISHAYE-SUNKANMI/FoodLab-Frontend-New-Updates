import React from 'react';
import { useNavigate } from 'react-router-dom';

const Restaurants = ({ restaurant_list }) => {
  const navigate = useNavigate();

  const handleRestaurantClick = (restaurantId) => {
    navigate(`/restaurant/${restaurantId}`);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 h-full p-8 border-r border-gray-300">
        <div className="mb-10">
          <h3 className="mb-4 text-lg font-bold">Sort By</h3>
          <ul className="list-none p-0">
            <li className="mb-3 pb-2 border-b border-gray-300 text-sm cursor-pointer hover:text-blue-500 hover:font-medium">Breakfast</li>
            <li className="mb-3 pb-2 border-b border-gray-300 text-sm cursor-pointer hover:text-blue-500 hover:font-medium">Burgers</li>
            <li className="mb-3 pb-2 border-b border-gray-300 text-sm cursor-pointer hover:text-blue-500 hover:font-medium">Chicken</li>
            <li className="mb-3 pb-2 border-b border-gray-300 text-sm cursor-pointer hover:text-blue-500 hover:font-medium">Desserts</li>
            <li className="mb-3 pb-2 border-b border-gray-300 text-sm cursor-pointer hover:text-blue-500 hover:font-medium">Grill</li>
            <li className="mb-3 pb-2 border-b border-gray-300 text-sm cursor-pointer hover:text-blue-500 hover:font-medium">Juices</li>
            <li className="mb-3 pb-2 border-b border-gray-300 text-sm cursor-pointer hover:text-blue-500 hover:font-medium">Local</li>
            <li className="mb-3 pb-2 border-b border-gray-300 text-sm cursor-pointer hover:text-blue-500 hover:font-medium">Rice</li>
            <li className="mb-3 pb-2 border-b border-gray-300 text-sm cursor-pointer hover:text-blue-500 hover:font-medium">Pasta</li>
          </ul>
        </div>
      </div>

      {/* Restaurant Section */}
      <div className="flex-grow p-8 bg-white">
        <h1 className="text-left ml-8 mb-8 text-2xl">Restaurants near you</h1>
        <div className="grid ml-8 grid-cols-3 gap-8">
          {Array.isArray(restaurant_list) && restaurant_list.length > 0 ? (
            restaurant_list.map((restaurant) => (
              <div
                className="w-64 rounded-lg overflow-hidden transition-transform transform hover:translate-y-1 bg-white mb-8 cursor-pointer"
                key={restaurant._id}
                onClick={() => handleRestaurantClick(restaurant._id)}
              >
                <img src={restaurant.image} alt={restaurant.name} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl mb-2 text-gray-800">{restaurant.restaurant}</h2>
                  <p className="mb-2 text-gray-600">{restaurant.name}</p>
                  <p className="mb-2 text-gray-600">💵 {restaurant.price_range}</p>
                  <p className="mb-2 text-gray-600">🚲 {restaurant.delivery_time}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="ml-8 text-gray-600">No restaurants available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;