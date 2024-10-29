const currentYear = new Date().getFullYear(); // Get the current year
export const years = Array.from({ length: 5 }, (_, i) => (currentYear - 4 + i).toString());
