import React, { FC } from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MainContainer from "../../../../../../components/MainContainer";
import { useNavigation } from "@react-navigation/native";
import BackIcon from "../../../../../../assets/Icons/BackIcon";
import { ProgramsGoalsBlock } from "../../client-programs/view/components/programs-goals-block";
import { AllTasksBlock } from "../../client-programs/view/components/all-tasks-block";
import { ProgramDetailsModel } from "../../../../AuthScreens/ConstructorScreen/program-details-screen/model";

interface EditingScreenViewProps {}
export const EditingScreenClientView: FC<EditingScreenViewProps> =
  ProgramDetailsModel.modelClient((props) => {
    // if (props.programId) {
    //   props.model.setProgram(props.programId);
    // }
    const navigation: any = useNavigation();

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
              onPress={() =>
                navigation.navigate("ProgramDetailsClient", {
                  programId: props.model.currentProgramId,
                  assignedProgram: props.model.programDetailForClient,
                  clientID: props.model.client,
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
              value={props.model.name}
              onChangeText={props.model.setName}
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
              value={props.model.description}
              numberOfLines={20}
              multiline={true}
              onChangeText={props.model.setDescription}
              placeholder={"Введите описание"}
            />
          </View>

          <View style={{ marginTop: 30 }} />
          <ProgramsGoalsBlock
            number={props.model.goalsQuantity}
            title={"Цели программы"}
            onPress={() => {
              navigation.navigate("GoalsEditingClient", {
                programId: props.model.currentProgramId,
                clientId: props.model.client,
                assignedProgram: props.model.programDetailForClient,
              });
            }}
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
          <ScrollView>
            {props.model.tasks.type === "HAS_DATA" &&
              props.model.tasks.data.map((task) => {
                return (
                  <AllTasksBlock
                    key={task.id}
                    onPress={() => {
                      navigation.navigate("TaskEditing", {
                        taskId: task.id,
                      });
                    }}
                    title={task.name}
                    duration={`В течение ${task.date} дней`}
                  />
                );
              })}
          </ScrollView>
        </View>
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
    marginTop: 16,
    fontWeight: "600",
    lineHeight: 22.67,
    fontSize: 19,
    color: "#1E1E1E",
  },
});