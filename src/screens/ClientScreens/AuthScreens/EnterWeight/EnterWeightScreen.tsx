import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import StatusBar from "../../ClientScreenComponents/StatusBar";
import { useNavigation } from "@react-navigation/native";
import WheelPickerExpo from "react-native-wheel-picker-expo";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../../../../helpers/url";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { WrapperPage } from "../../../../components/core/wrapper";
import { setClientData } from "../../../../store/actions/user_token";

const EnterWeightScreen = () => {
  const NUMBERS: string[] =
    "45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,102,102,103,104,105,106,107,108,109,110,111,112,113,114,115".split(
      ","
    );
  const navigation: any = useNavigation();
  let [userToken, setUserToken] = useState<any>(null);
  const dispatch = useDispatch();
  let form = useSelector((store: any) => store.auth_data.formData);
  console.log(form, "form from weight screen");
  const [number, setNumber] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("userToken").then((r) => setUserToken(r));
  }, []);

  async function handeSendUpdatedDate() {
    let AuthStr = "Bearer " + userToken;
    await form.append("weight", number);

    await fetch(baseUrl + "/client/update_me/", {
      method: "put",
      headers: {
        Authorization: AuthStr,
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
      body: form,
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        dispatch(setClientData(response.weight));
      });
  }

  return (
    <WrapperPage
      onPressBack={() => {
        navigation.navigate("EnterAge");
      }}
      onPressButton={handeSendUpdatedDate}
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
              3 из 3
            </Text>
          </View>
          <StatusBar activeWidth={{ width: "100%" }} />
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
            selectedStyle={{ borderWidth: 1, borderColor: '#e3e3e3'}}
          />
        </View>
      </View>
    </WrapperPage>
  );
};

export default EnterWeightScreen;
