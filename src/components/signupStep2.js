import { useEffect, useState } from "react";
import "../style/signupstep2.css";

function SignUpStep2() {
  const [userSelected, setSelect] = useState("");

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

  useEffect(() => {
    console.log(userSelected);
  }, [userSelected]);

  return (
    <div className="signupstep2">
      <div>
        <p className="signupstep2title">Why will you use the service?</p>
        <select>
          <option value="work">Work</option>
        </select>
      </div>
      <div>
        <p className="signupstep2title">What describes you best?</p>
        <select>
          <option value="Business Owner">Business Owner</option>
        </select>
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
