import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Doctor from "../../../../assets/Icons/Doctor";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  deleteUserBio,
  deleteUserToken,
} from "../../../../store/actions/user_token";
import { deleteUserData } from "../../../../store/actions/user_data";
import { WrapperPage } from "../../../../components/core/wrapper";
import MainContainer from "../../../../components/MainContainer";
import CustomButton from "../../../../components/CustomButton";

const GreetingsScreen = (props: any) => {
  const dispatch = useDispatch();
  const navigation: any = useNavigation();
  let user_data = useSelector((store: any) => store.user_data?.user_data);
  console.log(user_data, "from greeting screen");

  const logout = async () => {
    await AsyncStorage.removeItem("userToken");
    dispatch(deleteUserToken());
    dispatch(deleteUserBio());
    dispatch(deleteUserData());
  };

  return (
    <MainContainer buttonTitle={"Отлично! Продолжить"}>
      <View
        style={{
          paddingHorizontal: 16,
          flex: 1,
        }}
      >
        <Text
          style={{
            fontWeight: "600",
            fontSize: 24,
            lineHeight: 28,
            color: "#1E1E1E",
            textAlign: "left",
            alignSelf: "flex-start",
            marginTop: 25,
          }}
        >

                <Text
                    style={{
                        fontWeight: "600",
                        fontSize: 24,
                        lineHeight: 28,
                        color: "#1E1E1E",
                        textAlign: "left",
                        alignSelf: "flex-start",
                        marginTop: 25
                    }}
                >
                    Здравствуйте, {user_data?.user?.username} !
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
                    Мы вас нашли в списке верифицированных в бадди.
                </Text>
                <View style={styles.image_box}>
                    <Doctor/>
                </View>
            <View style={{marginBottom: 40}}>
                <CustomButton
                    onPress={() => {
                        navigation.navigate("Greetings2")
                    }}
                    title={'Отлично! Продолжить'}/>
            </View>
        </MainContainer>
    );
          Здравствуйте, {user_data?.user?.username} !
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
          Мы вас нашли в списке верифицированных в бадди.
        </Text>
        <View style={styles.image_box}>
          <Doctor />
        </View>
      </View>
      <View style={{ marginBottom: 25 }}>
        <CustomButton
          onPress={() => {
            navigation.navigate("Greetings2");
          }}
          title={"Отлично! Продолжить"}
        />
      </View>
    </MainContainer>
  );
};

export default GreetingsScreen;
const styles = StyleSheet.create({
  inlineContainer: {
    paddingHorizontal: 20,
    paddingTop: 35,
  },
  title_box: {
    marginTop: 25,
  },
  image_box: {
    alignItems: "center",
    marginTop: 52,
    flex: 1,
  },
});
