import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";
import { getCookie } from "../../../utilities/helper.js";
import "../SubmitQuestions/SubmitQuestions.css";
const CreateQuiz = () => {
  const { user, setUser, isLoading, setIsLoading, setAuthError, authError } =
    useAuth();
  const showToastMessage = () => {
    toast.success("data save successfully!");
  };
  const navigate = useNavigate();
  const [categoreyListData, setCategoreyListData] = useState([]);
  const [checkListData, setCheckListData] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/quizcategory/categories`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setCategoreyListData(data));
  }, []);

  console.log("cc", categoreyListData);

  //taking input
  const [quizCreateData, setQuizCreateData] = useState([]);
  const handelOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...quizCreateData };
    newData[field] = value;

    setQuizCreateData(newData);
  };
  const handelOnChecked = (e) => {
    const field = e.target.name;
    const value = e.target.checked;
    const newData = { ...checkListData };
    newData[field] = value;

    setCheckListData(newData);
  };

  //send data to save in db

  const submitData = (e) => {
    e.preventDefault();
    const myData = {
      ...quizCreateData,
      ...checkListData,
    };

    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/api/quiz/create`,
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
      },
      data: myData,
    })
      //.then((response) => response.json())
      .then((response) => {
        if (response.data) {
          showToastMessage();
          navigate("/dashboard", { replace: true });
          //e.target.reset();
        }
      })
      .catch((error) => {
        setError(error.response.data);

        // setValues({ ...values, buttonText: 'Submit' });
        //setAuthError(error.response.data.error);
      });
  };

  return (
    <>
      <h1 id="overview">
        <span id="ove">Create</span>Quiz
      </h1>
      <section className="container">
        <section className="mt-4">
          <form onSubmit={submitData}>
            <div className="row mt-4">
              <div>
                <label className="input-text" htmlFor="name">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  onChange={handelOnChange}
                  className="form-control input-text input-title"
                  placeholder="Your Name"
                />
              </div>
              <br />
              <div className="col mt-3">
                <label htmlFor="email" className="input-text">
                  Instruction
                </label>
                <input
                  type="text"
                  name="instruction"
                  onChange={handelOnChange}
                  className="form-control input-field input-text"
                  placeholder="Subject of your questions"
                />
              </div>
              <div className="col mt-3">
                <label htmlFor="email" className="input-text">
                  Tag
                </label>
                <input
                  type="text"
                  name="tag"
                  onChange={handelOnChange}
                  className="form-control input-field input-text"
                  placeholder="Code, Node JS,JS"
                />
              </div>
              {/*  <div className="col mt-3">
                <label htmlFor="isPublished" className="input-text">
                  Published
                </label>
                <input
                  type="radio"
                  name="isPublished"
                  value="isPublished"
                  className="form-control input-field input-text"
                />
              </div> */}
              <div className="col mt-3 ">
                <label htmlFor="isPublished" className="input-text">
                  Published
                </label>
                <input
                  type="radio"
                  id="html"
                  name="isPublished"
                  //value="isPublished"
                  checked={quizCreateData.isPublished}
                  onChange={handelOnChecked}
                  className="mx-2"
                />
              </div>
              <div className="col mt-3 ">
                <label htmlFor="isCompleted" className="input-text">
                  Completed
                </label>
                <input
                  type="radio"
                  id="html"
                  name="isCompleted"
                  //value="isCompleted"
                  checked={quizCreateData.isCompleted}
                  onChange={handelOnChecked}
                  className="mx-2"
                />
              </div>
              <div className="col mt-3 ">
                <label htmlFor="isDeleted" className="input-text">
                  Deleted
                </label>
                <input
                  type="radio"
                  id="html"
                  name="isDeleted"
                  value="isDeleted"
                  checked={quizCreateData.isDeleted}
                  onChange={handelOnChecked}
                  className="mx-2"
                />
              </div>
              <div className="col mt-3">
                <label htmlFor="totalMark" className="input-text">
                  Total Mark
                </label>
                <input
                  type="text"
                  name="totalMark"
                  onChange={handelOnChange}
                  className="form-control input-field input-text"
                  placeholder="Total Mark"
                />
              </div>
              <div className="col mt-3">
                <label htmlFor="openDate" className="input-text">
                  Open Date
                </label>
                <input
                  type="date"
                  name="openDate"
                  onChange={handelOnChange}
                  className="form-control input-field input-text"
                  placeholder="open Date"
                />
              </div>
              <div className="col mt-3">
                <label htmlFor=" closeDate" className="input-text">
                  Close Date
                </label>
                <input
                  type="date"
                  name="closeDate"
                  onChange={handelOnChange}
                  className="form-control input-field input-text"
                  placeholder="Close Date"
                />
              </div>

              <div class=" col mt-3">
                <label htmlFor="email" className="input-text">
                  Quiz Category
                </label>
                <select
                  class="form-select form-control input-field input-text"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  name="quizCategotyId"
                  onChange={handelOnChange}
                >
                  {categoreyListData.map((data) => (
                    <option value={data.id}>{data.title}</option>
                  ))}
                </select>
              </div>
            </div>
            <br />
            <button onClick={submitData} className="file_submit mt-5">
              Submit
            </button>
          </form>
        </section>
      </section>
    </>
  );
};

export default CreateQuiz;
