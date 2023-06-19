import BasketList from '../../components/BasketList/BasketList';
import DeliveryForm from '../../components/DeliveryForm/DeliveryForm';
import './ShoppingCart.css';
import React, { Component } from 'react';


class ShoppingCart extends Component{

    // componentDidMount () {
    //     const script = document.createElement("script");
    //     const googleLibraryURL="https://maps.googleapis.com/maps/api/js?key="+REACT_APP_GOOGLE_MAP_API_KEY+"&region=UA&libraries=places&callback=initMap"
    //     script.src = googleLibraryURL;
    //     script.async = true;
    //     document.body.appendChild(script);
    // }

    onQuantityChange = (newQuantity, prod_id) => {
        this.props.shoppingCart.forEach(item => {
            if(item.prod_id===prod_id){
                const prevQuantity = item.prod_quantity;
                if (prevQuantity>newQuantity) 
                {
                    const newCartTotal = this.props.cartTotal - (prevQuantity-newQuantity)*item.prod_price;
                    this.props.cartTotalChange(newCartTotal);
                }
                else if (prevQuantity<newQuantity) 
                {
                    const newCartTotal = this.props.cartTotal + (newQuantity-prevQuantity)*item.prod_price;
                    this.props.cartTotalChange(newCartTotal);
                }
                this.setState(Object.assign(item,{prod_quantity:newQuantity}));
            }   
        });
    }

    //change this.props.cartTotal, shoppingCart array and change shopInCart state to 0
    // by calling ifCartEmptyCheck fucntion if basket is empty, when item deleted

    onItemDeleteFromCart = (prod_id, prod_price, prod_quantity) => {
        let newCartTotal = this.props.cartTotal-prod_price*prod_quantity;
        this.props.cartTotalChange(newCartTotal);
        this.props.shoppingCart.forEach((item,ind) => {
            if (prod_id===item.prod_id) {
                const newBasket=this.props.shoppingCart.map(item => item);
                newBasket.splice(ind, 1);
                this.props.shoppingCartChange(newBasket);
                if (newBasket.length===0) this.props.ifCartEmptyCheck();
            }
        })
    }
  
    render(){
       
        return(
            <main className="shopping-cart">
                
                <div className='cart-container'>
                    
                    <DeliveryForm 
                        onEmailChange={this.props.onEmailChange}
                        onPhoneChange={this.props.onPhoneChange}
                        onAddressChange={this.props.onAddressChange}
                        onNameChange={this.props.onNameChange}
                        orderSubmitted={this.props.orderSubmitted}
                        customerInfo={this.props.customerInfo}
                    />  
                    <BasketList 
                        shoppingCart={this.props.shoppingCart} 
                        cartTotal={this.props.cartTotal}
                        onItemDeleteFromCart={this.onItemDeleteFromCart}
                        onQuantityChange={this.onQuantityChange}
                    />
                </div>
                <div className="cart-summary">
                    <div className='cart-total'>Total price: {Number(this.props.cartTotal).toFixed(2)} $</div>
                    <input className="cart-submit" 
                            type="submit" 
                            value="Submit"
                            onClick={this.props.onOrderSubmit}
                    />
                </div>
             </main>
        
        );
    }
} 
    


export default ShoppingCart;