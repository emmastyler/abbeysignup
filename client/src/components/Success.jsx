import React, { useEffect } from "react";
import { init } from "ityped";

const Success = () => {
  useEffect(() => {
    const myElement = document.querySelector("#myElement");
    init(myElement, {
      showCursor: false,
      loop: false,
      strings: ["Your Account has been created successfully"],
    });
  });

  return (
    <>
      <center>
        <img src="../images/abbey.svg" alt="" style={{ width: "100px" }} />
        <br />
        <h1 style={{ fontSize: "57px", fontFamily: "Poppins" }}>
          Congratulations!{" "}
          <img
            src="../images/check-correct.gif"
            alt=""
            style={{ width: "75px" }}
          />
        </h1>
        <br />
        <div id="myElement" style={{ fontSize: "15px", fontFamily: "Poppins" }}>
          {" "}
        </div>
      </center>
    </>
  );
};

export default Success;
