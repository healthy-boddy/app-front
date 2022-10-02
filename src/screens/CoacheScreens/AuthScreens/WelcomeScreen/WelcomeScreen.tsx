import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import AppLogo from "../../../../assets/Icons/AppLogo";
import Container from "../../../../components/Container";
import { color1, color2, color3 } from "../../../../helpers/colors";
import CustomButton from "../../../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen: React.FC = (props) => {
  const navigation: any = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <Container containerProp={styles.inlineContainer}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <View style={styles.logo}>
            <AppLogo />
          </View>
          {loading ? (
            <View>
              <View>
                <Text style={styles.welcome}>Health Buddy</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={{ color: color3, marginTop: 10 }}>
                  Здоровье в одном приложении
                </Text>
              </View>
            </View>
          ) : (
            <View>
              <View>
                <Text style={[styles.welcome_title]}>Добро Пожаловать!</Text>
              </View>
            </View>
          )}
        </View>
        {!loading ? (
          <View style={styles.buttons_box}>
            <View>
              <CustomButton
                title={"Зарегистрироваться"}
                buttonStyles={{ marginVertical: 15 }}
                onPress={() => {
                  navigation.navigate("EnterName");
                }}
              />
              <CustomButton
                title={"Войти"}
                buttonStyles={styles.loginBtn}
                buttonTitle={{ color: color1 }}
                onPress={() => {
                  navigation.navigate("Login");
                }}
              />
            </View>
          </View>
        ) : (
          <View style={{ alignItems: "center", bottom: 200 }}>
            <ActivityIndicator size={"large"} color={color1} />
          </View>
        )}
      </View>
    </Container>
  );
};

export default WelcomeScreen;
const styles = StyleSheet.create({
  inlineContainer: {
    paddingHorizontal: 20,
    paddingTop: 35,
  },
  welcome: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    color: color1,
    marginTop: 25,
    letterSpacing: 4,
  },
  logo_title: {
    textAlign: "center",
    color: color1,
    fontSize: 32,
  },
  logo: {
    alignItems: "center",
  },
  buttons_box: {
    marginBottom: 20,
  },
  loginBtn: {
    backgroundColor: "transparent",
    borderColor: color1,
    borderWidth: 2,
  },
  welcome_title: {
    textAlign: "center",
    fontSize: 24,
    marginTop: 25,
    fontWeight: "600",
    lineHeight: 28,
  },
});
