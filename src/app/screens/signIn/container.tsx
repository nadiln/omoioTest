import Login from './component';
import React from 'react';

// import { StyleSheet, ActivityIndicator, View, Text, Alert } from 'react-native';

interface Props {
  email?: string;
  password?: string;
}

interface State {
  email?: string;
  password?: string;
  emailHasError?: boolean;
  passwordHasError?: boolean;
}
class Container extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailHasError: false,
      passwordHasError: false,
    };
  }
  onEmailTextChange = (value: string): void => {
    this.setState({
      email: value,
    });
    console.log(value);
  };
  onPasswordChange = (value: string): void => {
    this.setState({
      password: value,
    });
  };
  validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  };
  signIn = () => {
    if(this.state.email != ''){
      let emailErrorState= this.validateEmail(this.state.email);
      // Alert.alert(emailErrorState+ ' state email err');
      this.setState({
        emailHasError: !emailErrorState,
      });
    }else{
      this.setState({
        emailHasError: true,
      })

    }
    if(this.state.password == ''){
      this.setState({
        passwordHasError: true,
      })
    }

  }
  render() {
    return (
      <Login
      email={this.state.email}
      password={this.state.password}
      onEmailTextChange={this.onEmailTextChange}
      onPasswordChange={this.onPasswordChange}
      signIn={this.signIn}
      emailHasError={this.state.emailHasError}
      passwordHasError={this.state.passwordHasError}

      />
    );
  }
}

export default Container;
