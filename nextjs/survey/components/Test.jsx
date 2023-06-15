import styles from '@/styles/Common.module.css'
import styleTest from '@/styles/Test.module.css'
import React from "react";
const Test = (props) => {
    console.log(props)
    return (
        <div className={styleTest.quizOptions}>
            <div>
                <h3>Pure CSS Quiz</h3>
                <p>QUESTION 1 OF 5</p>
                <p>{props.test.question}</p>
            </div>
            <form>
                <div>
                {
                    props.test.answer.map(item => 
                        {
                            return (
                                <div className={styles.block, styleTest.text}>
                                    <input type="radio"  id="one-a" name="yes-1" required/>
                                    <label class="radio-label jsjwjdwjdwjdwco" for="one-a">
                                    {item.text}
                                    </label>
                                </div>
                            );
                        }
                    )
                }
                </div>
                <a id="btn" type="submit" onclick="window.location.href='#section-2'">Next</a>
            </form>
         
        </div>
    );
};
export default Test;