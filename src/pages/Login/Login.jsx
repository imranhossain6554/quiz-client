import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/img/illustrations/login.svg";
import useAuth from "../../hooks/useAuth";
import { authenticate, isAuth } from "../../utilities/helper";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  console.log("lo", location);
  const { user, setUser, isLoading, setIsLoading, setAuthError, authError } =
    useAuth();
    const showToastMessage = () => {
      toast.error(error);
    };
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // const { email, password } = loginData;
    //password validation by condition
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/api/auth/user/login`,
      data: { email, password },
    })
      .then((response) => {
        console.log("SIGNIN SUCCESS", response);
        const destination = location?.state?.from || "/";
        navigate(location?.state?.from || "/", { replace: true });
        setError("");
        authenticate(response, () => {
          setUser(isAuth());
          setIsLoading(false);
          navigate("/dashboard", { replace: true });
          console.log("cookie local save ", isAuth());
        });
      })
      .catch((error) => {
        //setError(error.response.data.error);
        console.log("SIGN IN ERROR", error);
        showToastMessage()
        setError(error.response.data.Message);
      });
  };

  /* const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/api/auth/user/login`,
        {
          email,
          password,
        }
      );

      //console.log(response.data);
      console.log(response);
      const accessToken = Cookies.get("access_token");

      if (accessToken) {
        // The access_token cookie is available; you can use it for making authenticated API requests
        console.log("Access Token:", accessToken);
      } else {
        // The access_token cookie is not available; handle the user as unauthenticated
        console.log("Access Token not found.");
      }
      navigate("/dashboard");
    } catch (err) {
      console.error("Error:", err);
      setError("Login failed. Please check your credentials.");
    }
  };
 */
  return (
    <>
      <Helmet>
        <title>Happy Students - Login</title>
      </Helmet>
      <ToastContainer />
      <section className="py-4 py-md-5 my-5">
        <div className="container py-md-5">
          <div className="row">
            <div className="col-md-6 text-center">
              <img src={login} className="img-fluid w-100" alt="" />
            </div>
            <div className="col-md-5 col-xl-4 text-center text-md-start">
              <h2 className="d-6 fw-bold mb-5">
                <span className="text-decoration-uenderline pb-1">
                  <strong className="login">Login</strong> <br />{" "}
                </span>
              </h2>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                  <input
                    className="shadow form-control rounded"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="shadow form-control rounded"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-5">
                  <button
                    className="btn btn-primary shadow rounded"
                    type="submit"
                  >
                    Log in
                  </button>
                </div>
                <p className="text-muted">
                  <a href="forgotten-password.html">Forgot your password?</a>
                </p>
              </form>
              {error && <div className="text-danger">{error}</div>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
