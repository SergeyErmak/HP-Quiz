import { useState, useEffect } from 'react';

export default function GameTimer({ gameStarted, gameFinished, setElapsed }) {
	const [elapsedLocal, setElapsedLocal] = useState(0);

	useEffect(() => {
		let timerInterval;
		if (gameStarted && !gameFinished) {
			setElapsedLocal(0);
			setElapsed(0);
			timerInterval = setInterval(() => {
				setElapsedLocal((prev) => {
					setElapsed(prev + 1);
					return prev + 1;
				});
			}, 1000);
		}
		return () => clearInterval(timerInterval);
	}, [gameStarted, gameFinished, setElapsed]);

	const formatTime = (time) => (time < 10 ? `0${time}` : time);

	const minutes = formatTime(Math.floor(elapsedLocal / 60));
	const seconds = formatTime(elapsedLocal % 60);

	return (
		<div className="gameTimer">
			<p>
				{minutes}:{seconds}
			</p>
		</div>
	);
}
