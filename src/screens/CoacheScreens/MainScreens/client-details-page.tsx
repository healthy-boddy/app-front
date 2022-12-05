import React from "react";
import { Image, Text, View } from "react-native";
import { WrapperTwoButtons } from "../../../components/core/wrapper/wrapper-two-buttons";
import { useNavigation } from "@react-navigation/native";
import { WrapperClientData } from "../../../components/core/wrapper-client-data";
import { StateClient } from "../icon/state";
import { ClientsDetailsBlockProfile } from "../../../components/core/clients-details-block-profile/clients-details-block-profile";
import { FormIcon } from "../icon/form";
import { TargetsIcons } from "../icon/targets";
import { ProgramsIcons } from "../icon/programms";
import MoneySvg from "../../../assets/Icons/MoneySvg";

export const ClientDetailsPage = ({ route: { params } }: any) => {
  const navigation: any = useNavigation();
  const userId = params?.data?.client?.user?.id;
  console.log("params ClientDetailsPage", userId);
  return (
    <WrapperTwoButtons
      onPressBack={() => navigation.navigate("CalendarPage")}
      onPressButton={() => console.log("press1")}
      onPressSecondButton={() => console.log("press1")}
      buttonTitle={"Назначить программу"}
      secondButtonTitle={"Поставить цели"}
    >
      <View
        style={{
          height: "100%",
          width: "100%",
          paddingHorizontal: 16,
        }}
      >
        <View
          style={{
            width: 186,
            height: 186,
            marginTop: 16,
            alignSelf: "center",
          }}
        >
          <Image
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 24,
            }}
            resizeMode={"cover"}
            source={{ uri: params.data.avatar }}
          />
        </View>

        <Text
          style={{
            alignSelf: "center",
            color: "#1E1E1E",
            fontSize: 24,
            lineHeight: 28,
            fontWeight: "600",
            marginTop: 12,
          }}
        >
          {params.data.name}
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
          }}
        >
          <WrapperClientData
            icon={<MoneySvg />}
            title={params.data.subscription}
          />

          <View style={{ marginLeft: 8 }} />
          <WrapperClientData
            icon={<MoneySvg />}
            title={params.data.subscriptionDuration}
            borderRadiusColor={"#F2C0FF"}
          />
        </View>

        <View
          style={{
            marginTop: 42,
          }}
        />

        <ClientsDetailsBlockProfile
          onPress={() => console.log("press")}
          title={"Состояние"}
          icon={<StateClient />}
        />

        <ClientsDetailsBlockProfile
          onPress={() => console.log("press")}
          title={"Анкеты"}
          icon={<FormIcon />}
        />
        <ClientsDetailsBlockProfile
          onPress={() =>
            navigation.navigate("ClientGoals", {
              data: {
                client: params.data.client,
              },
            })
          }
          title={"Цели"}
          icon={<TargetsIcons />}
        />
        <ClientsDetailsBlockProfile
          onPress={() =>
            navigation.navigate("ClientsDetailPageWithPrograms", {
              clientId: userId,
            })
          }
          title={"Программы"}
          icon={<ProgramsIcons />}
        />
      </View>
    </WrapperTwoButtons>
  );
};
