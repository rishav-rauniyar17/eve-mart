import React from 'react';
import appStoreLogo from '../../../images/google-play.png';
import instaLogo from '../../../images/instagram.png';
import fbLogo from '../../../images/facebook.png';
import './Footer.css';


const Footer = () => {
  return (
    <footer id='footer'>
        <div className='leftFooter'>
            <h4>Download our App</h4>
            <p>Download App for android</p>
            <img src={appStoreLogo} alt='playstore'/>
        </div>

        <div className='midFooter'>
            <h1>Eve-Mart</h1>
            <p>High Quality is our #1 priority</p>
            <p>Copyrights 2022 &copy; Eve-Mart</p>
        </div>

        <div className='rightFooter'>
            <h4>Follow Us</h4>
            <img alt='instagram' src={instaLogo}/>
            <img alt='facebook' src={fbLogo}/>
        </div>
    </footer>
  );
};

export default Footer;