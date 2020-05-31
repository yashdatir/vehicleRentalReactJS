import React from 'react';
import {ExpansionPanel,ExpansionPanelDetails,ExpansionPanelSummary,ExpansionPanelActions,Grid,
    TextField,Chip,Button,Divider,Select,MenuItem,Radio,RadioGroup, Avatar} from '@material-ui/core'
import DateTimePicker from 'react-datetime-picker';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './header.scss';
import { Placelabel } from  '../../constant';
const options = {
    items: 5,
    nav: true,
    rewind: false,
    autoplay: false,
    loop:true,
    margin:60
};

export default class Banner extends React.Component{
    constructor(){
        super()
        this.state={
            date: new Date()
        }
    }
    onChange=(date)=>{
        this.setState({date})
    }
    createList=()=>{
        let array=[]
          Placelabel.map((text)=>
           array.push( <Chip className="trip" icon={<Avatar><i className="far fa-check-circle"></i></Avatar>} label={text.label} />)
          )
          return array
      }
    render(){
        return(
            <>
        <div className="homepage-main container-fluid">
            <div className="row" style={{width:'80%',height:'500px',marginLeft:'10%',marginTop:'5%'}}>
                <Grid style={{marginTop:'25px'}} container spacing={3}>
                    <Grid item xs>
                <ExpansionPanel style={{width:'300px'}}>
                    <ExpansionPanelSummary expandIcon={<i className="fa fa-chevron-down"></i>}>
                        Create a Trip...
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <div className="container" >
                            <div className="row">
                            <i className="fas fa-home"></i><TextField style={{marginLeft:'15px'}} placeholder="From Location" />
                            </div>
                            <div className="row">
                            <i className="fas fa-route"></i><TextField style={{marginLeft:'16px'}} placeholder="To Location" />
                            </div>
                            <div className="row">
                            <i className="fas fa-truck-monster"></i>
                            <Select style={{width:'52%',marginLeft:'12px'}}>
                                <MenuItem selected>Bike/Scooter/Scooty</MenuItem>
                                <MenuItem>Car/Jeep/Van</MenuItem>
                                <MenuItem>Bus/Truck/Multi-Axle</MenuItem>
                            </Select>
                            </div>
                            <div className="row">
                            <i className="fas fa-hotel"></i><label style={{marginLeft:'20px'}}>Accomodation</label>
                            <RadioGroup style={{height:'30px',width:'70%'}}>
                                Hotel<Radio value="Hotel" id="radio" name="radio" />
                                Motel<Radio value="Motel" id="radio" name="radio" />
                                None<Radio value="None" id="radio" name="radio" />
                            </RadioGroup>
                            </div>
                        </div>
                    </ExpansionPanelDetails>
                    <Divider />
                    <ExpansionPanelActions>
                        <Button>Create</Button>
                        <Button>Cancel</Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>
                </Grid>
                
                <Grid item xs>
                <ExpansionPanel style={{width:'300px'}}>
                    <ExpansionPanelSummary expandIcon={<i className="fa fa-chevron-down"></i>}>
                        Estimate Trip Cost...
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <div className="container">
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
                         <Button>Find a Way</Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>
                </Grid>
                
                <Grid item xs>
                <ExpansionPanel style={{width:'300px'}}>
                    <ExpansionPanelSummary expandIcon={<i className="fa fa-chevron-down"></i>}>
                        Long term Booking...
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <div className="container">
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
                         <Button>Get Estimate</Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>
                </Grid>
                </Grid>

                <Grid style={{marginTop:'100px'}} container>
            <ExpansionPanel style={{width:'97%'}}>
                <ExpansionPanelSummary
                expandIcon={<i className="fa fa-chevron-down"></i>}
                >My Trips:</ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div className="history">{this.createList()}</div>
            </ExpansionPanelDetails>
        </ExpansionPanel>
                </Grid>
            </div>          
        </div>
        <Grid style={{padding:'30px',marginTop:'-50px'}} container>
            <p className="carouselHead">OUR DEALS</p>
                <OwlCarousel className="owl-theme" {...options}>
                <div className="item homeCarousel5"><p className="textCar">Bikes</p></div>
                <div className="item homeCarousel6"><p className="textCar">Speed Bikes</p></div>
                <div className="item homeCarousel7"><p className="textCar">Scooter</p></div>
                    <div className="item homeCarousel1"><p className="textCar">Small Cars</p></div>
                    <div className="item homeCarousel2"><p className="textCar">Large Cars</p></div>
                    <div className="item homeCarousel3"><p className="textCar">Premium Bus</p></div>
                    <div className="item homeCarousel4"><p className="textCar">Normal Bus</p></div>
                </OwlCarousel>
            </Grid>
            <div id="aboutus">
            <Grid style={{padding:'30px',marginTop:'-50px'}} container>
            <p className="carouselHead">ABOUT US</p>
                
            </Grid>
            </div>
        </>
        )}
}