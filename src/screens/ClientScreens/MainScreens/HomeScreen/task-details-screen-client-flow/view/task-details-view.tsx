import React, { FC, useState } from "react";
import { WrapperPage } from "../../../../../../components/core/wrapper";
import { useNavigation } from "@react-navigation/native";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Dimensions,
} from "react-native";
import Description from "../../../../../../components/Description";
import { TaskDetailModelClientFlow } from "../model";
import * as WebBrowser from "expo-web-browser";
import { WebBrowserResult } from "expo-web-browser";
import { TaskResponse } from "../../../../../CoacheScreens/MainScreens/client-programs/editing-screen/interface";
import VideoPreViewVector from "../../../../../CoacheScreens/AuthScreens/TutorialScreens/TutorialScreensIcons/VideoPreViewVector";
import { CloseIcon } from "../../../../../CoacheScreens/AuthScreens/ConstructorScreen/view/components/icons/close-icon";
import { IconSearch } from "../../../../../CoacheScreens/AuthScreens/ConstructorScreen/view/components/icons/icon-search";

interface TaskDetailsViewProps {
  task: TaskResponse;
}

const { width, height } = Dimensions.get("screen");

export const TaskDetailsView: FC<TaskDetailsViewProps> =
  TaskDetailModelClientFlow.modelClient((props) => {
    const navigation: any = useNavigation();
    const [viewIcon, setViewIcon] = useState(false);
    const [browser, setBrowser] = useState<WebBrowserResult>();

    const handleShowBrowser = async () => {
      if (props?.task?.button_link !== null) {
        const result = await WebBrowser.openBrowserAsync(
          `${props.task.button_link}`
        );
        setBrowser(result);
      } else {
        return;
      }
    };

    async function openPdf(pdf: string) {
      await Linking.openURL(pdf);
    }

    const handlePress = () => {
      props.model.completeTask();
      handleShowBrowser();
    };

    return (
      <WrapperPage
        onPressButton={handlePress}
        buttonTitle={props.task.button_text}
        onPressBack={() =>
          navigation.navigate("DetailsProgramClient", {
            programId: props.model.program,
            assignedProgram: props.model.program,
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

              {props.task.document && (
                <View
                  style={{
                    width: "100%",
                    height: 200,
                    borderRadius: 20,
                    backgroundColor: "#8C64FF",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 16,
                  }}
                >
                  <View>
                    <VideoPreViewVector />
                  </View>
                  <TouchableOpacity
                    onPress={() => openPdf(props.task.document)}
                    style={{
                      alignSelf: "flex-end",
                      marginBottom: 20,
                      backgroundColor: "rgba(255, 255, 255, 0.4)",
                      paddingVertical: 8,
                      paddingHorizontal: 15,
                      borderRadius: 20,
                      right: 35,
                    }}
                  >
                    <Text style={{ color: "#FFFFFF" }}>Открыть документ</Text>
                  </TouchableOpacity>
                </View>
              )}
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
                      width: width / 1.7,
                      height: height / 1.4,
                    }}
                  >
                    <Image
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                      resizeMode="contain"
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
                      source={{ uri: props?.task.image }}
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
