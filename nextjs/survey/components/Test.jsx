import styles from '@/styles/Common.module.css'
import styleTest from '@/styles/Test.module.css'
import React from "react";
const Test = (props) => {
    return (
        <div className={styleTest.quizOptions}>
            <div>
                <p>QUESTION 1 OF 5</p>
                <p>{props.test.question}</p>
            </div>
                <div>
                {
                    props.test.answer.map((item, idx) => 
                        {
                            return (
                                <div key={idx} className={styles.block, styleTest.text}>
                                    <input type="radio"  id="one-a" name="yes-1"/>
                                    <label>
                                    {item.text}
                                    </label>
                                </div>
                            );
                        }
                    )
                }
                </div>
                <button style={{padding: 10}} id="btn" onClick={() => { props.onPrevious()}}>Previous</button>
                <button style={{padding: 10}} id="btn" onClick={() => { props.onNext()}}>Next</button>
        </div>
    );
};
export default Test;