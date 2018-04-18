import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Logo extends Component<{}> {

	render() {
		return (
			<View style={styles.container}>
          <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <Ionicons name='ios-log-in' size={100} color='white' />
          <TextInput
              style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Email"
              placeholderTextColor="#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
          />
          <TextInput
              style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Password"
              placeholderTextColor="#ffffff"
              secureTextEntry

          />
           <TouchableOpacity
           style={styles.button}
           onPress={() => this.props.navigation.navigate('Home')}
           >
             <Text style={styles.buttonText}>Login</Text>
           </TouchableOpacity>
           </KeyboardAvoidingView>
  </View>
);
	}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6D4C41',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10
  },
  button: {
    width: 300,
    backgroundColor: '#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  }

});
