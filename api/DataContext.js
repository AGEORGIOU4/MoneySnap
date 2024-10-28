// DataContext.js
import React, { createContext, useState } from 'react';
import { months } from '../constants/months';

// Create a context
const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
  const currentYear = new Date().getFullYear().toString();
  const currentMonth = months[new Date().getMonth()];
  const [data, setData] = useState({ year: currentYear, month: currentMonth });

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
