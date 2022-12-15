import React from "react";
import {
  Keyboard,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MainContainer from "../../../../../../components/MainContainer";
import BackIcon from "../../../../../../assets/Icons/BackIcon";
import { IconDelete } from "../../../../../../components/icon/icon-delete";
import { GlobalGoalsEditingModel } from "../model";

export const GoalsEditingView = GlobalGoalsEditingModel.modelClient((props) => {
  const navigation = useNavigation<any>();
  const arrForDel: Array<number> = [];
  return (
    <MainContainer>
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
            navigation.navigate("ClientGoals", {
              data: {
                client: props.model.client,
              },
            });
          }}
          style={{
            flexDirection: "row",
            marginTop: Platform.OS === "android" ? 35 : 0,
            alignItems: "center",
          }}
        >
          <BackIcon />
          <Text style={styles.headerTitle}>Назад</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            props.model.handlePress(
              navigation.navigate("ClientGoals", {
                data: {
                  client: props.model.client,
                },
              })
            )
          }
        >
          <Text style={styles.headerTitle}>Сохранить</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{
          marginBottom: 100,
        }}
        showsVerticalScrollIndicator={false}
      >
        {props.model.goals.type === "HAS_DATA" &&
          props.model.goals.data.map((goal, index) => {
            const handlePush = () => {
              arrForDel.push(goal.id);
              props.model.addObjectsForDelete(arrForDel, goal.id);
            };
            return (
              <React.Fragment key={goal.id}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.mainTitle}>{`Цель ${index + 1}`}</Text>

                  {props.model.goals.data.length > 1 && (
                    <TouchableOpacity onPress={handlePush}>
                      <IconDelete />
                    </TouchableOpacity>
                  )}

                  {props.model.goals.data.length === 1 &&
                    goal.goalsDescription.length > 0 && (
                      <TouchableOpacity
                        onPress={() => goal.setGoalsDescription("")}
                      >
                        <IconDelete />
                      </TouchableOpacity>
                    )}
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
                    numberOfLines={20}
                    multiline={true}
                    returnKeyType={"done"}
                    autoCapitalize="none"
                    onSubmitEditing={() => {
                      Keyboard.dismiss();
                    }}
                    style={{
                      color: "#1E1E1E",
                      fontWeight: "400",
                      lineHeight: 22,
                      fontSize: 16,
                      height: "100%",
                    }}
                    value={goal.goalsDescription}
                    onChangeText={goal.setGoalsDescription}
                    onBlur={() =>
                      goal.editGoals(
                        goal.goalsDescription,
                        goal.id,
                        props.model.client ?? null
                      )
                    }
                    placeholder={"Введите описание"}
                  />
                </View>
              </React.Fragment>
            );
          })}

        <View style={{ marginTop: 32 }} />
        <TouchableOpacity onPress={props.model.addNewProgram}>
          <Text style={styles.headerTitle}>+ Добавить еще одну цель</Text>
        </TouchableOpacity>
      </ScrollView>
    </MainContainer>
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
    color: "#1E1E1E",
    marginLeft: 10,
    fontSize: 19,
    fontWeight: "600",
    lineHeight: 22.67,
    marginTop: 15,
  },
});
