
import "../styles/LoginPage.css"
import LoginButtons from "./LoginButtons";



const LoginPage = () => {
    return ( 
    <div id="loginpage">
        <div className="sector" id="sector-left"></div>
        <div className="sector" id="sector-right">
            <LoginButtons/>
        </div>
    </div> );
}
 
export default LoginPage;