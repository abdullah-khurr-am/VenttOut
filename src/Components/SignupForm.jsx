import "../styles/Signup/SignupForm.css";

const SignupForm = () => {
  return (
    <div>
      <form action="" className="form">
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
              Username disclosed to anyone your posts will be tagged with a
              random username every time you post.
          </p>
        </div>

        <label htmlFor="email">Email</label>
        <input type="text" placeholder="John.snow@gmail.com" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="********" name="password" />
        <label htmlFor="password">Confirm Password</label>
        <input type="password" placeholder="********" name="confirmpassword" />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "17px",
            zIndex: "20",
          }}
        >
          <label htmlFor="">
            <input type="checkbox" name="Remember Me" id="remember" /> Remember
            Me
          </label>
        </div>
        <button id="loginbutton">Login Now</button>
      </form>
    </div>
  );
};

export default SignupForm;
