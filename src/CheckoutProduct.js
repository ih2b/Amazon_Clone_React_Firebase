import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider'
function CheckoutProduct({id,title,image,price,rating}) {
    const [{basket},dispatch]= useStateValue();
    const removeFromBasket = ()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProduct__img"/>
                <div className="checkoutProduct__info">
                        <p>{title}</p>
                        <p className="checkoutProduct__price"><small>$</small><strong>{price}</strong></p>
                    <div className="product__rating">
                        {
                            Array(rating).fill().map((_,i)=>(<p>⭐</p>))
                        }
                    </div>
                <button onClick={removeFromBasket} >Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
