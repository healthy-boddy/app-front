import React, {ReactNode} from 'react';
import {
  Modal,
  Platform,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { format, isAfter, subYears } from 'date-fns';


import { styles } from './date-picker-styles';
import {ChevronRight} from "../../icon/chevron-right";

const MIN_DATE = subYears(new Date(), 120);
const MAX_DATE = new Date();

interface CustomModalPickerProps {
  date?: Date | null;
  onDateChange?: (date: Date) => void;
  onDateSelect?: (date?: Date) => void;
  placeholder?: string;
  error?: string;
  minimumDate?: Date;
  maximumDate?: Date;
  icon?: ReactNode;
}

const DatePicker = React.forwardRef<
  {
    open: () => void;
    close: () => void;
  },
  CustomModalPickerProps
>((props, ref) => {
  const {
    date,
    onDateChange,
    onDateSelect,
    placeholder,
    error,
    minimumDate = MIN_DATE,
    maximumDate = MAX_DATE,
    icon,
  } = props;


  const [inputValue, setInputValue] = React.useState(
    date ? format(date, 'dd.MM.yyyy') : ''
  );
  const [visible, setVisible] = React.useState(false);

  React.useImperativeHandle(ref, () => ({
    open: () => handleInputPress(),
    close: () => setVisible(false),
  }));

  function handleInputPress() {
    if (!inputValue) {
      const date = isAfter(new Date(), maximumDate) ? maximumDate : new Date();
      setInputValue(format(date, 'dd.MM.yyyy'));
    }
    setVisible(true);
  }

  function handleChange(e: DateTimePickerEvent) {
    if (!e.nativeEvent.timestamp) {
      return;
    }
    setInputValue(format(new Date(e.nativeEvent.timestamp), 'dd.MM.yyyy'));
    onDateChange?.(new Date(e.nativeEvent.timestamp));
  }

  function handleSelect() {
    if (date !== null) {
      setVisible(false);
      onDateSelect?.(date);
    }
  }

  const handleAndroidChange = (
    e: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => {
    setVisible(false);
    if (selectedDate) {
      setInputValue(format(new Date(selectedDate), 'dd.MM.yyyy'));
      onDateChange?.(new Date(selectedDate));
    }
  };

  const setShowAndroid = () => (
    <DateTimePicker
      value={date ?? new Date()}
      onChange={Platform.OS === 'ios' ? handleChange : handleAndroidChange}
      mode="date"
      display="default"
      timeZoneOffsetInMinutes={0}
      minimumDate={minimumDate}
      maximumDate={maximumDate}
      locale="ru"
    />
  );

  return (
    <>
      <TouchableOpacity activeOpacity={0} onPress={() => setVisible(!visible)}>


<View style={{
  padding: 16,
  backgroundColor: '#F5F4F8',
  borderRadius: 12,
  alignSelf:'flex-start',
  width:'100%'
}}>

  <View style={{
    alignItems:'center',
    flexDirection:'row',
  }}>
    {icon}
        <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          width:'100%',
          paddingRight:16
        }}>

        <TextInput
            placeholderTextColor="#A1A2BB"
            style={[
              styles.textInput,
              !!error && styles.errorBorder,
            ]}
            value={inputValue}
            onPressIn={handleInputPress}
            placeholder={placeholder}
            editable={false}
        />

          <ChevronRight />

        </View>
  </View>
</View>
      </TouchableOpacity>
      <TouchableOpacity>
        {Platform.OS !== 'ios' && visible && setShowAndroid()}
        {Platform.OS === 'ios' && (
          <Modal
            transparent
            animationType="slide"
            visible={visible}
            supportedOrientations={['portrait']}
            onRequestClose={() => setVisible(false)}
          >
            <TouchableOpacity
              style={styles.modalView}
              activeOpacity={1}
              onPress={handleSelect}
            >
              <TouchableHighlight style={styles.modalData}>
                <View style={styles.topModalElem}>
                  <View style={styles.marginTop}>
                    <DateTimePicker
                      value={date ?? new Date()}
                      onChange={handleChange}
                      mode="date"
                      display="spinner"
                      timeZoneOffsetInMinutes={0}
                      minimumDate={minimumDate}
                      maximumDate={maximumDate}
                      locale="ru"
                    />
                  </View>

                  <TouchableHighlight
                    underlayColor="transparent"
                    onPress={() => setVisible(false)}
                    style={[styles.btn, styles.btnCancel]}
                  >
                    <Text style={styles.btnText}>Отмена</Text>
                  </TouchableHighlight>

                  <TouchableHighlight
                    underlayColor="transparent"
                    onPress={handleSelect}
                    style={[styles.btn, styles.btnDone]}
                  >
                    <Text style={styles.btnText}>Выбрать</Text>
                  </TouchableHighlight>
                </View>
              </TouchableHighlight>
            </TouchableOpacity>
          </Modal>
        )}
      </TouchableOpacity>
    </>
  );
});

DatePicker.displayName = 'DatePicker';

export { DatePicker };
