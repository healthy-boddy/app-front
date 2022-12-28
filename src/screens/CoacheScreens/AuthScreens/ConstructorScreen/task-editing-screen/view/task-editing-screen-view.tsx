import React, { useState } from "react";
import {
  Alert,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import BackIcon from "../../../../../../assets/Icons/BackIcon";
import { useNavigation } from "@react-navigation/native";
import { DatePicker } from "../../../../../../components/core/date-picker-modal";
import { CalendarSvg } from "../../../../../../components/icon/calendar";
import { InputTasks } from "../../view/components/input-tasks";
import CustomButton from "../../../../../../components/CustomButton";
import { color1 } from "../../../../../../helpers/colors";
import { TaskEditingModel } from "../model";

export const TaskEditingScreenView = TaskEditingModel.modelClient((props) => {
  const navigation = useNavigation<any>();
  const [analiseDate, setAnaliseDate] = useState<Date>(new Date());

  function setBirthDate(date: Date) {
    setAnaliseDate(date);
  }

  function createAlertMessageForDelete() {
    Alert.alert("Внимание!", "Хотите выйти удалить объявление?", [
      {
        text: "Отмена",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Подтверждение", onPress: props.model.deleteProgramById },
    ]);
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <View style={{ paddingHorizontal: 16 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 14,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() =>
              navigation.navigate("EditingScreen", {
                programId: props.model.program,
              })
            }
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
          <TouchableOpacity
            onPress={() =>
              props.model.saveTask(() =>
                navigation.navigate("EditingScreen", {
                  programId: props.model.program,
                })
              )
            }
          >
            <Text style={styles.headerTitle}>Сохранить</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.mainTitle}>Название задачи</Text>

        <View
          style={{
            marginTop: 12,
          }}
        />
        <InputTasks
          value={props.model.name}
          setValue={props.model.setName}
          placeholder={"Введите название программы"}
        />

        <Text style={styles.mainTitle}>Описание задачи</Text>

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
            value={props.model.description}
            numberOfLines={20}
            multiline={true}
            onChangeText={props.model.setDescription}
            placeholder={"Введите описание"}
          />
        </View>

        <Text style={styles.mainTitle}>Даты</Text>
        <View style={{ marginTop: 8 }} />
        <DatePicker
          date={analiseDate}
          onDateChange={setBirthDate}
          placeholder="Выбрать дату"
          icon={<CalendarSvg />}
        />

        <Text style={styles.mainTitle}>Ссылка</Text>
        <View style={{ marginTop: 8 }} />
        <View
          style={{
            flexDirection: "row",
            width: "50%",
          }}
        >
          <InputTasks
            value={props.model.buttonText}
            setValue={props.model.setButtonText}
            placeholder="Название кнопки"
          />
          <View style={{ marginLeft: 8 }} />
          <InputTasks
            value={props.model.buttonLink}
            setValue={props.model.setButtonLink}
            placeholder="Ссылка"
          />
        </View>
        <View style={{ marginTop: 32 }} />
        <CustomButton
          buttonTitle={{ color: color1 }}
          buttonStyles={{
            backgroundColor: "transparent",
            borderWidth: 2,
            borderColor: color1,
            marginBottom: 25,
          }}
          title={"Удалить задачу"}
          onPress={createAlertMessageForDelete}
        />
      </View>
    </SafeAreaView>
  );
});

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
