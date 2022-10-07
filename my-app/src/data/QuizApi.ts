import { arrangeArray } from "../utils/arrangeArray";
import { ApiResponse } from "./ApiResponse";

export type ApiResponseState = ApiResponse & { answers: string[] };

export const fetchQuizQuestions = async (categories : number) => {

  const api =
    `https://opentdb.com/api.php?amount=5&category=${categories}&difficulty=easy&type=multiple`;
  const data = await (await fetch(api)).json();
  return data.results.map((question: ApiResponse) => ({
    ...question,
    answers: arrangeArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
