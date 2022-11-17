import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MainContainer from "../../../../components/MainContainer";
import { useNavigation } from "@react-navigation/native";
import BackIcon from "../../../../assets/Icons/BackIcon";
import { ProgramsTargetsBlock } from "./view/programs-targets-block";
import { AllTasksBlock } from "./view/all-tasks-block";

const EditingScreen = () => {
  const navigation = useNavigation<any>();
  const [programTitle, setProgramTitle] = useState("");
  const [programDescription, setProgramDescription] = useState("");
  return (
    <MainContainer>
      <View style={{ paddingHorizontal: 16, top: 30 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 14,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              navigation.navigate("SelfLove");
            }}
            style={{
              flexDirection: "row",
              marginTop: Platform.OS === "android" ? 35 : 0,
              alignItems: "center",
            }}
          >
            <View>
              <BackIcon />
            </View>
            <View>
              <Text style={styles.headerTitle}>Назад</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Сохранить</Text>
        </View>

        <Text style={styles.mainTitle}>Название программы</Text>

        <View
          style={{
            marginTop: 12,
          }}
        />
        <View
          style={{
            backgroundColor: "#F5F4F8",
            paddingVertical: 14,
            paddingHorizontal: 16,
            borderRadius: 12,
          }}
        >
          <TextInput
            style={{
              color: "#1E1E1E",
              fontWeight: "400",
              lineHeight: 22,
              fontSize: 16,
            }}
            value={programTitle}
            onChangeText={setProgramTitle}
            placeholder={"Введите название программы"}
          />
        </View>

        <Text style={styles.mainTitle}>Описание программы</Text>

        <View
          style={{
            backgroundColor: "#F5F4F8",
            paddingVertical: 14,
            paddingHorizontal: 16,
            borderRadius: 12,
            marginTop: 12,
            height: 140,
          }}
        >
          <TextInput
            style={{
              color: "#1E1E1E",
              fontWeight: "400",
              lineHeight: 22,
              fontSize: 16,
            }}
            value={programDescription}
            onChangeText={setProgramDescription}
            placeholder={"Введите описание"}
          />
        </View>

        <View style={{ marginTop: 30 }} />
        <ProgramsTargetsBlock
          number={4}
          title={"Цели программы"}
          onPress={() => navigation.navigate("TargetsEditing")}
        />
        <View style={{ marginTop: 36 }} />
        <Text
          style={{
            color: "#1E1E1E",
            fontSize: 19,
            lineHeight: 22.67,
            fontWeight: "600",
          }}
        >
          Задачи
        </Text>

        <AllTasksBlock
          title={"Контроль текущего состояния тела"}
          duration={"В течение 2 дней"}
        />

        <AllTasksBlock
          title={"Оценка уровня стресса"}
          duration={"В течение 5 дней"}
        />

        <AllTasksBlock
          title={"Чек-ап обследование"}
          duration={"В течение 2 дней"}
        />
      </View>
    </MainContainer>
  );
};

export default EditingScreen;

const styles = StyleSheet.create({
  headerTitle: {
    color: "#7454CF",
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 21.48,
  },
  mainTitle: {
    marginTop: 16,
    fontWeight: "600",
    lineHeight: 22.67,
    fontSize: 19,
    color: "#1E1E1E",
  },
});
