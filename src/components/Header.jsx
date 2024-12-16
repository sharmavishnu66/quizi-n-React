import logo from '../assets/quiz-logo.png';

export default function Header() {
    return <header>
        <img src={logo} alt='Quiz log' />
        <h2>React Quiz</h2>

    </header>
}