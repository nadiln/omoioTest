import {Text, View} from 'react-native';

import Container from './container';
import React from 'react';
import styles from './style.js';

interface Props {}

const Login: React.FunctionComponent<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>SignIn</Text>
    </View>
  );
};

export default Login;
