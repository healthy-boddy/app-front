import React, { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { DoneIcon } from "../../pick-gender/icon/done-icon";
import { QuizAnswers } from "./quiz-page-two";
import { styles } from "./quiz-styles";

interface CardBlockInterface {
  onPress: () => void;
  sexTitle: string;
  isActive: QuizAnswers;
}

export const CardBlockQuiz: FC<CardBlockInterface> = ({
  onPress,
  sexTitle,
  isActive,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        isActive === QuizAnswers.FirstAnswer && {
          backgroundColor: "#8C64FF",
        },
        isActive === QuizAnswers.SecondAnswer && {
          backgroundColor: "#8C64FF",
        },
        isActive === QuizAnswers.ThirdAnswer && {
          backgroundColor: "#8C64FF",
        },
        isActive === QuizAnswers.FourthAnswer && {
          backgroundColor: "#8C64FF",
        },
        isActive === QuizAnswers.FifthAnswer && {
          backgroundColor: "#8C64FF",
        },
      ]}
    >
      <Text
        style={[
          styles.textUnpick,

          isActive === QuizAnswers.FirstAnswer && {
            color: "#fff",
          },
          isActive === QuizAnswers.SecondAnswer && {
            color: "#fff",
          },
          isActive === QuizAnswers.ThirdAnswer && {
            color: "#fff",
          },
          isActive === QuizAnswers.FourthAnswer && {
            color: "#fff",
          },
          isActive === QuizAnswers.FifthAnswer && {
            color: "#fff",
          },
        ]}
      >
        {sexTitle}
      </Text>
      <View
        style={[
          styles.unPickBlock,
          isActive === QuizAnswers.FirstAnswer && styles.pickQuizBlock,
          isActive === QuizAnswers.SecondAnswer && styles.pickQuizBlock,
          isActive === QuizAnswers.ThirdAnswer && styles.pickQuizBlock,
          isActive === QuizAnswers.FourthAnswer && styles.pickQuizBlock,
          isActive === QuizAnswers.FifthAnswer && styles.pickQuizBlock,
        ]}
      >
        {isActive && <DoneIcon color={"#8C64FF"} />}
      </View>
    </TouchableOpacity>
  );
};
