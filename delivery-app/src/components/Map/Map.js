import React, { Component } from "react";
import {GoogleMap, InfoWindow, MarkerF} from '@react-google-maps/api';
import './Map.css';

class Map extends Component {

    constructor(props){
        super(props)
        this.state={
            pickUpMarker:{
                coords:this.props.storeLocation.center,
                address:this.props.storeLocation.address
            },
            deliveryMarker:{
                coords:this.props.deliveryLocation,
                address:this.props.deliveryAddress
            },
            selectedMarker:'pickUpMarker'
        }
            
    }

    pickUpMarkerClicked=() =>{
        this.setState({selectedMarker:'pickUpMarker'})
    }

    closeMarkerInfo=()=>{
        this.setState({selectedMarker:''})
    }

    render(){
    
        return(
            <GoogleMap
            center={this.state.pickUpMarker.coords}
            zoom={this.props.zoomLevel}
            mapContainerClassName="map"
            >
                <MarkerF 
                    position={this.state.pickUpMarker.coords}  
                    label={{text:`Pick Up Here`,color:'#01282e', fontSize: '1rem', fontWeight:'bold'}}
                    icon='pushpin.svg'
                    onClick={this.pickUpMarkerClicked}
                    />
                    {(this.state.selectedMarker==='pickUpMarker') && 
                        <InfoWindow 
                            position={this.state.pickUpMarker.coords} 
                            options={{pixelOffset:new window.google.maps.Size(0,-40)}}
                            onCloseClick={this.closeMarkerInfo}
                        >
                                <div style={{fontSize:".8rem", color:"#01282e", fontWeight:"bold"}}>
                                    {this.state.pickUpMarker.address}
                                </div>
                        </InfoWindow>
                    }   
            </GoogleMap>
        );
    }
}

export default Map;


