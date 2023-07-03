import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import './Products.styles.scss'
import { Card } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons';

const Products = () => {
    const {getProducts, products,addCart,cart } = useContext(ProductsContext);

useEffect(() => {
    getProducts();

}, []);

useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <>
        <section className="products__container" >
            {products && products.map((product) => (
                <div key={product.id}>
            <Card className="products__card" >
                <p >{product.name} </p>
                <p>{product.price.toFixed(2)} €</p>
                <p>{product.stock} </p>
            <button  className="products__button" onClick={() => addCart(product)}><ShoppingCartOutlined />Add to cart</button>
            
        </Card>
        </div>
            ))}
        </section>
        </>
        )
        
    }

export default Products

