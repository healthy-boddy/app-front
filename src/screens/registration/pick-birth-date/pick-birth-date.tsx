import React, { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { ComponentHeaderWrapper } from "../../../components/core/component-header-wrapper/component-header-wrapper";
import { ProgressBar } from "../../../components/core/progress-bar/progress-bar";
import { Button } from "../../../components/core/button/button";
import { format } from "date-fns";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useDispatch } from "react-redux";
import { setBirthday } from "../../../store/auth";
import { useNavigation } from "@react-navigation/native";

export const PickBirthDate = () => {
  const dispatch = useDispatch();
  const navigation: any = useNavigation();

  const [date, setDate] = useState<Date>(new Date());

  function handleChange(e: DateTimePickerEvent) {
    if (!e.nativeEvent.timestamp) {
      return;
    }
    setDate(new Date(e.nativeEvent.timestamp));
  }

  const handleSetBirthday = useCallback(
    async (data) => dispatch(setBirthday(data)),
    []
  );

  const handleClick = () => {
    handleSetBirthday(date);
    navigation.navigate("EnterWeight");
  };

  return (
    <>
      <ComponentHeaderWrapper>
        <View
          style={{
            alignSelf: "center",
            marginTop: 14,
            width: "100%",
            paddingHorizontal: 16,
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              color: "#000000",
              fontWeight: "600",
              fontSize: 17,
              lineHeight: 22,
              textAlign: "center",
              marginBottom: 18,
            }}
          >
            2 из 4
          </Text>

          <ProgressBar steps={4} step={2} color={"#8C64FF"} height={10} />
        </View>

        <Text
          style={{
            alignSelf: "center",
            color: "#1E1E1E",
            fontWeight: "700",
            fontSize: 24,
            textAlign: "center",
            marginTop: 32,
            lineHeight: 28,
          }}
        >
          Ваш возраст
        </Text>

        <Text
          style={{
            alignSelf: "center",
            color: "#1E1E1E",
            fontWeight: "700",
            fontSize: 32,
            textAlign: "center",
            marginBottom: 18,
            marginTop: 32,
          }}
        >
          {format(date, "dd.MM.yyyy")}
        </Text>

        <View
          style={{
            paddingHorizontal: 16,
            width: "100%",
          }}
        >
          <DateTimePicker
            value={date ?? new Date()}
            onChange={handleChange}
            mode="date"
            display="spinner"
            timeZoneOffsetInMinutes={0}
            locale="ru"
            maximumDate={new Date()}
          />
        </View>

        <View
          style={{
            position: "absolute",
            width: "100%",
            paddingHorizontal: 16,
            bottom: 61,
          }}
        >
          <Button title="Продолжить" onPress={handleClick} />
        </View>
      </ComponentHeaderWrapper>
    </>
  );
};
