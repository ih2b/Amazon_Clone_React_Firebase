import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import './Payment.css'
import { CardElement , useStripe ,useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import axios from "./axios";
import {db} from "./firebase"

function Payment() {
    const[{basket,user,total},dispatch]=useStateValue();
    const stripe=useStripe();
    const elements=useElements();
    const history = useHistory();
    const [succeeded,setSucceeded] =useState(false);
    const [porcessing,setPorcessing] =useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);
    useEffect(() => {
        const getClientSecret = async () =>{
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${total * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    console.log('the sec', clientSecret)
    const handleSubmit = async (event) =>{
        event.preventDefault();
        setPorcessing(true);
        const payload = await stripe.comfirmCardPayment(clientSecret,{
            payment_method:{
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) =>{
            db.collection('users').doc(user?.uid).collection('orders').set({
                basket:basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })
            setSucceeded(true);
            setError(null);
            setPorcessing(false);
            dispatch({type: 'EMPTY_BASKET'})
            history.replaceState('/orders');
        })
    }
    const handlechange =event =>{
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>Checkout ({
                    <Link to="/checkout">{basket?.length} items</Link>
                    })
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h4>{user?.email}</h4>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__adress">
                        <input type="text" />
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map((item)=>{
                            return(
                                <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating}  />
                            )
                        })}
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handlechange} />
                            <div className='payment__priceContainer'>
                            <CurrencyFormat
                                renderText={(value) =>(
                                <h3>Order Total: {total}$ </h3>
                                )}
                                decimalScale={2}
                                value={0}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                                />
                                <button disabled={porcessing ||disabled ||succeeded}><span>
                                    {porcessing ? <p>Processing</p> : "Buy Now"}
                                    </span></button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
