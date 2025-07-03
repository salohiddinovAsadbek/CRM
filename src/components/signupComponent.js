import { NavLink } from "react-router-dom";
import "../style/signupComponent.css";
import { useDispatch } from "react-redux";
import { changeStep } from "../store/signupReducers";
import { useEffect } from "react";

function SignUpComponent({ mainLogo = "salom", currentStep }) {
  const dispatch = useDispatch();

  return (
    <div className="signUpComponent">
      <NavLink to="/home">
        <img src={mainLogo} alt="mainLogo" />
      </NavLink>
      <h1>Get started</h1>
      <div className="routesSignUp">
        <div className={`routeSignUp ${currentStep === 1 ? "activeStep" : ""}`}>
          <button onClick={() => dispatch(changeStep(1))}>
            <div></div>
            <p>Valid your phone</p>
          </button>
          <p></p>
        </div>
        <div className={`routeSignUp ${currentStep === 2 ? "activeStep" : ""}`}>
          <button onClick={() => dispatch(changeStep(2))}>
            <div></div>
            <p>Tell about yourself</p>
          </button>
          <p></p>
        </div>
        <div className={`routeSignUp ${currentStep === 3 ? "activeStep" : ""}`}>
          <button onClick={() => dispatch(changeStep(3))}>
            <div></div>
            <p>Tell about your company</p>
          </button>
          <p></p>
        </div>
        <div className={`routeSignUp ${currentStep === 4 ? "activeStep" : ""}`}>
          <button onClick={() => dispatch(changeStep(4))}>
            <div></div>
            <p>Invite Team Members</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUpComponent;
