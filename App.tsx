import * as React from "react";
import {LogBox} from "react-native";
import SignInFlow from "./src/navigations/SignInFlow";
import {NavigationContainer} from "@react-navigation/native";
import {Provider, useDispatch, useSelector} from "react-redux";
import {store} from "./src/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useEffect, useState} from "react";
import CoachVerify from "./src/navigations/CoachNavigations/CoachVerifyNavigations";
import axios from "axios";
import {setUserData} from "./src/store/actions/user_data";
import {deleteUserBio, deleteUserToken, setClientData, setUserToken} from "./src/store/actions/user_token";
import {baseUrl} from "./src/helpers/url";
import Main from "./src/navigations/CoachNavigations/CoachMainNavigations";
import ClientVerifyNavigations from "./src/navigations/ClientNavigations/ClientVerifyNavigations";
import ClientMain from "./src/navigations/ClientNavigations/ClientMainNavigations";
//LogBox.ignoreAllLogs(true)
const AppWrapper = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    );
};

const App = () => {
    let [bio, setBio] = useState<any>("");
    let [weight, setWeight] = useState<any>("");
    let tokenFromReducer = useSelector(
        (store: any) => store.user_token.user_token
    );
    let bioFromReducer = useSelector((store: any) => store.user_token.user_bio);
    let client_data = useSelector((store: any)=> store?.user_token?.client_data)
    let user_data = useSelector((store: any) => store.user_data?.user_data);
    let isLogged = useSelector((store: any) => store.is_logged.is_logged);
    let [role, setRole] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            const tokenFromAsyncStorage = await AsyncStorage.getItem("userToken");
            if (tokenFromAsyncStorage) {
                dispatch(setUserToken(tokenFromAsyncStorage));
            }
        })();
    }, []);

    useEffect(() => {
        if (tokenFromReducer) {
            axios
                .get(baseUrl + "/me/", {
                    headers: {
                        Authorization: "Bearer " + tokenFromReducer,
                    },
                })
                .then((res) => {
                    console.log(res.data, "eee");
                    dispatch(setUserData(res.data));
                    if (res.data.education_description) {
                        setBio(res.data);
                    } else if (res.data.user.role === "client") {
                        setRole(res.data.user.role);
                    }
                    console.log(res.data.weight, 'res.data.weight')
                    if (res.data.weight){
                        setWeight(res.data.weight)
                        dispatch(setClientData(res.data.weight))
                    }

                })
                .catch((e) => {
                    AsyncStorage.removeItem('userToken').then(r => console.log(r))
                    dispatch(deleteUserToken())
                    dispatch(deleteUserBio())
                    returnStacks()
                    console.log(e.message, "error while getting my profile");
                });
        }
    }, [tokenFromReducer]);

    useEffect(() => {
        setBio(bioFromReducer);

    }, [bioFromReducer]);

    // console.log({ bioFromReducer }, "bioFromReducer && user_data?.user?.role", user_data?.user?.role);
    // console.log(bio, "RRRR");
    // console.log(user_data, "user_datauser_data");

    const returnStacks = () => {
        if (tokenFromReducer) {
            if (user_data?.user?.role === "coach" && !bio) {
                console.log("CoachVerify");
                return <CoachVerify/>;
            } else if (bio) {
                console.log(333);
                return <Main/>;
            } else if (user_data?.user?.role === "client") {
                console.log(444);
                if (user_data?.user?.role === "client" && client_data) {
                    console.log(454);
                    return <ClientMain/>;
                }
                return <ClientVerifyNavigations/>;
            }
        } else {
            return <SignInFlow/>;
        }
    };

    return <NavigationContainer>
        {returnStacks()}
    </NavigationContainer>;
};
export default AppWrapper;
