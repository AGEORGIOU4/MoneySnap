import React, { useContext, useState } from 'react';
import { Picker } from 'react-native';
import { months } from '../constants/months';
import DataContext from '../api/DataContext';

const MonthPicker = () => {
  const { data, setData } = useContext(DataContext);
  const [selectedMonth, setSelectedMonth] = useState(data.month);


  const handleMonthChange = (value) => {
    setSelectedMonth(value);
    setData({ ...data, month: value });
  };

  return (
    <Picker
      style={{ height: 50, width: 150 }}
      selectedValue={selectedMonth}
      onValueChange={handleMonthChange}
    >
      {months.map((item, index) => (
        <Picker.Item key={index} label={item} value={item} />
      ))}
    </Picker>
  );
};

export default MonthPicker;
