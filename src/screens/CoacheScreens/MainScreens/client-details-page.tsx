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
import { color1 } from "../../../helpers/colors";
import { LinearGradient } from "expo-linear-gradient";
import { formatDuration, intervalToDuration } from "date-fns";
import { ru } from "date-fns/locale";

export const ClientDetailsPage = ({ route: { params } }: any) => {
  const navigation: any = useNavigation();
  const userId = params?.data?.client?.user?.id;
  const client = params?.data?.client;

  const handleShowDate = () => {
    let duration = intervalToDuration({
      start: new Date(),
      end: new Date(),
    });
    if (client?.birthday) {
      duration = intervalToDuration({
        start: new Date(client?.birthday),
        end: new Date(),
      });
    }
    return duration;
  };

  console.log("CLIENT", client);

  return (
    <WrapperTwoButtons
      onPressBack={() => navigation.navigate("Greetings4")}
      onPressButton={() =>
        navigation.navigate("ClientProgramsScreen", {
          data: {
            clientID: userId,
          },
        })
      }
      onPressSecondButton={() =>
        navigation.navigate("ClientGoals", {
          data: {
            client: params.data.client,
          },
        })
      }
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
        {params?.data?.avatar ? (
          <View
            style={{
              width: 150,
              height: 150,
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
        ) : (
          // <View
          //   style={[
          //     {
          //       alignItems: "center",
          //       justifyContent: "center",
          //       borderWidth: 1,
          //       borderRadius: 16,
          //       borderColor: color1,
          //       width: 186,
          //       height: 186,
          //       alignSelf: "center",
          //     },
          //   ]}
          // >
          <LinearGradient
            colors={["#8C64FF", "#B49AFF"]}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 1.0 }}
            style={{
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderRadius: 16,
              borderColor: color1,
              width: 150,
              height: 150,
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                lineHeight: 28,
                fontWeight: "600",
                color: "#fff",
              }}
            >
              {params?.data?.name &&
              params.data.name.replace(/[^A-Z]/g, "").length !== 0
                ? params?.data?.name.replace(/[^A-Z]/g, "")
                : params?.data?.name?.substring(0, 1)}
            </Text>
          </LinearGradient>
        )}

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

        <Text
          style={{
            color: "#797979",
            fontWeight: "600",
            lineHeight: 21.48,
            fontSize: 18,
            textAlign: "center",
            marginTop: 8,
          }}
        >
          {`${formatDuration(handleShowDate(), {
            format: ["years", "months", "days"],
            delimiter: ", ",
            locale: ru,
          })}, ${client?.weight} кг`}
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
          onPress={() =>
            navigation.navigate("ClientCondition", {
              clientId: userId,
            })
          }
          title={"Состояние"}
          icon={<StateClient />}
        />

        <ClientsDetailsBlockProfile
          onPress={() =>
            navigation.navigate("ClientQuiz", {
              data: {
                client: params.data.client,
              },
            })
          }
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
