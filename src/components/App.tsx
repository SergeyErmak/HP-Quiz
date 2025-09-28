//import { useState } from 'react';
//import MagicSkillsQuiz from './MagicSkillsQuiz.tsx';
import CurrentTime from './CurrentTime.tsx';
//import GameTimer from './GameTimer.tsx';

export default function App() {
	// const [quizStarted, setQuizStarted] = useState(false);
	// const [gameFinished, setGameFinished] = useState(false);
	// const [elapsed, setElapsed] = useState(0);

	return (
		<>
			<div className="timeWrapper">
				<CurrentTime />
				{/* <GameTimer
					gameStarted={quizStarted}
					gameFinished={gameFinished}
					setElapsed={setElapsed}
				/> */}
			</div>
			{/* <MagicSkillsQuiz
				quizStarted={quizStarted}
				setQuizStarted={setQuizStarted}
				setGameFinished={setGameFinished}
				elapsed={elapsed}
			/> */}
		</>
	);
}
