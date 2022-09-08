import React, { Fragment, FC } from "react";
import { SafeAreaView, Text, View } from "react-native";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import styles from "./styles";

const CELL_COUNT = 4;
interface FormattingExampleProps {
  value?: string;
  setValue?: (text: string) => void;
  errorAccess?: boolean;
}

export const FormattingExample: FC<FormattingExampleProps> = ({
  value,
  setValue,
  errorAccess,
}) => {
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView style={styles.root}>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        keyboardType="default"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <Fragment key={index}>
            <View
              onLayout={getCellOnLayoutHandler(index)}
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "auto",
                paddingHorizontal: 12,
                paddingVertical: 14,
                marginHorizontal: 10,
                borderRadius: 10,
                borderColor: "#ACACAC",
                borderWidth: 1,
              }}
            >
              {symbol.length === 0 ? (
                <Text style={[styles.cell, { color: "#8C8C8C" }]}>0</Text>
              ) : (
                <Text
                  key={`value-${index}`}
                  style={[styles.cell, isFocused && styles.focusCell]}
                >
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            </View>
            {index === -1 || index === 6 || index === 9 ? (
              <Text style={styles.cell}>0</Text>
            ) : null}
          </Fragment>
        )}
      />
    </SafeAreaView>
  );
};
