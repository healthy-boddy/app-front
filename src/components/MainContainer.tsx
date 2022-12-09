import React from "react";
import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native";

const MainContainer = (props: any) => {
  const { children, containerProp } = props;
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'}/>
      <View style={[{ flex: 1, paddingHorizontal: 16 }, containerProp]}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default MainContainer;

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: "#fff",
  },
});
