import React, { useState } from "react";
import { View, Text, Platform, Button, TouchableOpacity } from "react-native";
import StatusBar from "../../ClientScreenComponents/StatusBar";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment, { Moment } from "moment";
import { useDispatch, useSelector } from "react-redux";
import { WrapperPage } from "../../../../components/core/wrapper";

const EnterAgeScreen = () => {
  const navigation: any = useNavigation();
  const [date, setDate] = useState<Date>(new Date());
  const [show, setShow] = useState(Platform.OS === "ios");

  const format2 = "DD.MM.YYYY";
  const format3 = "YYYY-MM-DD";

  const onChange = (event: any, selectedDate: any) => {
    console.log({ selectedDate, event: event.nativeEvent });
    if (Platform.OS === "android") {
      setShow(false);
    }
    setDate(selectedDate);
    console.log(selectedDate, "currentDate");
  };
  let form = useSelector((store: any) => store.auth_data.formData);




  function handleNext() {
    const dateForm = new FormData();
    if (!date) {
      return;
    }
    form.append("birthday", moment(date).format(format3));
    navigation.navigate("EnterWeight");
  }

  return (
    <WrapperPage
      onPressBack={() => {
        navigation.navigate("EnterSex");
      }}
      onPressButton={handleNext}
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
              2 из 3
            </Text>
          </View>
          <StatusBar activeWidth={{ width: "70%" }} />
        </View>
        <View style={{ marginVertical: 25, alignItems: "center" }}>
          <Text
            style={{
              color: "#1E1E1E",
              fontWeight: "700",
              fontSize: 24,
              lineHeight: 28,
            }}
          >
            Ваш возраст
          </Text>
          <Text style={{ fontWeight: "bold", marginTop: 10, fontSize: 28 }}>
            {moment(date).format(format2)}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          {Platform.OS === "android" && (
            <TouchableOpacity
              onPress={() => {
                setShow(!show);
              }}
            >
              <Text>Изменить возраст</Text>
            </TouchableOpacity>
          )}

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={"date"}
              onChange={onChange}
              maximumDate={new Date()}
              display={Platform.OS === "android" ? "default" : "spinner"}
              locale="ru"
            />
          )}
        </View>
      </View>
    </WrapperPage>
  );
};

export default EnterAgeScreen;
