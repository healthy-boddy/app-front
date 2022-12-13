import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import MainContainer from "../../../../../components/MainContainer";
import BackButton from "../../../../../components/BackButton";
import CustomButton from "../../../../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import Title from "../../../../../components/Title";
import Description from "../../../../../components/Description";
import { color1 } from "../../../../../helpers/colors";
import { LargeInput } from "../../../../../components/core/LargeInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSelector } from "react-redux";
import { WebView } from "react-native-webview";
import VideoPreViewVector from "../TutorialScreensIcons/VideoPreViewVector";
import StartVideoVector from "../TutorialScreensIcons/StartVideoVector";

const SecondFirstTutorialScreen = () => {
  const navigation = useNavigation<any>();
  const [value, setValue] = useState("");
  const [valueError, setValueError] = useState(false);
  let pdfAndVideo = useSelector(
    (store: any) => store?.auth_data?.setVideoEndPresentationArray
  );
  let tokenFromReducer = useSelector(
    (store: any) => store.user_token.user_token
  );
  let AuthStr = "Bearer " + tokenFromReducer;
  let [logVideo, setLogVideo] = useState(false);

  async function handleSendCheckList() {
    if (!value) {
      setValueError(true);
      return false;
    }
    setValueError(false);
    let checkListForm = new FormData();
    checkListForm.append("initial_consultation_checklist", value);
    await fetch("http://92.53.97.238/user/coach/update_me/", {
      method: "put",
      headers: {
        Authorization: AuthStr,
        "Content-Type": "multipart/form-data",
      },
      body: checkListForm,
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res, "handleSendCheckList day 2");
      });
    navigation.navigate("SecondTwoTutorial");
  }

  return (
    <MainContainer>
      <BackButton
        onPressLetter={() => {
          navigation.navigate("Greetings4");
        }}
        onPress={() => {
          navigation.navigate("Greetings4");
        }}
      />
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, marginTop: 16 }}
      >
        <Title titlePropStyle={{ fontSize: 24, marginBottom: 8 }}>
          Переходим к знакомству с клиентом
        </Title>
        <Description>Сегодня вы узнаете:</Description>
        <Description marginLeft={10}>
          {`\u2022 путь клиента,`}
          {"\n"}
          {`\u2022 алгоритм первичной консультации,`}
          {"\n"}
        </Description>
        <Title titlePropStyle={{ fontSize: 16 }}>
          Посмотрите видео от старшего сервис-менеджера Александры Щербаковой
        </Title>
        <View style={styles.video_box}>
          {!logVideo ? (
            <Pressable
              onPress={() => {
                setLogVideo(true);
              }}
              style={{
                width: "100%",
                height: 200,
                backgroundColor: "#8C64FF",
                borderRadius: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <VideoPreViewVector />
                <View
                  style={{
                    alignItems: "center",
                    right: 15,
                    justifyContent: "center",
                  }}
                >
                  <StartVideoVector />
                </View>
              </View>
            </Pressable>
          ) : (
            <WebView
              style={{ width: "100%", height: 200 }}
              source={{ uri: pdfAndVideo.coach_second_day_video_url }}
            />
          )}
        </View>
        <Title
          titlePropStyle={{ fontSize: 16, marginTop: 24, marginBottom: 8 }}
        >
          Задание
        </Title>
        <Description>
          Выпишите чек-лист первичной консультации (основные пункты для
          коммуникации с клиентом)
        </Description>
        <View style={{ marginTop: 12 }} />
        <LargeInput
          setValue={setValue}
          value={value}
          placeholder={"Напишите ответ"}
          valueError={valueError}
        />
        {valueError && (
          <Text
            style={{
              color: "red",
              fontWeight: "400",
              fontSize: 14,
              fontStyle: "normal",
              marginTop: 4,
            }}
          >
            Необходимо заполнить поле
          </Text>
        )}
        <View style={{ marginVertical: 25 }}>
          <CustomButton title={"Продолжить"} onPress={handleSendCheckList} />
        </View>
      </KeyboardAwareScrollView>
    </MainContainer>
  );
};
export default SecondFirstTutorialScreen;

const styles = StyleSheet.create({
  video_box: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    marginTop: 24,
  },
});
