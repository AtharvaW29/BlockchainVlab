import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
    render () {
        return (
            <div className="footer">
                <footer className="section footer-classic context-light bg-image" style={{background: "#F0F8FF"}}>
                    <div className="footer-copyright text-center py-3">© 2020 Copyright:
                        <a href="https://github.com/kreloaded" target="_blank"> Visit Github</a>
                    </div>
                </footer>
            </div>
        );
    };
};

export default Footer;
