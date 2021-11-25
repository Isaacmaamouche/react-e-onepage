import React from "react";
import {hot} from "react-hot-loader";
import "../css/App.scss";
import ShoppingList from '../js/components/ShoppingList.js';
import Banner from '../js/components/Banner.js';
import Cart from '../js/components/Cart.js';
import Footer from '../js/components/Footer.js';
import MainContent from '../js/components/MainContent.js';

import { useState, useEffect } from 'react';

function App() {
  const [cart, updateCart] = useState([]);
  const [cartHasItem, setCartHasItem] = useState(cart.length>0)

  useEffect(() => {
    if(localStorage.getItem('storedCart') !== null){        
        let storedCart = localStorage.getItem('storedCart');
        updateCart(JSON.parse(storedCart));
        setCartHasItem(true);
    }
    localStorage.removeItem('storedCart');
// eslint-disable-next-line
}, []);

useEffect(() => {
        let JSONcart = JSON.stringify(cart); 
        localStorage.setItem('storedCart', JSONcart);
}, [cart]);


  return (
    <div>    
      <Banner/>
      <div className="main">
        <MainContent>
          <ShoppingList cart={cart} updateCart={updateCart} cartHasItem={cartHasItem} setCartHasItem={setCartHasItem}/>
        </MainContent>
        <Cart cart={cart} updateCart={updateCart} cartHasItem={cartHasItem} setCartHasItem={setCartHasItem} />
      </div>
    <Footer />
    </div>
  );
}


export default hot(module)(App);