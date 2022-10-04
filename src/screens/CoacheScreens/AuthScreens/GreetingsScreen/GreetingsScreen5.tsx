import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Container from "../../../../components/Container";
import BackButton from "../../../../components/BackButton";
import { color1, color2 } from "../../../../helpers/colors";
import CustomButton from "../../../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import Title from "../../../../components/Title";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Delete from "../../../../assets/Icons/Delete";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ErrorPopUp from "../../../../components/ErrorPopUp";
import { baseUrl } from "../../../../helpers/url";
import { setUserBio } from "../../../../store/actions/user_token";
import { setUserData } from "../../../../store/actions/user_data";
import { WrapperPage } from "../../../../components/core/wrapper";

const GreetingsScreen5 = () => {
  const navigation: any = useNavigation();
  const [education, setEducation] = useState<any>("");
  const [resume, setResume] = useState<any>("");
  const [photo, setPhoto] = useState<any>("");
  const [bio, setBio] = useState<any>("");
  const [theses, setTheses] = useState<any>("");
  let [userToken, setUserToken] = useState<any>(null);
  const [valid, setValid] = useState(true);

  const [educationValid, setEducationValid] = useState(true);
  const [resumeValid, setResumeValid] = useState(true);
  const [photoValid, setPhotoValid] = useState(true);
  const [checkBio, setCheckBio] = useState(true);
  const [thesesValid, setThesesValid] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    AsyncStorage.getItem("userToken").then((r) => setUserToken(r));
  }, []);

  const pickEducation = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setEducation({
        uri: result.uri,
        name: `IMG_` + Date.now() + `.JPG`,
        type: result.type + "/jpeg",
        id: Date.now(),
        lastModified: Date.now(),
      });
      setEducationValid(true);
    }
  };

  const pickResume = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setResume({
        uri: result.uri,
        name: `IMG_` + Date.now() + `.JPG`,
        type: result.type + "/jpeg",
        id: Date.now(),
        lastModified: Date.now(),
      });
      setResumeValid(true);
    }
  };
  const pickPhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setPhoto({
        uri: result.uri,
        name: `IMG_` + Date.now() + `.JPG`,
        type: result.type + "/jpeg",
        id: Date.now(),
        lastModified: Date.now(),
      });
      setPhotoValid(true);
    }
  };

  // @ts-ignore

  async function handlePostInfo() {
    let AuthStr = "Bearer " + userToken;
    const dataForm = new FormData();
    dataForm.append("bio", bio);
    dataForm.append("resume", resume);
    dataForm.append("education", education);
    dataForm.append("photo", photo);
    dataForm.append("theses", theses);

    if (!resume || !education || !photo || !bio || !theses) {
      if (!resume) {
        setResumeValid(false);
        setValid(false);
      } else {
        setResumeValid(true);
      }
      if (!education) {
        setEducationValid(false);
        setValid(false);
      } else {
        setEducationValid(true);
      }
      if (!photo) {
        setPhotoValid(false);
        setValid(false);
      } else {
        setPhotoValid(true);
        setValid(false);
      }
      if (!bio) {
        setCheckBio(false);
        setValid(false);
      } else {
        setCheckBio(true);
      }
      if (!theses) {
        setThesesValid(false);
        setValid(false);
      } else {
        setThesesValid(true);
      }
      return false;
    }

    try {
      const { data } = await axios.put(
        baseUrl + "/coach/update_me/",
        dataForm,
        {
          headers: {
            Authorization: AuthStr,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setValid(true);
      setCheckBio(true);
      setThesesValid(true);
      setPhotoValid(true);
      setEducationValid(true);
      setResumeValid(true);
      console.log(data, "sended-all");
      dispatch(setUserBio(data.bio));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <WrapperPage
      onPressBack={() => navigation.navigate("Greetings4")}
      onPressButton={handlePostInfo}
      buttonTitle={"Продолжить"}
    >
      <View
        style={{
          paddingHorizontal: 16,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {!valid && <ErrorPopUp error={"Необходимо заполнить все поля"} />}
          <Text
            style={{
              fontWeight: "600",
              fontSize: 24,
              lineHeight: 28,
              color: "#1E1E1E",
              textAlign: "left",
              alignSelf: "flex-start",
              marginTop: !valid ? 16 : 0,
            }}
          >
            Зарегистрируй профиль наставника
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
            Для первичного знакомства с клиентом- это повысит доверие к тебе,
            как к специалисту (можем зашить сразу при регистрации)
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
            Краткое БИО о себе
          </Text>
          <View
            style={[
              styles.input_box,
              bio && { borderColor: color1 },
              !checkBio && { borderColor: "red" },
            ]}
          >
            <TextInput
              style={{ width: "80%", color: "#1E1E1E" }}
              value={bio}
              onChangeText={setBio}
              placeholder={"Написать"}
              multiline={true}
              placeholderTextColor={"#797979"}
            />

            {bio && (
              <TouchableOpacity
                activeOpacity={0.4}
                style={{ marginTop: 5, right: 10 }}
                onPress={() => {
                  setBio("");
                }}
              >
                <Delete />
              </TouchableOpacity>
            )}
          </View>
          <View>
            <View>
              <Text
                style={{
                  fontWeight: "600",
                  fontSize: 19,
                  lineHeight: 22.67,
                  color: "#1E1E1E",
                  textAlign: "left",
                  alignSelf: "flex-start",
                  marginTop: 24,
                }}
              >
                Информация о образовании
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
                Загрузите файла формата{" "}
                <Text style={{ color: color1, fontWeight: "bold" }}>
                  PDF, JPG, PNG
                </Text>
              </Text>
              <View style={styles.button_box}>
                <CustomButton
                  buttonTitle={{ color: "#7454CF" }}
                  buttonStyles={[
                    styles.custom_button_styles,
                    !educationValid && { borderColor: "red" },
                  ]}
                  title={education?.name ? education?.name : "Загрузить файл"}
                  onPress={pickEducation}
                />
              </View>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: "600",
                  fontSize: 19,
                  lineHeight: 22.67,
                  color: "#1E1E1E",
                  textAlign: "left",
                  alignSelf: "flex-start",
                  marginTop: 24,
                }}
              >
                Резюме
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
                Загрузите файла формата{" "}
                <Text style={{ color: color1, fontWeight: "bold" }}>
                  PDF, JPG, PNG
                </Text>
              </Text>
              <View style={styles.button_box}>
                <CustomButton
                  buttonTitle={{ color: "#7454CF" }}
                  buttonStyles={[
                    styles.custom_button_styles,
                    !resumeValid && { borderColor: "red" },
                  ]}
                  title={resume?.name ? resume?.name : "Загрузить файл"}
                  onPress={pickResume}
                />
              </View>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: "600",
                  fontSize: 19,
                  lineHeight: 22.67,
                  color: "#1E1E1E",
                  textAlign: "left",
                  alignSelf: "flex-start",
                  marginTop: 24,
                }}
              >
                Ваше фото в белой рубашке
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
                Загрузите файла формата{" "}
                <Text style={{ color: color1, fontWeight: "bold" }}>
                  PDF, JPG, PNG
                </Text>
              </Text>
              <View style={styles.button_box}>
                <CustomButton
                  buttonTitle={{ color: "#7454CF" }}
                  buttonStyles={[
                    styles.custom_button_styles,
                    !photoValid && { borderColor: "red" },
                  ]}
                  title={photo?.name ? photo?.name : "Загрузить файл"}
                  onPress={pickPhoto}
                />
              </View>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontWeight: "600",
                fontSize: 19,
                lineHeight: 22.67,
                color: "#1E1E1E",
                textAlign: "left",
                alignSelf: "flex-start",
                marginTop: 24,
              }}
            >
              Напиши пять тезисов , которые отличают нас от конкурентов
            </Text>
            <View
              style={[styles.input_box, !thesesValid && { borderColor: "red" }]}
            >
              <TextInput
                onChangeText={setTheses}
                multiline={true}
                style={{ width: "90%" }}
                placeholder={"Написать"}
                value={theses}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </WrapperPage>
  );
};

export default GreetingsScreen5;
const styles = StyleSheet.create({
  bioInput: {
    borderColor: "red",
    borderWidth: 2,
  },
  inlineContainer: {
    paddingHorizontal: 20,
    paddingTop: 35,
  },
  title_box: {
    marginTop: 25,
  },
  input_box: {
    backgroundColor: "#F5F4F8",
    marginTop: 12,
    padding: 12,
    borderRadius: 12,
    alignItems: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 12,
  },
  button_box: {
    marginVertical: 15,
  },
  custom_button_styles: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: color1,
    borderRadius: 30,
  },
  btnBgc: {
    backgroundColor: "#7454CF",
  },
});
