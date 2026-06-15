import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                </div>
             <div className="footer-bottom">
                &copy; {new Date().getFullYear()} Copyright Willem Préterre
             </div>
        </footer>
    );
};

export default Footer;