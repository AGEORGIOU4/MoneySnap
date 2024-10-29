const colors = [
  // '#003366', // Dark Blue
  // '#005900', // Dark Green
  // '#990000', // Dark Red
  // '#4B0082', // Dark Purple
  '#004d4d', // Dark Teal
  // '#FF8C00', // Dark Gray
];

// Function to get a random color from the predefined array
export const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};
