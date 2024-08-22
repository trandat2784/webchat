import "./Login.css"
import assets from "../../assets/assets"
import { useState } from "react";
import { LogIn, SignUp } from "../../config/firebase";

function Login() {
    const [currentState,setCurrentState] = useState("Sign up")
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")


    const handleSubmit = (e) => {
      e.preventDefault();
      if (currentState === "Sign up") {
        SignUp(username, email, password);
      }
      else{
        LogIn(email, password);
      }
    };
    return (
      <div className="Login">
        <img src={assets.logo_big} alt="" className="logo" />
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="title">{currentState}</h2>
          {currentState === "Sign up" ? (
            <input
              type="text"
              value={username}
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
              required
              className="form-input"
            />
          ) : null}
          <input
            type="email"
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            required
            className="form-input"
          />
          <button type="submit" >
            {currentState === "Sign up" ? "Create an account" : "Login"}
          </button>
          <div className="login-term">
            <input type="checkbox" />
            <p>Agree to the terms of use & pivacy policy</p>
          </div>
          <div className="login-forgot">
            {currentState === "Sign up" ? (
              <p className="login-toggle">
                Already have an account ?
                <span onClick={() => setCurrentState("Login")}>click here</span>
              </p>
            ) : (
              <p className="login-toggle">
                Create an account ?
                <span onClick={() => setCurrentState("Sign up")}>
                  click here
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    );
}

export default Login;