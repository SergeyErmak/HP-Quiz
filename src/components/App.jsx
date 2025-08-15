import { useState } from 'react';
import MagicSkillsQuiz from './MagicSkillsQuiz.jsx';
import CurrentTime from './CurrentTime.jsx';
import GameTimer from './GameTimer.jsx';

export default function App() {
	const [quizStarted, setQuizStarted] = useState(false);
	const [gameFinished, setGameFinished] = useState(false);
	const [elapsed, setElapsed] = useState(0);

	return (
		<>
			<div className="timeWrapper">
				<CurrentTime />
				<GameTimer
					gameStarted={quizStarted}
					gameFinished={gameFinished}
					setElapsed={setElapsed}
				/>
			</div>
			<MagicSkillsQuiz
				quizStarted={quizStarted}
				setQuizStarted={setQuizStarted}
				setGameFinished={setGameFinished}
				elapsed={elapsed}
			/>
		</>
	);
}
