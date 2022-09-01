import React from "react";
import { View } from "react-native";

interface HorizontalSpaceProps {
  height: number;
}

export const HorizontalSpace: React.FC<HorizontalSpaceProps> = (props) => (
  <View style={{ height: props.height }} />
);
