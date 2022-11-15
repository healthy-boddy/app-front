import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable,
    Dimensions, Platform,
} from "react-native";
import { color1, color2, color3 } from "../../../../helpers/colors";
import AppIntroSlider from "react-native-app-intro-slider";
import CustomButton from "../../../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import Container from "../../../../components/Container";
const { width, height } = Dimensions.get("window");

const FirstScreen: React.FC = (props) => {
  const navigation: any = useNavigation();
  const data = [
    {
      title: "Health Buddy",
      description: "Сервис наставников по восстановлению и сохранению здоровья",
      image: "blob1.png",
    },
    {
      title: "Программы для клиентов",
      description: "Отслеживаем динамику назначений через цифровой аватар по всем параметрам организма ",
      image: "blob2.png",
    },
    {
      title: "Постоянная база клиентов",
      description:
          "Зарегистрируй профиль врача  и получай быстрый доступ к базе знаний и клиентов ",
      image: "blob3.png",
    },
  ];
    const [index, setIndex] = useState(0);


  const RenderItem = (item: any) => {
    return (
        <View
            style={{
              flex: 1,
              width: "100%",
              justifyContent: "center",
              bottom: 80,
            }}
        >
          <View style={{ alignItems: "center" }}>
            <Image source={require(`./OnBoardingImages/blob1.png`)} />
          </View>
          <View
              style={{
                alignItems: "center",
              }}
          >
            <Text
                style={{
                  textAlign: "center",
                  fontWeight: "700",
                  lineHeight: 40,
                  fontSize: 34,
                  color: "#1E1E1E",
                  marginVertical: 12,
                  width: 343,
                }}
            >
              {item.title}
            </Text>
            <Text
                style={{
                  paddingHorizontal: 16,
                  textAlign: "center",
                  fontWeight: "400",
                  lineHeight: 20,
                  fontSize: 16,
                  color: "#797979",
                  width: 280
                }}
            >
              {item.description}
            </Text>
          </View>
        </View>
    );
  };

  return (
      <Container containerProp={{ width: "100%", flex: 1, marginTop: 50 }}>
        <AppIntroSlider
            activeDotStyle={{ backgroundColor: color1, top: -750 }}
            dotStyle={{ backgroundColor: color2, top: -750 }}
            data={data}
            onSlideChange={setIndex}
            renderItem={(data) => RenderItem(data.item)}
            renderNextButton={() => (
                <View style={Platform.OS !== "android" ? styles.next_btn_box : styles.ios_next_btn_box}>
                <View style={Platform.OS !== "android" ? styles.next_btn : styles.ios_next_btn}>
                    <Text
                        style={{
                          color: "#fff",
                          textAlign: "center",
                          fontWeight: "500",
                          lineHeight: 20,
                          fontSize: 16,
                        }}
                    >
                      Далее
                    </Text>
                  </View>
                </View>

            )}
        />
        <Pressable
            onPress={() => {
              navigation.navigate("Greetings");
            }}
            style={styles.skip_btn}
        >
            {index === 2 ? (
                <View style={styles.next_btn_finish}>
                    <View style={styles.next_btn}>
                        <Text
                            style={{
                                color: "#fff",
                                textAlign: "center",
                                fontWeight: "500",
                                lineHeight: 20,
                                fontSize: 16,
                            }}>
                            Начать
                        </Text>
                    </View>
                </View>
            ) : (
                <Text
                    style={{
                        color: "#7454CF",
                        textAlign: "center",
                        fontWeight: "500",
                        lineHeight: 20,
                        fontSize: 16,
                    }}
                >
                    Пропустить
                </Text>
            )}
        </Pressable>
      </Container>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  next_btn_box: {
    alignSelf: "flex-end",
    alignItems: "center",
    width: 400,
    bottom: 35,
      transform: [
          {
              translateX: Dimensions.get('screen').width / 100,
          },
      ],
  },
  next_btn: {
    width: width - 32,
    maxWidth: 380,
    backgroundColor: color1,
    padding: 15,
    borderRadius: 30,
    marginTop: 25,
  },
  skip_btn: {
    top: "85%",
    alignSelf: "center",
    position: "absolute",
  },
    ios_next_btn_box:{
        alignSelf: "flex-end",
        alignItems: "center",
        width: 400,
        bottom: 35,
        transform: [
            {
                translateX: Dimensions.get('screen').width / 100,
            },
        ],
    },
    ios_next_btn:{
        width: width - 5,
        maxWidth: 390,
        backgroundColor: color1,
        padding: 15,
        borderRadius: 30,
        marginTop: 25,
        left: -21
    },
    next_btn_finish: {
        alignSelf: "flex-end",
        alignItems: "center",
        width: 400,
        bottom: -8,
        left: -1
    },
});
