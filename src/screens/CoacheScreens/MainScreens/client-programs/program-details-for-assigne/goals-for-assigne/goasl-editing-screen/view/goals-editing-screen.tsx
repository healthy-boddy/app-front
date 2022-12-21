import React from "react";
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GoalsEditingForAssignModel } from "../model";
import MainContainer from "../../../../../../../../components/MainContainer";
import BackButton from "../../../../../../../../components/BackButton";
import { IconDelete } from "../../../../../../../../components/icon/icon-delete";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const GoalsEditingView = GoalsEditingForAssignModel.modelClient(
  (props) => {
    const navigation = useNavigation<any>();

    const arrForDel: Array<number> = [];
    return (
      <MainContainer>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: "white" }}
          enableResetScrollToCoords={false}
          resetScrollToCoords={{ x: 0, y: 0 }}
        >
          <BackButton
            onPress={() =>
              navigation.navigate("GoalsForAssign", {
                programId: props.model.program,
                clientID: props.model.client,
              })
            }
            saveDate
            onPressSaveDate={() =>
              props.model.handlePress(
                navigation.navigate("GoalsForAssign", {
                  programId: props.model.program,
                  clientID: props.model.client,
                })
              )
            }
          />
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
                      <Text style={styles.mainTitle}>{`Цель ${
                        index + 1
                      }`}</Text>
                      <TouchableOpacity
                        // onPress={() =>
                        //   goal.deleteGoal(goal.id, props.model.getGoals)
                        // }
                        onPress={handlePush}
                      >
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
                        numberOfLines={20}
                        multiline={true}
                        style={{
                          color: "#1E1E1E",
                          fontWeight: "400",
                          lineHeight: 22,
                          fontSize: 16,
                        }}
                        value={goal.goalsDescription}
                        onChangeText={goal.setGoalsDescription}
                        onBlur={() =>
                          goal.editGoals(
                            goal.goalsDescription,
                            goal.id,
                            props.model.program
                          )
                        }
                        placeholder={"Введите описание"}
                        returnKeyType={"done"}
                        autoCapitalize="none"
                        onSubmitEditing={() => {
                          Keyboard.dismiss();
                        }}
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
        </KeyboardAwareScrollView>
      </MainContainer>
    );
  }
);

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