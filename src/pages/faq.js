import React from 'react';
import Navbar from '../components/Navbar/index';
import Footer from '../components/Footer/index';
import { faq } from '../constant';
function FAQ(){
    return (
        <div>
            <Navbar />
            <p style={{padding:'20px'}} align='center'>FAQ PAGE</p>
            
            {
                faq.map(qa=>(
                    <pre key={qa.q} style={{margin:'10px'}}>
                        <p style={{padding:'15px'}}>{qa.q}</p>
                        <p style={{paddingLeft:'15px',paddingRight:'15px'}}>{qa.a}</p>
                    </pre>
                ))
            }

            <Footer />
        </div>
    )
}
export default FAQ