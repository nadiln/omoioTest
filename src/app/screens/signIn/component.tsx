import {Alert, Button, Text, View} from 'react-native';

import Container from './container';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import styles from './style.js';

interface Props {
  email?: string;
  password?: string;
  onEmailTextChange?: (value: string) => void;
  onPasswordChange?: (value: string) => void;
  signIn?: () => void;
  emailHasError?: boolean;
  passwordHasError?: boolean;
}
const Login: React.FunctionComponent<Props> = ({
  email,
  password,
  onEmailTextChange,
  onPasswordChange,
  signIn,
  emailHasError,
  passwordHasError,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>SignIn</Text>
      <View style={styles.formInputContainer}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput value={email} textContentType={'emailAddress'} style={styles.textInput} onChangeText={ (value) => { onEmailTextChange(value) }} />
      </View>
      <Text style={styles.errorMessage}>{ emailHasError ? 'Please type a valid email' : ''}</Text>

      <View style={styles.formInputContainer}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput secureTextEntry={true} value={password} textContentType={'password'} style={styles.textInput} onChangeText={(value) => { onPasswordChange(value)} }/>
      </View>
      <View>
  <Text style={styles.errorMessage}>{ passwordHasError ? 'Please type a valid password' : ''}</Text>

      </View>
      <View style={styles.buttonContainer}>
        <Button title="Sign In" onPress={() => signIn()} />
      </View>
    </View>
  );
};

export default Login;
