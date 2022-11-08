import React, {FC, ReactNode} from "react";
import {styles} from "../../../../components/core/wrapper/wrapper-styles";
import {SafeAreaView, View,} from "react-native";
import BackButton from "../../../../components/BackButton";
import CustomButton from "../../../../components/CustomButton";

interface QuestionsWrapper {
    onPressButton: any,
    buttonTitle: string,
    onPressBack: () => void;
    onPressLetter: () => void;
    children: ReactNode;
}

export const QuestionsWrapper: FC<QuestionsWrapper> = ({
                                                           onPressLetter,
                                                           onPressButton,
                                                           buttonTitle,
                                                           onPressBack,
                                                           children,
                                                       }) => {
    return (
        <View style={styles.container}>
            <SafeAreaView
                style={{
                    marginLeft: 16,
                }}
            >
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <BackButton onPressLetter={onPressLetter} latter onPress={onPressBack}/>
                </View>

            </SafeAreaView>
            <View style={styles.bodyContainer}>{children}</View>
            <View style={styles.footerContainer}>
                <CustomButton onPress={onPressButton} title={buttonTitle}/>
            </View>
        </View>
    );
};
