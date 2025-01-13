import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvider from './context/StoreContext.jsx';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext.jsx';
import { Toaster } from 'react-hot-toast';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <StoreContextProvider>
          <CartProvider>
            <App />
            <Toaster
            position="bottom-right"
            toastOptions={{
              success: {
                style: {
                  background: 'green',
                  color: 'white',
                },
              },
              error: {
                style: {
                  background: 'red',
                  color: 'white',
                },
              },
            }}
          />
          </CartProvider>
        </StoreContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);