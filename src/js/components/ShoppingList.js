import React from "react";
import '../../css/ShoppingList.scss';
import plantList from '../../datas/planList.js';
import PlantItem from './PlantItem.js';
import Categories from './Categories.js';
import { useState } from 'react';


function ShoppingList({cart, updateCart, cartHasItem, setCartHasItem}) {

    let catSelected;
    if(document.querySelector('.categories_selector>option:checked') == null){
        catSelected = "all_categories";
    }else{
        catSelected = document.querySelector('.categories_selector>option:checked').getAttribute('value');
    } ;
    const [categories, setCategories] = useState(catSelected);

    function SetCategoryFilter(plant){
        if(catSelected !== "all_categories"){
            return plant.category === catSelected
        }else{
            return true
        }
    }

    return (
        <div className="lmj-plants">
            <Categories plantList={plantList} categories={categories} setCategories={setCategories} />
                
            <ul className='lmj-plant-list'>
                {plantList.filter(
                    (plant) => SetCategoryFilter(plant)
                    
                ).map(({name, id, category, price, cover, water, light, isBestSale, isSpecialOffer}) => (
                    <PlantItem 
                        name={name}
                        id={id}
                        category={category}
                        price={price}
                        cover={cover}
                        water={water}
                        light={light}
                        isBestSale={isBestSale}
                        isSpecialOffer={isSpecialOffer}
                        cart={cart}
                        updateCart={updateCart}
                        cartHasItem={cartHasItem}
                        setCartHasItem={setCartHasItem}
                    />
                ))}               
            </ul>
        </div>
    )
};

export default ShoppingList; 