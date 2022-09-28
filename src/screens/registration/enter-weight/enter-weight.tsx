import React, { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { ComponentHeaderWrapper } from "../../../components/core/component-header-wrapper/component-header-wrapper";
import { ProgressBar } from "../../../components/core/progress-bar/progress-bar";
import { Button } from "../../../components/core/button/button";
import { useDispatch } from "react-redux";
import { postUpdatedData, setWeight } from "../../../store/auth";
import { useNavigation } from "@react-navigation/native";
import WheelPickerExpo from "react-native-wheel-picker-expo";
import { weightArr } from "../../../helper/helper";
import { useSelector } from "../../../hooks";
import { format } from "date-fns";

export const EnterWeight = () => {
  const dispatch = useDispatch();
  const navigation: any = useNavigation();
  const [weightData, setWeightData] = useState("");

  const handleSetWeight = useCallback(
    async (weight) => dispatch(setWeight(weight)),
    []
  );

  const handlePutUpdatedUserData = useCallback(
    async (data) => dispatch(postUpdatedData(data)),
    []
  );

  const birthDate = useSelector((phone) => phone.auth.birthday);
  const genderData = useSelector((phone) => phone.auth.gender);

  const handleClick = () => {
    handleSetWeight(weightData);
    const updatedDataArr = {
      gender: genderData.gender,
      birthday: format(new Date(), "u-MM-dd"),
      weight: Number(weightData),
    };
    console.log("updatedDataArr:", updatedDataArr);

    handlePutUpdatedUserData(updatedDataArr);
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
              color: "#000",
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
          Ваш вес
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
          {`${weightData} кг`}
        </Text>

        <View
          style={{
            paddingHorizontal: 16,
            width: "100%",
            alignItems: "center",
          }}
        >
          <WheelPickerExpo
            backgroundColor="white"
            selectedStyle={{ borderColor: "#fff", borderWidth: 2 }}
            height={300}
            initialSelectedIndex={1}
            items={weightArr.map((name) => ({ label: name, value: "" }))}
            onChange={({ item }) => setWeightData(item.label)}
            renderItem={(props) => (
              <Text
                style={[
                  {
                    fontSize: 20,
                    fontWeight: "bold",
                  },
                  {
                    fontSize: props.fontSize,
                    color: props.fontColor,
                    textAlign: props.textAlign,
                  },
                ]}
              >
                {props.label}
              </Text>
            )}
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
