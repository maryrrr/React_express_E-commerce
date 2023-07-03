import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from './context/UserContext/UserState';
import TheHeader from './components/TheHeader/TheHeader';
import LoginApp from './views/LoginApp/LoginApp';
import HomeApp from './views/HomeApp/HomeApp';
import ProfileApp from './views/ProfileApp/ProfileApp'
import RegisterApp from './views/RegisterApp/RegisterApp';
import { ProductsProvider } from './context/ProductsContext/ProductsState';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer'
import { OrdersProvider } from './context/OrdersContext/Ordersstate';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <UserProvider>
        <ProductsProvider>
         <OrdersProvider>
            <TheHeader />
              <Routes>
                <Route path="/" element={<HomeApp />} />
                <Route path="/login" element={<LoginApp />} />
                <Route path="/register" element={<RegisterApp />} />
                <Route path="/profile" element={<ProfileApp />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
          <Footer />
          </OrdersProvider>
        </ProductsProvider>
      </UserProvider>
    </Router>
    
);
}

export default App
