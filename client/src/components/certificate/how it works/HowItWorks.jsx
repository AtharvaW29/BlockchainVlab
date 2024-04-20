import React, { Component } from 'react';
import './HowItWorks.css';
import { Container } from '@mui/material';
import Footer from '../../other/navbar/Footer';
import Navbar from '../../other/navbar/Navbar';
class HowItWorks extends Component {
    render () {
        return (
            <>
            <Navbar/>
    <div className="how-it-works p-8">
    <div className="flex items-center">
        <div className="flex-1 h-px bg-black"></div>
        <h1 className="h1 mx-4">How it works..!</h1>
        <div className="flex-1 h-px bg-black"></div>
    </div>
    <h3 className="h3 mt-4">Few things to remember with respect to smart contract experiments</h3>
    <section className="section">
        <p>
            1. As of now, only <b>Metamask</b> is supported. You must have Metamask extension installed on your browser.
        </p>
    </section>
    <section className="section">
        <p>
            2. Must be logged in to Metamask.
        </p>
    </section>
    <section className="section">
        <p>
            3. As of now, <b>Sepolia</b> ethereum testnet is used. You must have sufficient Sepolia ethers to perform transactions.
        </p>
    </section>
    <section className="section">
        <p>
            4. Make sure you are connected to Sepolia testnet in Metamask.
        </p>
    </section>


    <div className="mt-40 rounded-lg p-6 text-bold max-w-fit">
    <h2 className="text-xl font-bold mb-4">Contact Us</h2>
    <div className="contents">
        <table className='border-2 border-red-600' style={{width: 400, height: 200}}>
            <tbody>
                <tr>
                    <td>
                        <i className="fa fa-envelope ftr_fa_icon mr-2" aria-hidden="true"></i>
                        <span className="font-semibold">Email:</span> sample@gmail.com
                    </td>
                </tr>
                <tr>
                    <td>
                        <i className="fa fa-phone ftr_fa_icon mr-2"></i>
                        <span className="font-semibold">Phone:</span> 001188373
                    </td>
                </tr>
                <tr>
                    <td>
                        <i className="fa fa-map-marker ftr_fa_icon mr-2"></i>
                        <span className="font-semibold">Address:</span> Line 1
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</div>

                <Footer/>
            </>
            
        );
    };
}

export default HowItWorks;
