import { useState, useEffect } from 'react';

export default function CurrentTime() {
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const formatTime = (time) => (time < 10 ? `0${time}` : time);

	return (
		<div className="currentTime">
			<p>
				{formatTime(currentTime.getHours())}:
				{formatTime(currentTime.getMinutes())}
			</p>
		</div>
	);
}
