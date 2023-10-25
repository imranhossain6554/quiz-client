import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { getCookie } from "../../../utilities/helper.js";
import "./QuizViewDescription.css";
const QuizViewDescription = () => {
  const { user, setUser, isLoading, setIsLoading, setAuthError, authError } =
    useAuth();
  const [answerDataList, setAnswerDataList] = useState({
    Question1Answer: null,
    Question2Answer: null,
    Question3Answer: null,
    Question4Answer: null,
    Question5Answer: null,
    Question6Answer: null,
    Question7Answer: null,
    Question8Answer: null,
  });
  const [error, setError] = useState("");
  const correctAnswers = {
    Question1Answer: "Facebook",
    Question2Answer: "Dart",
    Question3Answer: "4",
    Question4Answer: "JIT(Just-in-time)",
    Question5Answer: "Current",
    Question6Answer: "Firebase Database",
    Question7Answer: "Widget tests",
    Question8Answer: "Keys",
  };

  const handleOnChecked = (e, question) => {
    const value = e.target.value;
    setAnswerDataList({
      ...answerDataList,
      [question]: value,
    });
  };

  const isCorrect = (question) => {
    return answerDataList[question] === correctAnswers[question];
  };
  const navigate = useNavigate();
  const saveAnswersToDatabase = (e) => {
    e.preventDefault();

    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/api/quiz/answernew/create`,
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
      },
      data: answerDataList,
    })
      //.then((response) => response.json())
      .then((response) => {
        if (response.status === 200) {
          console.log("sucess res", response);
          //showToastMessage();
          navigate("/", { replace: true });
          //e.target.reset();
        }
      })
      .catch((error) => {
        navigate("/quizviewdescription", { replace: true });
        // setValues({ ...values, buttonText: 'Submit' });
        //setAuthError(error.response.data.error);
      });
  };
  return (
    <>
      <section className="container mt-5">
        <form onSubmit={saveAnswersToDatabase}>
          <h1 className="quiz-view-heading">
            <span id="quiz-view-color">Submit Answer</span>
          </h1>

          <div>
            <h1 className="quiz-view-flutter">
              1. Who developed the Flutter Framework and continues to maintain
              it today?
            </h1>
            <div className="d-flex quiz-option">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="Facebook"
                  checked={answerDataList.Question1Answer === "Facebook"}
                  onChange={(e) => handleOnChecked(e, "Question1Answer")}
                />
                <label
                  className={`form-check-label ${
                    isCorrect("Question1Answer") ? "correct-answer" : ""
                  } ${
                    !isCorrect("Question1Answer") &&
                    answerDataList.Question1Answer === "Facebook"
                      ? "correct-answer"
                      : ""
                  }`}
                  htmlFor="Facebook"
                >
                  Facebook
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="Google"
                  checked={answerDataList.Question1Answer === "Google"}
                  onChange={(e) => handleOnChecked(e, "Question1Answer")}
                />
                <label
                  className={`form-check-label ${
                    isCorrect("Question1Answer") ? "" : ""
                  } ${
                    !isCorrect("Question1Answer") &&
                    answerDataList.Question1Answer === "Google"
                      ? "wrong-answer"
                      : ""
                  }`}
                  htmlFor="Google"
                >
                  Google
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="Telegram"
                  checked={answerDataList.Question1Answer === "Telegram"}
                  onChange={(e) => handleOnChecked(e, "Question1Answer")}
                />
                <label
                  className={`form-check-label ${
                    isCorrect("Question1Answer") ? "" : ""
                  } ${
                    !isCorrect("Question1Answer") &&
                    answerDataList.Question1Answer === "Telegram"
                      ? "wrong-answer"
                      : ""
                  }`}
                  htmlFor="Telegram"
                >
                  Telegram
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="Yahoo"
                  checked={answerDataList.Question1Answer === "Yahoo"}
                  onChange={(e) => handleOnChecked(e, "Question1Answer")}
                />
                <label
                  className={`form-check-label ${
                    isCorrect("Question1Answer") ? "" : ""
                  } ${
                    !isCorrect("Question1Answer") &&
                    answerDataList.Question1Answer === "Yahoo"
                      ? "wrong-answer"
                      : ""
                  }`}
                  htmlFor="Google"
                >
                  Yahoo
                </label>
              </div>
              {/* Add similar code for other options for Question 1 */}
            </div>
          </div>

          <div>
            <h1 className="quiz-view-flutter">
              2. Which programming language is used to build Flutter
              applications?
            </h1>
            <div className="d-flex quiz-option">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="Katlin"
                  checked={answerDataList.Question2Answer === "Katlin"}
                  onChange={(e) => handleOnChecked(e, "Question2Answer")}
                />
                <label
                  className={`form-check-label ${
                    isCorrect("Question2Answer") ? "" : ""
                  } ${
                    !isCorrect("Question2Answer") &&
                    answerDataList.Question2Answer === "Katlin"
                      ? "wrong-answer"
                      : ""
                  }`}
                  htmlFor="Katlin"
                >
                  Katlin
                </label>
              </div>

              <div class="form-check " id="dart">
                <input
                  class="form-check-input"
                  type="radio"
                  value="Dart"
                  checked={answerDataList.Question2Answer === "Dart"}
                  onChange={(e) => handleOnChecked(e, "Question2Answer")}
                />
                <label
                  className={`form-check-label ${
                    isCorrect("Question2Answer") ? "correct-answer" : ""
                  } ${
                    !isCorrect("Question2Answer") &&
                    answerDataList.Question2Answer === "Dart"
                      ? "correct-answer"
                      : ""
                  }`}
                  htmlFor="Facebook"
                >
                  Dart
                </label>
              </div>
            </div>
            <div className="d-flex quiz-option">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="Java"
                  checked={answerDataList.Question2Answer === "Java"}
                  onChange={(e) => handleOnChecked(e, "Question2Answer")}
                />
                <label
                  className={`form-check-label ${
                    isCorrect("Question2Answer") ? "" : ""
                  } ${
                    !isCorrect("Question2Answer") &&
                    answerDataList.Question2Answer === "Java"
                      ? "wrong-answer"
                      : ""
                  }`}
                  htmlFor="Google"
                >
                  Java
                </label>
              </div>
              <div class="form-check quiz-option" id="go">
                <input
                  class="form-check-input"
                  type="radio"
                  value="Go"
                  checked={answerDataList.Question2Answer === "Go"}
                  onChange={(e) => handleOnChecked(e, "Question2Answer")}
                />
                <label
                  className={`form-check-label ${
                    isCorrect("Question2Answer") ? "" : ""
                  } ${
                    !isCorrect("Question2Answer") &&
                    answerDataList.Question2Answer === "Go"
                      ? "wrong-answer"
                      : ""
                  }`}
                  htmlFor="Go"
                >
                  Go
                </label>
              </div>
            </div>
          </div>
          <div>
            <h1 className="quiz-view-flutter">
              3. How many types of widgets are there in Flutter?
            </h1>
            <div className="d-flex quiz-option">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="2"
                  checked={answerDataList.Question3Answer === "2"}
                  onChange={(e) => handleOnChecked(e, "Question3Answer")}
                />
                <label
                  className={`form-check-label ${
                    isCorrect("Question3Answer") ? "" : ""
                  } ${
                    !isCorrect("Question3Answer") &&
                    answerDataList.Question3Answer === "2"
                      ? "wrong-answer"
                      : ""
                  }`}
                  htmlFor="2"
                >
                  2
                </label>
              </div>

              <div class="form-check " id="dart">
                <input
                  class="form-check-input"
                  type="radio"
                  value="4"
                  checked={answerDataList.Question3Answer === "4"}
                  onChange={(e) => handleOnChecked(e, "Question3Answer")}
                />
                <label
                  className={`form-check-label ${
                    isCorrect("Question3Answer") ? "correct-answer" : ""
                  } ${
                    !isCorrect("Question3Answer") &&
                    answerDataList.Question3Answer === "4"
                      ? "correct-answer"
                      : ""
                  }`}
                  htmlFor="Facebook"
                >
                  4
                </label>
              </div>
            </div>
            <div className="d-flex quiz-option">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="6"
                  checked={answerDataList.Question3Answer === "6"}
                  onChange={(e) => handleOnChecked(e, "Question3Answer")}
                />
                <label
                  className={`form-check-label ${
                    isCorrect("Question3Answer") ? "" : ""
                  } ${
                    !isCorrect("Question3Answer") &&
                    answerDataList.Question3Answer === "6"
                      ? "wrong-answer"
                      : ""
                  }`}
                  htmlFor="6"
                >
                  6
                </label>
              </div>
              <div class="form-check quiz-option" id="go">
                <input
                  class="form-check-input"
                  type="radio"
                  value="9"
                  checked={answerDataList.Question3Answer === "9"}
                  onChange={(e) => handleOnChecked(e, "Question3Answer")}
                />
                <label
                  className={`form-check-label ${
                    isCorrect("Question3Answer") ? "" : ""
                  } ${
                    !isCorrect("Question3Answer") &&
                    answerDataList.Question3Answer === "9"
                      ? "wrong-answer"
                      : ""
                  }`}
                  htmlFor="9"
                >
                  9
                </label>
              </div>
            </div>
          </div>
          <div>
            <h1 className="quiz-view-flutter">
              4. How many types of widgets are there in Flutter?
            </h1>
            <div className="d-flex quiz-option">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="AOT(ahed-of-time)"
                  checked={
                    answerDataList.Question4Answer === "AOT(ahed-of-time)"
                  }
                  onChange={(e) => handleOnChecked(e, "Question4Answer")}
                />
                <label
                  className={`form-check-label ${
                    isCorrect("Question4Answer") ? "" : ""
                  } ${
                    !isCorrect("Question4Answer") &&
                    answerDataList.Question4Answer === "AOT(ahed-of-time)"
                      ? "wrong-answer"
                      : ""
                  }`}
                  htmlFor="AOT(ahed-of-time)"
                >
                  AOT(ahed-of-time)
                </label>
              </div>

              <div class="form-check " id="dart">
                <input
                  class="form-check-input"
                  type="radio"
                  value="JIT(Just-in-time)"
                  checked={
                    answerDataList.Question4Answer === "JIT(Just-in-time)"
                  }
                  onChange={(e) => handleOnChecked(e, "Question4Answer")}
                />
                <label
                  className={`form-check-label ${
                    isCorrect("Question4Answer") ? "correct-answer" : ""
                  } ${
                    !isCorrect("Question4Answer") &&
                    answerDataList.Question4Answer === "JIT(Just-in-time)"
                      ? "correct-answer"
                      : ""
                  }`}
                  htmlFor="JIT(Just-in-time)"
                >
                  JIT(Just-in-time)
                </label>
              </div>
            </div>
            <div className="d-flex quiz-option">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="Transcompilation"
                  checked={
                    answerDataList.Question4Answer === "Transcompilation"
                  }
                  onChange={(e) => handleOnChecked(e, "Question4Answer")}
                />
                <label
                  className={`form-check-label ${
                    isCorrect("Question4Answer") ? "" : ""
                  } ${
                    !isCorrect("Question4Answer") &&
                    answerDataList.Question4Answer === "Transcompilation"
                      ? "wrong-answer"
                      : ""
                  }`}
                  htmlFor="Transcompilation"
                >
                  Transcompilation
                </label>
              </div>
              <div class="form-check quiz-option" id="go">
                <input
                  class="form-check-input"
                  type="radio"
                  value="Recompilation"
                  checked={answerDataList.Question4Answer === "Recompilation"}
                  onChange={(e) => handleOnChecked(e, "Question4Answer")}
                />
                <label
                  className={`form-check-label ${
                    isCorrect("Question4Answer") ? "" : ""
                  } ${
                    !isCorrect("Question4Answer") &&
                    answerDataList.Question4Answer === "Recompilation"
                      ? "wrong-answer"
                      : ""
                  }`}
                  htmlFor="Recompilation"
                >
                  Recompilation
                </label>
              </div>
            </div>
          </div>
          <div>
            <h1 className="quiz-view-flutter">
              5. How many types of widgets are there in Flutter?
            </h1>
            <div className="d-flex quiz-option">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="AOT(ahed-of-time)"
                  checked={
                    answerDataList.Question5Answer === "AOT(ahed-of-time)"
                  }
                  onChange={(e) => handleOnChecked(e, "Question5Answer")}
                />
                <label
                  className={`form-check-label ${
                    isCorrect("Question5Answer") ? "" : ""
                  } ${
                    !isCorrect("Question5Answer") &&
                    answerDataList.Question5Answer === "AOT(ahed-of-time)"
                      ? "wrong-answer"
                      : ""
                  }`}
                  htmlFor="AOT(ahed-of-time)"
                >
                  AOT(ahed-of-time)
                </label>
              </div>

              <div class="form-check " id="dart">
                <input
                  class="form-check-input"
                  type="radio"
                  value="Current"
                  checked={answerDataList.Question5Answer === "Current"}
                  onChange={(e) => handleOnChecked(e, "Question5Answer")}
                />
                <label
                  className={`form-check-label ${
                    isCorrect("Question5Answer") ? "correct-answer" : ""
                  } ${
                    !isCorrect("Question5Answer") &&
                    answerDataList.Question5Answer === "Current"
                      ? "correct-answer"
                      : ""
                  }`}
                  htmlFor="Current"
                >
                  Current
                </label>
              </div>
            </div>
            <div className="d-flex quiz-option">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="Transcompilation"
                  checked={
                    answerDataList.Question5Answer === "Transcompilation"
                  }
                  onChange={(e) => handleOnChecked(e, "Question5Answer")}
                />
                <label
                  className={`form-check-label ${
                    isCorrect("Question5Answer") ? "" : ""
                  } ${
                    !isCorrect("Question4Answer") &&
                    answerDataList.Question5Answer === "Transcompilation"
                      ? "wrong-answer"
                      : ""
                  }`}
                  htmlFor="Transcompilation"
                >
                  Transcompilation
                </label>
              </div>
              <div class="form-check quiz-option" id="go">
                <input
                  class="form-check-input"
                  type="radio"
                  value="Recompilation"
                  checked={answerDataList.Question5Answer === "Recompilation"}
                  onChange={(e) => handleOnChecked(e, "Question5Answer")}
                />
                <label
                  className={`form-check-label ${
                    isCorrect("Question5Answer") ? "" : ""
                  } ${
                    !isCorrect("Question5Answer") &&
                    answerDataList.Question5Answer === "Recompilation"
                      ? "wrong-answer"
                      : ""
                  }`}
                  htmlFor="Recompilation"
                >
                  Recompilation
                </label>
              </div>
            </div>
          </div>
          <div>
            <h1 className="quiz-view-flutter">
              6. A sequence of asynchronous Flutter events is known as a:
            </h1>
            <div className="d-flex quiz-option">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="SQLite"
                  checked={answerDataList.Question6Answer === "SQLite"}
                  onChange={(e) => handleOnChecked(e, "Question6Answer")}
                />
                <label
                  className={`form-check-label ${
                    isCorrect("Question6Answer") ? "" : ""
                  } ${
                    !isCorrect("Question6Answer") &&
                    answerDataList.Question6Answer === "SQLite"
                      ? "wrong-answer"
                      : ""
                  }`}
                  htmlFor="SQLite"
                >
                  SQLite
                </label>
              </div>

              <div class="form-check " id="dart">
                <input
                  class="form-check-input"
                  type="radio"
                  value="Firebase Database"
                  checked={
                    answerDataList.Question6Answer === "Firebase Database"
                  }
                  onChange={(e) => handleOnChecked(e, "Question6Answer")}
                />
                <label
                  className={`form-check-label ${
                    isCorrect("Question6Answer") ? "correct-answer" : ""
                  } ${
                    !isCorrect("Question6Answer") &&
                    answerDataList.Question6Answer === "Firebase Database"
                      ? "correct-answer"
                      : ""
                  }`}
                  htmlFor="Firebase Database"
                >
                  Firebase Database
                </label>
              </div>
            </div>
            <div className="d-flex quiz-option">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="MYSQL"
                  checked={answerDataList.Question6Answer === "MYSQL"}
                  onChange={(e) => handleOnChecked(e, "Question6Answer")}
                />
                <label
                  className={`form-check-label ${
                    isCorrect("Question6Answer") ? "" : ""
                  } ${
                    !isCorrect("Question6Answer") &&
                    answerDataList.Question6Answer === "MYSQL"
                      ? "wrong-answer"
                      : ""
                  }`}
                  htmlFor="MYSQL"
                >
                  MYSQL
                </label>
              </div>
              <div class="form-check quiz-option" id="go">
                <input
                  class="form-check-input"
                  type="radio"
                  value="NOSQL"
                  checked={answerDataList.Question6Answer === "NOSQL"}
                  onChange={(e) => handleOnChecked(e, "Question6Answer")}
                />
                <label
                  className={`form-check-label ${
                    isCorrect("Question6Answer") ? "" : ""
                  } ${
                    !isCorrect("Question6Answer") &&
                    answerDataList.Question6Answer === "NOSQL"
                      ? "wrong-answer"
                      : ""
                  }`}
                  htmlFor="NOSQL"
                >
                  NOSQL
                </label>
              </div>
            </div>
          </div>
          <div>
            <h1 className="quiz-view-flutter">
              7. A sequence of asynchronous Flutter events is known as a:
            </h1>
            <div className="d-flex quiz-option">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="Unit tests"
                  checked={answerDataList.Question7Answer === "Unit tests"}
                  onChange={(e) => handleOnChecked(e, "Question7Answer")}
                />
                <label
                  className={`form-check-label ${
                    isCorrect("Question7Answer") ? "" : ""
                  } ${
                    !isCorrect("Question7Answer") &&
                    answerDataList.Question7Answer === "Unit tests"
                      ? "wrong-answer"
                      : ""
                  }`}
                  htmlFor="Unit tests"
                >
                  Unit tests
                </label>
              </div>

              <div class="form-check " id="dart">
                <input
                  class="form-check-input"
                  type="radio"
                  value="Widget tests"
                  checked={answerDataList.Question7Answer === "Widget tests"}
                  onChange={(e) => handleOnChecked(e, "Question7Answer")}
                />
                <label
                  className={`form-check-label ${
                    isCorrect("Question7Answer") ? "correct-answer" : ""
                  } ${
                    !isCorrect("Question7Answer") &&
                    answerDataList.Question7Answer === "Widget tests"
                      ? "correct-answer"
                      : ""
                  }`}
                  htmlFor="Widget tests"
                >
                  Widget tests
                </label>
              </div>
            </div>
            <div className="d-flex quiz-option">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="Integration Tests"
                  checked={
                    answerDataList.Question7Answer === "Integration Tests"
                  }
                  onChange={(e) => handleOnChecked(e, "Question7Answer")}
                />
                <label
                  className={`form-check-label ${
                    isCorrect("Question7Answer") ? "" : ""
                  } ${
                    !isCorrect("Question7Answer") &&
                    answerDataList.Question7Answer === "Integration Tests"
                      ? "wrong-answer"
                      : ""
                  }`}
                  htmlFor="Integration Tests"
                >
                  Integration Tests
                </label>
              </div>
              <div class="form-check quiz-option" id="go">
                <input
                  class="form-check-input"
                  type="radio"
                  value="ALL"
                  checked={answerDataList.Question7Answer === "ALL"}
                  onChange={(e) => handleOnChecked(e, "Question7Answer")}
                />
                <label
                  className={`form-check-label ${
                    isCorrect("Question7Answer") ? "" : ""
                  } ${
                    !isCorrect("Question7Answer") &&
                    answerDataList.Question7Answer === "ALL"
                      ? "wrong-answer"
                      : ""
                  }`}
                  htmlFor="ALL"
                >
                  ALL
                </label>
              </div>
            </div>
          </div>
          <div>
            <h1 className="quiz-view-flutter">
              8. What type of test can examine your code as a complete system?
            </h1>
            <div className="d-flex quiz-option">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="Widgets"
                  checked={answerDataList.Question8Answer === "Widgets"}
                  onChange={(e) => handleOnChecked(e, "Question8Answer")}
                />
                <label
                  className={`form-check-label ${
                    isCorrect("Question8Answer") ? "" : ""
                  } ${
                    !isCorrect("Question8Answer") &&
                    answerDataList.Question8Answer === "Widgets"
                      ? "wrong-answer"
                      : ""
                  }`}
                  htmlFor="Widgets"
                >
                  Widgets
                </label>
              </div>

              <div class="form-check " id="dart">
                <input
                  class="form-check-input"
                  type="radio"
                  value="Keys"
                  checked={answerDataList.Question8Answer === "Keys"}
                  onChange={(e) => handleOnChecked(e, "Question8Answer")}
                />
                <label
                  className={`form-check-label ${
                    isCorrect("Question8Answer") ? "correct-answer" : ""
                  } ${
                    !isCorrect("Question8Answer") &&
                    answerDataList.Question8Answer === "Keys"
                      ? "correct-answer"
                      : ""
                  }`}
                  htmlFor="Keys"
                >
                  Keys
                </label>
              </div>
            </div>
            <div className="d-flex quiz-option">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="Elements"
                  checked={answerDataList.Question8Answer === "Elements"}
                  onChange={(e) => handleOnChecked(e, "Question8Answer")}
                />
                <label
                  className={`form-check-label ${
                    isCorrect("Question8Answer") ? "" : ""
                  } ${
                    !isCorrect("Question8Answer") &&
                    answerDataList.Question8Answer === "Elements"
                      ? "wrong-answer"
                      : ""
                  }`}
                  htmlFor="Elements"
                >
                  Elements
                </label>
              </div>
              <div class="form-check quiz-option" id="Serial">
                <input
                  class="form-check-input"
                  type="radio"
                  value="Serial"
                  checked={answerDataList.Question8Answer === "Serial"}
                  onChange={(e) => handleOnChecked(e, "Question8Answer")}
                />
                <label
                  className={`form-check-label ${
                    isCorrect("Question8Answer") ? "" : ""
                  } ${
                    !isCorrect("Question8Answer") &&
                    answerDataList.Question8Answer === "Serial"
                      ? "wrong-answer"
                      : ""
                  }`}
                  htmlFor="Serial"
                >
                  Serial
                </label>
              </div>
            </div>
          </div>

          <div>
            <button class="button" onClick={saveAnswersToDatabase}>
              <div class="button-overlay"></div>
              <span>
                Submit
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 53 58"
                  height="58"
                  width="53"
                >
                  <path
                    stroke-width="9"
                    stroke="currentColor"
                    d="M44.25 36.3612L17.25 51.9497C11.5833 55.2213 4.5 51.1318 4.50001 44.5885L4.50001 13.4115C4.50001 6.86824 11.5833 2.77868 17.25 6.05033L44.25 21.6388C49.9167 24.9104 49.9167 33.0896 44.25 36.3612Z"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default QuizViewDescription;
