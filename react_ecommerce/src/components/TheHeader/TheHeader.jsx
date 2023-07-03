import React from "react";
import { Link,useNavigate } from "react-router-dom"
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Menu,Button } from 'antd';
import { HomeOutlined, UserAddOutlined, UserOutlined, ShoppingOutlined,UnlockOutlined,ShoppingCartOutlined } from '@ant-design/icons'
import './TheHeader.styles.scss'


  const TheHeader = () => {
      const { token, logout } = useContext(UserContext);
      const navigate = useNavigate();
    
      const handleLogout = () => {
        logout();
        navigate('/login')
      }
    
      return (
        
          
          <div className="header">
            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="home" icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="register" icon={<UserAddOutlined />}>
                <Link to="/register">Register</Link>
              </Menu.Item>
              <Menu.Item key="profile" icon={<UserOutlined />}>
                <Link to="/profile">Profile</Link>
              </Menu.Item>
              <Menu.Item key="products" icon={<ShoppingOutlined />}>
                <Link to="/products">Products</Link>
              </Menu.Item>
              <Menu.Item key="cart" icon={<ShoppingCartOutlined />}>
                <Link to="/cart">Cart</Link>
              </Menu.Item>
              {token ? (
                <Menu.Item key="logout" icon={<UnlockOutlined />}>
                  <Button type="link" onClick={handleLogout}>
                    Logout
                  </Button>
                </Menu.Item>
              ) : (
                <Menu.Item key="login" icon={<ShoppingOutlined />}>
                  <Link to="/login">Login</Link>
                </Menu.Item>
              )}
            </Menu>
          </div>
        
      );
    };
    



export default TheHeader;

