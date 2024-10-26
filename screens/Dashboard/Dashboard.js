import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { } from 'react-native';
import { Block, theme } from "galio-framework";
import renderTransactions from "./components";
import Theme from "../../constants/Theme";

const { width } = Dimensions.get("screen");

class Dashboard extends React.Component {
  render() {
    return (
      <Block style={styles.block}>
        {renderTransactions()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: Theme.COLORS.BACKGROUND,
    width: width
  },
});

export default Dashboard;
