import { useState, useEffect } from 'react';

export default function CurrentTime() {
	const date = new Date();
	const [currentTime, setCurrentTime] = useState(date);

	useEffect(() => {
		const interval = setInterval(() => {
			if (
				date.getHours() != currentTime.getHours() ||
				date.getMinutes() != currentTime.getMinutes()
			) {
				setCurrentTime(date);
			}
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

	return (
		<div className="currentTime">
			<p>
				{formatTime(currentTime.getHours())}:
				{formatTime(currentTime.getMinutes())}
			</p>
		</div>
	);
}
