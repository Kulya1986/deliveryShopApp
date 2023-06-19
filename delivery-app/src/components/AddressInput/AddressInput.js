import React from "react";
import './AddressInput.css';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from "use-places-autocomplete";

const AddressField = ({onAddressChange/*,setDeliveryLocation*/}) =>{

    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions
      } = usePlacesAutocomplete({
        requestOptions: {
            location:{lat:49.5,lng:25.5 },
            radius:100*1000
          /* Define search scope here */
        },
        debounce: 500
      });
    
      const handleInput = e => {
        // Update the keyword of the input element
        setValue(e.target.value);
      };
    
      const handleSelect = ({ description }) => () => {
        // When user selects a place, we can replace the keyword without request data from API
        // by setting the second parameter to "false"
        setValue(description, false);
        console.log('description', description);
        onAddressChange(description);
        clearSuggestions();
    
        // Get latitude and longitude via utility functions
        getGeocode({ address: description })
          .then(results => getLatLng(results[0]))
          .then(({ lat, lng }) => {
            console.log({lat,lng});
            // setDeliveryLocation({lat,lng});
            // panTo({ lat, lng });
          })
          .catch(error => {
            console.log("😱 Error: ", error);
          });
      };
    
      const renderSuggestions = () =>
        data.map(suggestion => {
          const {
            place_id,
            structured_formatting: { main_text, secondary_text }
          } = suggestion;
    
          return (
            <li key={place_id} onClick={handleSelect(suggestion)}>
              <strong>{main_text}</strong> <small>{secondary_text}</small>
            </li>
          );
        });
    
      return (
        <div>
          <input
            className="address-input"
            name="address"  
            id="address"
            value={value}
            onChange={handleInput}
            disabled={ready}
            placeholder="Type your address"
          />
          {/* We can use the "status" to decide whether we should display the dropdown or not */}
          {status === "OK" && <ul>{renderSuggestions()}</ul>}
        </div>
      );

}

export default AddressField;