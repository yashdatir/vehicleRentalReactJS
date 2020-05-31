import React from 'react';
import { TextField, Button, Select, MenuItem } from '@material-ui/core';
export default class Account extends React.Component{
    constructor(){
        super()
        this.state={
            edit: true
        }
    }
    render(){
        return(
            <div style={{width:'100%'}}>
                <div style={{borderBottom:'2px SOLID black'}}><label>Account Settings:</label><Button onClick={(e)=>
                    this.state.edit?
                    this.setState({edit:false})
                    :this.setState({edit:true})
                    } style={{float:'right'}}>Edit</Button></div>
                <div style={{margin:'15px'}} className='row'>
                <div className='col-sm-4'>
                <TextField disabled={this.state.edit} style={{width:'100%'}} label="First name" defaultValue="Yash" variant="outlined"/>
                </div>
                <div className='col-sm-4'>
                <TextField disabled={this.state.edit} style={{width:'100%'}} label="Middle name" defaultValue="Ajay" variant="outlined"/>
                </div>
                <div className='col-sm-4'>
                <TextField disabled={this.state.edit} style={{width:'100%'}} label="Last name" defaultValue="Datir" variant="outlined"/>
                </div>
                </div>
                
                <div style={{margin:'15px'}} className='row'>
                <div className='col-sm-4'>
                <TextField disabled={this.state.edit} style={{width:'100%'}} label="DL number" defaultValue="GJ 06 JC 0441" variant="outlined"/>
                </div>
                <div className='col-sm-4'>
                <TextField disabled={this.state.edit} style={{width:'100%'}} label="District" defaultValue="Vadodara" variant="outlined"/>
                </div>
                <div className='col-sm-4'>
                <TextField disabled={this.state.edit} style={{width:'100%'}} label="State" defaultValue="Gujarat, India" variant="outlined"/>
                </div>
                </div>

                <div style={{margin:'15px'}} className='row'>
                <div className='col-sm-4'>
                    <Select disabled={this.state.edit} style={{width:'100%'}} label="Gender" variant="outlined">
                        <MenuItem value="Male" selected>Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                    </Select>
                </div>
                <div className='col-sm-4'>
                <TextField disabled={this.state.edit} style={{width:'100%'}} label="Date of Birth" defaultValue="31/08/1998" variant="outlined"/>
                </div>
                <div className='col-sm-4'>
                <TextField disabled={this.state.edit} style={{width:'100%'}} label="DL Validity" defaultValue="01/01/2035" variant="outlined"/>
                </div>
                </div>

                <div style={{margin:'15px'}} className='row'>
                <div className='col-sm-12'>
                    ADD/LIST MY VEHICLE
                    <table style={{width:'100%'}}>
                        <thead>
                        <tr><td>Sr.</td><td>Vehicle Name</td><td>Vehicle Category</td><td>Vehicle Number</td><td>EDIT/REMOVE</td></tr>
                        </thead>
                        <tbody>
                        <tr><td>1</td><td>Honda City</td><td>CAR/JEEP/VAN</td><td>GJ-06-MD-5457</td><td><Button color="primary" >Edit</Button><Button color="secondary">X Remove</Button></td></tr>
                        <tr><td>2</td><td>Renault Kwid</td><td>CAR/JEEP/VAN</td><td>GJ-06-LK-3039</td><td><Button color="primary" >Edit</Button><Button color="secondary">X Remove</Button></td></tr>
                        <tr><td>3</td><td>Honda Activa</td><td>SCOOTY/SCOOTER</td><td>GJ-06-FH-6597</td><td><Button color="primary" >Edit</Button><Button color="secondary">X Remove</Button></td></tr>
                        <tr><td>4</td><td>Piaggio Vespa</td><td>SCOOTY/SCOOTER</td><td>GJ-06-JC-0441</td><td><Button color="primary" >Edit</Button><Button color="secondary">X Remove</Button></td></tr>
                        </tbody>
                    </table>
                </div>
                </div>
                <Button style={{float:'right'}}>SAVE DATA </Button>
            </div>
        )
    }
}