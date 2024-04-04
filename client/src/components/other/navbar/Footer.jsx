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
                        <img src={require('./logo.jpeg')} className='w-100' />
                        <div
                          className='mask'
                         style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                    </MDBRipple>
                </MDBCol>
                <section className=''>
                    <p className='d-flex justify-content-center align-items-center'>
                    <span className='me-3'>Register for free</span>
                    </p>
                </section>
            </MDBContainer>
            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2020 Copyright:
                <a className='text-white' href='https://mdbootstrap.com/'>
                    MDBootstrap.com
                </a>
            </div>
        </MDBFooter>
        </>
    );
}

export default Footer;