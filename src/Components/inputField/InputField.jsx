import React from "react";
import "./inputField.module.scss";

const InputField = ({ label, isError, type, options, ...props }) => {
  return (
    <div style={{ margin: "1rem" }}>
      <label>{label}</label>
      <div
        className="centerBox flex-column"
        style={{
          alignItems: "flex-start",
          position: "relative",
          marginTop: "0.4rem",
        }}
      >
        {type !== "select" && <input type={type} {...props} />}
        {type === "select" && options?.length > 0 && (
          <select {...props}>
            {options.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </select>
        )}
        {isError && <span>{isError}</span>}
      </div>
    </div>
  );
};

export default InputField;
