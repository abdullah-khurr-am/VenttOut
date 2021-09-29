
import "../styles/LoginPage.css"
import LoginButtons from "./LoginButtons";
import LoginForm from "./LoginForm";
import Guy from "../icons/GuyBook.png";



const LoginPage = () => {
    return ( 
    <div id="loginpage">
        <div className="sector" id="sector-left">
            <p id="punchline">
                <span style={{color:"black"}}>Ventt</span> Your <br /> <span style={{marginLeft:"50px"}}>Heart Out</span>
            </p>
            <div id="Guy"><img src={Guy} alt="" width="800" height="600"/></div>
        </div>
        <div className="sector" id="sector-right">
            <LoginButtons/>
            <div>
                <h3 style={{color:"grey",fontFamily:'Poppins',fontWeight:"400",margin:"30px 0px 30px 0px"}}> - OR - </h3>
            </div>
            <LoginForm/>
            <p id="belowbutton">Dont have an account? <a href="">Join free today</a></p>
        </div>
    </div> );
}
 
export default LoginPage;