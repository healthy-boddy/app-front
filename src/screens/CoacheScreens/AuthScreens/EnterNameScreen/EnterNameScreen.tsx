import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import PenIcon from "../../../../assets/Icons/PenIcon";
import { color1, color2, color3 } from "../../../../helpers/colors";
import CustomButton from "../../../../components/CustomButton";
import * as ImagePicker from "expo-image-picker";
import { useDispatch } from "react-redux";
import {setFormData, setUserRole} from "../../../../store/actions/auth_data";
import Title from "../../../../components/Title";
import ErrorPopUp from "../../../../components/ErrorPopUp";
import { RadioButton } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Delete from "../../../../assets/Icons/Delete";
import { WrapperPage } from "../../../../components/core/wrapper";

const EnterNameScreen = () => {
  const navigation: any = useNavigation();
  const [name, setName] = useState("");
  const [image, setImage] = useState<any>(null);
  const [role, setRole] = useState("");

  const [nameValid, setNameValid] = useState(true);
  const [imageValid, setImageValid] = useState(true);
  const [roleValid, setRoleValid] = useState(true);

  const dispatch = useDispatch();
  const roles = [
    { name: "Клиент", role: "client", key: 1, checked: false },
    { name: "Коуч", role: "coach", key: 2, checked: false },
    // {name: 'Врач', role: 'doctor', key: 3, checked: false},
  ];
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage({
        uri: result.uri,
        name: `IMG_` + Date.now() + `.JPG`,
        type: result.type + "/jpeg",
        id: Date.now(),
        lastModified: Date.now(),
      });
    }
  };

  function handleSetNameAvatar() {
    if (!name || !image || !roleValid) {
      if (!name) {
        setNameValid(false);
      } else {
        setNameValid(true);
      }
      if (!image) {
        setImageValid(false);
      } else {
        setImageValid(true);
      }
      if (!role) {
        setRoleValid(false);
      } else {
        setRoleValid(true);
      }
      return false;
    }
    setNameValid(true);
    setImageValid(true);
    setRoleValid(true);
    let form = new FormData();
    form.append("username", name);
    form.append("avatar", image);
    dispatch(setFormData(form));
    dispatch(setUserRole(role))
    navigation.navigate("CreateAccount");
  }

  return (
    <WrapperPage
      onPressBack={navigation.goBack}
      onPressButton={handleSetNameAvatar}
      buttonTitle={"Продолжить"}
    >
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        style={{ width: "100%", paddingHorizontal: 16 }}
      >
        <View>
          {!nameValid && (
            <ErrorPopUp style={{ marginBottom: 5 }} error={"Введите имя"} />
          )}
          {!imageValid && (
            <ErrorPopUp style={{ marginBottom: 5 }} error={"Добавьте фото"} />
          )}
          {!roleValid && (
            <ErrorPopUp style={{ marginBottom: 5 }} error={"Выберете роль"} />
          )}
        </View>
        <View style={{ flex: 1, marginBottom: 30 }}>
          <View>
            <View style={styles.top_box}>
              <View style={{ position: "relative" }}>
                <TouchableOpacity onPress={pickImage} style={styles.edit_icon}>
                  <PenIcon />
                </TouchableOpacity>
                <View>
                  {!image ? (
                    <Image
                      style={styles.image}
                      source={require("../../../../assets/images/np_img.png")}
                    />
                  ) : (
                    <Image style={styles.image} source={{ uri: image.uri }} />
                  )}
                </View>
              </View>
              <View style={{ marginTop: 15 }}>
                <Text
                  style={{
                    color: color3,
                    fontWeight: "400",
                    fontSize: 14,
                    lineHeight: 16.71,
                    textAlign: "center",
                  }}
                >
                  Загрузите ваше реальное фото
                </Text>
              </View>
              <View style={styles.input_box}>
                <View>
                  <Title>Введите ваше имя</Title>
                </View>
                <View style={{ marginTop: 12 }}>
                  <View
                    style={[
                      {
                        backgroundColor: "#F5F4F8",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingVertical: 14,
                        paddingHorizontal: 16,
                        borderRadius: 12,
                      },
                      name.length > 0 && {
                        borderColor: "#7454CF",
                        borderWidth: 1,
                      },
                    ]}
                  >
                    <TextInput
                      placeholder={"Имя"}
                      onChangeText={(name: string) => {
                        setName(name);
                      }}
                      value={name}
                      placeholderTextColor={"#797979"}
                      style={{
                        fontWeight: "400",
                        lineHeight: 20,
                        fontSize: 16,
                        textAlign: "left",
                        color: "#1E1E1E",
                        width: 400,
                      }}
                    />
                    {name.length > 0 && (
                      <TouchableOpacity
                        onPress={() => {
                          setName("");
                        }}
                        activeOpacity={0.6}
                      >
                        <Delete />
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </View>
              <View
                style={{
                  alignSelf: "flex-start",
                  marginTop: 20,
                  marginBottom: 15,
                }}
              >
                <Title>Войти как</Title>
              </View>
            </View>
          </View>
          <View style={{ marginBottom: "20%" }}>
            {roles.map((item) => (
              <TouchableOpacity
                key={item.key}
                onPress={() => {
                  setRole(item.role);
                }}
                style={[
                  styles.roleBox,
                  role === item.role && {
                    backgroundColor: "#E5DDFD",
                    borderWidth: 0,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.roleItem,
                    role === item.role && { color: "#7454CF" },
                  ]}
                  key={item.key}
                >
                  {item.name}
                </Text>
                <Text>
                  <RadioButton
                    value="first"
                    status={role === item.role ? "checked" : "unchecked"}
                    uncheckedColor={color1}
                    color={color1}
                  />
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </KeyboardAwareScrollView>
    </WrapperPage>
  );
};
export default EnterNameScreen;
const styles = StyleSheet.create({
  inlineContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title_box: {
    marginTop: 25,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  top_box: {
    alignItems: "center",
    marginTop: 15,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 100,
    marginTop: 25,
  },
  edit_icon: {
    position: "absolute",
    alignSelf: "flex-end",
    top: 20,
    zIndex: 1,
    backgroundColor: "#fFF",
    borderRadius: 100,
    padding: 5,
  },
  input_item_box: {
    borderRadius: 15,
    backgroundColor: color2,
    paddingVertical: 12,
    paddingLeft: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  input_box: {
    alignSelf: "flex-start",
    marginTop: 25,
    width: "100%",
  },
  input: {
    fontSize: 16,
    width: 300,
  },
  delete: {
    top: 5,
    marginRight: 20,
  },
  roleBox: {
    backgroundColor: "#FFF",
    marginBottom: 10,
    borderRadius: 52,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderWidth: 2,
    alignItems:'center',
    borderColor: "#dadad1",
    height: 54,
  },
  roleItem: {
    fontSize: 16,
    color: "#1E1E1E",
    fontWeight: "500",
    lineHeight: 20,
  },
  input_onChanged: {
    borderColor: color1,
    borderWidth: 2,
  },
});
