import QuizCompleted from '../assets/quiz-complete.png';
import questions from '../questions';

export default function Summary({userAnswers}){

    const skippedAnsers = userAnswers.filter(item => item === null);
    const correctAnswer = userAnswers.filter((answer,index) => answer === questions[index].answers[0]);

    const skippedAnswerShare = Math.round((skippedAnsers.length / userAnswers.length) * 100);
    const correctAnswerShare = Math.round((correctAnswer.length / userAnswers.length) * 100);
    const wrongAnswerShare = 100 - skippedAnswerShare - correctAnswerShare;

    return <div id="summary">
    <img src={QuizCompleted} alt="Quiz completed"/>
    <h2>Quiz Completed</h2>
    <div id="summary-stats">
        <p>
            <span className='number'>{skippedAnswerShare}%</span>
            <span className='text'>Skipped</span>
        </p>
        <p>
            <span className='number'>{correctAnswerShare}%</span>
            <span className='text'>Answered correctly</span>
        </p>
        <p>
            <span className='number'>{wrongAnswerShare}%</span>
            <span className='text'>Answered incorrectly</span>
        </p>

    </div>
    <ol>
        { userAnswers.map((answer,index) => {
            let cssClass = 'user-answer';
            if(answer === null)
            {
                cssClass +='skipped';
            }
            else if(answer === questions[index].answers[0]){
                cssClass +='correct';

            }else{
                cssClass +='wrong'
            }
            return <li key={index}>
            <h3>{index}</h3>
            <p className='question'>{questions[index].text}</p>
            <p className='user-answer'>{answer ?? ' Skipped' }</p>
        </li>
        })}
    </ol>
</div>

}