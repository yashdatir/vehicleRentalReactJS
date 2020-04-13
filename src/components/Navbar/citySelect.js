import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Modal from '@material-ui/core/Modal';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './header.scss';
import blr from '../../images/banglore.jpg';
import ahd from '../../images/ahmedabad.webp';
import hyd from '../../images/hyderabad.webp';
import del from '../../images/delhi.png';
import mum from '../../images/mumbai.webp';
const options = {
    items: 4,
    nav: true,
    rewind: false,
    autoplay: false,
    loop:false,
    margin:60
};
const city=[
{city:'Bengaluru',url:blr},
{city:'Ahmedabad',url:ahd},
{city:'Mumbai',url:mum},
{city:'Hyderabad',url:hyd},
{city:'Delhi',url:del}]

export default class City extends React.Component{
    
    expandCity=()=>{
        let array=[]
        city.map((cityS)=>
            array.push(<div key={cityS.city} className="item" onClick={()=>this.props.setCity(cityS.city)}>
                <img style={{width:'200px',height:'200px'}} src={cityS.url} alt="CarouselImage" />
                <h4>{cityS.city}</h4>
            </div>)
        )
        return array
    }
    render(){
        return(
            <div className="city-modal">
            <Modal open={this.props.open} onClose={this.props.onClose} disablePortal disableEnforceFocus disableAutoFocus>
            <div style={{zIndex:'1000',marginLeft:'15%',backgroundColor:'#fff',marginTop:'5%',width:'70%',height:'60%',borderRadius:'30px'}}>
                <h3 className="city-modal-heading">Please Select Your City</h3>
                <center>
                <div style={{width:'80%',marginTop:'50px'}}>
                <OwlCarousel className="owl-theme" {...options}>
                    {this.expandCity()}
                </OwlCarousel>
                </div>
                </center>
            </div>
            </Modal>
            </div>
        )
    }
}