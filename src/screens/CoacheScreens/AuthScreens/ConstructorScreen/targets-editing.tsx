import React, { useState } from "react";
import {
  FlatList,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import BackIcon from "../../../../assets/Icons/BackIcon";
import MainContainer from "../../../../components/MainContainer";
import { useNavigation } from "@react-navigation/native";
import { IconDelete } from "../../../../components/icon/icon-delete";

export const TargetsEditing = () => {
  const navigation = useNavigation<any>();

  const [taskArr, setTaskArr] = useState([
    { description: "", id: 1 },
    { description: "", id: 2 },
  ]);

  const handleAddTaskElement = () => {
    setTaskArr((arr) => {
      return [
        ...taskArr,
        {
          targetNumber: arr.length + 1,
          description: "",
          id: arr.length + 1,
        },
      ];
    });
  };

  const deleteItem = (id: number) => {
    const newArr = taskArr.filter((data) => id !== data.id);
    setTaskArr(newArr);
  };

  const RenderData = (targets: any) => {
    const [value, setValue] = useState("");
    return (
      <React.Fragment key={targets.id}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.mainTitle}>{`Цель ${targets.data.id}`}</Text>
          <TouchableOpacity onPress={() => deleteItem(targets.id)}>
            <IconDelete />
          </TouchableOpacity>
        </View>

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
            value={value}
            onChangeText={setValue}
            placeholder={"Введите описание"}
          />
        </View>
      </React.Fragment>
    );
  };

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
        <ScrollView
          style={{
            marginBottom: 100,
          }}
          showsVerticalScrollIndicator={false}
        >
          {taskArr !== undefined && (
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={taskArr}
              renderItem={(data: any) => <RenderData data={data.item} />}
            />
          )}

          <View style={{ marginTop: 32 }} />
          <TouchableOpacity onPress={handleAddTaskElement}>
            <Text style={styles.headerTitle}>+ Добавить еще одну цель</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </MainContainer>
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
    color: "#1E1E1E",
    marginLeft: 10,
    fontSize: 19,
    fontWeight: "600",
    lineHeight: 22.67,
    marginTop: 15,
  },
});
