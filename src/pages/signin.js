import { NavLink } from "react-router-dom";
import Logo from "../images/white.svg";
import Banner from "../images/Illustration.png";
import Arrow from "../images/white 2.svg";
import View from "../images/viewpassword.svg";
import "../style/signin.css";
import { useState } from "react";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isHide, setType] = useState(false);

  function handleChange(e) {
    setEmail(e.target.value);
    console.log(email);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function hidePassword() {
    setType(!isHide);
  }

  return (
    <div className="signMain">
      <div className="signinLeft">
        <NavLink to="/home">
          <img src={Logo} alt="mainLogo" />
          <p>Woorkroom</p>
        </NavLink>
        <h1>Your place to work Plan. Create. Control.</h1>
        <img src={Banner} alt="illustration" />
      </div>
      <div className="signinRight">
        <h1>Sign In to Woorkroom</h1>
        <div className="signinFill">
          <div>
            <p>Email Address</p>
            <input
              type="text"
              value={email}
              placeholder="youremail@gmail.com"
              onChange={handleChange}
            />
          </div>
          <div>
            <p>Password</p>
            <div className="signinPassword">
              <input
                type={isHide ? "password" : "text"}
                onChange={handlePassword}
                value={password}
              />

              {isHide ? (
                <img src={View} alt="view" onClick={hidePassword} />
              ) : (
                <img src={View} alt="view" onClick={hidePassword} />
              )}
            </div>
          </div>
        </div>
        <p>Forgot Password?</p>
        <NavLink to="/home" className="signinButton">
          <p>Sign In</p>
          <img src={Arrow} alt="arrowRight" />
        </NavLink>
        <NavLink to="/signup" className="nonAccount">
          Don’t have an account?
        </NavLink>
      </div>
    </div>
  );
}

export default Signin;
