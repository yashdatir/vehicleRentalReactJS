import React from 'react';
import mapboxgl from 'mapbox-gl';
import { Button } from '@material-ui/core';
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
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [this.state.lon, this.state.lat], //[-74.5, 40], starting position [lng, lat]
    zoom: this.state.zoom // starting zoom
  });
}
    render(){
        return(
            <div style={{marginBottom:'20px'}} className='container'>
                <p>MAP: A map makes planning of a journey easy...</p>
                <div className='row'>
                <div className='col-sm-3'>
                    <ul>
                        <li>
                            Zoom
                            <ul>
                                <li><Button style={{fontSize:'20px'}} onClick={(e)=>this.setState({zoom:this.state.zoom+1})}>+</Button></li>
                                <li><Button style={{fontSize:'20px'}} onClick={(e)=>this.setState({zoom:this.state.zoom-1})}>-</Button></li>
                            </ul>
                        </li>
                        <li>
                            LAT / LON
                            <ul>
                                <li><input value={this.state.lon} style={{width:'35%'}} type='number' /></li>
                                <li><input value={this.state.lat} style={{width:'35%'}} type='number' /></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className='col-sm-9' id='mapsection' style={{width:'70%',height:'400px',backgroundColor:'#f1f1f1'}}></div>
                </div>
            </div>
        )
    }
}