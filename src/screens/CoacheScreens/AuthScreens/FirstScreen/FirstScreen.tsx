import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
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
      description: "Service of mentors for the restoration and preservation of health",
      image: "blob1.png",
    },
    {
      title: "Programs for clients",
      description: "Track prescriptions' dynamics using a digital avatar",
      image: "blob2.png",
    },
    {
      title: "Regular client base",
      description:
          "Register doctor's profile and get fast access to the knowledge and clients base",
      image: "blob3.png",
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
                        Continue
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

export default FirstScreen;

const styles = StyleSheet.create({
  next_btn_box: {
    alignSelf: "flex-end",
    alignItems: "center",
    width: 400,
    bottom: 35,
    transform: [
      {
        translateX: 20,
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
