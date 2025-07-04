import { useState } from "react";
import "../style/signupstep3.css";
import SelectComponent from "./selectComponent";

function SignUpStep3() {
  const [isDirection, setDirection] = useState("IT and programming");
  const [isActive, setActive] = useState(false);
  const isHowPeople = [
    "Only me",
    "2 - 5",
    "6 - 10",
    "11-20",
    "21 - 40",
    "41 - 50",
    "51 - 100",
    "101 - 500",
  ];

  function handlePeople(index) {
    setActive(index);
  }

  return (
    <div className="signupstep3">
      <div>
        <p className="signupstep3title">Your Company's Name</p>
        <input type="text" placeholder="Company’s Name" />
      </div>
      <div className="signupdirection">
        <p className="signupstep3title">Business Direction</p>
        <SelectComponent
          value={["IT and programming", "Mobile Development"]}
          isValue={isDirection}
          setValue={setDirection}
        />
      </div>
      <div>
        <p className="signupstep3title">How many people in your team?</p>
        <div className="signupstep3people">
          {isHowPeople.map((item, index) => {
            return (
              <button
                className={`${isActive === index ? "signupstep3active" : ""}`}
                key={index}
                onClick={() => handlePeople(index)}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SignUpStep3;
