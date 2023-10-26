import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { getCookie } from "../../../utilities/helper.js";
import "./QuizView.css";
// import Sidebar from '../Sidebar/Sidebar';
const QuizView = () => {
  const { user, setUser, isLoading, setIsLoading, setAuthError, authError } =
    useAuth();

  const [error, setError] = useState("");

  const [quizListData, setQuizListData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/quiz/quizes`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setQuizListData(data));
  }, []);

  return (
    <>
      <h1 id="quizview">
        <span id="ove">Qui</span>z View
      </h1>

      <section className="d-flex gap-5 container" id="sidebar_down">
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
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <button id="document">
                    <i className="fa fa-cog logo" aria-hidden="true"></i>
                  </button>{" "}
                  <span className="sidebar-text">Document</span>
                </a>
              </li>
              <br />
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <button id="statistics">
                    <i className="fa fa-cog logo" aria-hidden="true"></i>
                  </button>{" "}
                  <span className="sidebar-text">Statistics</span>
                </a>
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
            <Link className="text-logOut"> Log Out</Link>
          </div>
        </nav>

        <div>
          {quizListData.map((data) => (
            <div className="quiz-view-description">
              <h1 className="quiz-view-heading">{data.title}</h1>
              <ul className="quiz-view-text">
                <li>{data.instruction}</li>
              </ul>
              <button id="view">
                <span id="comments">View </span>
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default QuizView;
