import "../styles/LoginForm.css";

const LoginForm = () => {
  return (
    <div>
      <form action="" className=" form">
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="********" name="password" />
        <label htmlFor="email">Email</label>
        <input type="text" placeholder="John.snow@gmail.com" name="email" />
        <div className="rememberdiv">
          <label htmlFor="">
            <input type="checkbox" name="Remember Me" id="remember" /> Remember
            Me
          </label>
          <a
            href=""
            style={{
              textDecoration: "none",
              color: "#2C5282",
              fontWeight: "500",
            }}
          >
            Forgot Password?
          </a>
        </div>
        <button id="loginbutton">Login Now</button>
      </form>
    </div>
  );
};

export default LoginForm;
