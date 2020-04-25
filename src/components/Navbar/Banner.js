import React from 'react';
import {ExpansionPanel,ExpansionPanelDetails,ExpansionPanelSummary,ExpansionPanelActions,Grid,
    TextField,Chip,Button,Divider,Select,MenuItem,Radio,RadioGroup, Avatar} from '@material-ui/core'
import DateTimePicker from 'react-datetime-picker';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './header.scss';
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
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                            <TextField style={{marginLeft:'5px'}} placeholder="From location" />
                            <DateTimePicker onChange={this.onChange} value={this.state.date}/>
                        
                        </div>
                        <div style={{marginLeft:'5px'}} className="row">
                        <i class="fa fa-location-arrow" aria-hidden="true"></i>
                        <TextField style={{marginLeft:'5px'}} placeholder="To location" />
                        <DateTimePicker onChange={this.onChange} value={this.state.date}/>
                        
                        </div>
                        <div className="row">
                        <i class="fa fa-car" aria-hidden="true"></i><label style={{marginLeft:'20px'}}>Method of Travel</label>
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
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                            <TextField style={{marginLeft:'5px'}} placeholder="From location" />
                        <DateTimePicker onChange={this.onChange} value={this.state.date}/>
                        </div>
                        <div style={{marginLeft:'5px'}} className="row">
                        <i class="fa fa-location-arrow" aria-hidden="true"></i>
                        <TextField style={{marginLeft:'5px'}} placeholder="To location" />
                        <DateTimePicker onChange={this.onChange} value={this.state.date}/>
                        </div>
                        <div className="row">
                        <i class="fa fa-car" aria-hidden="true"></i><label style={{marginLeft:'20px'}}>Method of Travel</label>
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
                    <div className="history">
                    <Chip className="trip" icon={<Avatar><i className="far fa-check-circle"></i></Avatar>} label="Bengaluru, Karnataka" />
            <Chip className="trip" icon={<Avatar><i className="far fa-check-circle"></i></Avatar>} label="Nandi Hills, Karnataka" />
            <Chip className="trip" icon={<Avatar><i className="far fa-check-circle"></i></Avatar>} label="Dodaballapur, Chikballapur, Karnataka" />
            <Chip className="trip" icon={<Avatar><i className="far fa-check-circle"></i></Avatar>} label="Vadodara, Gujarat" />
            <Chip className="trip" icon={<Avatar><i className="far fa-check-circle"></i></Avatar>} label="Ahmedabad, Gujarat" />
            <Chip className="trip" icon={<Avatar><i className="far fa-check-circle"></i></Avatar>} label="Devbhumi Dwarka, Gujarat" />
            <Chip className="trip" icon={<Avatar><i className="far fa-check-circle"></i></Avatar>} label="Diu, Diu & Daman" />
            <Chip className="trip" icon={<Avatar><i className="far fa-check-circle"></i></Avatar>} label="Daman, Diu & Daman" />
            <Chip className="trip" icon={<Avatar><i className="far fa-check-circle"></i></Avatar>} label="Silvasa, Dadra and Nagar Haveli" />
            <Chip className="trip" icon={<Avatar><i className="far fa-check-circle"></i></Avatar>} label="Panipat, Haryana" />
            <Chip className="trip" icon={<Avatar><i className="far fa-check-circle"></i></Avatar>} label="Karnal, Haryana" />
            <Chip className="trip" icon={<Avatar><i className="far fa-check-circle"></i></Avatar>} label="Kurukshetra, Haryana" />
            <Chip className="trip" icon={<Avatar><i className="far fa-check-circle"></i></Avatar>} label="Chandigarh, Chandigarh" />
            <Chip className="trip" icon={<Avatar><i className="far fa-check-circle"></i></Avatar>} label="Shimla, Himachal Pradesh" />
            <Chip className="trip" icon={<Avatar><i className="far fa-check-circle"></i></Avatar>} label="Nainital, Uttrakhand" />
            <Chip className="trip" icon={<Avatar><i className="far fa-check-circle"></i></Avatar>} label="Haridwar, Uttrakhand" />
            <Chip className="trip" icon={<Avatar><i className="far fa-check-circle"></i></Avatar>} label="Rishikesh, Uttrakhand" />
            <Chip className="trip" icon={<Avatar><i className="far fa-check-circle"></i></Avatar>} label="Delhi" />
            <Chip className="trip" icon={<Avatar><i className="far fa-check-circle"></i></Avatar>} label="Mathura, Uttar Pradesh" />
            <Chip className="trip" icon={<Avatar><i className="far fa-check-circle"></i></Avatar>} label="Agra, Uttar Pradesh" />
            <Chip className="trip" icon={<Avatar><i className="far fa-check-circle"></i></Avatar>} label="Indore, Madhya Pradesh" />
            <Chip className="trip" icon={<Avatar><i className="far fa-check-circle"></i></Avatar>} label="Alirajpur, Madhya Pradesh" />
            <Chip className="trip" icon={<Avatar><i className="far fa-check-circle"></i></Avatar>} label="Ujjain, Madhya Pradesh" />
            <Chip className="trip" icon={<Avatar><i className="far fa-check-circle"></i></Avatar>} label="Kolhapur, Maharashtra" />
            <Chip className="trip" icon={<Avatar><i className="far fa-check-circle"></i></Avatar>} label="Mumbai, Maharashtra" />
            <Chip className="trip" icon={<Avatar><i className="far fa-check-circle"></i></Avatar>} label="Pune, Maharashtra" />
            <Chip className="trip" icon={<Avatar><i className="far fa-check-circle"></i></Avatar>} label="Nashik, Maharashtra" />
            <Chip className="trip" icon={<Avatar><i className="far fa-check-circle"></i></Avatar>} label="Ahmednagar, Maharashtra" />
            <Chip className="trip" icon={<Avatar><i className="far fa-check-circle"></i></Avatar>} label="Hyderabad, Telangana" />
            <Chip className="trip" icon={<Avatar><i className="far fa-check-circle"></i></Avatar>} label="Chennai, Tamil Nadu" />
            <Chip className="trip" icon={<Avatar><i className="far fa-check-circle"></i></Avatar>} label="Tirumala, Andhra Pradesh" />
            <Chip className="trip" icon={<Avatar><i className="far fa-check-circle"></i></Avatar>} label="Raipur, Chattisgarh" />
            <Chip className="trip" icon={<Avatar><i className="far fa-check-circle"></i></Avatar>} label="Goa" />
            <Chip className="trip" icon={<Avatar><i className="far fa-check-circle"></i></Avatar>} label="Andaman, Andaman and Nicobar" />
            <Chip className="trip" icon={<Avatar><i className="far fa-check-circle"></i></Avatar>} label="Havelock, Andaman and Nicobar" />           
            </div>
            </ExpansionPanelDetails>
        </ExpansionPanel>
                </Grid>
            </div>          
        </div>
        <Grid style={{padding:'60px'}} container>
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
        </>
        )}
}