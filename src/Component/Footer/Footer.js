import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">

            <div className="social-icon">
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-instagram-square"></i>
                <i class="fab fa-linkedin-in"></i>
            </div>

            <div className="footerStyle">
                <h5>Terms of use Privacy Policy</h5>
                <p className="footerCopy">Copyright &copy; Edu Bizzz 2021</p>
            </div>
        </div>
    );
};

export default Footer;