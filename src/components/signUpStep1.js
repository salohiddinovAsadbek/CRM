import "../style/signupstep1.css";
import { useRef, useState } from "react";
import View from "../images/viewpassword.svg";

function SignUpStep1() {
  const [smsWrite, setSmsWrite] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);
  const [isHide, setHide] = useState(false);

  function smsVerification(type, number) {
    const onlyDigit = number.toString().slice(0, 1); // faqat 1 ta raqam
    setSmsWrite((prev) =>
      prev.map((son, index) => (type === index ? onlyDigit : son))
    );

    // Avtomatik keyingi inputga o'tish
    if (onlyDigit && type < 3) {
      inputsRef.current[type + 1].focus();
    }
  }

  function hidePassword() {
    setHide((prev) => !prev);
  }

  return (
    <div className="signUpStep1">
      <div className="verificationPhone signUpcard">
        <p className="verificationTitle">Mobile Number</p>
        <div className="phoneSignUp">
          <select>
            <option value="+1">+1</option>
            <option value="+998">+998</option>
          </select>
          <input type="number" placeholder="345 567-23-56" />
        </div>
      </div>
      <div className="verificationSms signUpcard">
        <p className="verificationTitle">Code from SMS</p>
        <div>
          {[0, 1, 2, 3].map((index) => (
            <input
              key={index}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={smsWrite[index]}
              onChange={(e) => smsVerification(index, e.target.value)}
              ref={(el) => (inputsRef.current[index] = el)}
            />
          ))}
        </div>
      </div>
      <div className="emailaddress signUpcard">
        <p className="verificationTitle">Email Address</p>
        <input type="text" placeholder="youremail@gmail.com" />
      </div>
      <div className="passwordSignUp signUpcard">
        <p className="verificationTitle">Create Password</p>
        <input type={isHide ? "password" : "text"} />
        <img src={View} alt="hideIcon" onClick={hidePassword} />
      </div>
    </div>
  );
}

export default SignUpStep1;
