import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from './context/UserContext/UserState';
import TheHeader from './components/TheHeader/TheHeader';
import LoginApp from './views/LoginApp/LoginApp';
import HomeApp from './views/HomeApp/HomeApp';
import ProfileApp from './views/ProfileApp/ProfileApp';
import RegisterApp from './views/RegisterApp/RegisterApp';
import { ProductsProvider } from './context/ProductsContext/ProductsState';
import Products from './components/Products/Products';

function App() {
  const [count, setCount] = useState(0)

  return (
      <UserProvider>
        <ProductsProvider>
          <Router>
            <TheHeader />
              <Routes>
                <Route path="/" element={<HomeApp />} />
                <Route path="/login" element={<LoginApp />} />
                <Route path="/register" element={<RegisterApp />} />
                <Route path="/profile" element={<ProfileApp />} />
                <Route path="/products" element={<Products />} />
            </Routes>
          </Router>
        </ProductsProvider>
      </UserProvider>
    
);
}

export default App
