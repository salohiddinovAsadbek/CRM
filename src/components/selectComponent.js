import ArrowDown from "../images/gray 2.svg";
import { useState, useEffect, useRef } from "react";
import "../style/selectcomponent.css";

function SelectComponent({ value, isValue, setValue }) {
  const [isEnter, setEnter] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const selectRef = useRef(null); // ref qo‘shildi

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="selectComponent"
      ref={selectRef}
      onClick={() => setOpen((prev) => !prev)}
    >
      <p className="selectActiveTitle">{isValue}</p>
      <div
        className="selectComponentValues"
        style={{ display: isOpen ? "block" : "none" }}
      >
        {value.map((item, index) => (
          <p
            key={index}
            style={{
              backgroundColor: isEnter === index ? "blue" : "rgb(63, 63, 63)",
            }}
            onMouseEnter={() => setEnter(index)}
            onMouseLeave={() => setEnter(false)}
            onClick={() => setValue(item)}
          >
            {item}
          </p>
        ))}
      </div>
      <img src={ArrowDown} alt="arrowDownIcon" />
    </div>
  );
}

export default SelectComponent;
