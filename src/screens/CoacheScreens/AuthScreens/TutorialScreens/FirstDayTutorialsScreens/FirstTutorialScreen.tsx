import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import MainContainer from "../../../../../components/MainContainer";
import BackButton from "../../../../../components/BackButton";
import Title from "../../../../../components/Title";
import Description from "../../../../../components/Description";
import CustomButton from "../../../../../components/CustomButton";
import { LargeInput } from "../../../../../components/core/LargeInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { WebView } from "react-native-webview";
import VideoPreViewVector from "../TutorialScreensIcons/VideoPreViewVector";
import StartVideoVector from "../TutorialScreensIcons/StartVideoVector";

const FirstTutorialScreen = () => {
  const [value, setValue] = useState("");
  const [valueError, setValueError] = useState(false);
  const navigation = useNavigation<any>();
  let pdfAndVideo = useSelector(
    (store: any) => store?.auth_data?.setVideoEndPresentationArray
  );

  let tokenFromReducer = useSelector(
    (store: any) => store.user_token.user_token
  );
  let AuthStr = "Bearer " + tokenFromReducer;
  let [logVideo, setLogVideo] = useState(false);

  //console.log(pdfAndVideo, 'pdf')

  async function handleSendCheckList() {
    if (!value) {
      setValueError(true);
      return false;
    }
    setValueError(false);
    let checkListForm = new FormData();
    checkListForm.append("theses", value);
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
        console.log(res, "handleSendCheckList");
      });
    navigation.navigate("ThirdTutorial");
  }

  return (
    <MainContainer>
      <BackButton
        latter
        onPress={() => {
          navigation.navigate("Greetings4");
        }}
        onPressLetter={() => {
          navigation.navigate("Greetings4");
        }}
      />

      <KeyboardAwareScrollView>
        <View style={{ marginTop: 10, flex: 1 }}>
          <Title titlePropStyle={{ fontSize: 24 }}>
            Что такое Health Buddy?
          </Title>
          <Description marginTop={8} marginBottom={24}>
            Сервис наставников для раскрытия потенциала здоровья всех возрастов.
            Сегодня вы познакомитесь с компанией и увидите работу изнутри.
          </Description>
          <Text style={styles.description}>
            Посмотрите краткое видео о продукте
          </Text>

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
                  <View>
                    <VideoPreViewVector />
                  </View>
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      right: 35,
                    }}
                  >
                    <StartVideoVector />
                  </View>
                </View>
              </Pressable>
            ) : (
              <WebView
                style={{ width: "100%", height: 200 }}
                source={{ uri: pdfAndVideo.coach_first_day_video_url }}
              />
            )}
          </View>

          <Title titlePropStyle={{ marginTop: 24, marginBottom: 8 }}>
            Задание
          </Title>
          <Description>
            Напишите пять тезисов , которые отличают нас от конкурентов
          </Description>
          <View style={styles.input_box}>
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
          </View>
        </View>
        <View style={{ marginBottom: 25 }}>
          <CustomButton title={"Продолжить"} onPress={handleSendCheckList} />
        </View>
      </KeyboardAwareScrollView>
    </MainContainer>
  );
};

export default FirstTutorialScreen;
const styles = StyleSheet.create({
  description: {
    color: "#1E1E1E",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 19,
  },
  video_box: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    marginTop: 20,
  },
  input_box: {
    height: 140,
    width: "100%",
  },
  input: {
    backgroundColor: "#F5F4F8",
    height: "100%",
  },
});
