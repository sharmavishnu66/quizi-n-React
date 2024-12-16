import { useRef } from "react";

export default function Answers({answers,selectedAnswer,answerState,onSelect}){
    const suffuledAnswer = useRef();

    if(!suffuledAnswer.current)
        {
            suffuledAnswer.current = [...answers];
        suffuledAnswer.current.sort(() => Math.round() - 0.5);
        }

     return <ul id="answers">
     {suffuledAnswer.current.map((answer) =>
     {
         const isSelected = selectedAnswer === answer;
         let cssClass ='';
         if(answerState === 'answered' && isSelected)
         {
             cssClass = 'selected'
         }
         if((answerState === 'correct' || answerState === 'wrong') && isSelected)
         {
                 cssClass =answerState;
         }

    return (
    <li key={answer} className="answer">
    <button onClick={() => onSelect(answer)} className={cssClass} disabled={answerState !== ''}>{answer}</button>

</li>)
})}

  </ul>
}