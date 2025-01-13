import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const ExploreMenu = ({ category, setCategory }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (item) => {
    // Set category and navigate to the menu page with the category as a query parameter
    setCategory(item.menu_name);
    navigate(`/menu?category=${item.menu_name}`);
  };

  return (
    <div className="flex flex-col gap-8 mt-12 px-4 md:px-8 lg:px-16">
      <h1 className="text-3xl font-bold text-center text-blue-600 md:text-left explore-title">
        Explore Categories
      </h1>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(item)}
            className={`flex flex-col items-center cursor-pointer transform transition-transform hover:scale-105 ${
              category === item.menu_name ? 'selected-category' : 'category-card'
            }`}
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className={`w-24 h-24 rounded-full border-4 p-2 transition-all ${
                category === item.menu_name ? 'border-blue-600' : 'border-gray-200'
              }`}
            />
            <p
              className={`mt-4 text-lg font-medium ${
                category === item.menu_name ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>
      <hr className="mt-8 border-t border-gray-300" />
    </div>
  );
};

export default ExploreMenu;
