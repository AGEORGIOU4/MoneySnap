import React from 'react';
import { Block } from "galio-framework";
import Tabs from "../../../components/Tabs";
const tab_options = {
  dashboard: [
    { id: 'expenses', title: 'Expenses' },
    { id: 'income', title: 'Income' },
  ],
};

export const CTabs = ({ onChange }) => {
  const tabs = tab_options.dashboard;
  const defaultTab = tabs[0]?.id;

  return (
    <Block style={styles.tabs}>
      <Tabs
        data={tabs}
        initialIndex={defaultTab}
        onChange={(id) => onChange(id)}
      />

    </Block>
  );
};

const styles = {
  tabs: {
    marginTop: 10,
    backgroundColor: '#f5f5f5',
  },
};
