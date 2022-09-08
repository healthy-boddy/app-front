import React from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";
import { usePickQuizFirst } from "./hook/hooks";
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

export const QuizOne = () => {
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
  } = usePickQuizFirst();

  const handleClick = () => {
    // Object.keys(isActive).forEach((key) => {
    //   if (isActive[key] === "") {
    //     delete isActive[key];
    //   }
    // });
    //
    //   if (isActive["woman"]) {
    //     isActive["gender"] = isActive["woman"];
    //     delete isActive["woman"];
    //   } else if (isActive["man"]) {
    //     isActive["gender"] = isActive["man"];
    //     delete isActive["man"];
    //   }
    //   handlePickGender(isActive);
    navigation.navigate("QuizPageTwo");
  };

  return (
    <>
      <ComponentHeaderWrapper>
        <View style={styles.containerQuizPage}>
          <Text style={styles.textProgress}>1 из 16</Text>

          <ProgressBar steps={4} step={1} color={"#8C64FF"} height={10} />
        </View>

        <Text style={styles.titleText}>
          Выберите, какое у Вас состояние за последнее время:
        </Text>

        <ScrollView
          style={{
            paddingHorizontal: 16,
            width: "100%",
          }}
          showsVerticalScrollIndicator={false}
        >
          <CardBlockQuiz
            onPress={handlePressFirst}
            sexTitle={"Я получаю удовольствие от любимых вещей и занятий"}
            isActive={isActive.first}
          />
          <View style={{ marginTop: 12 }} />
          <CardBlockQuiz
            onPress={handlePressSecond}
            sexTitle={
              "Я испытываю чувство недовольства и раздражения крайне редко "
            }
            isActive={isActive.second}
          />
          <View style={{ marginTop: 12 }} />
          <CardBlockQuiz
            onPress={handlePressThird}
            sexTitle={"Я расстраиваюсь/переживаю чаще обычного "}
            isActive={isActive.third}
          />
          <View style={{ marginTop: 12 }} />
          <CardBlockQuiz
            onPress={handlePressFourth}
            sexTitle={"Мне стало труднее себя мотивировать, утратил интерес "}
            isActive={isActive.fourth}
          />
          <View style={{ marginTop: 12 }} />
          <CardBlockQuiz
            onPress={handlePressFifth}
            sexTitle={"Я чаще обычного медлю и принимаю решения "}
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
