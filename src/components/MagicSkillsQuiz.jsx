import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import questionsData from '../question.json';

export default function MagicSkillsQuiz() {
<<<<<<< HEAD
	const [quizStarted, setQuizStarted] = useState(false); //Quiz Start
	const [currentQuestion, setCurrentQuestion] = useState(0); //Current question
	const [score, setScore] = useState(0);
	const [selected, setSelected] = useState(null); //Selected question
	const [answers, setAnswers] = useState([]); //Array of answers
	const [showResult, setShowResult] = useState(false); //Result

	//Delete data from localStorage after refreshing web-page
=======
	const [quizStarted, setQuizStarted] = useState(false);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [selected, setSelected] = useState(null);
	const [answers, setAnswers] = useState([]);
	const [showResult, setShowResult] = useState(false);

>>>>>>> 22264837c2d4d3aab64ac61d5d66004f31324220
	useEffect(() => {
		localStorage.removeItem('hpQuizScore');
		setScore(0);
	}, []);

<<<<<<< HEAD
	//Render questions from API in json data
=======
>>>>>>> 22264837c2d4d3aab64ac61d5d66004f31324220
	useEffect(() => {
		if (quizStarted) {
			const shuffled = [...questionsData].map((q) => ({
				...q,
				answers: q.answers
					.map((a, i) => ({ text: a, index: i }))
					.sort(() => Math.random() - 0.5),
			}));
			setAnswers(shuffled);
		}
	}, [quizStarted]);

<<<<<<< HEAD
	//Function for handling events with answers and save right answers in localStorage
=======
>>>>>>> 22264837c2d4d3aab64ac61d5d66004f31324220
	const handleAnswer = (optionIndex) => {
		setSelected(optionIndex);

		if (optionIndex === answers[currentQuestion].correct) {
			setScore((prev) => {
				const newScore = prev + 1;
				localStorage.setItem('hpQuizScore', newScore);
				return newScore;
			});
		}

		setTimeout(() => {
			setSelected(null);
			if (currentQuestion + 1 < answers.length) {
				setCurrentQuestion((prev) => prev + 1);
			} else {
				setShowResult(true);
			}
		}, 1000);
	};

<<<<<<< HEAD
	//Function for reseting localStorage and quiz
=======
>>>>>>> 22264837c2d4d3aab64ac61d5d66004f31324220
	const resetQuiz = () => {
		setQuizStarted(false);
		setCurrentQuestion(0);
		setSelected(null);
		setShowResult(false);
		setScore(0);
		localStorage.removeItem('hpQuizScore');
	};

	if (!quizStarted) {
		return (
			<div className="quiz-start">
				<button onClick={() => setQuizStarted(true)} className="start-btn">
					Start Harry Potter Spells Quiz
				</button>
			</div>
		);
	}
<<<<<<< HEAD
	//Rendering result when quiz is over
=======

>>>>>>> 22264837c2d4d3aab64ac61d5d66004f31324220
	if (showResult) {
		return (
			<div className="quiz-result">
				<h2>
					Your score: {score} / {answers.length}
				</h2>
				{score === answers.length && <h2>You&apos;re really big fun</h2>}
				{score >= answers.length - 2 && score < answers.length && (
					<h2>Almost perfect! Great job!</h2>
				)}
				{score < answers.length - 2 && <h2>Keep practicing your spells!</h2>}
				{score === 0 && <h2>You need to read</h2>}
				<button onClick={resetQuiz}>Play Again</button>
			</div>
		);
	}

	return (
		<div className="quiz-container">
			{answers.length > 0 && answers[currentQuestion] ? (
				<>
					<h3>{answers[currentQuestion].question}</h3>
					<div className="options">
						{answers[currentQuestion].answers.map((option) => {
							const isCorrect =
								option.index === answers[currentQuestion].correct;
							const isSelected = selected === option.index;
							const isOther = selected !== null && !isSelected;

							return (
<<<<<<< HEAD
								//Animate buttons after pushing
=======
>>>>>>> 22264837c2d4d3aab64ac61d5d66004f31324220
								<motion.button
									key={option.text}
									className="quiz-option"
									initial={{ x: 0, opacity: 1 }}
									animate={
										isSelected
											? {
													x: 200,
													backgroundColor: isCorrect ? '#4caf50' : '#f44336',
													opacity: 1,
											  }
											: isOther
											? { opacity: 0, scale: 0.9 }
											: { x: 0, opacity: 1, scale: 1 }
									}
									transition={{ duration: 0.4 }}
									onTap={() => handleAnswer(option.index)}
								>
									{option.text} {isSelected && (isCorrect ? '✅' : '❌')}
								</motion.button>
							);
						})}
					</div>
				</>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
}
