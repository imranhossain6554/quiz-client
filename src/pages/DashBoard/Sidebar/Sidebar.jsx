import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../assets/bootstrap/css/bootstrap.min.css";
import useAuth from "../../../hooks/useAuth";
import { signout } from "../../../utilities/helper";
import "./Sidebar.css";
// import QuizView from '../QuizView/QuizView';

const Sidebar = () => {
  const navigate = useNavigate();
  const { user, setUser, isLoading, setIsLoading, setAuthError, authError } =
    useAuth();

  const logout = () => {
    // setIsLoading(true);
    signout(() => {
      setUser("");
    });
  };
  const navigateToqustion = () => {
    // 👇️ navigate to /
    navigate("/dashboard/create-categorey");
  };
  const navigateToCreatequiz = () => {
    // 👇️ navigate to /
    navigate("/dashboard/create-quiz");
  };
  return (
    <>
      <section className="d-flex gap-5" id="sidebar_down">
        <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block">
          <div className="position-sticky">
            <h1 id="details">Details</h1>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <button id="settings">
                    <i className="fa fa-cog logo" aria-hidden="true"></i>
                  </button>{" "}
                  <span className="sidebar-text">Settings</span>
                </a>
              </li>
              <br />
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <button id="questions">
                    <i className="fa fa-cog logo" aria-hidden="true"></i>
                  </button>{" "}
                  <span className="sidebar-text">Questions</span>
                </a>
              </li>
              <br />
              <li onClick={() => navigateToqustion()} className="nav-item">
                <button id="document">
                  <i className="fa fa-cog logo" aria-hidden="true"></i>
                </button>{" "}
                <span className="sidebar-text">Create Categorey</span>
              </li>
              <br />
              <li className="nav-item" onClick={() => navigateToCreatequiz()}>
                <button id="statistics">
                  <i className="fa fa-cog logo" aria-hidden="true"></i>
                </button>{" "}
                <span className="sidebar-text">Create Quiz</span>
              </li>
              <br />
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <button id="activity">
                    <i className="fa fa-cog logo" aria-hidden="true"></i>
                  </button>
                  <span className="sidebar-text">Activity</span>
                </a>
              </li>
            </ul>
            <br />
            <br />
            <img
              className="logOut"
              src="https://cdn.icon-icons.com/icons2/2941/PNG/512/logout_icon_183821.png"
              alt=""
            />
            <Link onClick={() => logout()} className="text-logOut">
              {" "}
              Log Out
            </Link>
          </div>
        </nav>
        {/* <OverView /> */}
        {/* <QuizView /> */}
      </section>
    </>
  );
};

export default Sidebar;
