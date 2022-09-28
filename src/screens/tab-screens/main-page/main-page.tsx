import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Path, Svg } from "react-native-svg";
import { HeaderTab } from "../../../components/core/header-tab/header-tab";
import { Button } from "../../../components/core/button/button";
import { logout } from "../../../store/auth";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export const MainPage = () => {
  const navigation: any = useNavigation();
  const dispatch = useDispatch();
  const handleLogout = async () => dispatch(logout());

  const handleSubmit = () => {
    navigation.navigate("PickRegistration");
    handleLogout();
  };

  return (
    <View>
      <HeaderTab />
      <View style={stylesheet.styleFrame339775}>
        <View style={stylesheet.styleFrame340227}>
          <Text style={stylesheet.styleMoiTseli}>Мои цели</Text>
          <Text style={stylesheet.styleOpisanieTseli}>Описание цели</Text>
        </View>

        <View style={stylesheet.styleFrame69275}>
          <View style={stylesheet.styleRectangle2}></View>
          <View style={stylesheet.styleFrame340258}>
            <View style={stylesheet.styleFrame69275Copy1}>
              <View style={stylesheet.styleFrame340222}>
                <Text style={stylesheet.styleTsel1}>Цель 1</Text>
              </View>
              <View style={stylesheet.styleGroup1}>
                <View style={stylesheet.styleIconOutlineCheck}>
                  <View style={stylesheet.styleIcon}>
                    <Svg stroke="rgba(255, 255, 255, 1)">
                      <Path d="" />
                    </Svg>
                  </View>
                </View>
              </View>
            </View>
            <View style={stylesheet.styleFrame340222Copy1}>
              <View style={stylesheet.styleFrame340222Copy2}>
                <Text style={stylesheet.styleTsel2}>Цель 2</Text>
              </View>
              <View style={stylesheet.styleGroup2}>
                <View style={stylesheet.styleXmark}>
                  <View style={stylesheet.styleXmarkCopy1}>
                    <Svg fill="rgba(255, 255, 255, 1)">
                      <Path d="M0.238985 10.556C-0.0734518 10.8684 -0.0883298 11.4263 0.246424 11.7536C0.573739 12.0809 1.13166 12.0734 1.4441 11.761L5.99675 7.2013L10.5568 11.761C10.8767 12.0809 11.4272 12.0809 11.7545 11.7536C12.0744 11.4189 12.0818 10.8759 11.7545 10.556L7.20186 5.99628L11.7545 1.44399C12.0818 1.12413 12.0818 0.573694 11.7545 0.246405C11.4198 -0.0734461 10.8767 -0.0808845 10.5568 0.238966L5.99675 4.7987L1.4441 0.238966C1.13166 -0.0734461 0.5663 -0.0883229 0.246424 0.246405C-0.0808908 0.573694 -0.0734518 1.13157 0.238985 1.44399L4.79908 5.99628L0.238985 10.556Z" />
                    </Svg>
                  </View>
                </View>
                <View style={stylesheet.styleIconOutlineCheckCopy1}></View>
              </View>
            </View>
            <View style={stylesheet.styleFrame340225}>
              <View style={stylesheet.styleFrame340222Copy3}>
                <Text style={stylesheet.styleTsel3}>Цель 3</Text>
              </View>
              <View style={stylesheet.styleFrame1}>
                <View style={stylesheet.styleHourglass}>
                  <Svg fill="rgba(145, 145, 145, 1)">
                    <Path d="M1.36766 15L9.5652 15C10.4714 15 11 14.5265 11 13.6517L11 13.4109C11.0084 11.1718 8.47443 9.34992 7.45079 8.41894C7.14873 8.13002 6.97253 7.87319 6.97253 7.48796C6.97253 7.10273 7.14034 6.86196 7.45079 6.56501C8.46604 5.61798 11 3.88443 11 1.57303L11 1.34831C11 0.473515 10.4714 0 9.5652 0L1.36766 0C0.48665 0 0 0.473515 0 1.29213L0 1.57303C0 3.88443 2.53394 5.61798 3.5408 6.56501C3.85964 6.86196 4.02745 7.10273 4.02745 7.48796C4.02745 7.87319 3.85125 8.13002 3.5408 8.41894C2.52555 9.34992 0 11.1718 0 13.4109L0 13.7079C0 14.5265 0.48665 15 1.36766 15ZM2.31578 13.7319C1.87948 13.7319 1.73684 13.2584 2.13958 12.9695L4.96719 10.939C5.05949 10.8748 5.11822 10.8106 5.11822 10.6982L5.11822 6.7496C5.11822 6.32424 5.01753 6.10754 4.6903 5.83467C4.24561 5.46549 3.31426 4.81541 2.87795 4.26164C2.71014 4.04494 2.72692 3.86838 2.92829 3.86838L8.0633 3.86838C8.26467 3.86838 8.28984 4.04494 8.12203 4.26164C7.68572 4.81541 6.75437 5.46549 6.30128 5.83467C5.97405 6.09952 5.88176 6.32424 5.88176 6.7496L5.88176 10.6982C5.88176 10.8106 5.94049 10.8748 6.03279 10.939L8.8604 12.9695C9.27153 13.2584 9.11211 13.7319 8.68419 13.7319L2.31578 13.7319Z" />
                  </Svg>
                </View>
              </View>
            </View>
            <View style={stylesheet.styleFrame340228}>
              <View style={stylesheet.styleFrame340222Copy4}>
                <Text style={stylesheet.styleTsel4}>Цель 4</Text>
              </View>
              <View style={stylesheet.styleFrame1Copy1}>
                <View style={stylesheet.styleHourglassCopy1}>
                  <Svg fill="rgba(145, 145, 145, 1)">
                    <Path d="M1.36766 15L9.5652 15C10.4714 15 11 14.5265 11 13.6517L11 13.4109C11.0084 11.1718 8.47443 9.34992 7.45079 8.41894C7.14873 8.13002 6.97253 7.87319 6.97253 7.48796C6.97253 7.10273 7.14034 6.86196 7.45079 6.56501C8.46604 5.61798 11 3.88443 11 1.57303L11 1.34831C11 0.473515 10.4714 0 9.5652 0L1.36766 0C0.48665 0 0 0.473515 0 1.29213L0 1.57303C0 3.88443 2.53394 5.61798 3.5408 6.56501C3.85964 6.86196 4.02745 7.10273 4.02745 7.48796C4.02745 7.87319 3.85125 8.13002 3.5408 8.41894C2.52555 9.34992 0 11.1718 0 13.4109L0 13.7079C0 14.5265 0.48665 15 1.36766 15ZM2.31578 13.7319C1.87948 13.7319 1.73684 13.2584 2.13958 12.9695L4.96719 10.939C5.05949 10.8748 5.11822 10.8106 5.11822 10.6982L5.11822 6.7496C5.11822 6.32424 5.01753 6.10754 4.6903 5.83467C4.24561 5.46549 3.31426 4.81541 2.87795 4.26164C2.71014 4.04494 2.72692 3.86838 2.92829 3.86838L8.0633 3.86838C8.26467 3.86838 8.28984 4.04494 8.12203 4.26164C7.68572 4.81541 6.75437 5.46549 6.30128 5.83467C5.97405 6.09952 5.88176 6.32424 5.88176 6.7496L5.88176 10.6982C5.88176 10.8106 5.94049 10.8748 6.03279 10.939L8.8604 12.9695C9.27153 13.2584 9.11211 13.7319 8.68419 13.7319L2.31578 13.7319Z" />
                  </Svg>
                </View>
              </View>
            </View>
            <View style={stylesheet.styleFrame340229}>
              <View style={stylesheet.styleFrame340222Copy5}>
                <Text style={stylesheet.styleTsel6}>Цель 6</Text>
              </View>
              <View style={stylesheet.styleFrame1Copy2}>
                <View style={stylesheet.styleHourglassCopy2}>
                  <Svg fill="rgba(145, 145, 145, 1)">
                    <Path d="M1.36766 15L9.5652 15C10.4714 15 11 14.5265 11 13.6517L11 13.4109C11.0084 11.1718 8.47443 9.34992 7.45079 8.41894C7.14873 8.13002 6.97253 7.87319 6.97253 7.48796C6.97253 7.10273 7.14034 6.86196 7.45079 6.56501C8.46604 5.61798 11 3.88443 11 1.57303L11 1.34831C11 0.473515 10.4714 0 9.5652 0L1.36766 0C0.48665 0 0 0.473515 0 1.29213L0 1.57303C0 3.88443 2.53394 5.61798 3.5408 6.56501C3.85964 6.86196 4.02745 7.10273 4.02745 7.48796C4.02745 7.87319 3.85125 8.13002 3.5408 8.41894C2.52555 9.34992 0 11.1718 0 13.4109L0 13.7079C0 14.5265 0.48665 15 1.36766 15ZM2.31578 13.7319C1.87948 13.7319 1.73684 13.2584 2.13958 12.9695L4.96719 10.939C5.05949 10.8748 5.11822 10.8106 5.11822 10.6982L5.11822 6.7496C5.11822 6.32424 5.01753 6.10754 4.6903 5.83467C4.24561 5.46549 3.31426 4.81541 2.87795 4.26164C2.71014 4.04494 2.72692 3.86838 2.92829 3.86838L8.0633 3.86838C8.26467 3.86838 8.28984 4.04494 8.12203 4.26164C7.68572 4.81541 6.75437 5.46549 6.30128 5.83467C5.97405 6.09952 5.88176 6.32424 5.88176 6.7496L5.88176 10.6982C5.88176 10.8106 5.94049 10.8748 6.03279 10.939L8.8604 12.9695C9.27153 13.2584 9.11211 13.7319 8.68419 13.7319L2.31578 13.7319Z" />
                  </Svg>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={stylesheet.styleFrame69275Copy2}>
        <View style={stylesheet.styleFrame339977}>
          <View style={stylesheet.styleFrame339932}>
            <View style={stylesheet.styleFrame339860}>
              <Text style={stylesheet.styleVashHealthbuddy}>
                Ваш HealthBuddy
              </Text>
            </View>
          </View>
          <View style={stylesheet.styleFrame339980}>
            <View style={stylesheet.styleFrame339931}>
              <View style={stylesheet.styleFrame339967}>
                <View style={stylesheet.styleFrame339930}>
                  <View style={stylesheet.styleFrame339981}>
                    <Image
                      style={stylesheet.styleImage1683}
                      source={{
                        uri: "https://nyc3.digitaloceanspaces.com/sizze-storage/media/images/QXM5PEzjDka3odrjHX9wx1AQ.png",
                      }}
                    />
                    <Text style={stylesheet.styleOnlain}>Онлайн</Text>
                  </View>
                  <View style={stylesheet.styleVector339}>
                    <Svg stroke="rgba(232, 233, 235, 1)">
                      <Path d="" />
                    </Svg>
                  </View>
                  <View style={stylesheet.styleFrame339987}>
                    <View style={stylesheet.styleFrame339988}>
                      <View style={stylesheet.styleFrame339991}>
                        <View style={stylesheet.styleFrame339990}>
                          <Text
                            style={stylesheet.styleAgapovaElenaKonstantinovna}
                          >
                            Агапова Елена Константиновна
                          </Text>
                          <Text style={stylesheet.styleVrachVissheiKategorii}>
                            Врач высшей категории
                          </Text>
                        </View>
                        <View style={stylesheet.styleFrame339989}>
                          <Text style={stylesheet.styleKouch}>Коуч</Text>
                          <View style={stylesheet.styleFrame339945}>
                            <View style={stylesheet.styleVector184Stroke_}>
                              <Svg fill="rgba(145, 145, 145, 1)">
                                <Path d="M5.39391 0.256282C5.72864 -0.0854272 6.27136 -0.0854272 6.60609 0.256282L11.7489 5.50628C12.0837 5.84799 12.0837 6.40201 11.7489 6.74372C11.4142 7.08543 10.8715 7.08543 10.5368 6.74372L6 2.11244L1.46323 6.74372C1.1285 7.08543 0.585786 7.08543 0.251051 6.74372C-0.0836838 6.40201 -0.0836838 5.84799 0.251051 5.50628L5.39391 0.256282Z" />
                              </Svg>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <Button title="logout" onPress={handleSubmit} />
      </View>
    </View>
  );
};
const stylesheet = StyleSheet.create({
  styleMoiTseli: {
    marginBottom: 4,
    width: "100%",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "700",
    textAlign: "left",
    height: "auto",
    lineHeight: 23.4,
  },
  styleOpisanieTseli: {
    flexBasis: 0,
    flexGrow: 1,
    width: "100%",
    color: "rgba(145, 145, 145, 1)",
    fontSize: 12,
    letterSpacing: -0.74,
    fontStyle: "normal",
    fontWeight: "400",
    textAlign: "left",
    height: "auto",
    lineHeight: 20,
  },
  styleFrame340227: {
    marginBottom: 12,
    flexBasis: 0,
    flexGrow: 1,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  styleRectangle2: {
    position: "absolute",
    left: 20,
    top: 43,
    width: 278,
    height: 2,
    backgroundColor: "rgba(235, 235, 235, 1)",
  },
  styleTsel1: {
    flexBasis: 0,
    flexGrow: 1,
    width: "auto",
    color: "rgba(17, 187, 74, 1)",
    fontSize: 10,
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "600",
    textAlign: "center",
    height: "auto",
    lineHeight: 11.7,
  },
  styleFrame340222: {
    marginBottom: 8,
    width: 43,
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 4,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  styleIcon: {
    position: "absolute",
    left: 4,
    right: -8,
    top: 6,
    bottom: -2,
    width: "auto",
    height: "auto",
  },
  styleIconOutlineCheck: {
    position: "absolute",
    left: 6,
    top: 6,
    width: 20,
    height: 20,
  },
  styleGroup1: {
    width: 32,
    height: 32,
  },
  styleFrame69275Copy1: {
    marginRight: 22,
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  styleTsel2: {
    flexBasis: 0,
    flexGrow: 1,
    width: "auto",
    color: "rgba(17, 187, 74, 1)",
    fontSize: 10,
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "600",
    textAlign: "center",
    height: "auto",
    lineHeight: 11.7,
  },
  styleFrame340222Copy2: {
    marginBottom: 8,
    width: 43,
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 4,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  styleXmarkCopy1: {
    position: "absolute",
    left: 8,
    right: -4,
    top: 8,
    bottom: -4,
    width: "auto",
    height: "auto",
  },
  styleXmark: {
    position: "absolute",
    left: 2,
    top: 2,
    width: 28,
    height: 28,
  },
  styleIconOutlineCheckCopy1: {
    position: "absolute",
    left: 6,
    top: 6,
    width: 20,
    height: 20,
  },
  styleGroup2: {
    width: 32,
    height: 32,
  },
  styleFrame340222Copy1: {
    marginRight: 22,
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  styleTsel3: {
    flexBasis: 0,
    flexGrow: 1,
    width: "auto",
    color: "rgba(17, 187, 74, 1)",
    fontSize: 10,
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "600",
    textAlign: "center",
    height: "auto",
    lineHeight: 11.7,
  },
  styleFrame340222Copy3: {
    marginBottom: 8,
    width: 43,
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 4,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  styleHourglass: {
    position: "absolute",
    left: 10,
    right: -1,
    top: 9,
    bottom: -6,
    width: "auto",
    height: "auto",
  },
  styleFrame1: {
    width: 32,
    height: 32,
    borderRadius: 24,
    backgroundColor: "rgba(235, 235, 235, 1)",
  },
  styleFrame340225: {
    marginRight: 22,
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  styleTsel4: {
    flexBasis: 0,
    flexGrow: 1,
    width: "auto",
    color: "rgba(17, 187, 74, 1)",
    fontSize: 10,
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "600",
    textAlign: "center",
    height: "auto",
    lineHeight: 11.7,
  },
  styleFrame340222Copy4: {
    marginBottom: 8,
    width: 43,
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 4,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  styleHourglassCopy1: {
    position: "absolute",
    left: 10,
    right: -1,
    top: 9,
    bottom: -6,
    width: "auto",
    height: "auto",
  },
  styleFrame1Copy1: {
    width: 32,
    height: 32,
    borderRadius: 24,
    backgroundColor: "rgba(235, 235, 235, 1)",
  },
  styleFrame340228: {
    marginRight: 22,
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  styleTsel6: {
    flexBasis: 0,
    flexGrow: 1,
    width: "auto",
    color: "rgba(17, 187, 74, 1)",
    fontSize: 10,
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "600",
    textAlign: "center",
    height: "auto",
    lineHeight: 11.7,
  },
  styleFrame340222Copy5: {
    marginBottom: 8,
    width: 43,
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 4,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  styleHourglassCopy2: {
    position: "absolute",
    left: 10,
    right: -1,
    top: 9,
    bottom: -6,
    width: "auto",
    height: "auto",
  },
  styleFrame1Copy2: {
    width: 32,
    height: 32,
    borderRadius: 24,
    backgroundColor: "rgba(235, 235, 235, 1)",
  },
  styleFrame340229: {
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  styleFrame340258: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 319,
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  styleFrame69275: {
    width: "100%",
    height: 60,
  },
  styleFrame339775: {
    position: "absolute",
    left: 17,
    top: 120,
    width: 343,
    height: 140,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(234, 234, 234, 1)",
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  styleFrame340257: {
    position: "absolute",
    left: 0.3571428571428328,
    top: -2.842170943040401e-14,
    width: 375,
    height: 190,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
    backgroundColor: "rgba(116, 84, 207, 1)",
  },
  styleVashHealthbuddy: {
    width: 166,
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "700",
    textAlign: "left",
    height: "auto",
    lineHeight: 28,
  },
  styleFrame339860: {
    width: "auto",
    height: 24,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  styleFrame339932: {
    marginBottom: 16,
    width: "100%",
    height: 24,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  styleImage1683: {
    borderRadius: 32,
    width: 55,
    height: 55,
  },
  styleOnlain: {
    width: "100%",
    color: "rgba(4, 154, 64, 1)",
    fontSize: 14,
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "400",
    textAlign: "center",
    height: "auto",
    lineHeight: 16.4,
  },
  styleFrame339981: {
    marginRight: 8,
    width: "auto",
    height: 80,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  styleVector339: {
    marginRight: 8,
    width: 0,
    height: 80,
  },
  styleAgapovaElenaKonstantinovna: {
    marginBottom: 4,
    width: 238,
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "600",
    textAlign: "left",
    height: "auto",
    lineHeight: 18.8,
  },
  styleVrachVissheiKategorii: {
    width: 151,
    color: "rgba(153, 153, 153, 1)",
    fontSize: 14,
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "400",
    textAlign: "center",
    height: "auto",
    lineHeight: 16.4,
  },
  styleFrame339990: {
    marginBottom: 4,
    flexBasis: 0,
    flexGrow: 1,
    width: "auto",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  styleKouch: {
    flexBasis: 0,
    flexGrow: 1,
    width: "auto",
    color: "rgba(116, 84, 207, 1)",
    fontSize: 16,
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "500",
    textAlign: "left",
    height: "auto",
    lineHeight: 18.8,
  },
  styleVector184Stroke_: {
    position: "absolute",
    left: 8,
    right: 1,
    top: 6,
    bottom: -6,
    width: "auto",
    height: "auto",
  },
  styleFrame339945: {
    width: 24,
    height: 24,
  },
  styleFrame339989: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  styleFrame339991: {
    flexBasis: 0,
    flexGrow: 1,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  styleFrame339988: {
    flexBasis: 0,
    flexGrow: 1,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  styleFrame339987: {
    width: 257,
    height: 80,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  styleFrame339930: {
    flexBasis: 0,
    flexGrow: 1,
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  styleFrame339967: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  styleFrame339931: {
    flexBasis: 0,
    flexGrow: 1,
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  styleFrame339980: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(234, 234, 234, 1)",
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  styleFrame339977: {
    marginBottom: 16,
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingRight: 16,
    paddingLeft: 16,
  },
  styleMoeSostoyanie: {
    flexBasis: 0,
    flexGrow: 1,
    width: "auto",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "700",
    textAlign: "left",
    height: "auto",
    lineHeight: 28,
  },
  styleEsche: {
    flexBasis: 0,
    flexGrow: 1,
    width: "auto",
    color: "rgba(116, 84, 207, 1)",
    fontSize: 16,
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "500",
    textAlign: "right",
    height: "auto",
    lineHeight: 18.8,
  },
  styleFrame340162: {
    marginBottom: 16,
    width: "100%",
    height: 32,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingRight: 16,
    paddingLeft: 16,
  },
  styleGroup11962: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 48,
    height: 48,
  },
  styleVector: {
    position: "absolute",
    left: 14,
    right: -6,
    top: 15,
    bottom: -2,
    width: "auto",
    height: "auto",
  },
  styleFrame339926: {
    marginRight: 13,
    width: 48,
    height: 48,
  },
  style6_: {
    width: 70,
    color: "rgba(255, 255, 255, 1)",
    fontSize: 40,
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "700",
    textAlign: "center",
    height: "auto",
    lineHeight: 46.9,
  },
  styleFrame339774Copy1: {
    width: "auto",
    height: 48,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  styleFrame339775Copy1: {
    marginBottom: 12,
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  stylePloho: {
    marginBottom: 8,
    width: "100%",
    color: "rgba(255, 87, 88, 1)",
    fontSize: 16,
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "500",
    textAlign: "left",
    height: "auto",
    lineHeight: 18.8,
  },
  styleKosti: {
    marginBottom: 2,
    width: 49,
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "700",
    textAlign: "left",
    height: "auto",
    lineHeight: 18.8,
  },
  styleSegodnya: {
    width: 64,
    color: "rgba(116, 84, 207, 1)",
    fontSize: 16,
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "500",
    textAlign: "left",
    height: "auto",
    lineHeight: 18.8,
  },
  styleFrame339777: {
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  styleFrame339776: {
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  styleFrame339778: {
    position: "absolute",
    left: 16,
    top: 14,
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  styleFrame339774: {
    marginRight: 8,
    flexBasis: 0,
    flexGrow: 1,
    width: "auto",
    height: 156,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(234, 234, 234, 1)",
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  styleGroup11962Copy1: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 48,
    height: 48,
  },
  styleVectorCopy1: {
    position: "absolute",
    left: 14,
    right: -6,
    top: 15,
    bottom: -2,
    width: "auto",
    height: "auto",
  },
  styleFrame339926Copy1: {
    marginRight: 13,
    width: 48,
    height: 48,
  },
  style6_Copy1: {
    width: 70,
    color: "rgba(4, 154, 64, 1)",
    fontSize: 40,
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "700",
    textAlign: "center",
    height: "auto",
    lineHeight: 46.9,
  },
  styleFrame339774Copy2: {
    width: "auto",
    height: 48,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  styleFrame339775Copy3: {
    marginBottom: 12,
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  styleHorosho: {
    marginBottom: 8,
    width: "100%",
    color: "rgba(29, 164, 83, 1)",
    fontSize: 16,
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "600",
    textAlign: "left",
    height: "auto",
    lineHeight: 18.8,
  },
  styleGormoni: {
    marginBottom: 2,
    width: 74,
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "700",
    textAlign: "left",
    height: "auto",
    lineHeight: 18.8,
  },
  styleSegodnyaCopy1: {
    width: 64,
    color: "rgba(116, 84, 207, 1)",
    fontSize: 16,
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "500",
    textAlign: "left",
    height: "auto",
    lineHeight: 18.8,
  },
  styleFrame339777Copy1: {
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  styleFrame339776Copy1: {
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  styleFrame339778Copy1: {
    position: "absolute",
    left: 16,
    top: 14,
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  styleFrame339775Copy2: {
    flexBasis: 0,
    flexGrow: 1,
    width: "auto",
    height: 156,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(234, 234, 234, 1)",
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  styleFrame339781: {
    marginBottom: 8,
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  styleGroup11962Copy2: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 48,
    height: 48,
  },
  styleVectorCopy2: {
    position: "absolute",
    left: 14,
    right: -6,
    top: 15,
    bottom: -2,
    width: "auto",
    height: "auto",
  },
  styleFrame339926Copy2: {
    marginRight: 13,
    width: 48,
    height: 48,
  },
  style6_Copy2: {
    width: 70,
    color: "rgba(255, 255, 255, 1)",
    fontSize: 40,
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "700",
    textAlign: "center",
    height: "auto",
    lineHeight: 46.9,
  },
  styleFrame339774Copy4: {
    width: "auto",
    height: 48,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  styleFrame339775Copy4: {
    marginBottom: 12,
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  stylePlohoCopy1: {
    marginBottom: 8,
    width: "100%",
    color: "rgba(255, 87, 88, 1)",
    fontSize: 16,
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "500",
    textAlign: "left",
    height: "auto",
    lineHeight: 18.8,
  },
  styleKostiCopy1: {
    marginBottom: 2,
    width: 49,
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "700",
    textAlign: "left",
    height: "auto",
    lineHeight: 18.8,
  },
  styleSegodnyaCopy2: {
    width: 64,
    color: "rgba(116, 84, 207, 1)",
    fontSize: 16,
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "500",
    textAlign: "left",
    height: "auto",
    lineHeight: 18.8,
  },
  styleFrame339777Copy2: {
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  styleFrame339776Copy2: {
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  styleFrame339778Copy2: {
    position: "absolute",
    left: 16,
    top: 14,
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  styleFrame339774Copy3: {
    marginRight: 8,
    flexBasis: 0,
    flexGrow: 1,
    width: "auto",
    height: 156,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(234, 234, 234, 1)",
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  styleGroup11962Copy3: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 48,
    height: 48,
  },
  styleVectorCopy3: {
    position: "absolute",
    left: 14,
    right: -6,
    top: 15,
    bottom: -2,
    width: "auto",
    height: "auto",
  },
  styleFrame339926Copy3: {
    marginRight: 13,
    width: 48,
    height: 48,
  },
  style6_Copy3: {
    width: 70,
    color: "rgba(255, 185, 0, 1)",
    fontSize: 40,
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "700",
    textAlign: "center",
    height: "auto",
    lineHeight: 46.9,
  },
  styleFrame339774Copy5: {
    width: "auto",
    height: 48,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  styleFrame339775Copy6: {
    marginBottom: 12,
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  styleHoroshoCopy1: {
    marginBottom: 8,
    width: "100%",
    color: "rgba(254, 191, 25, 1)",
    fontSize: 16,
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "600",
    textAlign: "left",
    height: "auto",
    lineHeight: 18.8,
  },
  styleGormoniCopy1: {
    marginBottom: 2,
    width: 74,
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "700",
    textAlign: "left",
    height: "auto",
    lineHeight: 18.8,
  },
  styleSegodnyaCopy3: {
    width: 64,
    color: "rgba(116, 84, 207, 1)",
    fontSize: 16,
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "500",
    textAlign: "left",
    height: "auto",
    lineHeight: 18.8,
  },
  styleFrame339777Copy3: {
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  styleFrame339776Copy3: {
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  styleFrame339778Copy3: {
    position: "absolute",
    left: 16,
    top: 14,
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  styleFrame339775Copy5: {
    flexBasis: 0,
    flexGrow: 1,
    width: "auto",
    height: 156,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(234, 234, 234, 1)",
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  styleFrame339783: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  styleFrame339780: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 16,
    paddingLeft: 16,
  },
  styleGroup69274: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  styleFrame69275Copy2: {
    position: "absolute",
    left: -0.5,
    right: -0.5,
    top: 272,
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  styleStylename: {
    position: "relative",
    width: Dimensions.get("window").width,
    height: 918,
    backgroundColor: "rgba(246, 246, 246, 1)",
  },
});
