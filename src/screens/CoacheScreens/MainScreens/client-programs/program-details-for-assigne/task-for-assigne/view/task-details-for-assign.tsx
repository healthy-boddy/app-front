import React, { FC, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TaskDetailForAssignModel } from "../model";
import * as WebBrowser from "expo-web-browser";
import { WebBrowserResult } from "expo-web-browser";
import { TaskResponse } from "../../../editing-screen/interface";
import { WrapperPage } from "../../../../../../../components/core/wrapper";
import Description from "../../../../../../../components/Description";
import { CloseIcon } from "../../../client-programs/view/components/icons/close-icon";
import { IconSearch } from "../../../client-programs/view/components/icons/icon-search";

interface TaskDetailsViewProps {
  task: TaskResponse;
}

export const TaskDetailsForAssignView: FC<TaskDetailsViewProps> =
  TaskDetailForAssignModel.modelClient((props) => {
    const navigation: any = useNavigation();
    const [viewIcon, setViewIcon] = useState(false);
    const [browser, setBrowser] = useState<WebBrowserResult>();

    const handleShowBrowser = async () => {
      if (props?.task?.button_link) {
        const result = await WebBrowser.openBrowserAsync(
          `${props.task.button_link}`
        );
        setBrowser(result);
      }
      return;
    };

    const handlePress = () => {
      props.model.completeTask();
      handleShowBrowser();
    };

    return (
      <WrapperPage
        onPressButton={() => console.log("press")}
        buttonTitle={props.task.button_text}
        onPressBack={() =>
          navigation.navigate("ProgramDetailsForAssign", {
            programId: props.model.programDetailForClient,
            clientID: props.model.client,
          })
        }
      >
        <View
          style={[
            {
              height: "100%",
              width: "100%",
              paddingLeft: 16,
              paddingHorizontal: 16,
            },
          ]}
        >
          {!viewIcon && (
            <>
              <View style={{ marginTop: 16 }} />
              <Text style={styles.titleText}>{props.task.name}</Text>
              <View style={{ marginTop: 8 }} />
              <Description>
                {props.task.date === 0
                  ? "В течение всего срока"
                  : `В течение ${props.task.date} дней`}
              </Description>

              <Text
                style={{
                  marginTop: 24,
                  color: "#1E1E1E",
                  fontSize: 16,
                  lineHeight: 20,
                }}
              >
                {props.task.description}
              </Text>
            </>
          )}

          {props?.task.image !== null && props?.task.image && (
            <>
              {viewIcon ? (
                <View
                  style={{
                    flex: 1,
                    position: "absolute",
                    backgroundColor: "#fff",
                    alignSelf: "center",
                    justifyContent: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => setViewIcon((state) => !state)}
                    style={{
                      alignSelf: "flex-end",
                    }}
                  >
                    <CloseIcon />
                  </TouchableOpacity>
                  <View
                    style={{
                      width: 350,
                      height: 600,
                    }}
                  >
                    <Image
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                      resizeMode="stretch"
                      source={{ uri: props?.task.image }}
                    />
                  </View>
                </View>
              ) : (
                <View
                  style={{
                    height: 258,
                    width: 100,
                    alignSelf: "center",
                    borderRadius: 12,
                    marginTop: 27,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => setViewIcon((state) => !state)}
                    style={{
                      alignSelf: "flex-end",
                    }}
                  >
                    <IconSearch />
                  </TouchableOpacity>
                  <View
                    style={{
                      height: "auto",
                    }}
                  >
                    <Image
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                      resizeMode="cover"
                      source={{ uri: props?.task?.image }}
                    />
                  </View>
                </View>
              )}
            </>
          )}
        </View>

        {/*{props.task.document && <Text>{props.task.document}</Text>}*/}

        <Text>
          {browser?.type !== "cancel" && null && JSON.stringify(browser)}
        </Text>
      </WrapperPage>
    );
  });

const styles = StyleSheet.create({
  titleText: {
    marginTop: 16,
    color: "#1E1E1E",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 21.48,
    textAlign: "left",
  },
});
