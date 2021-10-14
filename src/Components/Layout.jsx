// import Header from './Header';
import Navbar from './Navbar';


const Layout = ({children}) => {
    return ( 
        <>
        {/* <Header/> */}
        <div>
            <Navbar/>
            <main>{children}</main>
        </div>
        </>
     );
}
 
export default Layout;