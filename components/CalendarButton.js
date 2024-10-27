import React, { useState } from 'react';
import { TouchableOpacity, View, Modal, Text } from 'react-native';
import Icon from './Icon';
import CalendarPicker from "react-native-calendar-picker";
import { nowTheme } from '../constants';

export const CalendarButton = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isCalendarVisible, setCalendarVisible] = useState(false);

  const toggleDatePicker = () => {
    console.log('clicked');
    setCalendarVisible((prev) => !prev);
  };

  const closeDatePicker = () => {
    setCalendarVisible(false);
  };

  const onDateChange = (date) => {
    // Set the date to the first of the selected month
    const firstOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    setSelectedDate(firstOfMonth);
    closeDatePicker();
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleDatePicker} style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon family="NowExtra" size={16} name="calendar-602x" color="black" />
      </TouchableOpacity>

      <Modal visible={isCalendarVisible} transparent={true} animationType="fade">
        <TouchableOpacity
          style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onPress={closeDatePicker}
        >
          <View style={{
            backgroundColor: 'white',
            padding: 20,
            alignSelf: 'center',
            width: '100%', // Set a smaller width for better aesthetics
            borderRadius: 0,
            elevation: 5,
            shadowColor: 'black',
            shadowOpacity: 0.25,
            shadowOffset: { width: 0, height: 4 },
            shadowRadius: 3.5,
          }}>
            <CalendarPicker
              initialView='months'
              selectedDayColor={nowTheme.COLORS.ACTIVE}
              onDateChange={onDateChange}
              disabledDates={true}
              selectedStartDate={selectedDate}
              // Ensure it only allows month selection
              onMonthChange={onDateChange}
              // You might also want to disable days
              enableRangeSelection={false}
              allowBackwardRangeSelect={false}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
