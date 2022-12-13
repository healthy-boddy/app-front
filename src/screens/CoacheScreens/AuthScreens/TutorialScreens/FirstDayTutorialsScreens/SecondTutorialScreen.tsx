import React from "react";
import { View, Text } from "react-native";
import MainContainer from "../../../../../components/MainContainer";
import BackButton from "../../../../../components/BackButton";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../../../../components/CustomButton";
import Title from "../../../../../components/Title";
import Description from "../../../../../components/Description";
import ManAvatar from "../TutorialScreensIcons/ManAvatar";

const SecondTutorialScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <MainContainer>
      <View>
        <BackButton
          latter
          onPressLetter={() => {
            navigation.navigate("Greetings4");
          }}
          onPress={() => {
            navigation.navigate("FirstTutorial");
          }}
        />
      </View>
      <View style={{ flex: 1, marginTop: 10 }}>
        <Title titlePropStyle={{ fontSize: 24 }}>Закрепите свои знания</Title>
        <Description marginTop={8} marginBottom={24}>
          Пройдите небольшое тестирование, чтобы закрепить пройденный этап
          обучения, выделить ключевые моменты из изученного материала.
        </Description>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ManAvatar />
        </View>
      </View>
      <View style={{ marginBottom: 25 }}>
        <CustomButton
          title={"Продолжить"}
          onPress={() => {
            navigation.navigate("TutorialQuestions");
          }}
        />
      </View>
    </MainContainer>
  );
};

export default SecondTutorialScreen;
