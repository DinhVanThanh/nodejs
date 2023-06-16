import Test from '../components/Test'
import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Quiz = () => {
    const [quiz, setQuiz] = useState(null);
    const fetchData = async () => {
        const { data, error, isLoading  } = useSWR('/api/quiz', fetcher)
        console.log(data);
        setQuiz(data);
    };
    useEffect(() => {
        
      fetchData();

      }, []);
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
    if(quiz !== null)
    {
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
    }
    
   
  };
  export default Quiz;