import React from 'react';
import {TextField,Button} from '@material-ui/core';
import Footer from '../components/Footer';
import image from '../main.jpg';
export default class Login extends React.Component{
    constructor(){
        super()
        this.state={
            login:true
        }
    }
    toggle=()=>{
        this.state.login?
        this.setState({login:false})
        :this.setState({login:true})
    }
    render(){
        return(
            <div>
                <div style={this.state.login?{textAlign:'center',backgroundSize:'contain',backgroundRepeat:'no-repeat',height:'450px',backgroundImage:`url(${image})`}:{display:'none'}} className="container">
                    <h3>Login</h3>
                    <div style={{marginTop:'50px'}}>
                        <div className="row"><TextField placeholder="Username" /></div>
                        <div className="row"><TextField type="password" placeholder="Password" /></div>
                        <div className="row"><Button color="primary">Login</Button></div>
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