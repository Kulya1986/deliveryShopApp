
import './DeliveryForm.css';
import React from 'react';


const DeliveryForm =({onEmailChange, onPhoneChange, onAddressChange, onNameChange, orderSubmitted, customerInfo}) => {
    if(!orderSubmitted){
        return(
            <section className="delivery-form">
                        <div className="form-input">
                            <label className="del-form-input" htmlFor="first-name">Name</label>
                            <input onChange={onNameChange} className="" type="text" name="first-name"  id="first-name" value={customerInfo.customer_name}/>
                        </div>
                        <div className="form-input">
                            <label className="del-form-input" htmlFor="email-address">Email</label>
                            <input onChange={onEmailChange} className="" type="email" name="email-address"  id="email-address" value={customerInfo.customer_email}/>
                        </div>
                        <div className="form-input">
                            <label className="del-form-input" htmlFor="phone">Phone</label>
                            <input onChange={onPhoneChange} className="" type="text" name="phone"  id="phone" value={customerInfo.customer_phone}/>
                        </div>
                        <div className="form-input">
                            <label className="del-form-input" htmlFor="address">Address</label>
                            <input onChange={onAddressChange} className="" type="text" name="address"  id="address" value={customerInfo.customer_address}/>
                        </div>
            </section>
        );
    }else{
        return(
            <section className="delivery-form">
                <p>
                    Your order was successfully placed. Visit our shops page to order more products.
                </p>
            </section>
        );
    }
    
}
    


export default DeliveryForm;