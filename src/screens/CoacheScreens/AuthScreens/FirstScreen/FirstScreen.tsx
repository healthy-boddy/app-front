import React, {useEffect, useRef, useState} from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable,
    Dimensions, Platform, Animated, StatusBar, FlatList, TouchableOpacity,
} from "react-native";
import {color1, color2, color3} from "../../../../helpers/colors";
import AppIntroSlider from "react-native-app-intro-slider";
import CustomButton from "../../../../components/CustomButton";
import {useIsFocused, useNavigation} from "@react-navigation/native";
import Container from "../../../../components/Container";
import {useSelector} from "react-redux";

const {width, height} = Dimensions.get("window");


const FirstScreen: React.FC = (props) => {
    const navigation: any = useNavigation();
    const bgs = ["#A5BBFF", "#DDBEFE", "#5dc6ec", "#B98EFF"];
    let user_data = useSelector((store: any) => store.user_data?.user_data);
    let [loaded, setLoaded] = useState(true)
    let isFocused = useIsFocused()
    const scrollX = useRef(new Animated.Value(0)).current;
    const slider = useRef(null);
    const [itemIndex, setItemIndex] = useState(0);
    const DATA = [
        {
            key: 1,
            title: "Health Buddy",
            description: "Сервис наставников по восстановлению и сохранению здоровья",
            imageData: require('../FirstScreen/OnBoardingImages/blob1.png'),
        },
        {
            key: 2,
            title: "Программы для клиентов",
            description: "Отслеживаем динамику назначений через цифровой аватар по всем параметрам организма ",
            imageData: require('../FirstScreen/OnBoardingImages/blob1.png'),
        },
        {
            key: 3,
            title: "Постоянная база клиентов",
            description:
                "Зарегистрируй профиль врача  и получай быстрый доступ к базе знаний и клиентов ",
            imageData: require('../FirstScreen/OnBoardingImages/blob1.png'),
        },
    ];
    const goNext = async () => {
        slider.current.scrollToOffset({
            offset: (itemIndex + 1) * width,
        });
        setItemIndex(prevState => prevState + 1)
    };
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
    useEffect(() => {
        scrollX.addListener(({value}) => {
            const val = Math.round(value / width);
            setItemIndex(val);
        });
        return () => {
            scrollX.removeAllListeners();
        };
    }, []);
    useEffect(() => {
        setLoaded(false)
    }, [])

    useEffect(() => {
        (async () => {
            if (user_data.specialization) {
                navigation.navigate("Greetings4")
            }
        })()
    }, [!loaded])


    const [index, setIndex] = useState(0);


    const RenderItem = (item: any) => {
        return (
            <View
                style={{
                    flex: 1,
                    width: "100%",
                    justifyContent: "center",
                    bottom: 80,
                }}
            >

                <View
                    style={{
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            fontWeight: "700",
                            lineHeight: 40,
                            fontSize: 34,
                            color: "#1E1E1E",
                            marginVertical: 12,
                            width: 343,
                        }}
                    >
                        {item.title}
                    </Text>
                    <Text
                        style={{
                            paddingHorizontal: 16,
                            textAlign: "center",
                            fontWeight: "400",
                            lineHeight: 20,
                            fontSize: 16,
                            color: "#797979",
                            width: 280
                        }}
                    >
                        {item.description}
                    </Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'white'}/>
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
                    source={require('../FirstScreen/OnBoardingImages/blob1.png')}/>
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
                {itemIndex < 2 && (
                    <View style={{marginBottom: 25, paddingHorizontal: 16}}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("EnterSex")
                            }}
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
                {itemIndex === 2 && (
                    <View style={{paddingHorizontal: 16, marginBottom: 25}}>
                        <CustomButton
                            onPress={() => {
                                navigation.navigate("Greetings4")
                            }}
                            title={'Начать'}
                        />
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

export default FirstScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        backgroundColor: "#fff",
        flex: 1,
    },
});
