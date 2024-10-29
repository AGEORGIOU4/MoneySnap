import React, { useContext, useEffect, useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Block, Button, Button as GaButton, theme } from 'galio-framework';
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles } from './Styles';
import DataContext from '../../api/DataContext';
import { CustomPicker } from '../CustomPicker';
import { transaction_accounts, transaction_categories, transaction_methods } from '../../constants/transactions';
import { nowTheme } from '../../constants';

const FloatingButton = () => {
  const { data, setData } = useContext(DataContext);

  const [modalVisible, setModalVisible] = useState(false);
  const [transaction, setTransaction] = useState({
    textInput: '',
    numberInput: '',
    date: new Date(),
    transactionType: data.selectedTab,
    category: 'Food',
    selectedName: 'Andreas',
    selectedMethod: '',
    selectedAccount: '',
  });
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    setTransaction((prev) => ({ ...prev, transactionType: data.selectedTab }));
  }, [data]);

  const handleInputChange = (field, value) => {
    setTransaction((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // Check if required fields are filled (example validation)
    if (!transaction.textInput || !transaction.numberInput) {
      alert('Please fill in all required fields.');
      return;
    }

    // Save logic here (e.g., add to the data context or local state)
    // setData((prevData) => ({
    //   ...prevData,
    //   transactions: [...prevData.transactions, transaction], // Assuming transactions is an array in your data context
    // }));

    // Reset the transaction state for new entries
    setTransaction({
      textInput: '',
      numberInput: '',
      date: new Date(),
      transactionType: data.selectedTab,
      category: 'Food',
      selectedName: 'Andreas',
      selectedMethod: '',
      selectedAccount: '',
    });

    setModalVisible(false); // Close modal after saving
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
        onPress={() => setModalVisible(true)}
      />

      <Modal animationType="fade" transparent visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Add Transaction</Text>
                <CustomPicker
                  label="User"
                  selectedValue={transaction.selectedName}
                  onValueChange={(value) => handleInputChange('selectedName', value)}
                  items={[
                    { label: 'Andreas', value: 'Andreas' },
                    { label: 'Constantina', value: 'Constantina' },
                    { label: 'Both', value: 'Both' },
                  ]}
                />
                <Text style={styles.label}>Date</Text>
                <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateInput}>
                  <Text style={{ fontSize: 16 }}>{transaction.date.toDateString()}</Text>
                </TouchableOpacity>
                {showDatePicker && (
                  <DateTimePicker
                    value={transaction.date}
                    mode="date"
                    display="spinner"
                    onChange={(event, selectedDate) => {
                      handleInputChange('date', selectedDate || transaction.date);
                      setShowDatePicker(false);
                    }}
                  />
                )}
                <CustomPicker
                  label="Transaction Type"
                  selectedValue={transaction.transactionType}
                  onValueChange={(value) => handleInputChange('transactionType', value)}
                  items={[
                    { label: 'Expenses', value: 'Expenses' },
                    { label: 'Income', value: 'Income' },
                    { label: 'Transfers', value: 'Transfers' },
                  ]}
                />
                <Text style={styles.label}>Description</Text>
                <TextInput
                  placeholder="Description"
                  value={transaction.textInput}
                  onChangeText={(value) => handleInputChange('textInput', value)}
                  style={styles.input}
                />

                <CustomPicker
                  label="Category"
                  selectedValue={transaction.category}
                  onValueChange={(value) => handleInputChange('category', value)}
                  items={transaction_categories}
                />

                <CustomPicker
                  label="Method"
                  selectedValue={transaction.selectedMethod}
                  onValueChange={(value) => handleInputChange('selectedMethod', value)}
                  items={transaction_methods}
                />

                <CustomPicker
                  label="Account"
                  selectedValue={transaction.selectedAccount}
                  onValueChange={(value) => handleInputChange('selectedAccount', value)}
                  items={transaction_accounts}
                />

                <Text style={styles.label}>Amount</Text>
                <TextInput
                  placeholder="Enter Amount"
                  value={transaction.numberInput}
                  onChangeText={(value) => handleInputChange('numberInput', value)}
                  style={styles.input}
                  keyboardType="numeric"
                />
                <Block center>
                  <Button
                    shadowless
                    style={styles.button}
                    color={nowTheme.COLORS.PRIMARY}
                    onPress={handleSave}
                  >
                    <Text
                      style={{ fontFamily: 'montserrat-bold', fontSize: 14, color: '#fff' }}
                    >
                      SAVE
                    </Text>
                  </Button>
                </Block>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default FloatingButton;
