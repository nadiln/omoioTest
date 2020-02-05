import {Alert, Button, Text, View} from 'react-native';

import Container from './container';
import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import styles from './style.js';

interface Props {}

const Login: React.FunctionComponent<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>SignIn</Text>
      <View style={styles.formInputContainer}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
      style={styles.textInput}
    />
      </View>
      <View style={styles.formInputContainer}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
      style={styles.textInput}
    />
      </View>
      <View style={styles.buttonContainer}>
       <Button
          title="Sign In"
          onPress={ () => Alert.alert("SignIn")}
/>
          </View>
    </View>
  );
};

export default Login;
