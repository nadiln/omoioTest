import {Alert} from 'react-native';
import Login from './component';
import React from 'react';

// import { StyleSheet, ActivityIndicator, View, Text, Alert } from 'react-native';

interface Props {}

interface State {}

class Container extends React.Component<Props, State> {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Login />
    );
  }
}

export default Container;
