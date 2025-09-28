import { QuizQuestion, QuizAnswer } from '../types/quiz-models';
import questionsList from '../data/question.json';

export default function getQuizQuestions(
	shuffleQuestions: boolean,
	shuffleAnswers: boolean
): QuizQuestion[] {
	const result = questionsList
		.map((q, i) => {
			var quest = {
				sortOrder: i,
				text: q.question,
				answers: q.answers
					.map((a, ai) => {
						return {
							sortOrder: ai,
							text: a,
							isCorrect: ai == q.correct,
						} as QuizAnswer;
					})
					.sort((a) => (shuffleAnswers ? Math.random() - 0.5 : a.sortOrder)),
			} as QuizQuestion;

			return quest;
		})
		.sort((x) => (shuffleQuestions ? Math.random() - 0.5 : x.sortOrder));

	return result;
}
