// FloatingButton.js
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Block, Button as GaButton, theme } from 'galio-framework';

const FloatingButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.floatingButton}>
      <Block flex middle right>
        <GaButton
          round
          onlyIcon
          shadowless
          icon="plus" // Change to the plus sign icon
          iconFamily="Font-Awesome" // Ensure the correct icon family is specified
          iconColor={theme.COLORS.WHITE}
          iconSize={theme.SIZES.BASE * 1.625}
          color={theme.COLORS.FACEBOOK} // You can change this color if needed
          style={styles.social}
        />
      </Block>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 20, // Adjust as needed
    right: 20, // Adjust as needed
    elevation: 5, // For Android shadow
    zIndex: 100, // Ensure it is above other content
  },
  social: {
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: 'center'
  },
});

export default FloatingButton;
