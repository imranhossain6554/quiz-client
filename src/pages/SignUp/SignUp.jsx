import axios from "axios";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import signup from "../../assets/img/illustrations/register.svg";
import useAuth from "../../hooks/useAuth";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();

  const { user, setUser, isLoading, setIsLoading, setAuthError, authError } =
    useAuth();
  const [registerData, setRegisterData] = useState({});

  const handelOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;

    setRegisterData(newRegisterData);
  };

  //renter registration system
  const [errorMessage, setErrorMessage] = useState("");
  const handelRegisterRenterSubmit = (event) => {
    event.preventDefault();
    console.log("registerData ", registerData);
    const { name, email, password, password_repeat } = registerData;

    setIsLoading(true);
    // setValues({ ...values, buttonText: 'Submitting' });
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/api/auth/user/register`,
      data: {
        name,
        email,
        password,
      },
    })
      .then((response) => {
        console.log("SIGNUP SUCCESS", response);
        setErrorMessage("");
        if (response.insertedId) {
          event.target.reset();
        }
        navigate("/login", { replace: true });
      })
      .catch((error) => {
        console.log("SIGNUP ERROR", error.response.data);
        setErrorMessage(error.response.data.error);
      });
  };
  return (
    <>
      <Helmet>
        <title>Happy Students - SignUp</title>
      </Helmet>
      <section className="py-4 py-md-5 my-5">
        <div className="container py-md-5">
          <div className="row">
            <div className="col-md-6 text-center">
              <img src={signup} className="img-fluid w-100" alt="" />
            </div>
            {/* end  auth error message show */}
            {errorMessage && (
              <div
                className="alert alert-danger justify-content-center"
                role="alert"
              >
                {errorMessage}
              </div>
            )}
            <div className="col-md-5 col-xl-4 text-center text-md-start">
              <h2 className="display-6 fw-bold mb-5">
                <span className=" pb-1">
                  <strong id="signUp">Sign up</strong>
                </span>
              </h2>
              <form method="post" onSubmit={handelRegisterRenterSubmit}>
                <div className="mb-3">
                  <input
                    className="shadow-sm form-control"
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handelOnBlur}
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="shadow-sm form-control"
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handelOnBlur}
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="shadow-sm form-control"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handelOnBlur}
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="shadow-sm form-control"
                    type="password"
                    name="password_repeat"
                    placeholder="Repeat Password"
                    onChange={handelOnBlur}
                  />
                </div>
                <div className="mb-5">
                  <button className="btn btn-primary shadow" type="submit">
                    Create account
                  </button>
                </div>
                <p className="text-muted">
                  Have an account?{" "}
                  <Link to="/login" data-bs-target="/login">
                    Log in&nbsp;
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icon-tabler-arrow-narrow-right"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <line x1="15" y1="16" x2="19" y2="12"></line>
                      <line x1="15" y1="8" x2="19" y2="12"></line>
                    </svg>
                  </Link>
                  &nbsp;
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
