import React, { FC, useCallback, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "../hooks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicatorComponent } from "./active-indicator/active-indicator";
import { getMe } from "../store/auth";
import authService from "../service/AuthService";

interface NetworkInterceptorProps {
  children: any;
}

export const NetworkInterceptor: FC<NetworkInterceptorProps> = ({
  children,
}) => {
  const loader = useSelector((data) => data.loader.loader);
  const dispatch = useDispatch();
  const navigation: any = useNavigation();

  const handleGetUserInformation = useCallback(
    async () => dispatch(getMe()),
    []
  );

  useEffect(() => {
    bootstrapAsync();
  }, []);

  const renderActiveUser = async () => {
    const access = authService.getUser();

    if (access) {
      // load actions
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      return bootstrapAsync();
    });

    return unsubscribe;
  }, []);

  const bootstrapAsync = async () => {
    const userToken = await authService.getUser();
    const refresh = await AsyncStorage.getItem("refresh");
    const access = await AsyncStorage.getItem("access");
    console.log("access", access);
    console.log("refresh", refresh);

    if (userToken) {
      handleGetUserInformation();
      return navigation.navigate("TabNavigator");
    } else {
      return navigation.navigate("PickRegistration");
    }
  };

  return (
    <View style={styles.container}>
      {children}
      {loader && <ActivityIndicatorComponent animating />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
