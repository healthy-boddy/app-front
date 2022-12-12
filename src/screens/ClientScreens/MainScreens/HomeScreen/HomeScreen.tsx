import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from "react-native";
import MainContainer from "../../../../components/MainContainer";
import { useDispatch, useSelector } from "react-redux";
import { BellIcon } from "../../../../assets/Icons/BellIcon";
import CustomButton from "../../../../components/CustomButton";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { baseUrl } from "../../../../helpers/url";
import axios from "axios";
import LoadingAnimation from "../../ClientScreenComponents/LoadingAnimation";
import Title from "../../../../components/Title";
import RightIcon from "../../../../assets/Icons/RightIcon";
import { color1 } from "../../../../helpers/colors";
import PicCheck from "./HomeScreenIcons/PicCheck";
import PeoplesIcon from "./HomeScreenIcons/PeoplesIcon";
import { ProgramBlock } from "../../../CoacheScreens/AuthScreens/ConstructorScreen/view/components/program-block";
import { ProgramAssignedToClientArray } from "../../../CoacheScreens/MainScreens/client-programs/interface/interface";
import { ProgramsGoalsBlock } from "../../../CoacheScreens/MainScreens/client-programs/client-programs/view/components/programs-goals-block";
import { GoalsResArray } from "../../../CoacheScreens/AuthScreens/ConstructorScreen/goasl-editing-screen/interface/interface";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
const HomeScreen = () => {
  const navigation: any = useNavigation();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const user_data = useSelector((store: any) => store.user_data.user_data);
  const [userData, setUserData] = useState<any>([]);
  const [freeQuizStatus, setFreeQuizStatus] = useState(false);
  const [paidQuizStatus, setPaidQuizStatus] = useState(false);
  const [userCoach, setUserCoach] = useState<any>(false);

  // programs
  const [programs, setPrograms] = useState<ProgramAssignedToClientArray>([]);

  // goals
  const [goals, setGoals] = useState<GoalsResArray>([]);

  let tokenFromReducer = useSelector(
    (store: any) => store.user_token.user_token
  );
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getClientStatus();
    wait(1000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  const coach = [
    {
      name: "Наталья Заварзина",
      description: "Мой Health Buddy",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS24WWpVB9X7t5-QZ8uFCH3QY65_-mO0f4M218TzwbU2WPJaG_kElCLJdK4LP_gNd-Vj0U&usqp=CAU",
    },
  ];

  useEffect(() => {
    axios
      .get(baseUrl + "/me/", {
        headers: {
          Authorization: "Bearer " + tokenFromReducer,
        },
      })
      .then((res) => {
        //  console.log(res.data, "eee");
        setUserData(res.data);
      });
  }, []);

  function getClientStatus() {
    axios
      .get(baseUrl + "/client/quiz_status/", {
        headers: {
          Authorization: "Bearer " + tokenFromReducer,
        },
      })
      .then((status) => {
        setFreeQuizStatus(status.data.is_free_quiz_passed);
        setPaidQuizStatus(status.data.is_paid_quiz_passed);
        setUserCoach(status.data.coach);
        //   console.log(userCoach, 'userCoach')
      });
  }

  function getPrograms() {
    axios
      .get<ProgramAssignedToClientArray>(
        "http://92.53.97.238/program/assign/",
        {
          headers: {
            Authorization: "Bearer " + tokenFromReducer,
          },
        }
      )
      .then((res) => {
        setPrograms(res.data);
        //   console.log(userCoach, 'userCoach')
      });
  }

  function getGoals() {
    axios
      .get<GoalsResArray>("http://92.53.97.238/program/goal/", {
        headers: {
          Authorization: "Bearer " + tokenFromReducer,
        },
      })
      .then((res) => {
        setGoals(res.data);
        //   console.log(userCoach, 'userCoach')
      });
  }

  useEffect(() => {
    getClientStatus();
    getPrograms();
    getGoals();
  }, [isFocused]);

  //console.log(userCoach?.user?.avatar_thumbnail, 'userCoach?.user?.avatar_thumbnail')

  const returnViews = () => {
    if (!freeQuizStatus) {
      return (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                lineHeight: 28,
                fontSize: 24,
                color: "#1E1E1E",
                fontWeight: "600",
                marginTop: 16,
              }}
            >
              Найдите своего наставника
            </Text>
            <Text
              style={{
                lineHeight: 20,
                fontSize: 16,
                color: "#797979",
                fontWeight: "400",
                marginTop: 8,
              }}
            >
              Пройдите опрос, чтобы мы подобрали для вас наиболее подходящего
              наставника. Это займет около 15 минут.
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              flex: 1,
              height: 292,
              marginVertical: 25,
            }}
          >
            <Image
              style={{ width: 300, height: 292 }}
              source={require("../../AuthScreens/OnBoarding/OnBoardingImages/blob6.png")}
            />
          </View>
          <View style={{ marginBottom: 40 }}>
            <CustomButton
              onPress={() => {
                navigation.navigate("Questions");
              }}
              title={"Пройти опрос"}
            />
          </View>
        </View>
      );
    } else if (freeQuizStatus && !userCoach) {
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <LoadingAnimation
            circleLength={1000}
            imgSource={require("../../AuthScreens/OnBoarding/OnBoardingImages/blob1.png")}
          />
          <Title titlePropStyle={{ textAlign: "center" }}>
            Подбираем наставника
          </Title>
          <Text style={styles.subTitle}>Может занять до 5 минут..</Text>
        </View>
      );
    } else if (userCoach && !paidQuizStatus) {
      return (
        <View style={{ flex: 1 }}>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <PicCheck />
            <View style={{}}>
              <Title titlePropStyle={{ textAlign: "center" }}>
                Ваш Health Buddy найден!
              </Title>
              <Text
                style={{
                  textAlign: "center",
                  color: "#797979",
                  marginTop: 10,
                  fontSize: 16,
                  lineHeight: 20,
                  paddingHorizontal: 24,
                  fontWeight: "400",
                }}
              >
                Для консультации с Health buddy, вам необходимо заполнить анкету
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("PaidQuizzes");
                }}
                style={{ alignItems: "center", marginVertical: 40 }}
              >
                <Text
                  style={{
                    color: color1,
                    fontSize: 16,
                    lineHeight: 20,
                    fontWeight: "500",
                  }}
                >
                  Заполнить анкету
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.coach_box}
              onPress={() => {
                navigation.navigate("CoachSingleScreen");
              }}
            >
              {coach.map((item) => (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <View>
                      <Image
                        style={styles.coach_avatar}
                        source={{ uri: userCoach?.user?.avatar_thumbnail }}
                      />
                    </View>
                    <View style={{ paddingLeft: 12 }}>
                      <Text style={styles.coach_name}>
                        {userCoach.user.username}
                      </Text>
                      <Text style={styles.coach_description}>
                        Мой Health Buddy
                      </Text>
                    </View>
                  </View>

                  <View style={{}}>
                    <RightIcon />
                  </View>
                </View>
              ))}
            </TouchableOpacity>
          </View>
        </View>
      );
    } else if (userCoach && paidQuizStatus) {
      return (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "flex-start",
              marginTop: 24,
            }}
          >
            {goals && goals.length > 0 && (
              <View
                style={{
                  width: "100%",
                }}
              >
                <Text
                  style={{
                    fontWeight: "600",
                    lineHeight: 22.67,
                    fontSize: 19,
                    color: "#1E1E1E",
                  }}
                >
                  Мои цели
                </Text>
                <View style={{ marginTop: 24 }} />
                <ProgramsGoalsBlock
                  number={goals.length}
                  title={"Мои цели"}
                  onPress={() => {
                    navigation.navigate("GoalsClientDetails");
                  }}
                />
              </View>
            )}

            {programs && programs.length > 0 ? (
              <>
                <Text
                  style={{
                    alignSelf: "flex-start",
                    fontWeight: "600",
                    fontSize: 19,
                    lineHeight: 22.67,
                    color: "black",
                    marginTop: 40,
                  }}
                >
                  Мои программы
                </Text>
                {programs.map((program) => (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <ProgramBlock
                      taskQuantity={program.program_info.tasks_quantity}
                      key={program.id}
                      onPress={() =>
                        navigation.navigate("DetailsProgramClient", {
                          programId: program.program,
                          assignedProgram: program.id,
                          clientID: program.assigned_to,
                        })
                      }
                      title={program.program_info.name}
                      subtitle={program.program_info.description}
                      duration={`Длительность - ${program.program_info.duration} дня`}
                    />
                  </View>
                ))}
              </>
            ) : (
              <>
                <PeoplesIcon />
                <Title
                  titlePropStyle={{
                    textAlign: "center",
                    width: 343,
                    marginTop: 20,
                  }}
                >
                  Ваш Health Buddy свяжется с вами в течение 24 часов
                </Title>
                <Text
                  style={{
                    marginTop: 20,
                    color: "#797979",
                    textAlign: "center",
                    fontSize: 16,
                  }}
                >
                  Он назначит консультацию, на которой вы вместе определите цели
                  и план работ
                </Text>
              </>
            )}

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.coach_box}
              onPress={() => {
                navigation.navigate("CoachSingleScreen");
              }}
            >
              {coach.map((item) => (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <View>
                      <Image
                        style={styles.coach_avatar}
                        source={{ uri: userCoach.user.avatar_thumbnail }}
                      />
                    </View>
                    <View style={{ paddingLeft: 12 }}>
                      <Text style={styles.coach_name}>
                        {userCoach.user.username}
                      </Text>
                      <Text style={styles.coach_description}>
                        Мой Health Buddy
                      </Text>
                    </View>
                  </View>

                  <View style={{}}>
                    <RightIcon />
                  </View>
                </View>
              ))}
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };

  return (
    <MainContainer>
      <View
        style={{
          flex: 1,
        }}
      >
        {loading ? (
          <ActivityIndicator
            size={"large"}
            color={color1}
            style={{
              height: "150%",
              alignItems: "center",
              alignSelf: "center",
            }}
          />
        ) : null}
        <SafeAreaView style={styles.header}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => {
              navigation.navigate("UserSingle");
            }}
          >
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 100,
                marginRight: 10,
              }}
              source={{ uri: user_data?.user?.avatar_thumbnail }}
            />
            <Text
              style={{
                lineHeight: 19.09,
                fontSize: 16,
                color: "#1E1E1E",
                fontWeight: "600",
              }}
            >
              {user_data.user.username}
            </Text>
          </TouchableOpacity>
          {/*<BellIcon/>*/}
        </SafeAreaView>

        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          scrollEnabled={false}
        >
          {returnViews()}
        </ScrollView>
      </View>
    </MainContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 48,
    // backgroundColor: "red",
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 8,
    borderRadius: 32,
  },
  subTitle: {
    textAlign: "center",
    marginTop: 12,
    color: "#797979",
    fontWeight: "400",
    fontSize: 16,
    fontStyle: "normal",
  },
  description: {
    width: 334,
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    color: "#1E1E1E",
    marginTop: 8,
    lineHeight: 20,
  },
  coach_box: {
    width: "100%",
    height: 96,
    backgroundColor: "#F5F4F8",
    marginTop: 24,
    borderRadius: 24,
    paddingVertical: 20,
    paddingLeft: 16,
    paddingRight: 25,
  },
  coach_avatar: {
    width: 56,
    height: 56,
    borderRadius: 50,
  },
  coach_name: {
    color: "#1E1E1E",
    fontSize: 16,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 19,
    marginBottom: 6,
  },
  coach_description: {
    color: "#797979",
    fontSize: 14,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 19,
  },
});
