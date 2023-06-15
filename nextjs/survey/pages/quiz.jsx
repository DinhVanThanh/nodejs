import Test from '../components/Test'
const Quiz = () => {
    const quiz = [
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
    ];
        
    
    return (<div>{
        quiz.map(item => {
            return (
                <Test test={item}/>
            );
        })
    }</div>);
  };
  export default Quiz;