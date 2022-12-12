import * as React from "react";
import {useEffect, useRef, useState} from "react";
import {
    Animated, Button,
    Dimensions,
    FlatList,
    Image,
    StatusBar,
    StyleSheet,
    Text, TouchableOpacity,
    View,
} from "react-native";
import {useNavigation} from "@react-navigation/native";
import CustomButton from "../../../../components/CustomButton";
import {color1} from "../../../../helpers/colors";

const {width, height} = Dimensions.get("screen");

const bgs = ["#A5BBFF", "#DDBEFE", "#5dc6ec", "#B98EFF"];

const DATA = [
    {
        key: 1,
        title: "Раскрой потенциал здоровья",
        description:
            "Трансформируем твои биоданные в простые графики",
        // imageData: <FirstItemPreview />,
        imageData: require("../OnBoarding/OnBoardingImages/blob1.png"),

    },
    {
        key: 2,
        title: "Персональная программа",
        description:
            "Разработана практикующими врачами и нутрициологами для вас",
        // imageData: <SecondItemPreview />,
        imageData: require("../OnBoarding/OnBoardingImages/blob1.png"),

    },
    {
        key: 3,
        title: "Наставник здоровья",
        description: "Твой личный Health-coach - персональный тренер в прокачке здоровья",
        // imageData: <ThirdItemPreview />,
        imageData: require("../OnBoarding/OnBoardingImages/blob1.png"),

    },
    {
        key: 4,
        title: "Отслеживание состояния здоровья",
        description: "Пройдите первый опрос, чтобы ваши данные появились в прилжении",
        // imageData: <FourthItemPreview />,
        imageData: require("../OnBoarding/OnBoardingImages/blob1.png"),
    },
];

const Indicator = ({scrollX}) => {
    return (
        <View
            style={{
                position: "absolute",
                bottom: 40,
                flexDirection: "row",
                alignSelf: "center",
            }}
        >
            {DATA.map((_, i) => {
                const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
                const scale = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.8, 1.4, 0.8],
                    extrapolate: "clamp",
                });
                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.6, 1, 0.6],
                    extrapolate: "clamp",
                });
                return (
                    <Animated.View
                        key={`indicator-${i}`}
                        style={{
                            width: 10,
                            height: 10,
                            backgroundColor: "#fff",
                            borderRadius: 5,
                            marginHorizontal: 10,
                            opacity,
                            transform: [
                                {
                                    scale,
                                },
                            ],
                        }}
                    />
                );
            })}
        </View>
    );
};

const BackDrop = ({scrollX}) => {
    const backgroundColor = scrollX.interpolate({
        inputRange: bgs.map((_, i) => i * width),
        outputRange: bgs.map((bg) => bg),
    });
    return (
        <Animated.View
            style={[
                StyleSheet.absoluteFillObject,
            ]}
        />
    );
};

const OnBoarding = () => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const slider = useRef(null);
    const [itemIndex, setItemIndex] = useState(0);
    const navigation: any = useNavigation();
    const goNext = async () => {
        scrollX.current.scrollToOffset({
            offset: (itemIndex + 1) * width,
        });
    };
    useEffect(() => {
        scrollX.addListener(({value}) => {
            const val = Math.round(value / width);
            setItemIndex(val);
        });
        return () => {
            scrollX.removeAllListeners();
        };
    }, []);
    console.log(itemIndex, 'itemindex')
    return (
        <View style={styles.container}>
            <StatusBar hidden/>
            <BackDrop scrollX={scrollX}/>
            {itemIndex === 3 && (

                <Indicator scrollX={scrollX}/>
            )}

            {/*<Square scrollX={scrollX} />*/}
            <View style={{width: '100%', alignItems: 'center', flex: 1}}>
                <Image
                    style={{
                        width: 468,
                        height: 412,
                        resizeMode: "contain",
                        marginTop: 60,
                    }}
                    source={require('../OnBoarding/OnBoardingImages/blob1.png')}
                />
            </View>
            <View style={{width: '100%', flex: 1,}}>
                <FlatList
                    ref={slider}
                    scrollEventThrottle={32}
                    contentContainerStyle={{}}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={DATA}
                    pagingEnabled
                    onScroll={Animated.event(
                        [
                            {
                                nativeEvent: {contentOffset: {x: scrollX}},
                            },
                        ],
                        {useNativeDriver: false}
                    )}
                    renderItem={({item}) => {
                        return (
                            <View style={{width, alignItems: "center"}}>
                                <View
                                    style={{
                                        flex: 0.3,
                                        width: '100%',
                                        paddingHorizontal: 16,
                                        transform: [
                                            {
                                                translateY: 140,
                                            },
                                        ],
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 24,
                                            fontWeight: "700",
                                            lineHeight: 28,
                                            color: "black",
                                            textAlign: 'center'
                                        }}
                                    >
                                        {item.title}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontWeight: "400",
                                            lineHeight: 24,
                                            marginTop: 12,
                                            color: "black",
                                            paddingHorizontal: 36,
                                            textAlign: 'center'
                                        }}
                                    >
                                        {item.description}
                                    </Text>
                                </View>
                            </View>
                        );
                    }}
                />
                {itemIndex < 3 && (
                    <View style={{marginBottom: 25, paddingHorizontal: 16}}>
                        <TouchableOpacity
                            onPress={()=>{navigation.navigate("EnterSex")}}
                            style={{alignItems: 'center', marginBottom: 10}}>
                            <Text style={{
                                color: color1,
                                fontWeight: '600',
                                fontSize: 16
                            }}>
                                Пропустить
                            </Text>
                        </TouchableOpacity>
                        <CustomButton
                            title={"Далее"}
                            onPress={goNext}/>
                    </View>
                )}
                {itemIndex === 3 && (
                    <View style={{paddingHorizontal: 16, marginBottom: 25}}>
                        <CustomButton
                            onPress={()=>{navigation.navigate("EnterSex")}}
                            title={'Начать'}
                        />
                    </View>
                )}
            </View>
        </View>
    );
};
export default OnBoarding;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        backgroundColor: "#fff",
        flex: 1,
    },
});
