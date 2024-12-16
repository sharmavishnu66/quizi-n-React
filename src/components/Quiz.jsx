import { useCallback, useState } from "react"
import questions from "../questions";
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz(){
    const [userAnswers,setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
   

    const quizCompleted = activeQuestionIndex === questions.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectAnswer){
        setUserAnswers((preAnswer) => {
            return [...preAnswer,selectAnswer];
        })

    },[]);

    const hanleSkipAnwer = useCallback(() => handleSelectAnswer(null) , [handleSelectAnswer]);

    if(quizCompleted)
    {
        return <Summary userAnswers={userAnswers} />
    }
   

     return <div id="quiz">
       <Question key={activeQuestionIndex} index={activeQuestionIndex}  onSeleteAnswer={handleSelectAnswer} onSkipAnswer={hanleSkipAnwer} />
     </div>
}