import React from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";
import { usePickQuizSecond } from "./hook/hooks";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { ComponentHeaderWrapper } from "../../../../components/core/component-header-wrapper/component-header-wrapper";
import { ProgressBar } from "../../../../components/core/progress-bar/progress-bar";
import { Button } from "../../../../components/core/button/button";
import { CardBlockQuiz } from "./card-block";
import { styles } from "./quiz-styles";

export enum QuizAnswers {
  Initial = "",
  FirstAnswer = "first",
  SecondAnswer = "second",
  ThirdAnswer = "third",
  FourthAnswer = "fourth",
  FifthAnswer = "fifth",
}

export const QuizTwo = () => {
  const navigation: any = useNavigation();
  const dispatch = useDispatch();

  // const handlePickGender = useCallback(
  //     async (gender) => dispatch(setGender(gender)),
  //     []
  // );

  const {
    handlePressFifth,
    handlePressFourth,
    handlePressThird,
    handlePressSecond,
    handlePressFirst,
    isActive,
  } = usePickQuizSecond();

  const handleClick = () => {
    Object.keys(isActive).forEach((key) => {
      if (isActive[key] === "") {
        delete isActive[key];
      }
    });
    //
    //   if (isActive["woman"]) {
    //     isActive["gender"] = isActive["woman"];
    //     delete isActive["woman"];
    //   } else if (isActive["man"]) {
    //     isActive["gender"] = isActive["man"];
    //     delete isActive["man"];
    //   }
    //   handlePickGender(isActive);
    //   navigation.navigate("PickBirthDate");
  };

  return (
    <>
      <ComponentHeaderWrapper>
        <View style={styles.containerQuizPage}>
          <Text style={styles.textProgress}>2 из 16</Text>

          <ProgressBar steps={16} step={2} color={"#8C64FF"} height={10} />
        </View>

        <Text style={styles.titleText}>
          Оцените Ваше физическое самочувствие
        </Text>

        <ScrollView
          style={{
            paddingHorizontal: 16,
            width: "100%",
            height: Dimensions.get("screen").height,
          }}
          showsVerticalScrollIndicator={false}
        >
          <CardBlockQuiz
            onPress={handlePressFirst}
            sexTitle={"Текст 1"}
            isActive={isActive.first}
          />
          <View style={{ marginTop: 12 }} />
          <CardBlockQuiz
            onPress={handlePressSecond}
            sexTitle={"Текст 2"}
            isActive={isActive.second}
          />
          <View style={{ marginTop: 12 }} />
          <CardBlockQuiz
            onPress={handlePressThird}
            sexTitle={"Текст 3"}
            isActive={isActive.third}
          />
          <View style={{ marginTop: 12 }} />
          <CardBlockQuiz
            onPress={handlePressFourth}
            sexTitle={"Текст 4"}
            isActive={isActive.fourth}
          />
          <View style={{ marginTop: 12 }} />
          <CardBlockQuiz
            onPress={handlePressFifth}
            sexTitle={"Текст 5"}
            isActive={isActive.fifth}
          />
          <View style={{ marginTop: 12 }} />
        </ScrollView>

        <View style={styles.buttonView}>
          <Button
            // disable={isButtonDisabled()}
            title="Продолжить"
            onPress={handleClick}
          />
        </View>
      </ComponentHeaderWrapper>
    </>
  );
};
