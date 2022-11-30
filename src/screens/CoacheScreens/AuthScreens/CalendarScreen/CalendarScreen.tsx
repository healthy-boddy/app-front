import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MainContainer from "../../../../components/MainContainer";
import { BellIcon } from "../../../../assets/Icons/BellIcon";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  deleteUserBio,
  deleteUserToken,
} from "../../../../store/actions/user_token";
import { deleteUserData } from "../../../../store/actions/user_data";
import { MoneyIcon } from "../../../../components/icon/money-icon";
import { WrapperClientData } from "../../../../components/core/wrapper-client-data";
import { ChevronRight } from "../../../../components/icon/chevron-right";
import { ClientBlockForCoach } from "../../../../components/core/client-block-for-coach/client-block-for-coach";

const CalendarScreen = () => {
  const navigation: any = useNavigation();
  const dispatch = useDispatch();
  let user_data = useSelector((store: any) => store.user_data?.user_data);

  const handleLogOut = async () => {
    await AsyncStorage.removeItem("userToken");
    dispatch(deleteUserToken());
    dispatch(deleteUserBio());
    dispatch(deleteUserData());
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <View
        style={{
          paddingHorizontal: 16,
        }}
      >
        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.2}
            onLongPress={handleLogOut}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <View>
              <Image
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                  marginRight: 10,
                }}
                source={{ uri: user_data.user.avatar_thumbnail }}
              />
            </View>
            <Text style={styles.user_name}>{user_data.user.username}</Text>
          </TouchableOpacity>
          <View>
            <BellIcon />
          </View>
        </View>

        <Text style={styles.myClients}>Мои клиенты</Text>

        <View style={{ marginTop: 16 }} />

        <ClientBlockForCoach
          onPress={() =>
            navigation.navigate("ClientDetailsPage", {
              data: {
                avatar: user_data.avatar,
                name: user_data.user.username,
                subscription: "Индивидуальный",
                subscriptionDuration: "12",
              },
            })
          }
          url={user_data.user.avatar}
          name={user_data.user.username}
          progress={"5/6"}
          subscriptionType={"Индивидуальный"}
          subscriptionDuration={"12"}
        />
      </View>
    </SafeAreaView>
  );
};
export default CalendarScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  user_name: {
    color: "#1E1E1E",
    fontStyle: "normal",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 19,
  },
  myClients: {
    color: "#1E1E1E",
    fontStyle: "normal",
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 28,
    marginTop: 20,
  },
});
