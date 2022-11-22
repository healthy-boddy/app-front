import React, { useState } from "react";
import MainContainer from "../../../../components/MainContainer";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../../../../components/BackButton";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import CustomButton from "../../../../components/CustomButton";
import ArrowDown from "../../../ClientScreens/MainScreens/CoachSingle/CoachSingleIcons/ArrowDown";
import ArrowUp from "../../../ClientScreens/MainScreens/CoachSingle/CoachSingleIcons/ArrowUp";
import { AllTasksBlock } from "./view/all-tasks-block";
import { ProgramsTargetsBlock } from "./view/programs-targets-block";
import DateTimePicker from "@react-native-community/datetimepicker";
import ChatMessageIcon from "../../../ClientScreens/MainScreens/UserSinglePage/SingleScreenIcons/ChatMessageIcon";
import SendMessageIcon from "../../../ClientScreens/MainScreens/UserSinglePage/SingleScreenIcons/SendMessageIcon";
import { color1 } from "../../../../helpers/colors";
import Modal from "react-native-modal";
import { ClientBlockForCoach } from "../../../../components/core/client-block-for-coach/client-block-for-coach";
import { useSelector } from "react-redux";
import { ModalPickClientConfirm } from "../../../../components/core/modal-pick-client-confirm/modal-pick-client-confirm";

const { width, height } = Dimensions.get("screen");

const SelfLoveScreen = () => {
  const navigation = useNavigation<any>();
  const [reviewsVisible, setReviewsVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const [visibleConfirmModal, setVisibleConfirmModal] = useState(false);

  const toggleBottomNavigationView = () => {
    setVisible((value) => !value);
  };
  const toggleConfirmModal = () => {
    setVisibleConfirmModal((value) => !value);
  };

  const handlePressPickClient = () => {
    setVisible(false);
    setVisibleConfirmModal(true);
  };

  let user_data = useSelector((store: any) => store.user_data?.user_data);
  return (
    <>
      <MainContainer>
        <View style={{ flex: 1, paddingHorizontal: 16 }}>
          <View style={{ flex: 1 }}>
            <BackButton
              onPress={() => {
                navigation.navigate("ConstructorPage");
              }}
            />
            <Text
              style={{
                color: "#1E1E1E",
                fontSize: 24,
                lineHeight: 28,
                fontWeight: "600",
              }}
            >
              Любовь к себе
            </Text>

            <TouchableOpacity
              style={{
                marginTop: 20,
                alignItems: "center",
                justifyContent: "space-between",
              }}
              activeOpacity={0.7}
              onPress={() => {
                setReviewsVisible(!reviewsVisible);
              }}
            >
              {reviewsVisible && (
                <Text>
                  Научно-доказанная программа по избавлению от лишнего веса,
                  усталости и нехватки энергии. Ваши результаты:
                </Text>
              )}
              <View
                style={{
                  alignItems: "center",
                  width: "100%",
                }}
              >
                {!reviewsVisible ? <ArrowDown /> : <ArrowUp />}
              </View>
            </TouchableOpacity>

            <View style={{ marginTop: 30 }} />
            <ProgramsTargetsBlock number={4} title={"Цели программы"} />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 36,
                borderBottomWidth: 1,
                borderColor: "#E2E2E2",
                paddingVertical: 12,
              }}
            >
              <Text
                style={{
                  color: "#1E1E1E",
                  fontSize: 19,
                  lineHeight: 22.67,
                  fontWeight: "600",
                }}
              >
                Задачи
              </Text>
              <TouchableOpacity onPress={() => console.log("Press")}>
                <Text
                  style={{
                    color: "#7454CF",
                    fontSize: 16,
                    lineHeight: 20,
                    fontWeight: "400",
                  }}
                >
                  Показать все
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: 32 }} />
            <AllTasksBlock
              onPress={() => navigation.navigate("TaskDetails")}
              title={"Контроль текущего состояния тела"}
              duration={"В течение 2 дней"}
            />

            <AllTasksBlock
              title={"Оценка уровня стресса"}
              duration={"В течение 5 дней"}
            />

            <AllTasksBlock
              title={"Чек-ап обследование"}
              duration={"В течение 2 дней"}
            />
          </View>

          <View style={{ marginBottom: 25 }}>
            <CustomButton
              title={"Назначить клиенту"}
              onPress={() => setVisible(true)}
            />
          </View>
        </View>
      </MainContainer>
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
        onBackdropPress={toggleBottomNavigationView}
        useNativeDriver={true}
        animationIn={"fadeInUp"}
        animationOut={"fadeOutDownBig"}
        deviceWidth={width}
      >
        <View style={styles.modal}>
          <View style={styles.modal_line} />
          <Text
            style={{
              fontWeight: "600",
              fontSize: 19,
              lineHeight: 22.67,
              textAlign: "center",
              color: "#1E1E1E",
              marginBottom: 30,
            }}
          >
            Какому клиенту назначить программу «Любовь к себе»?
          </Text>

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
            url={user_data.avatar}
            name={user_data.user.username}
            progress={"5/6"}
            subscriptionType={"Индивидуальный"}
            subscriptionDuration={"12"}
          />

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
            url={user_data.avatar}
            name={user_data.user.username}
            progress={"5/6"}
            subscriptionType={"Индивидуальный"}
            subscriptionDuration={"12"}
          />
          <View
            style={{
              marginTop: 46,
            }}
          />
          <CustomButton
            buttonStyles={{ backgroundColor: "#7454CF" }}
            title={"Назначить"}
            onPress={handlePressPickClient}
          />
        </View>
      </Modal>

      {/*confirm modal*/}
      <ModalPickClientConfirm
        data={user_data}
        onPressButton={() => console.log("Press confirm model")}
        visible={visibleConfirmModal}
        setVisible={toggleConfirmModal}
      />
    </>
  );
};

export default SelfLoveScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  edit_icon: {
    position: "absolute",
    alignSelf: "flex-end",
    zIndex: 1,
    backgroundColor: "#fff",
    borderRadius: 100,
    padding: 5,
    top: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 100,
    marginTop: 25,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
  button_title: {
    fontSize: 16,
    fontWeight: "400",
    fontStyle: "normal",
    color: "#1E1E1E",
    marginLeft: 8,
    width: 400,
  },
  line: {
    height: 2,
    backgroundColor: "#BDBDBD",
    marginVertical: 15,
    width: "100%",
  },
  logOut: {
    color: color1,
    fontStyle: "normal",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 20,
  },
  modal: {
    height: "90%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 16,
    width: "100%",
  },
  modal_line: {
    height: 4,
    width: 40,
    borderRadius: 30,
    marginVertical: 10,
    alignSelf: "center",
    backgroundColor: "#C4C3C5",
  },
  modal_text: {
    marginLeft: 12,
    color: color1,
    lineHeight: 21,
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: 18,
  },
  logOut_text: {
    fontWeight: "600",
    fontSize: 19,
    fontStyle: "normal",
    lineHeight: 23,
  },
  logOut_box: {
    width: "100%",
    height: 210,
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 20,
    paddingTop: 40,
  },
  log_out_buttons: {
    flexDirection: "row",
    width: "100%",
    marginTop: 32,
    justifyContent: "space-evenly",
  },
});
