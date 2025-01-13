import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNairaSign, faTruck } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../../context/CartContext';
import toast from 'react-hot-toast';
import axios from 'axios';
import { API_BASE_URL } from '../../../env';

const Quickpicks = () => {
  const { cart, addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [menuItems, setMenuItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Use URL search params to read category if it's provided
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const categoryFromUrl = queryParams.get('category');
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);

      const scrollOffset = 650; 
      window.scrollTo({
        top: window.scrollY + scrollOffset,
        behavior: 'smooth',
      });
    }
  }, [location]);

  useEffect(() => {
    // Fetch menu items from the backend
    const fetchMenuItems = async () => {
      try {
        const token = localStorage.getItem('foodLabToken');
        if (!token) {
          toast.error('You are not authenticated!');
          return;
        }
        const response = await axios.get(`${API_BASE_URL}/api/vendors/menuItems`, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
        setMenuItems(response.data);
        setFilteredItems(response.data);
      } catch (error) {
        console.error('Error fetching menu items:', error.message);
        toast.error('Failed to load menu items. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  useEffect(() => {
    let filtered = menuItems;
    
    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory && selectedCategory !== 'All') {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    setFilteredItems(filtered);
  }, [searchTerm, selectedCategory, menuItems]);

  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success('Item added to cart');
  };

  return (
    <div className="py-10 px-4">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-4xl font-bold text-blue-500 mb-2">Quick Picks</h2>
        <p className="text-gray-600 text-lg">Select your favorites from our menu</p>
        <div
          className="mt-4 cursor-pointer text-blue-600 underline"
          onClick={() => navigate('/cart')}
        >
          View Cart ({cart.length} items)
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="flex justify-between mb-6">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-3/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            navigate(`/menu?category=${e.target.value}`); // Update URL
          }}
          className="ml-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        >
          <option value="All">All Categories</option>
          <option value="Fast Food">Fast Food</option>
          <option value="Main Course">Main Course</option>
          <option value="Dessert">Dessert</option>
          <option value="Drinks">Drinks</option>
        </select>
      </div>

      {/* Loading State */}
      {loading ? (
        <p className="text-center text-gray-500 text-lg">Loading menu items...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
              >
                {/* Item Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-40 h-40 object-cover rounded-lg mb-4"
                />
                {/* Item Info */}
                <h3
                  className="text-xl font-semibold text-gray-800 truncate w-full text-center"
                  style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                >
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  <FontAwesomeIcon icon={faNairaSign} /> {item.price}
                </p>
                <p className="text-gray-600 text-sm">
                  <FontAwesomeIcon icon={faTruck} /> {item.delivery_time}
                </p>
                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(item)}
                  className="mt-4 w-full py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 text-lg col-span-full">
              No menu items available
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Quickpicks;
