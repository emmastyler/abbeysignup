import React, { Fragment, useState } from "react";
import "../styles/body.scss";
import Error from "../components/Error";
import axios from "axios";
import Success from "./Success";

const Body = () => {
  const [visible, setVisible] = useState(true);
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(false);
  const [success, setSuccess] = useState(false);

  //console.log(password1, password2);

  //api calls
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://abbeysignup.herokuapp.com/createuser",
        {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password1: password1,
          password2: password2,
        }
      );
      setSuccess(res);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <>
      <div class="container">
        <div class="forms-container">
          <div class="signin-signup">
            {success ? (
              <Success />
            ) : (
              <form action="#" class="sign-in-form">
                <img
                  src="../images/abbey.svg"
                  alt=""
                  style={{ width: "100px" }}
                />
                <br />
                <h2 class="title">Sign up</h2>
                {password1 !== password2 && password2 ? (
                  <Error message={"Password does not match"} />
                ) : null}
                {message && <Error message={message} />}

                {visible && (
                  <Fragment>
                    <div class="input-field">
                      <i class="fas fa-user"></i>
                      <input
                        type="text"
                        placeholder="First Name"
                        name="firstname"
                        required
                        onChange={(e) => setFirstname(e.target.value)}
                      />
                    </div>
                    <div class="input-field">
                      <i class="fas fa-user"></i>
                      <input
                        type="text"
                        placeholder="Last Name"
                        name="lastname"
                        required
                        onChange={(e) => setLastname(e.target.value)}
                      />
                    </div>
                    <div class="input-field">
                      <i class="fas fa-envelope"></i>
                      <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <input
                      type="submit"
                      value="continue"
                      class="btn solid"
                      onClick={() => {
                        setVisible(false);
                      }}
                      style={{ color: "#CD1F1A !important" }}
                    />
                  </Fragment>
                )}
                {!visible && (
                  <Fragment>
                    <div class="input-field">
                      <i class="fas fa-lock"></i>
                      <input
                        type="password"
                        placeholder="Password"
                        required
                        onChange={(e) => setPassword1(e.target.value)}
                      />
                    </div>
                    <div class="input-field">
                      <i class="fas fa-lock"></i>
                      <input
                        type="password"
                        placeholder="confirm password"
                        required
                        onChange={(e) => setPassword2(e.target.value)}
                      />
                    </div>
                    <div>
                      <input
                        type="submit"
                        value="Go back"
                        class="btn solid"
                        onClick={() => {
                          setVisible(true);
                        }}
                      />
                      <input
                        type="submit"
                        class="btn"
                        value="Sign up"
                        style={{ marginLeft: "74px" }}
                        onClick={handelSubmit}
                      />
                    </div>
                  </Fragment>
                )}
              </form>
            )}
          </div>
        </div>

        <div class="panels-container">
          <div class="panel left-panel">
            <div class="content">
              <h3>New here ?</h3>
              <p>
                Create your account in seconds and start enjoying fast internet
                banking with us!
              </p>
              <button class="btn transparent" id="sign-up-btn">
                Sign up
              </button>
            </div>
            <img src="../images/register.svg" class="image" alt="" />
          </div>
        </div>
      </div>

      <script src="app.js"></script>
    </>
  );
};

export default Body;
