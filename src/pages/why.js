import React from 'react';
import Navbar from '../components/Navbar/index';
import Footer from '../components/Footer/index';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Grid} from '@material-ui/core';
const options = {
    items: 5,
    nav: true,
    rewind: false,
    autoplay: false,
    loop:true,
    margin:60
};
function WHY(){
    return (
        <div>
            <Navbar />
            <p style={{paddingTop:'15px',fontWeight:900}} align='center'>WHY US PAGE</p>
            <p style={{paddingLeft:'60px',paddingRight:'60px', textAlign:'justify', wordSpacing:'5px',lineHeight:'24px'}}>
            Our Aim is to design and create a data management System for a Vehicle rental service. This enables
admin can rent a vehicle that can be used by a customer. By paying the money during a Specified Period of
time. This system increases customer retention and simplify vehicle and staff Management in an efficient way.
This software Vehicle Rental System has a very user friendly interface. Thus the users will feel very
easy to work on it. By using this system admin can manage their rental, payment, employment issues and
vehicle issues such as and insurance. The vehicle information can be added to the system. Or existed vehicle
information can be edited or deleted too by Administrator. The transaction reports of the vehicle rental service
can be retrieved by the admin, when its required. Thus, there is no delay in the availability of any vehicle
information, whenever needed, vehicle information can be Captured very quickly and easily.
The customers can also use the system to get vehicle rent. The customer should create a new account
before logging in or he / she can log into the System with his/her created account. Then he/she can view the
available vehicles in a branch and make a reservation for a Vehicle. This system will helpful to the admin as
well as to the customer also. 
            </p>
            <p style={{paddingLeft:'60px',paddingRight:'60px', textAlign:'justify', wordSpacing:'5px',lineHeight:'24px'}}>
            In order to revolutionize the idea of Integrated Vehicle Rental and Management System,
we have made this project which will also facilitate the customer with proper finance
and opportunities of transport, commute, travel, explore, work etc. This will help in
developing easy employment, proper taxi management and also commute to the users.
Due to no limitations on the type of vehicle, this is a flexible option for a provider and
customer.
An extensive use to Blitzscaling is made as a business model. The approach from zero
to one is known to all but this is the approach from one to one billion. Silicon Valley is
renowned for its striking number of businesses which have grown from garage startups into global giants; Apple, Cisco, Google, Hp and Intel to name a few. But what is
the secret to their outstanding success? The answer is they’ve learnt how to blitzscale.
1.2 Definition
Vehicle Rental System is a umbrella system comprising many subsystems like Vehicle
Rental portal, Vehicle Sales and Services, Driver on Demand Service, Roadside
Assistance, Ease of Billing etc. It will provide service for a vehicle rental, sales, leasing,
roadside assistance and other related services. It has a web service for each of the
service to facilitate the user with the required data or information. Also the sales and
rental services are done according to law. The feature also facilitate user with rental or
leasing of a commercial vehicle according to user requirement. 
            </p>

            <Grid style={{padding:'30px'}} container>
            <p style={{paddingTop:'15px',fontWeight:900,textAlign:'center',width:'100%'}}>OUR DEALS</p>
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
            <Footer />
        </div>
    )
}
export default WHY