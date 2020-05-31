import React from 'react';
import { TextField, Button } from '@material-ui/core';
export default class Request extends React.Component{
    render(){
        return(
            <div style={{width:'100%', padding:'25px'}}>
                Request
                <div style={{margin:'20px'}}>
                    <TextField placeholder="Enter a request! here" style={{width:'80%'}} />
                    <Button>Submit Request</Button>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                    <table style={{width:'100%'}}>
                    <thead>
                    <tr><td>Sr.</td><td>Request</td><td>Request ID</td><td>Status</td></tr>
                    </thead>
                    <tbody>
                    <tr><td>1</td><td>Trip booking due to covid-19</td><td>ABC123ABC</td><td><font color='green'>Approved</font></td></tr>
                    <tr><td>2</td><td>Request to change Address</td><td>CBA321CBA</td><td><font color='green'>Approved</font></td></tr>
                    <tr><td>3</td><td>Request to change DL number</td><td>XYZ789XYZ</td><td><td><font color='red'>Rejected</font></td></td></tr>
                    </tbody>
                </table>
                    </div>
                </div>
            </div>
        )
    }
}