import Button from "./Button";
import google from "../icons/GoogleIcon.svg";
import facebook from "../icons/FacebookIcon.svg";
import "../styles/LoginButtons.css"

const LoginButtons = () => {
  return (
    <div id="loginbuttons">
        <p style={{fontSize:"13px",fontWeight:"400"}}>Welcome Back!</p>
        <p style={{fontSize:"27px",fontWeight:"700"}}>Login To Your Account</p>
        <Button icontext="Sign In With Google" image = {google}/>
        <Button icontext="Sign In With Facebook" image = {facebook}/>
    </div>
  );
};

export default LoginButtons;
