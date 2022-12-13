import React, { FC, useState } from "react";
import { WrapperPage } from "../../../../../../components/core/wrapper";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import Description from "../../../../../../components/Description";
import { TaskDetailClientModel } from "../model";
import * as WebBrowser from "expo-web-browser";
import { WebBrowserResult } from "expo-web-browser";
import { TaskResponse } from "../../editing-screen/interface";

interface TaskDetailsViewProps {
  task: TaskResponse;
}

export const TaskDetailsClientView: FC<TaskDetailsViewProps> =
  TaskDetailClientModel.modelClient((props) => {
    const navigation: any = useNavigation();
    const [viewIcon, setViewIcon] = useState(false);
    const [browser, setBrowser] = useState<WebBrowserResult>();

    const handleShowBrowser = async () => {
      const result = await WebBrowser.openBrowserAsync(
        `${props.task.button_link}`
      );
      setBrowser(result);
    };

    const handlePress = () => {
      props.model.completeTask();
      handleShowBrowser();
    };

    return (
      <WrapperPage
        onPressButton={handlePress}
        buttonTitle={props.task.button_text}
        onPressBack={() =>
          navigation.navigate("ProgramDetailsClient", {
            programId: props.model.programDetailForClient,
            assignedProgram: props.model.programDetailForClient,
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
              <Text style={styles.titleText}>{props.task.name}</Text>
              <View style={{ marginTop: 8 }} />
              <Description>В течение {props.task.date} дней</Description>

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

          {/*  {viewIcon ? (*/}
          {/*    <View*/}
          {/*      style={{*/}
          {/*        flex: 1,*/}
          {/*        position: "absolute",*/}
          {/*        backgroundColor: "#fff",*/}
          {/*        alignSelf: "center",*/}
          {/*        justifyContent: "center",*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      <TouchableOpacity*/}
          {/*        onPress={() => setViewIcon((state) => !state)}*/}
          {/*        style={{*/}
          {/*          alignSelf: "flex-end",*/}
          {/*        }}*/}
          {/*      >*/}
          {/*        <CloseIcon />*/}
          {/*      </TouchableOpacity>*/}
          {/*      <LargeIconPerson />*/}
          {/*    </View>*/}
          {/*  ) : (*/}
          {/*    <View*/}
          {/*      style={{*/}
          {/*        height: 258,*/}
          {/*        width: 100,*/}
          {/*        alignSelf: "center",*/}
          {/*        borderRadius: 12,*/}
          {/*        marginTop: 27,*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      <TouchableOpacity*/}
          {/*        onPress={() => setViewIcon((state) => !state)}*/}
          {/*        style={{*/}
          {/*          alignSelf: "flex-end",*/}
          {/*        }}*/}
          {/*      >*/}
          {/*        <IconSearch />*/}
          {/*      </TouchableOpacity>*/}
          {/*      <ImagePerson />*/}
          {/*    </View>*/}
          {/*  )}*/}
        </View>

        {props.task.document && <Text>{props.task.document}</Text>}

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