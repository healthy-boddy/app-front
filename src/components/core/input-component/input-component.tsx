import React from "react";
import {
  TextInput,
  TextInputProps,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { styles } from "./input-component-styles";
import { ErrorIcon } from "./icons";

export interface InputComponentProps extends Omit<TextInputProps, "onChange"> {
  onChange: (e: string) => void;
  error?: string | null;
  borderless?: boolean;
  onPressIcon?: () => void;
}

const InputComponent = React.forwardRef<TextInput, InputComponentProps>(
  (
    { onChange, onPressIcon, editable = true, error, borderless, ...rest },
    ref
  ) => (
    <>
      <View style={styles.rowContainer}>
        <TextInput
          ref={ref}
          style={[
            styles.textInput,
            borderless && styles.borderless,
            Boolean(error) && { borderColor: "#8C64FF" },
            !editable && { color: "#A1A2BB" },
          ]}
          onChangeText={onChange}
          underlineColorAndroid="transparent"
          scrollEnabled
          numberOfLines={20}
          autoCapitalize="none"
          enablesReturnKeyAutomatically
          {...rest}
        />
      </View>

      {error && (
        <View
          style={{
            backgroundColor: "#FEEFEF",
            borderRadius: 24,
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            paddingLeft: 12,
            paddingVertical: 8,
            marginTop: 8,
          }}
        >
          <Text style={styles.error}>{error}</Text>
          <View style={{ marginRight: 18 }}>
            <ErrorIcon />
          </View>
        </View>
      )}
    </>
  )
);

InputComponent.displayName = "InputComponent";

export { InputComponent };
