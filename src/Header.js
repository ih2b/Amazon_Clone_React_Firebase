import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom'
import { useStateValue } from './StateProvider';
import {auth} from "./firebase"
function Header() {
    const [{basket,user},dispatch]=useStateValue();
    const handleAuthentication = () =>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to="/">
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="AmazonLogo"/>
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                <SearchIcon className="searchIcon"/>
            </div>
            <div className="header__nav">
                <Link to={!user &&"/login"} className="link">
                    <div onClick={handleAuthentication} className="header__navOption">
                        <sanp className="optionSnap1">Hello {!user ? 'Guest' : user.email}</sanp>
                        <sanp className="optionSnap2">{user ? 'Sign Out' : 'Sign In'}</sanp>
                    </div>
                </Link>
                <Link to="/orders" className="link">
                <div className="header__navOption">
                    <sanp className="optionSnap1">Returns</sanp>
                    <sanp className="optionSnap2">&Orders</sanp>
                </div>
                </Link>
                <Link to="/" className="link">
                <div className="header__navOption">
                    <sanp className="optionSnap1">Your</sanp>
                    <sanp className="optionSnap2">Prime</sanp>
                </div>
                </Link>
                <Link to="/checkout" className="link">
                    <div className="header__navBasket">
                    <ShoppingBasketIcon className="shoppingBasketIcon" />
                    <sanp className="optionSnap2 basketcount">{basket?.length}</sanp>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
