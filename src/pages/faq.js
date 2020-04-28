import React from 'react';
import Navbar from '../components/Navbar/index';
import Footer from '../components/Footer/index';
function FAQ(){
    return (
        <div>
            <Navbar />
            <p style={{padding:'20px'}} align='center'>FAQ PAGE</p>
            
            <pre style={{margin:'10px'}}>
            <p style={{padding:'15px'}}>(1) WHY SHOULD I USE THIS SERVICE</p>
            <p style={{paddingLeft:'15px',paddingRight:'15px'}}>This is great service</p>
            </pre>

            <pre style={{margin:'10px'}}>
            <p style={{padding:'15px'}}>(1) WHY SHOULD I USE THIS SERVICE</p>
            <p style={{paddingLeft:'15px',paddingRight:'15px'}}>This is great service</p>
            </pre>

            <pre style={{margin:'10px'}}>
            <p style={{padding:'15px'}}>(1) WHY SHOULD I USE THIS SERVICE</p>
            <p style={{paddingLeft:'15px',paddingRight:'15px'}}>This is great service</p>
            </pre>
            <Footer />
        </div>
    )
}
export default FAQ