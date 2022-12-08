import React, { FC, RefObject, useState } from "react";
import { Text, View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { BottomSheetComponent } from "../../../../../../../components/core/bottom-sheet";
import CustomButton from "../../../../../../../components/CustomButton";
import { ClientBlockForCoach } from "../../../../../../../components/core/client-block-for-coach/client-block-for-coach";
import { useNavigation } from "@react-navigation/native";
import { ProgramDetailsModel } from "../../model";
import { ClientResponse } from "../../../../CalendarScreen/user-list-screen/interface";

interface ButtonSheetPersonalDoctorProps {
  sheetRef: RefObject<BottomSheet>;
  snapPoints: (string | number)[];
  onClose: () => void;
  onPress: () => void;
  onPressPickButton: (data: ClientResponse) => void;
  programName: string;
}

export const BottomSheetClients: FC<ButtonSheetPersonalDoctorProps> =
  ProgramDetailsModel.modelClient((props) => {
    const [clientData, senClientData] = useState<ClientResponse>();

    const handlePress = () => {
      if (clientData) {
        props.onPressPickButton(clientData);
      }
      props.onPress();
    };

    return (
      <BottomSheetComponent
        onClose={props.onClose}
        sheetRef={props.sheetRef}
        snapPoints={props.snapPoints}
      >
        <View
          style={{
            height: 212,
            backgroundColor: "#fff",
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            paddingHorizontal: 16,
            width: "100%",
          }}
        >
          <Text
            style={{
              marginTop: 16,
              fontWeight: "600",
              fontSize: 19,
              lineHeight: 22.67,
              textAlign: "center",
              color: "#1E1E1E",
            }}
          >
            Какому клиенту назначить программу {props.programName}?
          </Text>

          <View style={{ marginTop: 40 }} />

          {props.model.users.type === "HAS_DATA" &&
            props.model.users.data.map((client) => {
              return (
                <React.Fragment key={client.user.id}>
                  <View style={{ marginTop: 16 }} />
                  <ClientBlockForCoach
                    clientData={clientData ?? null}
                    onPress={() => senClientData(client)}
                    url={client.user.avatar_thumbnail}
                    name={client.user.username}
                    progress={"5/6"}
                    subscriptionType={"Индивидуальный"}
                    subscriptionDuration={"12"}
                  />
                </React.Fragment>
              );
            })}

          <View
            style={{
              marginTop: 46,
            }}
          />
          <CustomButton
            buttonStyles={{ backgroundColor: "#7454CF" }}
            title={"Назначить"}
            onPress={handlePress}
          />
          <View
            style={{
              marginTop: 12,
            }}
          />
        </View>
      </BottomSheetComponent>
    );
  });
