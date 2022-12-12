import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import ClientContainer from "../../ClientScreenComponents/ClientContainer";
import BackIcon from "../../../../assets/Icons/BackIcon";
import StatusBar from "../../ClientScreenComponents/StatusBar";
import { RadioButton, Title } from "react-native-paper";
import { color1, color2 } from "../../../../helpers/colors";
import CustomButton from "../../../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  deleteUserBio,
  deleteUserToken,
} from "../../../../store/actions/user_token";
import { deleteUserData } from "../../../../store/actions/user_data";
import { useDispatch, useSelector } from "react-redux";
import ErrorPopUp from "../../../../components/ErrorPopUp";
import { setFormData } from "../../../../store/actions/auth_data";
import RegCheckbox from "../../../../assets/Icons/RegCheckbox";

const EnterSexScreen = () => {
  const dispatch = useDispatch();
  const navigation: any = useNavigation();

  const genderItems = [
    { gender: "Мужской", value: "male", key: 1 },
    { gender: "Женский", value: "female", key: 2 },
  ];
  const [gender, setGender] = useState("");
  const [radioGender, setRadioGender] = useState("");
  const [genderVerify, setGenderVerify] = useState(false);

  function handleNavigate() {
    let form = new FormData();
    if (!gender) {
      setGenderVerify(true);
      return;
    }
    form.append("gender", gender);
    dispatch(setFormData(form));
    setGenderVerify(false);
    navigation.navigate("EnterAge");
  }

  const logout = async () => {
    await AsyncStorage.removeItem("userToken");
    dispatch(deleteUserToken());
    dispatch(deleteUserBio());
    dispatch(deleteUserData());
  };

  return (
    <ClientContainer>
      <Pressable onPress={logout} style={{ marginTop: 25 }}>
        <BackIcon />
      </Pressable>
      <View style={{ width: "100%" }}>
        <View style={{ alignItems: "center" }}>
          {genderVerify && (
            <ErrorPopUp style={{ marginTop: 15 }} error={"Выберите пол"} />
          )}
          <Text
            style={{
              color: "#1E1E1E",
              fontWeight: "600",
              fontSize: 19,
              lineHeight: 22.67,
            }}
          >
            1 из 3
          </Text>
        </View>
        <StatusBar activeWidth={{ width: "30%" }} />
      </View>
      <View style={{ marginVertical: 25 }}>
        <Text
          style={{
            color: "#1E1E1E",
            fontWeight: "600",
            fontSize: 19,
            lineHeight: 22.67,
          }}
        >
          Пол
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        {genderItems.map((item) => (
          <TouchableOpacity
            key={item.key}
            style={[styles.roleBox]}
            onPress={() => {
              setGender(item.value);
              setRadioGender(item.gender);
            }}
          >
            <Text
              style={{
                color: "#1E1E1E",
                fontWeight: "500",
                fontSize: 16,
                lineHeight: 20,
              }}
            >
              {item.gender}
            </Text>
            <Text>{radioGender === item.gender && <RegCheckbox />}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ marginBottom: 40 }}>
        <CustomButton onPress={handleNavigate} title={"Продолжить"} />
      </View>
    </ClientContainer>
  );
};
export default EnterSexScreen;

const styles = StyleSheet.create({
  roleBox: {
    backgroundColor: "#FFFFFF",
    marginBottom: 12,
    borderRadius: 52,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 17,
    borderWidth: 2,
    borderColor: "#E2E2E2",
    alignItems: "center",
  },
  roleItem: {
    top: 7,
    fontSize: 16,
  },
});
