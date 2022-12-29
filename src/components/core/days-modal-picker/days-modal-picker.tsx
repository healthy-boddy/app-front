import React, { FC, ReactNode, useState } from "react";
import {
  Modal,
  Platform,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "../date-picker-modal/date-picker-styles";
import { ChevronRight } from "../../icon/chevron-right";
import WheelPickerExpo from "react-native-wheel-picker-expo";

interface DaysModalPickerProps {
  icon: ReactNode;
  placeholder: string;
  setDate: (date: string) => void;
  date: string | null;
}

export const DaysModalPicker: FC<DaysModalPickerProps> = ({
  icon,
  placeholder,
  setDate,
  date,
}) => {
  const NUMBERS: string[] = "1,2,3,4,5,6,7,8,9,10,11,12".split(",");
  const [visible, setVisible] = React.useState(false);
  const [number, setNumber] = useState("");

  const onPressSelect = () => {
    setVisible(false);
    setDate(number);
  };

  return (
    <>
      <TouchableOpacity activeOpacity={0} onPress={() => setVisible(!visible)}>
        <View
          style={{
            padding: 16,
            backgroundColor: "#F5F4F8",
            borderRadius: 12,
            alignSelf: "flex-start",
            width: "100%",
          }}
        >
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            {icon}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                paddingRight: 16,
              }}
            >
              <TextInput
                placeholderTextColor="#A1A2BB"
                style={[styles.textInput]}
                value={`${date} мес.`}
                placeholder={placeholder}
                editable={false}
              />

              <ChevronRight />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        {Platform.OS === "ios" && (
          <Modal
            transparent
            animationType="slide"
            visible={visible}
            supportedOrientations={["portrait"]}
            onRequestClose={() => setVisible(false)}
          >
            <TouchableOpacity
              style={styles.modalView}
              activeOpacity={1}
              onPress={() => setDate(number)}
            >
              <TouchableHighlight style={styles.modalData}>
                <View style={styles.topModalElem}>
                  <View style={styles.marginTop}>
                    <WheelPickerExpo
                      height={300}
                      width={"100%"}
                      initialSelectedIndex={3}
                      items={NUMBERS.map((name: any) => ({
                        label: name,
                        value: "",
                      }))}
                      onChange={({ item }) => setNumber(item.label)}
                      backgroundColor="#FFFFFF"
                      selectedStyle={{ borderWidth: 1, borderColor: "#e3e3e3" }}
                    />
                  </View>

                  <TouchableHighlight
                    underlayColor="transparent"
                    onPress={() => setVisible(false)}
                    style={[styles.btn, styles.btnCancel]}
                  >
                    <Text style={styles.btnText}>Отмена</Text>
                  </TouchableHighlight>

                  <TouchableHighlight
                    underlayColor="transparent"
                    onPress={onPressSelect}
                    style={[styles.btn, styles.btnDone]}
                  >
                    <Text style={styles.btnText}>Выбрать</Text>
                  </TouchableHighlight>
                </View>
              </TouchableHighlight>
            </TouchableOpacity>
          </Modal>
        )}
      </TouchableOpacity>
    </>
  );
};
