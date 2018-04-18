import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView
  } from 'react-native';

export default class Insert extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Nomor: '',
      Nim: '',
      Nama: '',
      Semester: '',
      Kelas: '',
    };
  }

  EditUsers = () => {
    const { Nim } = this.state;
    const { Nomor } = this.state;
    const { Nama } = this.state;
    const { Semester } = this.state;
    const { Kelas } = this.state;

    fetch('http://api.ifreethink.net/z1515051060/updateData.php',{
      method: 'POST',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'aplication/json'
      },
        body: JSON.stringify({
          nomor: Nomor,
          nim: Nim,
          nama: Nama,
          semester: Semester,
          kelas: Kelas

      })
    }).then((response) => response.json())
      .then((responseJson) => {
          Alert.alert(responseJson);
      }).catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { nomor, nim, nama, semester, kelas } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>

        <TextInput
          style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder={nim}
          onChangeText={TextInputValue => this.setState({
            Nomor: nomor,
            Nim: TextInputValue
          })}
          placeholderTextColor="#9E9E9E"
        />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder={nama}
          onChangeText={TextInputValue => this.setState({
            Nomor: nomor,
            Nama: TextInputValue
          })}
          placeholderTextColor="#9E9E9E"
        />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder={semester}
          onChangeText={TextInputValue => this.setState({
            Nomor: nomor,
            Semester: TextInputValue
          })}
          placeholderTextColor="#9E9E9E"
        />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder={kelas}
          onChangeText={TextInputValue => this.setState({
            Nomor: nomor,
            Kelas: TextInputValue
          })}
          placeholderTextColor="#9E9E9E"
        />

            <TouchableOpacity activeopacity={4} style={styles.button} onPress={this.EditUsers}>
              <Text style={styles.buttonText}>{this.props.type} Edit</Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 45,
    marginRight: 45
  },
  inputBox: {
    width: 250,
    backgroundColor: '#D7CCC8',
    borderRadius: 25,
    paddingHorizontal: 13,
    fontSize: 16,
    color: '#9E9E9E',
    marginVertical: 5,
    padding: 5
  },
  button: {
    width: 250,
    backgroundColor: '#795548',
    borderRadius: 25,
    marginVertical: 3,
    paddingVertical: 7
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center'
  }
});
