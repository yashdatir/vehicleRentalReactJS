import React from 'react';
import Navbar from '../components/Navbar/index';
import Footer from '../components/Footer/index';
function CREDITS(){
    return (
        <div>
            <Navbar />
            <p style={{paddingTop:'15px',fontWeight:900}} align='center'>CREDITS PAGE</p>
            <div className='row'>
            <div className='col-sm-4' style={{padding:'60px'}}>
            This Website is made using:
            <ul>
                <li>React JS</li>
                <li>Material UI</li>
                <li>SCSS</li>
                <li>Redux</li>
                <li>React-Redux</li>
            </ul>
            </div>

            <div className='col-sm-4' style={{padding:'60px'}}>
            This Website is made by:
            <ul>
                <li>Yash Datir(13)</li>
                <li>Dungrani Darshak(17)</li>
                <li>Sharma Krishna(77)</li>
                <li>Srivishal Subhanshu(80)</li>
            </ul>
            We are greatful to see you here, helping us to develop faster...
            </div>

            <div className='col-sm-4' style={{padding:'60px'}}>
            Organizations:
            <ul>
                <li>GUJARAT TECHNOLOGICAL UNIVERSITY</li>
                <li>NEOTECH INSTITUTE OF TECHNOLOGY</li>
            </ul>
            </div>
            </div>
            <Footer />
        </div>
    )
}
export default CREDITS