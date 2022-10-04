import React, { useRef } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Video } from "expo-av";
import { useNavigation } from "@react-navigation/native";
import Title from "../../../../components/Title";
import { WrapperPage } from "../../../../components/core/wrapper";

const GreetingsScreen4 = (props: any) => {
  const navigation: any = useNavigation();
  const video = useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <WrapperPage
      onPressBack={() => navigation.navigate("Greetings3")}
      onPressButton={() => navigation.navigate("Greetings5")}
      buttonTitle={"Продолжить"}
    >
      <View
        style={{
          paddingHorizontal: 16,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <View style={styles.title_box}>
              <Text
                style={{
                  fontWeight: "600",
                  fontSize: 24,
                  lineHeight: 28,
                  color: "#1E1E1E",
                  textAlign: "left",
                  alignSelf: "flex-start",
                }}
              >
                Приветствуем вас в команде Health Buddy
              </Text>

              <Text
                style={{
                  fontWeight: "600",
                  fontSize: 19,
                  lineHeight: 22.67,
                  color: "#1E1E1E",
                  textAlign: "left",
                  alignSelf: "flex-start",
                  marginTop: 16,
                }}
              >
                Пройти путь клиента:
              </Text>

              <Text
                style={{
                  marginTop: 12,
                  fontWeight: "400",
                  fontSize: 16,
                  lineHeight: 20,
                  color: "#797979",
                }}
              >
                Что такое Health Buddy — сегодня вы познакомитесь с компанией и
                увидите работу изнутри; {"\n"}Мы-сервис наставников для
                раскрытия потенциала здоровья всех возрастов;
              </Text>

              <Text
                style={{
                  fontWeight: "600",
                  fontSize: 19,
                  lineHeight: 22.67,
                  color: "#1E1E1E",
                  textAlign: "left",
                  alignSelf: "flex-start",
                  marginTop: 16,
                }}
              >
                Пройти путь клиента:
              </Text>

              <Text
                style={{
                  marginTop: 12,
                  fontWeight: "400",
                  fontSize: 16,
                  lineHeight: 20,
                  color: "#797979",
                }}
              >
                посмотрите краткое видео о продукте, чтобы ближе познакомиться с
                сервисом
              </Text>
            </View>
            <View style={styles.video_box}>
              <Video
                ref={video}
                style={styles.video}
                source={{
                  uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
                }}
                useNativeControls
                resizeMode={"contain"}
                isLooping
                onPlaybackStatusUpdate={(status) => setStatus(() => status)}
              />
            </View>
            <View>
              <Title titlePropStyle={{ fontSize: 20 }}>
                Напиши пять тезисов , которые{"\n"}отличают нас от конкурентов
              </Title>
            </View>
            <View style={styles.input_box}>
              <TextInput
                placeholder={"Написать"}
                style={styles.input}
                multiline={true}
                placeholderTextColor={"#797979"}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </WrapperPage>
  );
};
export default GreetingsScreen4;

const styles = StyleSheet.create({
  inlineContainer: {
    paddingHorizontal: 20,
    paddingTop: 35,
  },
  title_box: {
    marginTop: 25,
  },
  tutorial: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 12,
  },
  video_box: {},
  video: {
    width: "100%",
    height: 250,
    marginVertical: 15,
    borderRadius: 16,
  },
  input_box: {
    backgroundColor: "#F5F4F8",
    alignItems: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginTop: 12,
    marginBottom: 12,
    borderRadius: 12,
  },
  input: {
    maxHeight: "100%",
    color: "#1E1E1E",
  },
  button_box: {
    marginTop: 25,
    marginBottom: 40,
  },
});
