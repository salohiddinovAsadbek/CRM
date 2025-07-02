import "../style/signupnavigator.css";
import Back from "../images/blue.svg";
import Next from "../images/white 3.svg";
import { useDispatch } from "react-redux";
import { decrementStep, incrementStep } from "../store/signupReducers";

function SignUpNavigator({ step = 1 }) {
  const dispatch = useDispatch();

  function navigateStep(path) {
    if (path === "back") {
      dispatch(decrementStep());
    } else if (path === "next") {
      dispatch(incrementStep());
    }
  }

  return (
    <div
      className="signupnavigator"
      style={{ justifyContent: step > 1 ? "space-between" : "flex-end" }}
    >
      <button
        style={{ display: step === 1 ? "none" : "flex" }}
        className="previousButton"
        onClick={() => {
          if (step > 1) {
            navigateStep("back");
          }
        }}
      >
        <img src={Back} alt="backIcon" />
        <p>Previous</p>
      </button>
      <button
        style={{ display: step === 4 ? "none" : "flex" }}
        className="nextButton"
        onClick={() => {
          if (step > 0 && step <= 3) {
            navigateStep("next");
          }
        }}
      >
        <p>Next Step</p>
        <img src={Next} alt="nextIcon" />
      </button>
    </div>
  );
}

export default SignUpNavigator;
