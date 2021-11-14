// import Header from './Header';
import {Navbar,NavbarVertical} from './Navbar';


const Layout = ({children}) => {
    return ( 
        <>
        {/* <Header/> */}
        <div>
            <Navbar/>
            <NavbarVertical/>
            <main>{children}</main>
        </div>
        </>
     );
}
 
export default Layout;