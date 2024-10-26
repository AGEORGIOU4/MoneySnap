import React from 'react';
import { FlatList, View, Text, StyleSheet, Image } from 'react-native';

// Sample JSON data for transactions
const transactions = [
  { id: '1', date: '2024-10-01', description: 'Groceries', account: 'Visa', amount: -50, owner: 'John', photo: 'https://ui-avatars.com/api/?name=Andreas+Georgiou&background=0D8ABC&color=fff' },
  { id: '2', date: '2024-10-02', description: 'Gas', account: 'MasterCard', amount: -20, owner: 'John', photo: 'https://ui-avatars.com/api/?name=COnstantina+Hadjianastasi&background=9b15e2&color=fff' },
  { id: '3', date: '2024-10-05', description: 'Salary', account: 'Bank Transfer', amount: 200, owner: 'John', photo: 'https://via.placeholder.com/40' },
  { id: '4', date: '2024-10-10', description: 'Coffee', account: 'Cash', amount: -15, owner: 'Jane', photo: 'https://via.placeholder.com/40' },
  { id: '5', date: '2024-10-15', description: 'Utility Bill', account: 'Direct Debit', amount: -100, owner: 'John', photo: 'https://via.placeholder.com/40' },
];

const renderTransaction = ({ item }) => (
  <View>
    <Text style={styles.date}>{item.date}</Text>
    <View style={styles.card}>
      <Image source={{ uri: item.photo }} style={styles.photo} />
      <View style={styles.details}>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.account}>{item.account}</Text>
      </View>
      <Text style={styles.amount}>{item.amount < 0 ? '-' : '+'}€{Math.abs(item.amount)}</Text>
    </View>
  </View>
);

const RenderTransactions = () => {
  return (
    <FlatList
      data={transactions}
      renderItem={renderTransaction}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.transactionList}
    />
  );
};

const styles = StyleSheet.create({
  transactionList: {
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginVertical: 5,
    borderRadius: 15,
    backgroundColor: '#fff'
  },
  photo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  date: {
    fontSize: 14,
    padding: 10,
    color: '#666',
    fontFamily: 'montserrat-regular',
    textAlign: 'right'
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'montserrat-regular',
  },
  account: {
    fontSize: 14,
    color: '#666',
  },
  amount: {
    fontSize: 16,
    color: '#000',
  },
});

export default RenderTransactions;
