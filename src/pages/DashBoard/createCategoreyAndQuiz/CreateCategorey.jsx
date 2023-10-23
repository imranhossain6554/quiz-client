import axios from "axios";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../../utilities/helper.js";
import "../SubmitQuestions/SubmitQuestions.css";
const CreateCategorey = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [categoreyText, setCategoreyText] = useState([]);
  const submitCategorey = () => {
    console.log("Sending", categoreyText);

    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/api/quizcategory/create`,
      headers: {
        "content-type": "application/json",
        access_token: `${getCookie("token")}`,
      },
      data: { categoreyText },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("SIGNIN SUCCESS", response);
        if (response.data) {
          e.target.reset();
        }
      })
      .catch((error) => {
        setError(error.response.data.error);
        console.log("SIGN IN ERROR", error.response.data);
        // setValues({ ...values, buttonText: 'Submit' });
        //setAuthError(error.response.data.error);
      });
  };

  return (
    <>
      <h1 id="overview">
        <span id="ove">Create </span>Categorey
      </h1>
      <section className="container">
        <section className="mt-4">
          <div className="d-flex">
            <h3 id="text-submit">
              <span className="text-submit">Create </span>Your Categorey
            </h3>
            <input
              type="text"
              id="addCategory"
              name="title"
              placeholder="Add new category"
              onChange={(e) => setCategoreyText(e.target.value)}
            />
            <button
              onClick={() => submitCategorey()}
              className="btn btn-primary waves-effect waves-light mx-2 deviceSubmit"
              id="plus"
            >
              <FaPlus />
            </button>
          </div>
        </section>
      </section>
    </>
  );
};

export default CreateCategorey;