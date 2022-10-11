import React, {FC, Fragment, useEffect, useState} from "react";
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
            <Fragment key={index}>
                <View
                    onLayout={getCellOnLayoutHandler(index)}
                    style={[{
                        width: "20%",
                        height: 50,
                        borderWidth: 1,
                        borderColor: "#F5F4F8",
                        borderRadius: 10,
                        backgroundColor: "#F5F4F8",
                        alignItems:'center',
                        justifyContent:'center'
                    }, error && {borderColor: '#E81313'}]}
                >
          <Text
            style={[
              styles.cell,
              isFocused && styles.focusCell,
              error && { borderColor: "#E81313", color: "#E81313" },
            ]}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
                </View>
            </Fragment>
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
    textAlign: "center",
    color: "#797979",
    fontWeight: "400",
      lineHeight: 38,
      fontSize: 20,
  },
  focusCell: {
    borderColor: "transparent",
  },
});
