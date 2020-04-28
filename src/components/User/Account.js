import React from 'react';
import { TextField, Button } from '@material-ui/core';
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
                <Button style={{float:'right'}}>SAVE DATA </Button>
            </div>
        )
    }
}