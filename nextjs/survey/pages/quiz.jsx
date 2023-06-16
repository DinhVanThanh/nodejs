import Test from '../components/Test'
import React, { useState } from 'react';
const Quiz = () => {
    const initState = {
        currentStep: 1,
        tests : [
        {
            step : 1,
            active: true,
            options :
                {
                    question : 'how old are you ?',
                    answer: [
                        {
                            text : '12'
                        },
                        {
                            text : '23'
                        },
                        {
                            text : '56'
                        }
                    ]
                }
        },
        {
            step : 2,
            active: false,
            options :
                {
                    question : 'what your name ?',
                    answer: [
                        {
                            text : 'Matt'
                        },
                        {
                            text : 'Lisa'
                        },
                        {
                            text : 'Josh'
                        }
                    ]
                }
        }
    ]};
    const [quiz, setQuiz] = useState(initState);
    const nextQuiz = () =>
    {
        const step = quiz.currentStep + 1
        if(step > quiz.tests.length+1)
            return;
        const newQuiz = {...quiz, ...{currentStep : step}};
        setQuiz(newQuiz);
    }

    const previousQuiz = () =>
    {
        const step = quiz.currentStep - 1
        if(step == 0)
            return;
        const newQuiz = {...quiz, ...{currentStep : step}};
        setQuiz(newQuiz);
    }

    const submitAnswer = () => 
    {
        alert('submited');
    }

    if(quiz.currentStep > quiz.tests.length) {
        return (<button style={{padding: 10}} onClick={submitAnswer}>Submit</button>)
    } else {
        return (<div>{
            quiz.tests.map(item => {
                if(quiz.currentStep === item.step)
                {
                    return (
                        <Test test={item.options} onNext={nextQuiz} onPrevious={previousQuiz}/>
                    );
                }
            })
        }</div>);
        
    }
   
  };
  export default Quiz;