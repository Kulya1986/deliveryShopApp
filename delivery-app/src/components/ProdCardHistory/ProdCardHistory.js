import '@blueprintjs/core/lib/css/blueprint.css';
import './ProdCardHistory.css';
import React from 'react';

const ProdCardHistory = ({prod_image, prod_name, prod_price, prod_quantity}) => {
        return(
            <article className='history-product'>
                <div className='history-product-img'>
                    <img  src={prod_image} alt='burger'/>
                </div>
                <div className='history-product-info'>
                    <div className='history-product-name'>
                        <span>{prod_name}</span>
                    </div>
                    <div className='history-product-price'>
                        <span>Price: {prod_price} $</span>
                    </div>
                    <div className='history-product-quantity'>
                        <span>Quantity: {prod_quantity}</span>
                    </div>   
                </div>
            </article>
         );
} 


export default ProdCardHistory;

