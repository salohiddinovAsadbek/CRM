import mainLogo from "../images/white.svg";
import SignUpComponent from "../components/signupComponent";
import "../style/signUp.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SignUpStep1 from "../components/signUpStep1";
import SignUpNavigator from "../components/signUpNavigator";

function SignUp() {
  const step = useSelector((state) => state.signupstep.step);
  const [currentStep, setCurrentStep] = useState(step);

  // useEffect(
  //   function defineStep() {
  //     setCurrentStep(step);
  //   },
  //   [step]
  // );

  return (
    <div className="signUp">
      <SignUpComponent mainLogo={mainLogo} currentStep={step} />
      <div className="signUpRight">
        <div>
          <p>Step 1/4</p>
          <h1>Valid your phone</h1>
          {step === 1 && <SignUpStep1 />}
        </div>
        <div>
          <SignUpNavigator step={step} />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
