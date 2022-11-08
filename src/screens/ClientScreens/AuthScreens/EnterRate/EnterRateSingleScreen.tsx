import React, {useState} from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import {WrapperPage} from "../../../../components/core/wrapper";
import {useNavigation} from "@react-navigation/native";
import {RadioButton} from "react-native-paper";
import Checked from "../../../../assets/Icons/Checked";
import {color1, color3} from "../../../../helpers/colors";

const EnterRateSingleScreen = (props: any) => {
  const navigation: any = useNavigation();
  let [checkedTariff, setCheckedTariff] = useState("");
  let status = props.status;
  let standardData = [
    {
      title: "Scope of included analyzes",
      key: 1,
      checked: false,
      duration: "46-159",
    },
    { title: "Scope of consultations", key: 2, checked: false, duration: "9-98" },
    {
      title: "Tariff freeze",
      key: 3,
      checked: true,
      duration: "1 month",
    },
    { title: "Personal nutritionist", key: 4, checked: true },
    { title: "Personal psychotherapist", key: 5, checked: false },
  ];
  let premiumData = [
    {
      title: "Scope of included analyzes",
      key: 1,
      checked: true,
      duration: "до 250",
    },
    { title: "Scope of consultations", key: 2, checked: true, duration: "∞" },
    {
      title: "Personal nutritionist",
      key: 3,
      checked: true,
      duration: "2 месяца",
    },
    { title: "Personal psychotherapist", key: 4, checked: true },
    { title: 'Leading by a team of doctors', key: 6, checked: true },
    {
      title: "Full genetic test, consultation and decoding of blocks",
      key: 7,
      checked: true,
    },
    { title: "Departure of the nurse", key: 8, checked: true },
    { title: "Personal osteopath", key: 9, checked: true },
    { title: "Diagnosis of internal organs", key: 10, checked: true },
    {
      title: "Unlimited family health consultations",
      key: 11,
      checked: true,
    },
    { title: "Emergency consultations at night", key: 12, checked: true },
    {
      title: "Concierge: assistance abroad, registration in clinics, purchase of dietary supplements",
      key: 13,
      checked: true,
    },
    { title: "Gift box from partners", key: 14, checked: true },
  ];

  const standardPrice = [
    { price: "44 900 rub.", title: "3 month", value: "3", key: 1 },
    { price: "74 900 rub.", title: "6 month", value: "6", key: 2 },
    { price: "124 900 rub.", title: "12 month", value: "12", key: 3 },
  ];
  const premiumPrice = [
    { price: "180 900 rub.", title: "6 month", value: "6", key: 2 },
    { price: "320 000 rub.", title: "12 month", value: "12", key: 3 },
  ];

  const renderStandardItem = ({ item, index }: any) => {
    return (
      <View
        key={item.key}
        style={[
          styles.item_box_style,
          index % 2 !== 0 && { backgroundColor: "#F5F4F8" },
        ]}
      >
        <Text key={item.key} style={styles.title_text}>
          {item.title}
        </Text>
        <Text
          style={{
            fontWeight: "600",
            color: "#1E1E1E",
            fontSize: 16,
            lineHeight: 19,
          }}
        >
          {!item.duration ? (
            item.checked ? (
              <Checked />
            ) : (
              <Text style={{ color: "#8B8B8B" }}>x</Text>
            )
          ) : (
            item.duration
          )}
        </Text>
      </View>
    );
  };

  const renderPremiumItem = ({ item, index }: any) => {
    return (
      <View
        key={item.key}
        style={[
          styles.item_box_style,
          index % 2 !== 0 && { backgroundColor: "#F5F4F8" },
        ]}
      >
        <Text key={item.key} style={[styles.title_text, { maxWidth: "80%" }]}>
          {item.title}
        </Text>
        <Text
          style={{
            fontWeight: "600",
            color: "#1E1E1E",
            fontSize: 16,
            lineHeight: 19,
          }}
        >
          {!item.duration ? (
            item.checked ? (
              <Checked />
            ) : (
              <Text style={{ color: "#8B8B8B" }}>x</Text>
            )
          ) : (
            item.duration
          )}
        </Text>
      </View>
    );
  };
  const renderStandardItemFooter = () => {
    return (
      <View style={{ marginTop: 46 }}>
        {standardPrice?.map((item) => (
          <View style={styles.price_box} key={item.key}>
            <View
              style={{
                paddingHorizontal: 16,
                marginVertical: 12,
                flexDirection: "row",
              }}
            >
              <View>
                <View>
                  <RadioButton
                    value="first"
                    status={
                      checkedTariff === item.value ? "checked" : "unchecked"
                    }
                    uncheckedColor={color1}
                    color={color1}
                  />
                </View>
              </View>
              <View>
                <Text
                  style={{
                    fontWeight: "500",
                    color: "#1E1E1E",
                    fontSize: 16,
                    lineHeight: 20,
                  }}
                >
                  {item.title}
                </Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: 1,
                left: 16,
                backgroundColor: color3,
              }}
            />
          </View>
        ))}
      </View>
    );
  };

  const renderPremiumItemFooter = () => {
    return (
      <View style={{ marginTop: 46, marginBottom: 25 }}>
        {premiumPrice?.map((item) => (
          <View style={styles.price_box} key={item.key}>
            <View
              style={{
                paddingHorizontal: 16,
                marginVertical: 12,
                flexDirection: "row",
              }}
            >
              <View>
                <RadioButton
                  value="first"
                  status={
                    checkedTariff === item.value ? "checked" : "unchecked"
                  }
                  uncheckedColor={color1}
                  color={color1}
                />
              </View>
              <View>
                <Text
                  style={{
                    fontWeight: "500",
                    color: "#1E1E1E",
                    fontSize: 16,
                    lineHeight: 20,
                  }}
                >
                  {item.title}
                </Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: 1,
                left: 16,
                backgroundColor: color3,
              }}
            />
          </View>
        ))}
      </View>
    );
  };

  return (
    <WrapperPage
      buttonTitle={"Pay"}
      onPressButton={() => {}}
      onPressBack={() => {
        navigation.navigate("EnterRate");
      }}
    >
      {status ? (
        <View style={{ flex: 1, width: "100%" }}>
          <View style={{ paddingHorizontal: 16 }}>
            <Text
              style={{
                fontWeight: "600",
                color: "#1E1E1E",
                fontSize: 24,
                lineHeight: 28,
              }}
            >
              Standard
            </Text>
          </View>
          <View style={{ marginTop: 24 }}>
            <FlatList
              data={standardData}
              renderItem={renderStandardItem}
              ListFooterComponent={renderStandardItemFooter}
            />
          </View>
        </View>
      ) : (
        <View style={{ flex: 1, width: "100%" }}>
          <View style={{ paddingHorizontal: 16 }}>
            <Text
              style={{
                fontWeight: "600",
                color: "#1E1E1E",
                fontSize: 24,
                lineHeight: 28,
              }}
            >
              Premium
            </Text>
          </View>
          <View style={{ marginTop: 24 }}>
            <FlatList
              data={premiumData}
              renderItem={renderPremiumItem}
              ListFooterComponent={renderPremiumItemFooter}
            />
          </View>
        </View>
      )}
    </WrapperPage>
  );
};

export default EnterRateSingleScreen;

const styles = StyleSheet.create({
  item_box_style: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    paddingHorizontal: 16,
  },
  title_text: {
    fontStyle: "normal",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 20,
    height: 25,
  },
  price_box: {
    marginBottom: 24,
  },
  button_style: {
    marginVertical: 15,
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: color1,
  },
  price: {
    color: "#7454CF",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 19,
    marginTop: 2,
  },
});
