import React, { useContext, useState } from "react";
import { Block, } from "galio-framework";
import { CTabs } from "./components/CTabs";
import { CContent } from "./components/CContent";
import { styles } from "./styles/Styles";
import { View, } from 'react-native';
import MonthPicker from "../../components/MonthPicker";
import YearPicker from "../../components/YearPicker";
import DataContext from "../../api/DataContext";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState('Expenses');
  const { data, setData } = useContext(DataContext);

  console.log(data)
  const handleTabChange = (value) => {
    setSelectedTab(value)
    setData({ ...data, selectedTab: value });
  };

  return (
    <DataContext.Provider value={{ data, setData }}>
      <Block style={styles.block}>
        <CTabs selectedTab={selectedTab} onChange={handleTabChange} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10 }}>
          <MonthPicker />
          <YearPicker />
        </View>
        <CContent selectedTab={selectedTab} />
      </Block>
    </DataContext.Provider>
  );

}



export default Dashboard;
