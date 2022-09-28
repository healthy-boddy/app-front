import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

import {CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell,} from 'react-native-confirmation-code-field';

const CELL_COUNT = 4;

const FormattingExample = ({handleSend}: {handleSend: any}) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    useEffect(()=>{
       handleSend(value)
    },[value])

    return (
        <SafeAreaView style={styles.root}>
            <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({index, symbol, isFocused}) => (
                    <Text
                        key={index}
                        style={[styles.cell, isFocused && styles.focusCell]}
                        onLayout={getCellOnLayoutHandler(index)}>
                        {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                )}
            />
        </SafeAreaView>
    );
};
export default FormattingExample;

const styles = StyleSheet.create({
    root: {flex: 1, padding: 20},
    title: {textAlign: 'center', fontSize: 30},
    codeFieldRoot: {marginTop: 20},
    cell: {
        width: '20%',
        height: 50,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#00000030',
        textAlign: 'center',
        borderRadius: 10,
        backgroundColor: '#F5F4F8',
        paddingTop: 4
    },
    focusCell: {
        borderColor: 'transparent',
    },
});
