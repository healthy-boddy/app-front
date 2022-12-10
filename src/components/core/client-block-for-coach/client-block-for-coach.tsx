import React, { FC } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { WrapperClientData } from "../wrapper-client-data";
//import {MoneyIcon} from "../../icon/money-icon";
import { ChevronRight } from "../../icon/chevron-right";
import { CalendarSvg } from "../../icon/calendar";
import MoneySvg from "../../../assets/Icons/MoneySvg";
import { ClientResponse } from "../../../screens/CoacheScreens/AuthScreens/CalendarScreen/user-list-screen/interface";
import { color1 } from "../../../helpers/colors";
import { LinearGradient } from "expo-linear-gradient";

interface ClientBlockForCoachProps {
  onPress: () => void;
  url: string;
  name: string;
  progress: string;
  subscriptionDuration: string;
  subscriptionType: string;
  clientData?: ClientResponse | null;
}

export const ClientBlockForCoach: FC<ClientBlockForCoachProps> = ({
  url,
  onPress,
  name,
  progress,
  subscriptionType,
  subscriptionDuration,
  clientData,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        clientData?.user.username === name && { backgroundColor: "#E5DDFD" },
      ]}
    >
      <View style={styles.secondView}>
        <View style={styles.row}>
          {url ? (
            <View style={styles.imageView}>
              <Image
                style={styles.image}
                resizeMode="cover"
                source={{ uri: url }}
              />
            </View>
          ) : (
            <LinearGradient
              colors={["#8C64FF", "#B49AFF"]}
              start={{ x: 0.0, y: 1.0 }}
              end={{ x: 1.0, y: 1.0 }}
              style={{
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                borderRadius: 100,
                borderColor: "#fff",
                height: 56,
                width: 56,
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
                {name.replace(/[^A-Z]/g, "").length !== 0
                  ? name.replace(/[^A-Z]/g, "")
                  : name.substring(0, 1)}
              </Text>
            </LinearGradient>
          )}

          <View
            style={{
              alignItems: "flex-start",
              marginLeft: 8,
            }}
          >
            <View style={styles.row}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.progress}>{progress}</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <WrapperClientData icon={<MoneySvg />} title={subscriptionType} />
              <View style={{ marginLeft: 8 }} />
              <WrapperClientData
                borderRadiusColor={"#F2C0FF"}
                icon={<CalendarSvg />}
                title={subscriptionDuration}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            width: 24,
            height: 24,
            alignItems: "center",
          }}
        >
          <ChevronRight color={"#1E1E1E"} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F4F8",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 24,
  },
  secondView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  imageView: {
    height: 56,
    width: 56,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  row: {
    flexDirection: "row",
  },
  name: {
    color: "#1E1E1E",
    fontSize: 16,
    lineHeight: 19.09,
    fontWeight: "600",
  },
  progress: {
    color: "#797979",
    fontSize: 16,
    lineHeight: 19.09,
    fontWeight: "600",
    marginLeft: 8,
  },
});
