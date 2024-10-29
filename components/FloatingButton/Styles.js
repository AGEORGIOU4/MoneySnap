import { StyleSheet } from 'react-native';
import { theme } from 'galio-framework';


export const styles = StyleSheet.create({
  input: {
    fontSize: 16, // Set desired font size here
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
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
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
    color: '#333',
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
  dropdownContainer: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
  },
  dropdown: {
    width: '100%',
    height: 40,
  },
  button: {
    width: 290,
    height: 40,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  badgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 10,
  },
  badge: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    margin: 5,
  },
  badgeText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});