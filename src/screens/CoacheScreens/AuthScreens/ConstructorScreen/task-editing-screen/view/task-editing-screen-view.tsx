import React, { useState } from "react";
import {
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

export const TaskEditingScreenView = () => {
  const [taskTitle, setTaskTitle] = useState("Заполнить анкету обратной связи");
  const [taskDescription, setTaskDescription] = useState(
    "Для того, чтобы мы могли улучшить взаимодействие с вами, а также качество работы сервиса, заполните анкету обратной связи."
  );
  const navigation = useNavigation<any>();
  const [analiseDate, setAnaliseDate] = useState<Date>(new Date());
  const [buttonTitle, setButtonTitle] = useState("");
  const [buttonLink, setButtonLink] = useState("");

  function setBirthDate(date: Date) {
    setAnaliseDate(date);
  }
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
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
              navigation.navigate("Editing");
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

        <Text style={styles.mainTitle}>Название задачи</Text>

        <View
          style={{
            marginTop: 12,
          }}
        />
        <InputTasks
          value={taskTitle}
          setValue={setTaskTitle}
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
            value={taskDescription}
            numberOfLines={20}
            multiline={true}
            onChangeText={setTaskDescription}
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
            value={buttonTitle}
            setValue={setButtonTitle}
            placeholder="Название кнопки"
          />
          <View style={{ marginLeft: 8 }} />
          <InputTasks
            value={buttonLink}
            setValue={setButtonLink}
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
          onPress={() => alert("press")}
        />
      </View>
    </SafeAreaView>
  );
};

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
