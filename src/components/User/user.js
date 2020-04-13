import React from 'react';
import { Line, Pie } from "react-chartjs-2";
import mapboxgl from 'mapbox-gl';
import Geolocation from 'react-native-geolocation-service';
import {Grid} from '@material-ui/core';
const data = {
    labels: [
      "01/01/2019",
      "02/01/2019",
      "03/01/2019",
      "04/01/2019",
      "05/01/2019",
      "06/01/2019",
      "07/01/2019"
    ],
    datasets: [
      {
        label: "HSN",
        fill: false,
        borderColor: "rgba(255, 0, 0, 0.3)",
        borderWidth: 1,
        pointRadius: 2,
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: "CPX",
        fill: false,
        borderColor: "rgba(0, 255, 0, 0.3)",
        borderWidth: 1,
        pointRadius: 2,
        data: [70, 32, 45, 65, 87, 92, 99]
      },
      {
        label: "Total",
        fill: false,
        borderColor: "blue",
        borderWidth: 2,
        pointRadius: 2,
        data: [135, 91, 125, 144, 143, 143, 139]
      }
    ]
  };
  var options = {
    legend: {
      position: "right",
      labels: {
        boxWidth: 10
      }
    },
    scales: {
      xAxes: [
        {
          ticks: { display: false }
        }
      ]
    }
  };

const pieData = {
	labels: [
		'Red',
		'Blue',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'rgba(255,0,0, 1)',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};
export default class User extends React.Component{
    componentDidMount(){
            Geolocation.getCurrentPosition(
                (position) => {
                    mapboxgl.accessToken = 'pk.eyJ1IjoieWFzaGRhdGlyIiwiYSI6ImNrOHhoaHk3ODAxdGczbG9ncDJhZThjcHcifQ.8s3bHLIZZvLI8sPjrXEEDQ';
                new mapboxgl.Map({
                container: 'map', // container id
                style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
                center: [position.coords.longitude ,position.coords.latitude], //[-74.5, 40], starting position [lng, lat]
                zoom: 14 // starting zoom
            });
            console.log(position.coords.longitude ,position.coords.latitude)
            },
            (error) => {
                console.log(error.code, error.message);
            },
            { 
                enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
    }
    render(){
        return(
            <div style={{marginTop:'75px'}} className="container">
                <div className="row">
                <div className="col-sm-3" style={{width:'400px',height:'200px'}}>
                    <Line data={data} options={options} />
                </div>
                <div className="col-sm-3" style={{width:'400px',height:'200px'}}>
                    <Pie data={pieData} options={options} />
                </div>
                <div id="map" className="col-sm-3">
                </div>
                </div>
                <div style={{textAlign:'center'}} className="row">
                <div className="col-sm-4">
                Vehicle Graph
                </div>
                <div className="col-sm-4">
                Economy Graph
                </div>
                <div className="col-sm-4">
                Current Location
                </div>
                </div>
                <Grid container>
                  <Grid>
                    
                  </Grid>
                </Grid>
            </div>
        )
    }
}
//https://api.mapbox.com/directions/v5/mapbox/driving/-122.42,37.78;-77.03,38.91?access_token=pk.eyJ1IjoieWFzaGRhdGlyIiwiYSI6ImNrOHhoaHk3ODAxdGczbG9ncDJhZThjcHcifQ.8s3bHLIZZvLI8sPjrXEEDQ