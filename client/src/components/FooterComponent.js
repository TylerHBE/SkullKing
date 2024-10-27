import { HashLink as Link } from 'react-router-hash-link';
import { Outlet } from "react-router-dom";

const FooterComponent = () => {

    const websiteFooterStyle = {

        //position: "fixed",
        //bottom: 0,
        left: 0,
        right: 0,     
    
        backgroundColor: "black",
        color: "#514C48",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "-apple-system,system-ui,Segoe UI,Liberation Sans,sans-serif",
        padding: "10px"
    
    }

    const footerLinkStyle = {
    
        color: "#514C48",
        fontFamily: "-apple-system,system-ui,Segoe UI,Liberation Sans,sans-serif",
        padding: "10px"
    
    }

    return (
        <>
            <footer id = "websiteFooter" style = {websiteFooterStyle}>
                <p>© 2024 Tyler Hickerson</p>
                <Link to="/Home#homeMainWrapper" style = {footerLinkStyle}>Home</Link>

            </footer>

            <Outlet />
        </>
        
    );

}

export default FooterComponent;  