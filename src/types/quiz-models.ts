export type QuizQuestion = {
	sortOrder: number;
	text: string;
	answers: QuizAnswer[];
};

export type QuizAnswer = {
	sortOrder: number;
	text: string;
	isCorrect: boolean;
};

export type QuizQuestionResult = {
	question: QuizQuestion;
	answer: QuizAnswer;
};
