import "../styles/Signup/SignupForm.css";

const SignupForm = () => {
  return (
    <div>
      <form action="" className="signupform">
        <label htmlFor="password">UserName</label>
        <input
          type="text"
          placeholder="Heisenberg"
          name="UserName"
          style={{ marignBottom: "10px" }}
        />
        <div className="Disclaimer">
          <p style={{ color: "#F2994A", fontSize: "14px" }}>Disclaimer:</p>
          <p style={{marginLeft:"5px"}}>
              Your UserName Will Not Be Disclosed To Anyone But Yourself To Keep You Anonymous
          </p>
        </div>

        <label htmlFor="email">Email</label>
        <input type="text" placeholder="John.snow@gmail.com" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="********" name="password" />
        <label htmlFor="password">Confirm Password</label>
        <input type="password" placeholder="********" name="confirmpassword" />
        <button id="signupbutton">Signup Now</button>
      </form>
    </div>
  );
};

export default SignupForm;
