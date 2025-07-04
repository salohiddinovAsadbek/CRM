import mainLogo from "../images/white.svg";
import SignUpComponent from "../components/signupComponent";
import "../style/signUp.css";
import { useSelector } from "react-redux";
import SignUpStep1 from "../components/signUpStep1";
import SignUpNavigator from "../components/signUpNavigator";
import SignUpStep2 from "../components/signupStep2";
import SignUpStep3 from "../components/signupstep3";

function SignUp() {
  const step = useSelector((state) => state.signupstep.step);

  const pageDetails = [
    {
      page: <SignUpStep1 />,
      title: "Valid your phone",
    },
    {
      page: <SignUpStep2 />,
      title: "Tell about yourself",
    },
    {
      page: <SignUpStep3 />,
      title: "Tell about your company",
    },
    {
      title: "Invite Team Members",
    },
  ];

  return (
    <div className="signUp">
      <SignUpComponent mainLogo={mainLogo} currentStep={step} />
      <div className="signUpRight">
        <div>
          <p>Step {step}/4</p>
          <h1>{pageDetails[step - 1].title}</h1>
          {pageDetails[step - 1].page}
        </div>
        <div>
          <SignUpNavigator step={step} />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
