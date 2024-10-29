import React, { useContext, useEffect, useRef, useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Block, Button, Button as GaButton, theme } from 'galio-framework';
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles } from './Styles';
import DataContext from '../../api/DataContext';
import { CustomPicker } from '../CustomPicker';
import { transaction_accounts, transaction_categories, transaction_methods } from '../../constants/transactions';
import { nowTheme } from '../../constants';
import { getRandomColor } from '../../functions/common';

const FloatingButton = () => {
  const { data, setData } = useContext(DataContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [templateModalVisible, setTemplateModalVisible] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true); // State for collapsible section
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

  const handleButtonClick = () => {
    if (data.selectedTab == 'Expenses') {
      setTemplateModalVisible(true);
    } else {
      setModalVisible(true);
    }
  };

  const handleSkip = () => {
    setTemplateModalVisible(false);
    setModalVisible(true);
  };

  const handleInputChange = (field, value) => {
    setTransaction((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (!transaction.textInput || !transaction.numberInput) {
      alert('Please fill in all required fields.');
      return;
    }
    resetTransaction();
    setModalVisible(false);
  };

  const resetTransaction = () => {
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
  };

  const handleTemplateSelect = (category) => {
    setTransaction((prev) => ({
      ...prev,
      category,
      textInput: `${category} - `,
      numberInput: '0',
    }));
    setTemplateModalVisible(false);
    setModalVisible(true);
    setTimeout(() => descriptionInputRef.current?.focus(), 0);
  };

  const descriptionInputRef = useRef(null);

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
        onPress={handleButtonClick}
      />

      {/* Main Modal for Adding Transaction */}
      <Modal animationType="fade" transparent visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Add Transaction</Text>

                {/* Collapsible Section */}
                <TouchableOpacity onPress={() => setIsCollapsed(!isCollapsed)}>
                  <Text style={styles.collapseTitle}>{isCollapsed ? "Show Details" : "Hide Details"}</Text>
                </TouchableOpacity>
                {!isCollapsed && (
                  <>
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
                  </>
                )}

                {isCollapsed && (
                  <>
                    <Text style={styles.label}>Description</Text>
                    <TextInput
                      ref={descriptionInputRef}
                      placeholder="Description"
                      value={transaction.textInput}
                      onChangeText={(value) => handleInputChange('textInput', value)}
                      style={styles.input}
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
                      <Button shadowless style={styles.button} color={nowTheme.COLORS.PRIMARY} onPress={handleSave}>
                        <Text style={{ fontFamily: 'montserrat-bold', fontSize: 14, color: '#fff' }}>SAVE</Text>
                      </Button>
                    </Block>

                    <Block center>
                      <Button
                        shadowless
                        style={styles.button}
                        color={nowTheme.COLORS.SECONDARY}
                        onPress={() => setTemplateModalVisible(true)}
                      >
                        <Text style={{ fontFamily: 'montserrat-bold', fontSize: 14, color: '#fff' }}>USE TEMPLATE</Text>
                      </Button>
                    </Block>

                  </>
                )}

              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* Template Modal */}
      <Modal animationType="fade" transparent visible={templateModalVisible} onRequestClose={() => setTemplateModalVisible(false)}>
        <TouchableWithoutFeedback onPress={() => setTemplateModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Select a Template</Text>
                <View style={styles.badgeContainer}>
                  {transaction_categories.map((category) => (
                    <TouchableOpacity
                      key={category.value}
                      style={[styles.badge, { backgroundColor: getRandomColor() }]}
                      onPress={() => handleTemplateSelect(category.value)}
                    >
                      <Text style={styles.badgeText}>{category.label}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <Block center>
                  <Button shadowless style={styles.button} color={nowTheme.COLORS.GRAY} onPress={handleSkip}>
                    <Text style={{ fontFamily: 'montserrat-bold', fontSize: 14, color: '#fff' }}>SKIP</Text>
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
