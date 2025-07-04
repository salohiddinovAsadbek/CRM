import "../style/selectcomponent.css";
import ArrowDown from "../images/gray 2.svg";
import { useState, useEffect } from "react";

function SelectComponent({ value, isValue, setValue }) {
  const [isEnter, setEnter] = useState(false);
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    const handleClick = (e) => {
      const select = document.querySelector(".selectComponent");
      if (select && !select.contains(e.target)) {
        setOpen(false);
        console.log(select, e.target);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  function handleEnter(index) {
    setEnter(index);
  }

  function handleOpen() {
    setOpen((prev) => !prev);
  }

  return (
    <div
      className="selectComponent"
      onClick={(e) => {
        handleOpen();
      }}
    >
      <p className="selectActiveTitle">{isValue}</p>
      <div
        className="selectComponentValues"
        style={{ display: isOpen ? "block" : "none" }}
      >
        {value.map((item, index) => {
          return (
            <p
              key={index}
              style={{
                backgroundColor: isEnter === index ? "blue" : "rgb(63, 63, 63)",
              }}
              onMouseEnter={() => {
                handleEnter(index);
              }}
              onMouseLeave={() => {
                handleEnter(false);
              }}
              onClick={(e) => {
                setValue(item);
              }}
            >
              {item}
            </p>
          );
        })}
      </div>
      <img src={ArrowDown} alt="arrowDownIcon" />
    </div>
  );
}

export default SelectComponent;
