import React from 'react';
import mapboxgl from 'mapbox-gl';
export default class Map extends React.Component{
    constructor(){
        super();
        this.state={
            lon:77.5946,
            lat:12.9716,
            zoom:14
        }
    }
    componentDidMount(){
        mapboxgl.accessToken = 'pk.eyJ1IjoieWFzaGRhdGlyIiwiYSI6ImNrOHhoaHk3ODAxdGczbG9ncDJhZThjcHcifQ.8s3bHLIZZvLI8sPjrXEEDQ';

        new mapboxgl.Map({
                container: 'mapsection', // container id
                style: 'mapbox://styles/mapbox/streets-v10', // stylesheet location
                center: [this.state.lon ,this.state.lat], //[-74.5, 40], starting position [lng, lat]
                zoom: this.state.zoom // starting zoom
            });
            
    }
    render(){
        return(
            <div style={{marginBottom:'20px'}} className='container'>
                <p>MAP: A map makes planning of a journey easy...</p>
                <div className='row'>
                <div id='mapsection' style={{width:'100%',height:'400px',backgroundColor:'#f1f1f1'}}></div>
                </div>
            </div>
        )
    }
}