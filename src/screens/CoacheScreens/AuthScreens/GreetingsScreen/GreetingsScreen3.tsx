import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {WrapperPage} from "../../../../components/core/wrapper";
import Dot from "../../../../components/Dot";
import {CoachIconOnboarding} from "../../../../navigations/CoachNavigations/icons/CoachIconOnboarding";

const GreetingsScreen3 = () => {
    const navigation: any = useNavigation();
    return (
        <WrapperPage
            onPressBack={() => navigation.navigate("Greetings2")}
            onPressButton={() => navigation.navigate("Coach")}
            buttonTitle={"Вперед!"}
        >
            <View style={{width: '100%', flex: 1, paddingHorizontal: 16, marginTop: 16}}>
                <View style={{width: '100%'}}>
                    <Text style={[styles.title,{marginBottom:16}]}>
                        {`Впереди вас ждёт трехдневное обучение!`}
                    </Text>
                    <Text style={styles.title}>
                        День 1
                    </Text>
                    <Text style={styles.description}>
                        {`\u2022 Знакомство с продуктом`}
                    </Text>
                    <Text style={styles.description}>
                        {`\u2022 Обучение по продукту с методологом`}
                    </Text>
                    <View style={{marginTop: 10}}>
                        <Text style={styles.title}>
                            День 2
                        </Text>
                        <Text style={styles.description}>
                            {`\u2022 Алгоритм проведения первичной консультации`}
                        </Text>
                        <Text style={styles.description}>
                            {`\u2022 Путь клиента`}
                        </Text>
                    </View>
                    <View style={{marginTop: 10}}>
                        <Text style={styles.title}>
                            День 3
                        </Text>
                        <Text style={styles.description}>
                            {`\u2022 Долгосрочное ведение клиента`}
                        </Text>
                        <Text style={styles.description}>
                            {`\u2022 Постановка целей и задач`}
                        </Text>
                    </View>
                </View>

                <View style={{
                    marginTop: 53,
                    width: '100%',
                    alignItems: 'center'
                }}>
                        <CoachIconOnboarding />

                </View>
            </View>
        </WrapperPage>
    );
};

export default GreetingsScreen3;
const styles = StyleSheet.create({
    inlineContainer: {
        paddingTop: 35,
        paddingHorizontal: 20
    },
    title: {
        fontWeight: "600",
        fontSize: 24,
        lineHeight: 28,
        color: "#1E1E1E",
        textAlign: "left",
        alignSelf: "flex-start",
        marginBottom: 5
    },
    description: {
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 20,
        color: "#797979",
    }
});
