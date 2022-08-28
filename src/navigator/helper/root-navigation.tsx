import React, { Ref } from 'react';
import { NavigationContainerRef } from '@react-navigation/native';
import { RootStackParamList } from '../Navigation';

export const navigationRef: any= React.createRef();

interface NavigationRefProp {
  current: Ref<NavigationContainerRef<RootStackParamList>>;
}

const navigate = (name: string, params: any) => {
  navigationRef.current?.navigate(name, params);
};

export const goBack = () => {
  navigationRef.current?.goBack();
};
export default {
  navigate,
  goBack
};