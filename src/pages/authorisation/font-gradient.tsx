import React from 'react';
import MaskedView from "@react-native-masked-view/masked-view";
import {Text} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {styles} from "./authorisation-styles";

export const FontGradient = ({children}) => {
    return (
        <MaskedView
            style={{ height: 24 }}
            maskElement={<Text style={styles.logoFonts}>{children}</Text>}
        >
            <LinearGradient
                colors={['#8C64FF', '#B49AFF']}
                start={{ x: 1, y: 1 }}
                end={{ x: 0, y: 0.96 }}
                style={{ flex: 1 }}
            />
        </MaskedView>
    );
};
