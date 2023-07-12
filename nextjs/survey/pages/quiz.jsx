import Test from '../components/Test'
import React, { useState, useEffect } from 'react';
import { getServerSideProps } from "../services/serverservive.js";
export { getServerSideProps };
const Quiz = ({ data }) => {
  const [quiz, setQuiz] = useState(data);

  const nextTest = () => {
    const step = quiz.currentStep + 1;
    if (step > quiz.tests.length + 1) return;
    const newQuiz = { ...quiz, ...{ currentStep: step } };
    setQuiz(newQuiz);
  };

  const previousTest = () => {
    const step = quiz.currentStep - 1;
    if (step == 0) return;
    const newQuiz = { ...quiz, ...{ currentStep: step } };
    setQuiz(newQuiz);
  };

  const submitAnswer = () => {
    alert("submited");
  };
  if (quiz !== null) {
    if (quiz.currentStep > quiz.tests.length) {
      return (
        <button style={{ padding: 10 }} onClick={submitAnswer}>
          Submit
        </button>
      );
    } else {
      return (
        <div>
          {quiz.tests.map((item) => {
            if (quiz.currentStep === item.step) {
              return (
                <Test
                  test={item.options}
                  onNext={nextTest}
                  onPrevious={previousTest}
                />
              );
            }
          })}
        </div>
      );
    }
  }
};
  export default Quiz;