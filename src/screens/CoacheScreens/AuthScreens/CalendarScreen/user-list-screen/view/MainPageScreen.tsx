import React from "react";
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  deleteUserBio,
  deleteUserToken,
} from "../../../../../../store/actions/user_token";
import { deleteUserData } from "../../../../../../store/actions/user_data";
import { ClientBlockForCoach } from "../../../../../../components/core/client-block-for-coach/client-block-for-coach";
import { UserListModel } from "../model";

const MainPageScreen = UserListModel.modelClient((props) => {
  const navigation: any = useNavigation();
  const dispatch = useDispatch();
  let user_data = useSelector((store: any) => store.user_data?.user_data);

  const handleLogOut = async () => {
    await AsyncStorage.removeItem("userToken");
    dispatch(deleteUserToken());
    dispatch(deleteUserBio());
    dispatch(deleteUserData());
  };

  const [refreshing, setRefreshing] = React.useState(false);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <View>
        <View style={styles.header}>
          {/*<View>*/}
          {/*  <BellIcon />*/}
          {/*</View>*/}
        </View>

        <Text style={styles.myClients}>Мои клиенты</Text>
        <ScrollView
          style={{
            marginBottom: 80,
          }}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={props.model.getUsers}
            />
          }
        >
          {props.model.users.type === "HAS_DATA" &&
            props.model.users.data.map((client) => {
              console.log("CLIENT DATA", client);
              return (
                <React.Fragment key={client.user.id}>
                  <View style={{ marginTop: 16 }} />
                  <ClientBlockForCoach
                    onPress={() =>
                      navigation.navigate("ClientDetailsPage", {
                        data: {
                          avatar: client.user.avatar_thumbnail,
                          name: client.user.username,
                          subscription: "Индивидуальный",
                          subscriptionDuration: "12",
                          clientID: client.user.id,
                          client,
                        },
                      })
                    }
                    url={client.user.avatar_thumbnail}
                    name={client.user.username}
                    progress={`${client.done_global_goals_count} / ${client.total_global_goals_count}`}
                    subscriptionType={"Индивидуальный"}
                    subscriptionDuration={"12"}
                  />
                </React.Fragment>
              );
            })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
});
export default MainPageScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    paddingVertical: 8,
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
    marginTop: 16,
  },
});
