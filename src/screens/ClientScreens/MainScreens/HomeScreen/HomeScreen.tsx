import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import MainContainer from "../../../../components/MainContainer";
import { useSelector } from "react-redux";
import { BellIcon } from "../../../../assets/Icons/BellIcon";
import Title from "../../../../components/Title";
import CustomButton from "../../../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation: any = useNavigation();
  const user_data = useSelector((store: any) => store.user_data.user_data);
  console.log(user_data.user);
  return (
    <MainContainer>
      <View
        style={{
          paddingHorizontal: 16,
          height: "100%",
        }}
      >
        <View style={styles.header}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../../../../assets/images/np_img.png")}
              style={styles.image}
            />
            <Text
              style={{
                lineHeight: 19.09,
                fontSize: 16,
                color: "#1E1E1E",
                fontWeight: "600",
              }}
            >
              {user_data.user.username}
            </Text>
          </View>
          <BellIcon />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              lineHeight: 28,
              fontSize: 24,
              color: "#1E1E1E",
              fontWeight: "600",
            }}
          >
            Найдите своего наставника
          </Text>
          <Text
            style={{
              lineHeight: 20,
              fontSize: 16,
              color: "#797979",
              fontWeight: "400",
            }}
          >
            Пройдите опрос, чтобы мы подобрали для вас наиболее подходящего
            наставника. Это займет около 30 минут.
          </Text>
        </View>
        <View style={{ flex: 1, alignSelf: "center" }}>
          <Image
            source={require("../../AuthScreens/OnBoarding/OnBoardingImages/blob1.png")}
          />
        </View>
        <View style={{ marginBottom: 40 }}>
          <CustomButton
            onPress={() => {
              navigation.navigate("Questions");
            }}
            title={"Пройти опрос"}
          />
        </View>
      </View>
    </MainContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 52,
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
});
