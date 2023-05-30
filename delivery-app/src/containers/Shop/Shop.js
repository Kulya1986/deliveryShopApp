import ShopsList from '../../components/ShopsList/ShopsList';
import ProdList from '../../components/ProdList/ProdList';
import './Shop.css';
import React from 'react';


const Shop =({activeShop, shopInCart, activeShopChange, onAddToCart}) =>{
    return(
        <main className='shop-container'>
            <ShopsList 
                activeShop={activeShop} 
                shopInCart={shopInCart}
                activeShopChange={activeShopChange}
            />
            <ProdList 
                activeShop={activeShop} 
                onAddToCart={onAddToCart}
            />
        </main>
    );
} 
    

export default Shop;