// FloatingButton.js
import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Block, Button as GaButton, theme } from 'galio-framework';
// import DateTimePicker from '@react-native-community/datetimepicker';

const FloatingButton = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [numberInput, setNumberInput] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handlePress = () => {
    console.log("Floating button clicked"); // Debugging
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <>
      <GaButton
        round
        onlyIcon
        shadowless
        icon="plus"
        iconFamily="Font-Awesome"
        iconColor={theme.COLORS.WHITE}
        iconSize={theme.SIZES.BASE * 1.625}
        color={theme.COLORS.BASE}
        style={styles.floatingButton}
        onPress={handlePress}
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Add New Item</Text>

              {/* Text Input */}
              <TextInput
                placeholder="Enter Text"
                value={textInput}
                onChangeText={setTextInput}
                style={styles.input}
              />

              {/* Number Input */}
              <TextInput
                placeholder="Enter Number"
                value={numberInput}
                onChangeText={setNumberInput}
                style={styles.input}
                keyboardType="numeric"
              />

              {/* Date Input */}
              {/* <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateInput}>
                <Text>{date.toDateString()}</Text>
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  value={date}
                  mode="date"
                  display="default"
                  onChange={handleDateChange}
                />
              )} */}

              {/* Multiline Text Area */}
              <TextInput
                placeholder="Enter Description"
                style={[styles.input, styles.textArea]}
                multiline={true}
                numberOfLines={4}
              />

              <TouchableOpacity onPress={closeModal} style={styles.modalButton}>
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    elevation: 5,
    zIndex: 100,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  dateInput: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'center',
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  modalButton: {
    marginTop: 15,
    backgroundColor: theme.COLORS.BASE,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default FloatingButton;
