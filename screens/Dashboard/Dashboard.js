import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Block, theme } from "galio-framework";
import { CTabs, renderTabs } from "./components/CTabs";
import { CContent } from "./components/CContent";

const { width } = Dimensions.get("screen");

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'expenses',
    };
  }

  handleTabChange = (selectedTab) => {
    this.setState({ selectedTab });
  };

  render() {
    return (
      <Block style={styles.block}>
        <CTabs selectedTab={this.state.selectedTab} onChange={this.handleTabChange} />
        <CContent selectedTab={this.state.selectedTab} />
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: '#f5f5f5',
    width: width,
    height: "100%",
  },
  tabs: {
    marginTop: 10,
    backgroundColor: '#f5f5f5',
  },
  incomeText: {
    marginTop: 20,
    textAlign: 'center',
    color: theme.COLORS.HEADER,
    fontFamily: "montserrat-regular",
    fontSize: 16,
  },
});

export default Dashboard;
