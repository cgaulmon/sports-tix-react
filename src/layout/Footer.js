import React from 'react';
import './Footer.css'
class Footer extends React.Component {

    constructor() {
        super();
    }
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    &copy; SportTix 2020
                </div>
            </footer>
        );
    }
}

export default Footer;