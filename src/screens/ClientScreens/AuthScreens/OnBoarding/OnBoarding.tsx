import React from "react";
import {Dimensions, Image, Pressable, StyleSheet, Text, View,} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import {color1, color2} from "../../../../helpers/colors";
import {useNavigation} from "@react-navigation/native";
import Container from "../../../../components/Container";

const { width, height } = Dimensions.get("window");

const OnBoarding = () => {
  const navigation: any = useNavigation();

  const data = [
    {
      title: "Unleash your health potential",
      description: "We transform your biodata into simple graphs",
      image: "blob1.png",
    },
    {
      title: "Personalized plan",
      description: "Created by practising doctors and nutritionist",
      image: "blob2.png",
    },
    {
      title: "Health-coach",
      description:
        "Your personal Health-coach - personal mentor in health improvement",
      image: "blob3.png",
    },
    {
      title: "Health tracking",
      description:
        "Complete the first survey to have your data appear in the app",
      image: "blob4.png",
    },
  ];
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
              width: width - 32,
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
        renderItem={(data) => RenderItem(data.item)}
        renderNextButton={() => (
          <View style={styles.next_btn_box}>
            <View style={styles.next_btn}>
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontWeight: "500",
                  lineHeight: 20,
                  fontSize: 16,
                }}
              >
                  Next
              </Text>
            </View>
          </View>
        )}
      />
      <Pressable
        onPress={() => {
          navigation.navigate("EnterSex");
        }}
        style={styles.skip_btn}
      >
        <Text
          style={{
            color: "#7454CF",
            textAlign: "center",
            fontWeight: "500",
            lineHeight: 20,
            fontSize: 16,
          }}
        >
            Skip
        </Text>
      </Pressable>
    </Container>
  );
};

export default OnBoarding;
const styles = StyleSheet.create({
  next_btn_box: {
    alignSelf: "flex-end",
    alignItems: "center",
    width: 400,
    bottom: 35,
    transform: [
      {
        translateX: Dimensions.get('screen').width / 20,
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
});
