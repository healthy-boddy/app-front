import React, { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { GlobalStatus } from "../../../../MainScreens/clients-goals/global-goasl-editing-screen/interface/interface";
import { DoneGoalsSvg } from "../../../../../../components/icon/done-goals-svg";
import { Goals } from "../model/goals";

interface GoalsBlockProfile {
  title: string;
  description: string;
  status: GlobalStatus;
  onPress: () => void;
  id: number;
}

export const GoalsBlock: FC<GoalsBlockProfile> = ({
  title,
  description,
  status,
  onPress,
  id,
}) => {
  return (
    <TouchableOpacity
      onPress={status !== GlobalStatus.Done ? onPress : undefined}
      style={[
        {
          borderRadius: 12,
          backgroundColor: "#F5F4F8",
          paddingHorizontal: 16,
          paddingVertical: 12,
          alignItems: "flex-start",
          marginTop: 16,
        },
        status === GlobalStatus.Done && {
          backgroundColor: "#E5DDFD",
        },
      ]}
    >
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Text
          style={{
            marginTop: 4,
            fontSize: 18,
            fontWeight: "600",
            lineHeight: 21.48,
            color: "#1E1E1E",
          }}
        >
          {title}
        </Text>

        {status === GlobalStatus.Done && <DoneGoalsSvg />}
      </View>
      <Text
        style={{
          marginTop: 4,
          fontSize: 16,
          fontWeight: "400",
          lineHeight: 20,
          color: "#1E1E1E",
        }}
      >
        {description}
      </Text>
    </TouchableOpacity>
  );
};
