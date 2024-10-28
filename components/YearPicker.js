import React, { useContext, useState } from 'react';
import { Picker } from 'react-native';
import { years } from '../constants/years';
import DataContext from '../api/DataContext';

const YearPicker = () => {
  const { data, setData } = useContext(DataContext);
  const [selectedYear, setSelectedYear] = useState(data.year);


  const handleYearChange = (value) => {
    setSelectedYear(value);
    setData({ ...data, year: value });
  };

  return (
    <Picker
      style={{ height: 50, width: 150 }}
      selectedValue={selectedYear}
      onValueChange={handleYearChange}
    >
      {years.map((item, index) => (
        <Picker.Item key={index} label={item} value={item} />
      ))}
    </Picker>
  );
};

export default YearPicker;
