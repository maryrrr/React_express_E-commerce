import React from "react";
import { Link,useNavigate } from "react-router-dom"
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Menu,Button } from 'antd';
import { HomeOutlined, LogoutOutlined, UserAddOutlined, UserOutlined, ShoppingOutlined } from '@ant-design/icons'
import './TheHeader.styles.scss'


  const TheHeader = () => {
      const { token, logout } = useContext(UserContext);
      const navigate = useNavigate();
    
      const handleLogout = () => {
        logout();
        navigate('/login'); // Redirige a la página de inicio de sesión después del cierre de sesión
      };
    
      return (
        <nav className="header">
          <span>Header</span>
          <div>
            <Menu theme="light" mode="horizontal">
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
              {token ? (
                <Menu.Item key="logout" icon={<LogoutOutlined />}>
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
        </nav>
      );
    };
    



export default TheHeader;

