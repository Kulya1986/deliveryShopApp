import '@blueprintjs/core/lib/css/blueprint.css';
import './ShopsList.css'
import React, { Component } from 'react';

class ShopsList extends Component {
    constructor(props){
        super(props);
        this.state={
            shopsList:[]
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/shops',{
            method: "GET",
            headers:{'Content-Type':'application/json'}
        }).then(response => response.json())
            .then(shops => {
                this.setState({shopsList:shops});
            })
            .catch(err => {
                console.log(err);
            }) 
    }

    render(){
        if (this.props.activeShop === 0){
            return(
                    <div className='shops'>
                        { 
                            this.state.shopsList.map(shop => {
                                return(
                                    <button onClick={()=>{this.props.activeShopChange(shop.shop_id)}} className='shop-button zoomed' key={shop.shop_id} type='button' value={shop.shop_id}>{shop.shop_name}</button>
                                );  
                            })
                        }    
                    </div>
            );
        } else if(this.props.shopInCart===0)
        {
            return (
                    <div className='shops'>
                        {
                            this.state.shopsList.map(shop => {
                                if (shop.shop_id === this.props.activeShop)
                                {
                                    return(
                                        <button onClick={()=>{this.props.activeShopChange(shop.shop_id)}} className='shop-button shop-button-selected'  key={shop.shop_id} type='button' value={shop.shop_id}>{shop.shop_name}</button>
                                    );  
                                } else
                                {
                                    return(
                                        <button onClick={()=>{this.props.activeShopChange(shop.shop_id)}} className='shop-button zoomed' key={shop.shop_id} type='button' value={shop.shop_id}>{shop.shop_name}</button>
                                    );
                                }   
                                })
                        }  
                    </div>
            );
        }else
        {
            return (
                <div className='shops'>
                    {
                        this.state.shopsList.map(shop => {
                            if (shop.shop_id === this.props.shopInCart)
                            {
                                return(
                                    <button className='shop-button shop-button-selected'  key={shop.shop_id} type='button' value={shop.shop_id}>{shop.shop_name}</button>
                                );  
                            } else
                            {
                                return(
                                    <button className='shop-button' key={shop.shop_id} type='button' value={shop.shop_id} disabled>{shop.shop_name}</button>
                                );
                            }   
                            })
                    }   
                    
                </div>
            );   
        }
    }
}

export default ShopsList;

