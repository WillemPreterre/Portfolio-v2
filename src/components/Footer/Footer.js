import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                </div>
             <div className="footer-bottom">
                &copy; {new Date().getFullYear()} - All rights reserved Willem, web and application developer - Willem Préterre.
             </div>
        </footer>
    );
};

export default Footer;