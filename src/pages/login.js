import React from 'react';
import {TextField,Button} from '@material-ui/core';
import Footer from '../components/Footer';
import image from '../main.jpg';
import { login } from '../api/api';
export default class Login extends React.Component{
    constructor(){
        super()
        this.state={
            login:true,
            name:'',
            password:'',
            email:''
        }
    }
    toggle=()=>{
        this.state.login?
        this.setState({login:false})
        :this.setState({login:true})
    }
    loginCreate=()=>{

        login(this.state)
    }
    render(){
        return(
            <div>
                <div style={this.state.login?{textAlign:'center',backgroundSize:'contain',backgroundRepeat:'no-repeat',height:'450px',backgroundImage:`url(${image})`}:{display:'none'}} className="container">
                    <h3>Login</h3>
                    <div style={{marginTop:'50px'}}>
                        <div className="row"><TextField value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}} placeholder="Username" /></div>
                        <div className="row"><TextField value={this.state.password} onChange={(e)=>{this.setState({password:e.target.value})}} type="password" placeholder="Password" /></div>
                        <div className="row"><Button color="primary" onClick={this.loginCreate}>Login</Button></div>
                        <div className="row"><Button color="secondary" onClick={this.toggle}>Register</Button></div>
                    </div>
                </div>

                <div style={!this.state.login?{textAlign:'center',backgroundSize:'contain',backgroundRepeat:'no-repeat',height:'450px',backgroundImage:`url(${image})`}:{display:'none'}} className="container">
                    <h3>Register</h3>
                    <div style={{marginTop:'50px'}}>
                    <div className="row"><TextField placeholder="Full Name" /></div>
                    <div className="row"><TextField placeholder="Email" /></div>
                    <div className="row"><TextField placeholder="Password" /></div>
                    <div className="row"><TextField placeholder="retype-password" /></div>
                    <div className="row"><Button color="primary">Register</Button></div>
                    <div className="row"><Button color="secondary" onClick={this.toggle}>Login</Button></div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}