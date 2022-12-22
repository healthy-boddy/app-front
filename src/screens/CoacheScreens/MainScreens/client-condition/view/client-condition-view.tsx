import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MainContainer from "../../../../../components/MainContainer";
import { ClientConditionModel } from "../model";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import UnicIcon from "../../../../ClientScreens/MainScreens/ConditionScreen/CondationIcons/UnicIcon";
import moment from "moment";
import BackButton from "../../../../../components/BackButton";
import { useNavigation } from "@react-navigation/native";

export const ClientConditionView = ClientConditionModel.modelClient((props) => {
  const renderConditions = ({ item }: any) => {
    return (
      <>
        <View
          style={{
            width: "50%",
            alignItems: "center",
            paddingHorizontal: 6,
          }}
        >
          <View
            style={{
              paddingHorizontal: 16,
              paddingVertical: 16,
              backgroundColor: "#F5F4F8",
              borderRadius: 24,
              width: "100%",
              height: 230,
              marginVertical: 15,
              alignItems: "flex-start",
            }}
          >
            <View
              style={{
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <View style={{ width: 48, height: 48 }}>
                <AnimatedCircularProgress
                  size={48}
                  width={5}
                  fill={
                    item.status === "great"
                      ? 95
                      : item.status === "good"
                      ? 50
                      : item.status === "need_help"
                      ? 15
                      : 0
                  }
                  rotation={1}
                  // @ts-ignore
                  tintColor={
                    item.status === "great"
                      ? "#0EC057"
                      : item.status === "need_help"
                      ? "#E81313"
                      : item.status === "good"
                      ? "#FF9F0F"
                      : null
                  }
                  backgroundColor={
                    item.status === "great"
                      ? "#B0E9C7"
                      : item.status === "good"
                      ? "#FFE9B1"
                      : "#FFD2D2"
                  }
                  children={() => (
                    <View>
                      <UnicIcon
                        fill={
                          item.status === "great"
                            ? "#0EC057"
                            : item.status === "need_help"
                            ? "#E81313"
                            : item.status === "good"
                            ? "#FF9F0F"
                            : null
                        }
                      />
                    </View>
                  )}
                />
              </View>

              <Text
                style={[
                  styles.content_item_numbers,
                  item.status == "need_help"
                    ? { color: "#E81313" }
                    : { color: "#FF9F0F" },
                  item.status == "great" ? { color: "#0EC057" } : null,
                ]}
              >
                {item?.value}
              </Text>
            </View>
            <Text
              style={[
                styles.content_item_title,
                item.status == "need_help"
                  ? { color: "#E81313" }
                  : { color: "#FF9F0F" },
                item.status == "great" ? { color: "#0EC057" } : null,
              ]}
            >
              {item.status === "need_help"
                ? "Нужна помощь"
                : item.status === "good"
                ? "Хорошо"
                : "Отлично"}
            </Text>
            <Text style={styles.content_item_description}>{item.name}</Text>
            <Text style={styles.content_item_day}>
              {moment(item?.updated_at).format("YYYY-MM-DD")}
            </Text>
          </View>
        </View>
      </>
    );
  };
  const navigation = useNavigation<any>();
  return (
    <MainContainer>
      <BackButton
        onPress={() => {
          navigation.navigate("Greetings4");
        }}
      />

      {props.model.clientCondition.type === "HAS_DATA" && (
        <View>
          <FlatList
            scrollEnabled={props.model.clientCondition.data.length > 4}
            data={props.model.clientCondition.data}
            renderItem={renderConditions}
            extraData={props.model.clientCondition.data}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            style={{ marginBottom: 60 }}
            contentContainerStyle={{
              flexDirection: "column",
              justifyContent: "space-between",
              width: "100%",
            }}
          />
        </View>
      )}
    </MainContainer>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingBottom: 25,
  },
  content_box: {},
  content: {
    height: "auto",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  content_top_item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 14,
  },
  content_item_numbers: {
    fontSize: 40,
    color: "#E81313",
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 48,
    marginLeft: 12,
  },
  content_item_title: {
    color: "#E81313",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: 16,
    marginTop: 12,
  },
  content_item_description: {
    fontWeight: "600",
    fontSize: 19,
    lineHeight: 23,
    color: "#1E1E1E",
    marginTop: 20,
    // width: 120,
  },
  content_item_day: {
    marginTop: 8,
    color: "#797979",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 20,
  },
  description: {
    color: "#797979",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    textAlign: "center",
    marginTop: 10,
  },
  empty_state_title: {
    color: "#1E1E1E",
    width: 343,
    fontWeight: "600",
    fontSize: 19,
    textAlign: "center",
    marginTop: 10,
  },
});
