import React from 'react';
export default class Footer extends React.Component{
    render(){
        return(
            <div style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
            <div style={{padding:'60px'}} className="container">
                <h5>Sitemap:</h5>
                <div className="row">
                    <div className="col-sm-4">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/login">Registration</a></li>
                    <li><a href="index.html">Estimate</a></li>
                </ul>
                </div>

                <div className="col-sm-4">
                <ul>
                    <li><a href="/user">Dashboard</a></li>
                    <li><a href="#aboutus">About Us</a></li>
                    <li><a href="/faq">FAQs</a></li>
                    <li><a href="/why">Why Us</a></li>
                </ul>
                </div>

                <div className="col-sm-4">
                <ul>
                    <li><a href="/team">Our Team</a></li>
                    <li><a href="/tech">Technology Credits</a></li>
                </ul>

                </div>

                </div>
            </div>
            <p style={{padding:'5px'}}>-Made By Yash Datir </p>
            </div>
        )
    }
}