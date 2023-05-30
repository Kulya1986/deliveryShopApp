
import './OrdersHistoryForm.css';
import React from 'react';


const OrdersHistoryForm = ({customerDetails, onEmailChange, onPhoneChange, requestSubmit}) => {
    
        return(
            <section className="orders-history-form">
                        <div className="history-input">
                            <label className="history-form-input" htmlFor="email-address">Email</label>
                            <input onChange={onEmailChange} className="" type="email" name="email-address"  id="email-address" value={customerDetails.customer_email}/>
                        </div>
                        <div className="history-input">
                            <label className="history-form-input" htmlFor="phone">Phone</label>
                            <input onChange={onPhoneChange} className="" type="text" name="phone"  id="phone" value={customerDetails.customer_phone}/>
                        </div>
                        <input className="history-submit" 
                            type="submit" 
                            value="Orders"
                            onClick={requestSubmit}
                    />
            </section>
        );

}
    


export default OrdersHistoryForm;