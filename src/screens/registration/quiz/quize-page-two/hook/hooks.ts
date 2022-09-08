import { useMemo, useState } from "react";
import { QuizAnswers } from "../quiz-page-two";

export const usePickQuizSecond = () => {
  const [isActive, setIsActive] = useState({
    first: QuizAnswers.Initial,
    second: QuizAnswers.Initial,
    third: QuizAnswers.Initial,
    fourth: QuizAnswers.Initial,
    fifth: QuizAnswers.Initial,
    sixth: QuizAnswers.Initial,
  });

  const handlePressFirst = () => {
    setIsActive({
      ...isActive,
      first: QuizAnswers.FirstAnswer,
      second: QuizAnswers.Initial,
      third: QuizAnswers.Initial,
      fourth: QuizAnswers.Initial,
      fifth: QuizAnswers.Initial,
      sixth: QuizAnswers.Initial,
    });
  };

  const handlePressSecond = () => {
    setIsActive({
      ...isActive,
      first: QuizAnswers.Initial,
      second: QuizAnswers.SecondAnswer,
      third: QuizAnswers.Initial,
      fourth: QuizAnswers.Initial,
      fifth: QuizAnswers.Initial,
      sixth: QuizAnswers.Initial,
    });
  };

  const handlePressThird = () => {
    setIsActive({
      ...isActive,
      first: QuizAnswers.Initial,
      second: QuizAnswers.Initial,
      third: QuizAnswers.ThirdAnswer,
      fourth: QuizAnswers.Initial,
      fifth: QuizAnswers.Initial,
      sixth: QuizAnswers.Initial,
    });
  };

  const handlePressFourth = () => {
    setIsActive({
      ...isActive,
      first: QuizAnswers.Initial,
      second: QuizAnswers.Initial,
      third: QuizAnswers.Initial,
      fourth: QuizAnswers.FourthAnswer,
      fifth: QuizAnswers.Initial,
      sixth: QuizAnswers.Initial,
    });
  };

  const handlePressFifth = () => {
    setIsActive({
      ...isActive,
      first: QuizAnswers.Initial,
      second: QuizAnswers.Initial,
      third: QuizAnswers.Initial,
      fourth: QuizAnswers.Initial,
      fifth: QuizAnswers.FifthAnswer,
      sixth: QuizAnswers.Initial,
    });
  };

  const handlePressSixth = () => {
    setIsActive({
      ...isActive,
      first: QuizAnswers.Initial,
      second: QuizAnswers.Initial,
      third: QuizAnswers.Initial,
      fourth: QuizAnswers.Initial,
      fifth: QuizAnswers.Initial,
    });
  };

  return useMemo(
    () => ({
      handlePressFirst: handlePressFirst,
      handlePressSecond: handlePressSecond,
      handlePressThird: handlePressThird,
      handlePressFourth: handlePressFourth,
      handlePressFifth: handlePressFifth,
      handlePressSixth: handlePressSixth,
      isActive,
    }),
    [
      handlePressSixth,
      handlePressFifth,
      handlePressFourth,
      handlePressThird,
      handlePressSecond,
      handlePressFirst,
      isActive,
    ]
  );
};
