import "../styles/LoginPage.css";
import LoginButtons from "./LoginButtons";
import LoginForm from "./LoginForm";
import Guy from "../icons/GuyBook.png";

const LoginPage = () => {
  return (
    <div id="loginpage">
      <div className="sector" id="sector-left">
        <p id="punchline">
          <span>Vent</span> Your <br />
          <span>Heart Out!</span>
        </p>
        <div id="Guy">
        </div>
      </div>
      <div className="sector" id="sector-right">
        <LoginButtons />
        <div>
          <h3 className="OR">      
            - OR -
          </h3>
        </div>
        <div class="form">
            <LoginForm />
            <p id="belowbutton">
              Dont have an account? <a href="">Join free today</a>
            </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
