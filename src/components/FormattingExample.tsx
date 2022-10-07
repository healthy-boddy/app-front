import React, { FC, useEffect, useState } from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

const CELL_COUNT = 4;

interface FormattingExampleProps {
  handleSend: (data: string) => void;
  error: boolean;
}

const FormattingExample: FC<FormattingExampleProps> = ({
  handleSend,
  error,
}) => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useEffect(() => {
    handleSend(value);
  }, [value]);

  return (
    <SafeAreaView style={styles.root}>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[
              styles.cell,
              isFocused && styles.focusCell,
              error && { borderColor: "#E81313", color: "#E81313" },
            ]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      {error && (
        <Text
          style={{
            color: "#E81313",
            fontSize: 16,
            lineHeight: 20,
            fontWeight: "400",
            marginTop: 8,
          }}
        >
          Неверный код
        </Text>
      )}
    </SafeAreaView>
  );
};
export default FormattingExample;

const styles = StyleSheet.create({
  root: { marginTop: 20, marginBottom: 40 },
  codeFieldRoot: { marginTop: 10 },
  cell: {
    width: "20%",
    height: 50,
    lineHeight: 38,
    fontSize: 20,
    borderWidth: 1,
    borderColor: "#F5F4F8",
    textAlign: "center",
    borderRadius: 20,
    backgroundColor: "#F5F4F8",
    paddingTop: 2,
    color: "#797979",
    fontWeight: "400",
  },
  focusCell: {
    borderColor: "transparent",
  },
});
