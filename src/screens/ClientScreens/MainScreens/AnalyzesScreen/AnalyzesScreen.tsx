import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import MainContainer from "../../../../components/MainContainer";
import CustomButton from "../../../../components/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import BigIcon from "./AnalyzesScreenIcons/BigIcon";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import AnalysesIcon from "./analysisIcon/AnalysesIcon";
import Title from "../../../../components/Title";
import Description from "../../../../components/Description";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setLab } from "../../../../store/actions/laboratory";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
const AnalyzesScreen = () => {
  const dispatch = useDispatch();
  let isFocused = useIsFocused();

  const navigation = useNavigation<any>();
  let tokenFromReducer = useSelector(
    (store: any) => store.user_token.user_token
  );
  let AuthStr = "Bearer " + tokenFromReducer;
  let [analyses, setAnalyses] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
    getAnalysesList();
  }, []);

  function getAnalysesList() {
    fetch("http://92.53.97.238/analysis/", {
      method: "get",
      headers: {
        Authorization: AuthStr,
        accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res, "analyses errori momenty");
        if (Array.isArray(res)) {
          setAnalyses(res);
        }
      });
  }

  useEffect(() => {
    if (isFocused) {
      getAnalysesList();
    }
  }, [isFocused]);

  const _onRefresh = () => {
    console.log(2);
  };

  const openSingleAnalyze = async (item) => {
    dispatch(setLab(item));
    navigation.navigate("AnalyseSingle");
  };

  const renderAnalyses = ({ item }: any) => {
    return (
      <TouchableOpacity
        onPress={() => openSingleAnalyze(item)}
        activeOpacity={0.6}
        style={styles.analyzes_box}
      >
        <View style={styles.icon_box}>
          <AnalysesIcon />
        </View>
        <View style={styles.content_box}>
          <Title
            numberOfLines={1}
            titlePropStyle={{ fontSize: 18, width: "85%" }}
          >
            {item?.name}
          </Title>
          <Description marginVertical={4}>Создано мной</Description>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              color: "#1E1E1E",
              fontStyle: "normal",
              lineHeight: 20,
            }}
          >
            {item?.date}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <MainContainer>
      {!analyses.length ? (
        <View style={{ height: "100%" }}>
          <View
            style={{
              paddingVertical: 16,
            }}
          >
            <Text
              style={{
                fontSize: 32,
                fontWeight: "600",
                lineHeight: 34,
                color: "#000",
                height: 48,
              }}
            >
              Анализы
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              flex: 1,
              justifyContent: "center",
            }}
          >
            <Image
              style={{ width: 264, height: 264 }}
              source={require("./AnalyzesScreenIcons/emptyAnalyse.png")}
            />
            <Text
              style={{
                fontSize: 19,
                fontWeight: "600",
                lineHeight: 23,
                color: "#1E1E1E",
                marginTop: 20,
                textAlign: "center",
                width: 300,
              }}
            >
              Пока у вас нет результатов анализов
            </Text>
          </View>

          <View style={{ marginBottom: 40 }}>
            <CustomButton
              title={"Добавить анализ"}
              onPress={() => {
                navigation.navigate("AddAnalyzes");
              }}
            />
          </View>
        </View>
      ) : (
        <View style={{ flex: 1, paddingVertical: 16 }}>
          <Text
            style={{
              fontSize: 32,
              fontWeight: "600",
              lineHeight: 34,
              color: "#000",
              height: 48,
            }}
          >
            Анализы
          </Text>
          <View style={{ flex: 1, marginTop: 8 }}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={analyses}
              renderItem={renderAnalyses}
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          </View>
          <View style={{ marginBottom: 40 }}>
            <CustomButton
              title={"Добавить анализ"}
              onPress={() => {
                navigation.navigate("AddAnalyzes");
              }}
            />
          </View>
        </View>
      )}
    </MainContainer>
  );
};

export default AnalyzesScreen;
const styles = StyleSheet.create({
  analyzes_box: {
    width: "100%",
    height: 93,
    backgroundColor: "#F5F4F8",
    marginBottom: 15,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  icon_box: {},
  content_box: {
    marginLeft: 12,
    width: "100%",
  },
});
