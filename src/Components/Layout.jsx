// import Header from './Header';
import { useEffect, useState } from 'react';
import {Navbar,NavbarVertical} from './Navbar';


const Layout = ({children}) => {
    const [checker,SetChecker]=useState(false);
    useEffect(()=>console.log(checker),[checker]);
    return ( 
        <>
        {/* <Header/> */}
        <div>
            <Navbar check = {checker} Setter = {(value)=>SetChecker(value)}/>
            {checker && <NavbarVertical check = {checker} Setter = {(value)=>SetChecker(value)}/>}
            <main>{children}</main>
        </div>
        </>
     );
}
 
export default Layout;