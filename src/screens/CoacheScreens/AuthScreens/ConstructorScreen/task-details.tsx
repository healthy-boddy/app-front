import React, { useState } from "react";
import { WrapperPage } from "../../../../components/core/wrapper";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Description from "../../../../components/Description";
import { IconSearch } from "./view/icons/icon-search";
import { ImagePerson } from "./view/icons/image-person";
import { LargeIconPerson } from "./view/icons/large-icon";
import { CloseIcon } from "./view/icons/close-icon";

export const TaskDetails = () => {
  const navigation = useNavigation();
  const [viewIcon, setViewIcon] = useState(false);

  return (
    <WrapperPage
      onPressButton={() => console.log("press")}
      buttonTitle={"Задача выполнена"}
      onPressBack={() => navigation.goBack()}
    >
      <View
        style={[
          {
            height: "100%",
            width: "100%",
            paddingLeft: 16,
          },
        ]}
      >
        {!viewIcon && (
          <>
            <Text style={styles.titleText}>
              Контроль текущего состояния тела
            </Text>
            <View style={{ marginTop: 8 }} />
            <Description>В течение 2 дней</Description>

            <Text
              style={{
                marginTop: 24,
                color: "#1E1E1E",
                fontSize: 16,
                lineHeight: 20,
              }}
            >
              Утром до приема пищи и вечером перед сном сделайте замеры обхвата:
              1) груди{`\n`} 2) талии{`\n`} 3) бедер{`\n`}
              {`\n`} Результаты отправьте в чат с бадди.
            </Text>
          </>
        )}

        {viewIcon ? (
          <View
            style={{
              flex: 1,
              position: "absolute",
              backgroundColor: "#fff",
              alignSelf: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => setViewIcon((state) => !state)}
              style={{
                alignSelf: "flex-end",
              }}
            >
              <CloseIcon />
            </TouchableOpacity>
            <LargeIconPerson />
          </View>
        ) : (
          <View
            style={{
              height: 258,
              width: 100,
              alignSelf: "center",
              borderRadius: 12,
              marginTop: 27,
            }}
          >
            <TouchableOpacity
              onPress={() => setViewIcon((state) => !state)}
              style={{
                alignSelf: "flex-end",
              }}
            >
              <IconSearch />
            </TouchableOpacity>
            <ImagePerson />
          </View>
        )}
      </View>
    </WrapperPage>
  );
};

const styles = StyleSheet.create({
  titleText: {
    marginTop: 16,
    color: "#1E1E1E",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 21.48,
    textAlign: "left",
  },
});
