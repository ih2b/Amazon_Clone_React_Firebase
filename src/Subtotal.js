import React from 'react'
import CurrencyFormat from"react-currency-format";
import { useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import "./Subtotal.css"
function Subtotal() {
    const history = useHistory();
    const [{basket,total},dispatch] =useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value) =>(
                <>
                <p> Subtotal({basket?.length} items): <strang>{total}</strang></p>
                <small className="subtotal__gift">
                    <input type="checkbox" />This order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={0}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"£"}
             />
             <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
