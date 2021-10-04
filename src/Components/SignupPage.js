import SignupForm from "./SignupForm";
import Guy from "../icons/GuyBook.png";
import "../styles/Signup/SignupPage.css"

const SignupPage = () => {
  return (
    <>
      <div id="loginpage">
        <div className="sector" id="sector-left">
          <p id="punchline">
            Vent Your <br />
            <span>Heart Out!</span>
          </p>
          <div id="GuyComputer"></div>
        </div>
        <div className="sector" id="sector-right">
          <div className="SignupTitle">
            <p style={{ fontSize: "13px", fontWeight: "400" }}>Don't Have An Account?</p>
            <p style={{ fontSize: "27px", fontWeight: "700" }}>
              Sign Up
            </p>
          </div>
          <SignupForm/>
          <p id="belowbutton">Already Have An Account? <a href="">Login Here!</a></p>

        </div>
      </div>
      );
    </>
  );
};

export default SignupPage;
