import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import Icon from './Icon';
import nowTheme from '../constants/Theme';
import { DateTimePickerAndroid } from 'expo-datetime-picker';

export const CalendarButton = ({ isWhite, style }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const openDatePicker = () => {
    DateTimePickerAndroid.open({
      value: selectedDate,
      mode: 'date',
      display: 'default',
      onChange: (event, date) => {
        if (date) setSelectedDate(date); // Update the selected date
      },
    });
  };

  return (
    <View>
      <TouchableOpacity style={[styles.button, style]} onPress={openDatePicker}>
        <Icon
          family="NowExtra"
          size={16}
          name="calendar" // Make sure you have a calendar icon available here
          color={nowTheme.COLORS[isWhite ? 'WHITE' : 'ICON']}
        />
      </TouchableOpacity>
    </View>
  );
};
