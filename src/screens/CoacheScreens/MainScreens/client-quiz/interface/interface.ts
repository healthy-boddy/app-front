export type QuizArray = Array<Quiz>;
export type QuizAnswersText = Array<AnswersText>;

export type Quiz = {
  created_at: string;
  id: number;
  quiz_name: string;
  quiz_slug: string;
  user: number;
};

export type AnswersText = {
  answers_text_list: Array<string>;
  other_answer: string | null;
  question_text: string;
  response: number;
};
