import React, { FC } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import CustomButton from "../../CustomButton";
import Modal from "react-native-modal";
import Description from "../../Description";
import { color1 } from "../../../helpers/colors";

const { width } = Dimensions.get("screen");

interface ModalPickClientConfirmProps {
  visible: boolean;
  setVisible: () => void;
  onPressButton: () => void;
  data: any;
}

export const ModalPickClientConfirm: FC<ModalPickClientConfirmProps> = ({
  visible,
  setVisible,
  onPressButton,
  data,
}) => {
  return (
    <Modal
      style={{
        flex: 1,
        justifyContent: "flex-end",
        width: "100%",
        left: 0,
        marginLeft: "auto",
        marginBottom: "auto",
      }}
      isVisible={visible}
      onBackdropPress={setVisible}
      useNativeDriver={true}
      animationIn={"fadeInUp"}
      animationOut={"fadeOutDownBig"}
      deviceWidth={width}
    >
      <View style={styles.modal}>
        <View
          style={{
            width: 120,
            height: 120,
            alignSelf: "center",
          }}
        >
          <Image
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 100,
            }}
            resizeMode={"cover"}
            source={{ uri: data.avatar }}
          />
        </View>

        <Text
          style={{
            marginTop: 16,
            fontWeight: "600",
            fontSize: 19,
            lineHeight: 22.67,
            textAlign: "center",
            color: "#1E1E1E",
          }}
        >
          Вы уверены, что хотите назначить программу «Любовь к себе» клиенту
          Анна Аннова?
        </Text>

        <View style={{ marginTop: 16 }} />
        <Description>
          <Text
            style={{
              textAlign: "center",
            }}
          >
            Эта программа сразу отобразится в аккаунте клиента
          </Text>
        </Description>

        <View
          style={{
            marginTop: 46,
          }}
        />
        <CustomButton
          buttonStyles={{ backgroundColor: "#7454CF" }}
          title={"Назначить"}
          onPress={onPressButton}
        />
        <View
          style={{
            marginTop: 12,
          }}
        />
        <CustomButton
          buttonTitle={{ color: color1 }}
          buttonStyles={{
            backgroundColor: "transparent",
            borderWidth: 2,
            borderColor: color1,
            marginBottom: 25,
          }}
          title={"Удалить задачу"}
          onPress={() => alert("press")}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 40,
    alignItems: "center",
  },
  modal_line: {
    height: 4,
    width: 40,
    borderRadius: 30,
    marginVertical: 10,
    alignSelf: "center",
    backgroundColor: "#C4C3C5",
  },
});
