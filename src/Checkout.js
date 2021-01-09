import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
function Checkout() {
    const [{user,basket},dispatch]=useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://www.suricats-consulting.com/wp-content/uploads/2018/04/amazon-ad-platform-logo.png" alt="" />
                <h3>Hello, {user?.email} </h3>
                <h1 className="checkout__title">Your Shopping Basket</h1>
                {basket.map((item)=>{
                    return(
                        <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating}  />
                    )
                })}
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
