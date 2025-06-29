import mainLogo from "../images/white.svg";
import SignUpComponent from "../components/signupComponent";
import "../style/signUp.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function SignUp() {
  const step = useSelector((state) => state.signupstep.step);
  const [currentStep, setCurrentStep] = useState(step);

  useEffect(
    function defineStep() {
      setCurrentStep(step);
    },
    [step]
  );

  return (
    <div className="signUp">
      <SignUpComponent mainLogo={mainLogo} currentStep={currentStep} />
    </div>
  );
}

export default SignUp;
