import '@blueprintjs/core/lib/css/blueprint.css';
import {Button, NumericInput} from '@blueprintjs/core';
import './BasketItem.css';
import React, { Component } from 'react';

class BasketItem extends Component{

    render(){
        return(
            <article className='cart-product'>
                <div className='cart-product-img'>
                    <img  src={this.props.prod_image} alt='burger'/>
                </div>
                <div className='cart-product-info'>
                    <div className='cart-product-name'>
                        <span>{this.props.prod_name}</span>
                    </div>
                    <div className='cart-product-price'>
                        <span>Price: {this.props.prod_price} $</span>
                    </div>
                    <div className='cart-product-quantity'>
                        <NumericInput 
                            className='quantity-input' 
                            min={1} max={10} 
                            value={this.props.prod_quantity} 
                            fill 
                            minorStepSize={null} 
                            stepSize={1}
                            onValueChange={(valueAsNumber)=>{this.props.onQuantityChange(valueAsNumber,this.props.prod_id)}}
                        />
                    </div>
                </div>
                <Button 
                    className='bp4-minimal cart-product-remove' 
                    icon='cross-circle'
                    onClick={()=>{this.props.onItemDeleteFromCart(this.props.prod_id,this.props.prod_price,this.props.prod_quantity)}}/>
            </article>
         );
    }
} 


export default BasketItem;

