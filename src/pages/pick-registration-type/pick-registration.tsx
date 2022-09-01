import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ChevronBack } from "./icons/chevron-back";
import { Button } from "../../components/core/button/button";
import { Header } from "../../components/core/header/header";
import { useNavigation } from "@react-navigation/native";

export const LanguagesArr = [
  { data: "Клиент", value: "client", id: 1 },
  { data: "Врач", value: "doctor", id: 2 },
  { data: "Коач", value: "coach", id: 3 },
];

export const PickRegistration = () => {
  const [selected, setSelected] = useState(null);

  const navigation: any = useNavigation();

  const renderItem = (item) => {
    return (
      <TouchableOpacity
        onPress={() => setSelected(item.value)}
        style={{
          backgroundColor: "#F4F4F4",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 22,
          paddingHorizontal: 12,
          paddingVertical: 20,
          flexDirection: "row",
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            color: "#333",
            lineHeight: 20,
          }}
        >
          {item.data}
        </Text>

        <View
          style={{
            width: 28,
            height: 28,
            backgroundColor: "rgba(255, 255, 255, 0)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: 25,
              height: 25,
              backgroundColor: "rgba(0, 0, 0, 0)",
              position: "absolute",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={[
                {
                  width: 20,
                  height: 20,
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  marginRight: 12,
                  borderWidth: 2,
                  borderStyle: "solid",
                  borderColor: "rgb(200, 200, 200)",
                  borderRadius: 25,
                },
                selected == item.value && {
                  width: 20,
                  height: 20,
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  marginRight: 12,
                  borderWidth: 2,
                  borderStyle: "solid",
                  borderColor: "#7454CF",
                  borderRadius: 25,
                  alignItems: "center",
                  justifyContent: "center",
                },
              ]}
            >
              <View
                style={[
                  selected == item.value && {
                    backgroundColor: "#7454CF",
                    width: 12,
                    height: 12,
                    borderRadius: 25,
                  },
                ]}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "flex-start",
      }}
    >
      <Header onPress={() => navigation.goBack()} />

      <View
        style={{
          marginTop: 54,
          marginHorizontal: 16,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontWeight: "700",
            color: "#333",
            lineHeight: 38.19,
          }}
        >
          Добро пожаловать!
        </Text>

        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            color: "#333",
            lineHeight: 19,
            marginTop: 8,
          }}
        >
          Выберите тип регистрации
        </Text>
      </View>

      <FlatList
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled={false}
        data={LanguagesArr}
        renderItem={(data) => renderItem(data.item)}
        style={{
          width: "100%",
          paddingHorizontal: 16,
        }}
      />
      <View
        style={{
          width: "100%",
          paddingHorizontal: 16,
          bottom: 92,
        }}
      >
        <Button
          title="Продолжить"
          onPress={() => navigation.navigate("EnterPhoneNumber")}
        />
      </View>
    </SafeAreaView>
  );
};
