import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: 300,
    flexDirection: 'column',
 },
  loginText: {
    fontSize: 14,
    height: 100,
  },
  formInputContainer: {
    flexDirection: 'row',
    padding: 10,
    height: 50,
    // backgroundColor: 'red',
    borderBottomColor: 'blue',
    marginBottom: 10,

  },
  inputLabel: {
    flex: 2,
    width:60,
    alignItems: 'flex-start',
    height: 40,
  },
  textInput: {
    width: 150,
    height: 40,
    // borderColor: 'gray',
    borderWidth: 1,
    flex: 5,
    alignItems: 'flex-end'
  },
  buttonContainer: {
    height: 50,
    alignSelf: 'flex-end',
    padding: 10,
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'flex-end',
    },
});
