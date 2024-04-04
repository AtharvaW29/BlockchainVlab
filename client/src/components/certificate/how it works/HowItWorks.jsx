import React, { Component } from 'react';
import './HowItWorks.css';
import NavBar from '../../other/navbar/Navbar';
import { Container } from '@mui/material';
import Footer from '../../other/navbar/Footer';

class HowItWorks extends Component {
    render () {
        return (
            <>
            <NavBar/>
            <div className="how-it-works">
                 <div style={{display: '', flexDirection: 'row', alignItems: 'center'}}>
                        <div style={{flex: 1, height: '2px', backgroundColor: 'black'}} />
                            <h1 className='h1'>How it works..!</h1>
                                <div style={{flex: 1, height: '2px', backgroundColor: 'black'}} />
                    </div>
                    <h3 className='h3'>Few things to remember</h3>
                    <section className='section'>
                        <p>1. As of now, only <b>Metamask</b> is supported. You must have Metamask
                            extension installed on your browser.
                        </p>
                    </section>
                    <section className='section'>
                        <p>2. Must logged in to Metamask.</p>
                    </section>
                    <section className='section'>
                        <p>3. As of now, <b>Rinkeby</b> ethereum testnet is used.
                            You must have sufficient Rinkeby ethers to perform transactions.
                        </p>
                    </section>
                    <section className='section'>
                        <p>
                            4. Make sure you are connected to Rinkeby testnet in Metamask.
                        </p>
                    </section>
                </div>
                <div>
                    <Container className='Info_Contact'>
                    <h3 className='Contact'>Contact Us</h3>
                    <div className='contents'>
                        <table>
                            <tbody>
                                <tr>
                                    <i class="fa fa-envelope ftr_fa_icon" aria-hidden="true"></i>
                                    <td>sample@gmail.com</td>
                                </tr>
                                <tr>
                                    <i className='fa fa-phone ftr_fa_icon'></i>
                                    <td>Phone: 001188373</td>
                                </tr>
                                <tr>
                                    <i className='fa fa-map-marker ftr_fa_icon'></i>
                                    <td>Line 1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </Container>
                </div>
                <Footer/>
            </>
            
        );
    };
}

export default HowItWorks;
