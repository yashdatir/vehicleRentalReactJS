import React from 'react';
import { Line, Pie } from "react-chartjs-2";
import mapboxgl from 'mapbox-gl';
import Account from '../User/Account';
import Request from '../User/request';
import BuySell from '../User/buysell';
import Map from '../User/map';
import Geolocation from 'react-native-geolocation-service';
import {ExpansionPanel,ExpansionPanelDetails,ExpansionPanelSummary,ExpansionPanelActions,Grid,
  TextField,Chip,Button,Divider,Radio,RadioGroup, Avatar} from '@material-ui/core'
import DateTimePicker from 'react-datetime-picker';
import { Placelabel } from '../../constant';
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
        label: "Ideal Time",
        fill: false,
        borderColor: "rgba(255, 0, 0, 0.3)",
        borderWidth: 1,
        pointRadius: 2,
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: "Runtime",
        fill: false,
        borderColor: "rgba(0, 255, 0, 0.3)",
        borderWidth: 1,
        pointRadius: 2,
        data: [70, 32, 45, 65, 87, 92, 99]
      },
      {
        label: "Total Usage",
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
		'Fuel Usage',
		'Fuel Idle use',
		'Runtime'
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
  constructor(){
    super()
    this.state={
        date: new Date(),
        select: 1
    }
}
onChange=(date)=>{
    this.setState({date})
}
createList=()=>{
  let array=[]
    Placelabel.map((text)=>
     array.push( <Chip key={text.label} className="trip" icon={<Avatar><i className="far fa-check-circle"></i></Avatar>} label={text.label} />)
    )
    return array
}
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
                <Grid style={{marginBottom:'30px'}} container>
            <ExpansionPanel style={{width:'97%'}}>
                <ExpansionPanelSummary
                expandIcon={<i className="fa fa-chevron-down"></i>}
                >My Past Trips:</ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div className="history">
                    {this.createList()}          
                    </div>
            </ExpansionPanelDetails>
        </ExpansionPanel>
                </Grid>

                <Grid style={{marginBottom:'30px'}} container>
            <ExpansionPanel style={{width:'97%'}}>
                <ExpansionPanelSummary
                expandIcon={<i className="fa fa-chevron-down"></i>}
                >My Curation List:</ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <div style={{width:'30%'}} className="container">
                        <div style={{marginLeft:'5px'}} className="row">
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                            <TextField style={{marginLeft:'5px'}} placeholder="From location" />
                            <DateTimePicker onChange={this.onChange} value={this.state.date}/>
                        
                        </div>
                        <div style={{marginLeft:'5px'}} className="row">
                        <i className="fa fa-location-arrow" aria-hidden="true"></i>
                        <TextField style={{marginLeft:'5px'}} placeholder="To location" />
                        <DateTimePicker onChange={this.onChange} value={this.state.date}/>
                        
                        </div>
                        <div className="row">
                        <i className="fa fa-car" aria-hidden="true"></i><label style={{marginLeft:'20px'}}>Method of Travel</label>
                            <RadioGroup style={{height:'30px',width:'70%'}}>
                                2 wheelers<Radio value="2" id="radio" name="radio" />
                                4 wheelers<Radio value="4" id="radio" name="radio" />
                                other<Radio value="other" id="radio" name="radio" />
                            </RadioGroup>
                            </div>
                        </div>
                        </ExpansionPanelDetails>
                        <Divider />
                <ExpansionPanelActions>
                <Button>ADD</Button>
                </ExpansionPanelActions>
        </ExpansionPanel>
                </Grid>

                <Grid style={{marginBottom:'100px'}} container>
            <ExpansionPanel style={{width:'97%'}}>
                <ExpansionPanelSummary
                expandIcon={<i className="fa fa-chevron-down"></i>}
                >My Status:</ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <div className="row">
                <div className="col-sm-3" style={{width:'400px',height:'200px'}}>
                    <Line data={data} options={options} />
                    <p align='center'>Vehicle Graph</p>
                </div>
                <div className="col-sm-3" style={{width:'400px',height:'200px'}}>
                    <Pie data={pieData} options={options} />
                    <p align='center'>Economy Graph</p>
                </div>
                <div id="map" style={{height:'200px'}} className="col-sm-3">
                </div>
                <p align='center'>Current Location</p>
                </div>
                </ExpansionPanelDetails>
        </ExpansionPanel>
                </Grid>
                <Divider />
                <Grid container>
                    <div style={{marginLeft:'30%',width:'100%',marginBottom:'5%'}}>
                    <Button onClick={(e)=>this.setState({select:1})}>ACCOUNT SETTINGS</Button>
                    <Button onClick={(e)=>this.setState({select:2})}>REQUEST CANCELLATION</Button>
                    <Button onClick={(e)=>this.setState({select:3})}>BUY / SELL SECTION</Button>
                    <Button onClick={(e)=>this.setState({select:4})}>OPEN MAP</Button>
                    </div>
                </Grid>
                <Grid container>
                  {
                    this.state.select===1?<Account />
                    :this.state.select===2?<Request />
                    :this.state.select===3?<BuySell />
                    :<Map />
                  }
                </Grid>
            </div>
        )
    }
}
//https://api.mapbox.com/directions/v5/mapbox/driving/-122.42,37.78;-77.03,38.91?access_token=pk.eyJ1IjoieWFzaGRhdGlyIiwiYSI6ImNrOHhoaHk3ODAxdGczbG9ncDJhZThjcHcifQ.8s3bHLIZZvLI8sPjrXEEDQ