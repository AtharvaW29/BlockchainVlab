import {MDBFooter,MDBContainer,MDBCol,MDBRow,MDBBtn, MDBRipple} from 'mdb-react-ui-kit';
import React from 'react';

function Footer(){
    return(
        <>
        <MDBFooter className='text-center_text-white'>
            <MDBContainer className='p-4 pb-0'>
                <MDBCol lg='2' md='12' className='mb-4_mb-md-0'>
                    <MDBRipple
                        rippleColor='light'
                        className='bg-image_hover-overlay_shadow-1-strong_rounded'>
                        <a href='/'>
                        <img src={require('./logo.jpeg')} className='w-100' />
                        </a>
                        <div
                          className='mask'
                         style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                    </MDBRipple>
                </MDBCol>
                <section className=''>
                    <p className='d-flex justify-content-center align-items-center space-x-2'>
                    <a href='https://www.linkedin.com/in/drhbhor-3a721039/' className='text-white'>
                        Guided by: Dr. Harsh Bhor 
                    </a>
                    <a href='https://www.linkedin.com/in/dr-vijaya-pinjarkar-2502ab101/' className='text-white'>
                        &  Dr. Vijaya Pinjarkar
                    </a>
                    </p>
                </section>
            </MDBContainer>
            <div className='text-center p-3 space-x-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                <a className='text-white' href='https://www.linkedin.com/in/atharva-wagh-1974ab248/'>
                Developed by: Atharva Wagh,
                </a>
                <a className='text-white' href='https://www.linkedin.com/in/aditya-wagh-306223229/'>
                Aditya Wagh,
                </a>
                <a className='text-white' href='https://www.linkedin.com/in/vineet-sharma01/'>
                & Vineet Sharma
                </a>
            </div>
        </MDBFooter>
        </>
    );
}

export default Footer;