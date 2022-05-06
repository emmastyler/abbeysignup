import React from "react";

const Error = ({ message }) => {
  return (
    <div
      style={{
        backgroundColor: "pink",
        color: "#E67E73",
        height: "30px",
        width: "270px",
        textAlign: "center",
      }}
    >
      <p>{message}</p>
    </div>
  );
};

export default Error;
