import '@blueprintjs/core/lib/css/blueprint.css';
import {Icon} from '@blueprintjs/core';
import './ProdCard.css';
import React from 'react';

const ProdCard = ({ prod_name, prod_price,prod_id,prod_image, onAddToCart}) => {

 return(
    <article className='product'>
        <img className='product-img' src={prod_image} alt='burger'/>
        <div className='product-name'>
            <span>{prod_name}</span>
        </div>
        <div className='product-price'>
            <span>{prod_price} $</span>
        </div>
        <div style={{textAlign:'center'}}>
            <button className="product-add-button" onClick={()=>{onAddToCart(prod_id, prod_name, prod_price,prod_image, 1)}}>
                <span>
                    Add to cart
                </span>
                <Icon  icon="shopping-cart" size={24}/>
            </button>
        </div>

    </article>
 );
}


export default ProdCard;

