import { useState } from "react";
import "../style/signupstep2.css";
import SelectComponent from "./selectComponent";

function SignUpStep2() {
  const [userSelected, setSelect] = useState("");
  const [isService, setService] = useState("Work");
  const [isBest, setBest] = useState("Business owner");

  function userSelect(type) {
    if (userSelected === "no" && type === "yes") {
      setSelect("yes");
    } else if (userSelected === "yes" && type === "no") {
      setSelect("no");
    } else if (!userSelected && type === "yes") {
      setSelect("yes");
    } else if (!userSelected && type === "no") {
      setSelect("no");
    } else {
      setSelect("");
    }
  }

  return (
    <div className="signupstep2">
      <div className="serviceSignup">
        <p className="signupstep2title">Why will you use the service?</p>
        <SelectComponent
          value={["Work", "Study"]}
          isValue={isService}
          setValue={setService}
        />
      </div>
      <div className="serviceSignup">
        <p className="signupstep2title">What describes you best?</p>
        <SelectComponent
          value={["Business owner", "Study"]}
          isValue={isBest}
          setValue={setBest}
        />
      </div>
      <div className="signupstep2Describe">
        <p>What describes you best?</p>
        <div>
          <label>
            <button
              className={`${
                userSelected === "yes" ? "signupstep2Checked" : ""
              } `}
              onClick={() => {
                userSelect("yes");
              }}
            >
              <p></p>
            </button>
            <p>Yes</p>
          </label>
          <label>
            <button
              className={`${
                userSelected === "no" ? "signupstep2Checked" : ""
              } `}
              onClick={() => {
                userSelect("no");
              }}
            >
              <p></p>
            </button>
            <p>No</p>
          </label>
        </div>
      </div>
    </div>
  );
}

export default SignUpStep2;
