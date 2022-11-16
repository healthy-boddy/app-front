import React from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import BackIcon from "../../../../../assets/Icons/BackIcon";

export const CreateProgramsPage = () => {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          paddingHorizontal: 16,
          marginTop: 12,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            navigation.navigate("Analyzes");
          }}
          style={styles.back}
        >
          <BackIcon />
          <Text style={styles.title}>Назад</Text>
        </TouchableOpacity>
        <Text style={styles.description}>Выбор программы</Text>
        <View
          style={{
            width: "25%",
            height: 20,
          }}
        />
      </View>
      <View style={{ marginTop: 30, width: "100%", paddingHorizontal: 16 }}>
        <TouchableOpacity
          onPress={() => console.log("press")}
          style={styles.item_box}
        >
          <Text
            style={{
              fontWeight: "600",
              fontSize: 20,
              lineHeight: 24,
              color: "#1E1E1E",
            }}
          >
            Любовь к себе
          </Text>
          <Text
            style={{
              fontWeight: "400",
              fontSize: 18,
              lineHeight: 24,
              color: "#797979",
              marginTop: 8,
            }}
          >
            Снижаем вес путем регулирования гормонального фона и плана питания
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log("press")}
          style={[styles.item_box, { marginTop: 16 }]}
        >
          <Text
            style={{
              fontWeight: "600",
              fontSize: 20,
              lineHeight: 24,
              color: "#1E1E1E",
            }}
          >
            Здоровый ЖКТ
          </Text>
          <Text
            style={{
              fontWeight: "400",
              fontSize: 18,
              lineHeight: 24,
              color: "#797979",
              marginTop: 8,
            }}
          >
            Снижаем вес путем регулирования гормонального фона и плана питания
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  back: {
    flexDirection: "row",
    marginTop: Platform.OS === "android" ? 35 : 0,
    alignItems: "center",
  },
  title: {
    color: "#7454CF",
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 21.48,
  },
  description: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "400",
    fontStyle: "normal",
  },
  item_box: {
    width: "100%",
    backgroundColor: "#F5F4F8",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  item_description: {
    color: "#797979",
    fontSize: 16,
    fontWeight: "400",
    fontStyle: "normal",
  },
});
