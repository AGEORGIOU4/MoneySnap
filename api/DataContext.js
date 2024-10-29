// DataContext.js
import React, { createContext, useState } from 'react';
import { default_data_context } from './default_data';

// Create a context
const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {

  const [data, setData] = useState(default_data_context);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
