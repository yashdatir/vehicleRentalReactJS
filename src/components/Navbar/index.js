import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import City from './citySelect';
import {Link} from 'react-router-dom';
import './header.scss';
import { TextField } from '@material-ui/core';
export default class Navbar extends React.Component{
    constructor(){
        super()
        localStorage.getItem('city')?
        this.state={
            modal:false,
            city:localStorage.getItem('city')
        }
        :
        this.state={
            modal:true,
            city:'Vadodara'
        }
    }
    closeModal=()=>{
        this.setState({modal:false})
    }
    openModal=()=>{
        this.setState({modal:true})
    }
    setCity=(city)=>{
        this.setState({city:city,modal:false})
        localStorage.setItem('city',city)
    }
    render(){
        return(
            <>
            <City setCity={this.setCity} open={this.state.modal} onClose={this.closeModal} />
            <div className="headerBody container-fluid">
                <div className="rows">
                <div className="logo col-sm-4">&nbsp;</div>
                <div onClick={this.openModal} className="city col-sm-4">
                    {this.state.city}
                </div>
                <div className="other col-sm-8">
                <i style={{marginLeft:'75px'}} className="fa fa-search" aria-hidden="true"></i>
                    <TextField 
                    style={{marginLeft:'5px'}}
                    placeholder="Explore More..." 
                    className="search" />
                    <Link to="/login"><Avatar style={{backgroundColor:'orange',float: 'right'}}>Y</Avatar></Link>
                </div>
                </div>
            </div>
            </>
        )
    }
}