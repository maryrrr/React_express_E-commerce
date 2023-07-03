import React, { useContext, useEffect } from 'react';
import { Card, Button } from 'antd';
import { ClearOutlined, ShoppingOutlined } from '@ant-design/icons';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';
import { OrdersContext } from '../../context/OrdersContext/Ordersstate';
import './Cart.styles.scss'

const Cart = () => {
  const { cart, clearCart } = useContext(ProductsContext);
  const { createOrder } = useContext(OrdersContext);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const createNewOrder = () => {
    const productIds = cart.map((cartItem) => cartItem.id); // obtener id de los productos
    createOrder(productIds); // pasar los IDs de productos a createOrder
    clearCart();
  };

  return (
    <>
      <section className="cart__container">
        { cart.length > 0 &&
          cart.map((cartItem) => (
            <div key={cartItem.id}>
              <Card className="cart__card">
                <span>{cartItem.name}</span>
                <span>{cartItem.price.toFixed(2)} €</span>
              </Card>
            </div>
          
          )) || <p>You don´t have products in your cart</p>}
      </section>
      <section>
        {cart.length > 0 && (
          <div>
            <Button type="primary" onClick={() => clearCart()} icon={<ClearOutlined />}  style={{ background: "red" }}>
              Clear Cart
            </Button>
            <Button type="primary" onClick={() => createNewOrder()} icon={<ShoppingOutlined />}  style={{ background: "black" }}>
              Create Order
            </Button>
          </div>
        )}
      </section>
    </>
  )
}


export default Cart;
