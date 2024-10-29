import { months } from "../constants/months";


const currentYear = new Date().getFullYear().toString();
const currentMonth = months[new Date().getMonth()];

export const default_data_context = { year: currentYear, month: currentMonth, selectedTab: 'Expenses', transactions: [] }