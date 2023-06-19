
import './DeliveryForm.css';
import React from 'react';
import Map from '../../components/Map/Map';
import { useLoadScript } from '@react-google-maps/api';
import AddressField from '../AddressInput/AddressInput';
// import AutoComplete from 'react-google-autocomplete';


const DeliveryForm =({onEmailChange, onPhoneChange, onAddressChange, onNameChange, orderSubmitted, customerInfo}) => {

//setting up details of pick up store
    // storeLocationChange(){

    // }
//setting up details of customer address
    // deliveryLocationChange(delivery){
    //     this.setState(Object.assign(this.state.deliveryLocation,{lat:delivery.lat}));
    //     this.setState(Object.assign(this.state.deliveryLocation,{lng:delivery.lng}));
    //     console.log('deliveryLocation', this.state.deliveryLocation);
    // }

        const [storeLocation /*, setStoreLocation*/] = React.useState(
                {
                    address: 'Stepana Bandery Ave, 47, Ternopil, Ternopil Oblast, 46002',
                    center:{
                        lat: 49.550953,
                        lng: 25.6197123
                    }    
                }
            );
        const [deliveryLocation/*, setDeliveryLocation*/] = React.useState(
                {
                    lat: 49.550953,
                    lng: 25.6197123
                }
            );

        const {isLoaded} = useLoadScript({
            googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
            libraries: ["places"],
        })
        // const mapRef = React.useRef();
        // const onMapLoad = React.useCallback(map => {
        //     mapRef.current = map;
        // }, []);

        let mapSection;

        if (!isLoaded) 
            mapSection=<div>Loading map...</div>
        else  
            mapSection=<Map 
                        storeLocation={storeLocation} 
                        deliveryLocation={deliveryLocation}
                        deliveryAddress={customerInfo.customer_address}
                        zoomLevel={15} 
                        id="map" 
                        />
        if(!orderSubmitted){
            return(
                <section className="delivery-form">
                            {mapSection}
                            <div className="form-input">
                                <label className="del-form-input" htmlFor="address">Address</label>
                                {/* <input onChange={onAddressChange} className="" type="text" name="address"  id="address" value={customerInfo.customer_address}/> */}
                                <AddressField onAddressChange={onAddressChange} /*deliveryLocationChange={deliveryLocationChange}*//>
                            </div>
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


  



 // const panTo = React.useCallback(({ lat, lng }) => {
    //     mapRef.current.panTo({ lat, lng });
    //     mapRef.current.setZoom(12);
    //     let map = mapRef.current;
    
    //     let request = {
    //       location: { lat, lng },
    //       radius: "500",
    //       type: ["hospital"]
    //     };
    //     service = new google.maps.places.PlacesService(mapRef.current);
    //     service.nearbySearch(request, callback);
    //     function callback(results, status) {
    //         if (status === google.maps.places.PlacesServiceStatus.OK) {
    //             for (let i = 0; i < results.length; i++) {
    //                 let place = results[i];
    //                 new google.maps.Marker({
    //                         position: place.geometry.location,
    //                         map
    //                 });
    //             }
    //         }
    //     }
    // }, []);