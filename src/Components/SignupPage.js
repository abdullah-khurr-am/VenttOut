import SignupForm from "./SignupForm";
import Guy from "../icons/GuyBook.png";
import "../styles/Signup/SignupPage.css"

const SignupPage = () => {
  return (
    <>
      <div id="loginpage">
        <div className="sector" id="sector-left">
          <p id="punchline">
            <span style={{ color: "black" }}>Ventt</span> Your <br />{" "}
            <span style={{ marginLeft: "50px" }}>Heart Out</span>
          </p>
          {/* <div id="Guy"><img src={Guy} alt="" width="800" height="600"/></div> */}
        </div>
        <div className="sector" id="sector-right">
          <div className="SignupTitle">
            <p style={{ fontSize: "16px", fontWeight: "400" }}>Don't Have An Account?</p>
            <p style={{ fontSize: "30px", fontWeight: "700" }}>
              Sign Up
            </p>
          </div>
          <SignupForm/>
          <p id="belowbutton">Already Have An Account? <a href="">Join free today</a></p>

        </div>
      </div>
      );
    </>
  );
};

export default SignupPage;
