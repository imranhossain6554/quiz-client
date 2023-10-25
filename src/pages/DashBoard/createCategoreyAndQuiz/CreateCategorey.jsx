import axios from "axios";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getCookie } from "../../../utilities/helper.js";
import "../SubmitQuestions/SubmitQuestions.css";
const CreateCategorey = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [categoreyText, setCategoreyText] = useState([]);
  const showToastMessage = () => {
    toast.success("categorey created successfully!");
  };
  const submitCategorey = () => {
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/api/quizcategory/create`,
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
      },
      data: { title: categoreyText },
    })
      //.then((response) => response.json())
      .then((response) => {
        if (response.data) {
          setCategoreyText("");
          showToastMessage();
          console.log("SIGNIN SUCCESS", response);
          //e.target.reset();
        }
      })
      .catch((error) => {
        setError(error.response.data);
        //console.log(" ERROR", error);
        //console.log(" ERROR data", error.response);
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
