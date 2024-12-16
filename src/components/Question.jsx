import { useState } from "react"
import Answers from "./Answers"
import QuestionTimer from "./QuestionTimer"
import questions from "../questions";


export default function Question({index,onSeleteAnswer,onSkipAnswer}){

const [answer,setAnswer] = useState({
    selectedAnswer : '',
    isCorrect:null
});
let timer = 10000;

if(answer.selectedAnswer)
{
    timer=1000
}
if(answer.isCorrect !== '')
{
    timer =2000;
}

const handleAnswer =(answer)=>{
    setAnswer({
        selectedAnswer: answer,
        isCorrect:null
    });

    setTimeout(() =>{
        setAnswer({
            selectedAnswer:answer,
            isCorrect: questions[index].answers[0] === answer
        });
        setTimeout(() =>{
            onSeleteAnswer(answer)
        },2000)
    },1000);
}

let answerState ='';
if(answer.selectedAnswer && answer.isCorrect !== null){
    answerState = answer.isCorrect ? 'correct' : 'wrong';
}else if(answer.selectedAnswer)
{
    answerState = 'answered'
}

    return  <div id="question">
    <QuestionTimer key={timer} timeOut ={timer} onTimeOut={answer.selectedAnswer ? onSkipAnswer : null} mode={answerState} />
<h2 >{questions[index].text}</h2>
<Answers answers={questions[index].answers}  selectedAnswer={answer.selectedAnswer} answerState={answerState} onSelect={handleAnswer} />
</div>
}