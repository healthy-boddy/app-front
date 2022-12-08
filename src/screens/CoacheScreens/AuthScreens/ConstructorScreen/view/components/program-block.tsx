import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ProgramBlockProps {
  title: string;
  subtitle: string;
  duration: string;
  onPress: () => void;
  taskQuantity: number;
}

export const ProgramBlock: FC<ProgramBlockProps> = ({
  title,
  subtitle,
  duration,
  onPress,
  taskQuantity,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: "flex-start",
        backgroundColor: "#F5F4F8",
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginTop: 16,
        borderRadius: 12,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            lineHeight: 21.48,
            fontWeight: "600",
            color: "#1E1E1E",
          }}
        >
          {title}
        </Text>
        <Text style={styles.secondaryText}>{taskQuantity}</Text>
      </View>

      <Text style={styles.secondaryText}>{subtitle}</Text>
      <Text
        style={{
          marginTop: 4,
          fontSize: 16,
          lineHeight: 20,
          fontWeight: "400",
          color: "#1E1E1E",
        }}
      >
        {duration}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  secondaryText: {
    marginTop: 4,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "400",
    color: "#797979",
  },
});
