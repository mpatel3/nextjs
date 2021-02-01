import Footer from "./footer"
import Navbar from "./navbar"

const Layout = (props) => {
    return ( 
        <div className="content">
            <Navbar />
            {props.children}
            <Footer />
        </div>  
    );
}
 
export default Layout;