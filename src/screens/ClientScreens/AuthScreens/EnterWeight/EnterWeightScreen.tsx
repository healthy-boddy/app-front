import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import ClientContainer from "../../ClientScreenComponents/ClientContainer";
import BackButton from "../../../../components/BackButton";
import { Title } from "react-native-paper";
import StatusBar from "../../ClientScreenComponents/StatusBar";
import { useNavigation } from "@react-navigation/native";
import WheelPickerExpo from "react-native-wheel-picker-expo";
import CustomButton from "../../../../components/CustomButton";
import { useSelector } from "react-redux";
import axios from "axios";
import { baseUrl } from "../../../../helpers/url";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { WrapperPage } from "../../../../components/core/wrapper";

const EnterWeightScreen = () => {
  const NUMBERS: string[] =
    "45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,102,102,103,104,105,106,107,108,109,110,111,112,113,114,115".split(
      ","
    );
  const navigation: any = useNavigation();
  let [userToken, setUserToken] = useState<any>(null);

  let form = useSelector((store: any) => store.auth_data.formData);

  let user_data = useSelector((store: any) => store.user_data.user_data);
  //  console.log(user_data, 'user)data')
  console.log(form, "form form");

  const [number, setNumber] = useState("");

  // console.log(number, 'number')

  useEffect(() => {
    AsyncStorage.getItem("userToken").then((r) => setUserToken(r));
  }, []);

  async function handleUpdateUserDate() {
    let AuthStr = "Bearer " + userToken;
    form.append("weight", number);
    try {
      const response = await axios.put(
        baseUrl + "/client/update_me/",
        {
          body: {
            gender: form._parts[0][1],
            weight: form._parts[1][1],
            birthday: form._parts[2][1],
          },
        },
        {
          headers: {
            Authorization: AuthStr,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response, "response");
      navigation.navigate("EnterRate");
    } catch (e) {
      console.log(e, "error");
    }
  }

  return (
    <WrapperPage
      onPressBack={() => {
        navigation.navigate("EnterAge");
      }}
      onPressButton={handleUpdateUserDate}
      buttonTitle={"Продолжить"}
    >
      <View
        style={{
          width: "100%",
          paddingHorizontal: 16,
          flex: 1,
        }}
      >
        <View style={{ width: "100%" }}>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                color: "#1E1E1E",
                fontWeight: "600",
                fontSize: 19,
                lineHeight: 22.67,
              }}
            >
              3 из 4
            </Text>
          </View>
          <StatusBar activeWidth={{ width: "75%" }} />
        </View>
        <View style={{ alignItems: "center", marginVertical: 25 }}>
          <Text
            style={{
              color: "#1E1E1E",
              fontWeight: "700",
              fontSize: 24,
              lineHeight: 28,
            }}
          >
            Ваш вес
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <WheelPickerExpo
            height={300}
            width={"100%"}
            initialSelectedIndex={3}
            items={NUMBERS.map((name: any) => ({ label: name, value: "" }))}
            onChange={({ item }) => setNumber(item.label)}
            backgroundColor="#FFFFFF"
            selectedStyle={{ borderWidth: 1 }}
          />
        </View>
      </View>
    </WrapperPage>
  );
};

export default EnterWeightScreen;
