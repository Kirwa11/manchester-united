import React from 'react';

const Footer = () => (
    <footer className="footer">
        <p>&copy;2025 Manchester United Fan Website</p>
        <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
                <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
                <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" title="YouTube">
                <i className="fab fa-youtube"></i>
            </a>
        </div>
        <div className="footer-contact">
            <div>
                <i className="fas fa-envelope"></i> manunitedfan@email.com
            </div>
            <div>
                <i className="fas fa-map-marker-alt"></i> Old Trafford, Sir Matt Busby Way, Manchester M16 0RA, UK
            </div>
            <div>
                <i className="fas fa-phone"></i> +44 161 868 8000
            </div>
            <div>
                <i className="fas fa-mail-bulk"></i> P.O. Box 123, Manchester, UK
            </div>
        </div>
    </footer>
);

export default Footer;