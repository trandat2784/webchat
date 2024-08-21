import "./Login.css"
import assets from "../../assets/assets"
import { useState } from "react";
function Login() {
    const [currentState,setCurrentState] = useState("Sign up")
    return (
      <div className="Login">
        <img src={assets.logo_big} alt="" className="logo" />
        <form className="login-form">
          <h2 className="title">{currentState}</h2>
          {currentState == "Sign up" ? (
            <input
              type="text"
              placeholder="username"
              required
              className="form-input"
            />
          ) : null}
          <input
            type="email"
            placeholder="email"
            required
            className="form-input"
          />
          <input
            type="password"
            placeholder="password"
            required
            className="form-input"
          />
          <button type="submit">
            {currentState == "Sign up" ? "Create an account" : "Login"}
          </button>
          <div className="login-term">
            <input type="checkbox" />
            <p>Agree to the terms of use & pivacy policy</p>
          </div>
          <div className="login-forgot">
            {
                currentState==="Sign up"?
            <p className="login-toggle">
              Already have an account ? 
               <span onClick={() => setCurrentState("Login")}>click here</span>
            </p>
            :
            <p className="login-toggle">
              Create an account ?
               <span onClick={() => setCurrentState("Sign up")}>click here</span>
            </p>
            }
          </div>
        </form>
      </div>
    );
}

export default Login;