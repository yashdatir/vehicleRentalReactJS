import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import City from './citySelect';
import {Link} from 'react-router-dom';
import './header.scss';
import { TextField, Popper } from '@material-ui/core';
export default class Navbar extends React.Component{
    constructor(){
        super()
        localStorage.getItem('city')?
        this.state={
            modal:false,
            city:localStorage.getItem('city'),
            pop:false,
            anchor:null
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
    logout=()=>{
        localStorage.removeItem('login');
        window.location.reload()
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

                    {
                        localStorage.getItem('login')?
                        <>
                        <button style={{float: 'right', background:'transparent', border:'none'}} onClick={(e)=>this.setState({pop:!this.state.pop, anchor:e.currentTarget})}><Avatar style={{backgroundColor:'orange',float: 'right'}}>{JSON.parse(localStorage.getItem('login')).username.charAt(0).toUpperCase()}</Avatar></button>
                        <Popper open={this.state.pop} anchorEl={this.state.anchor}>
                            <div style={{border:'1px solid', background:'#ffffff', width:'100px', height:'50px'}}>
                            <Link to="/user"><button style={{background:'transparent', border:'none'}}>Dashboard</button></Link>
                            <button style={{background:'transparent', border:'none'}} onClick={this.logout}>Logout</button>
                            </div>
                        </Popper>
                        </>
                        :<Link to="/login"><label style={{float: 'right'}}>Login / Sign Up</label></Link>
                        
                    }
                    


                </div>
                </div>
            </div>
            </>
        )
    }
}