import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Picker
  } from 'react-native';

export default class Insert extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Nim: '',
      Nama: '',
      Semester: '',
      Kelas: '',
    };
  }

  InputUsers = () => {
    const { Nim } = this.state;
    const { Nama } = this.state;
    const { Semester } = this.state;
    const { Kelas } = this.state;

    fetch('http://api.ifreethink.net/z1515051060/postData.php',{
      method: 'POST',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'aplication/json'
      },
        body: JSON.stringify({
        nim: Nim,
        nama: Nama,
        semester: Semester,
        kelas: Kelas,

      })
    }).then((response) => response.json())
      .then((responseJson) => {
          Alert.alert(responseJson);
      }).catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="NIM"
          onChangeText={TextInputValue => this.setState({ Nim: TextInputValue })}
          placeholderTextColor="#9E9E9E"
        />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Nama"
          onChangeText={TextInputValue => this.setState({ Nama: TextInputValue })}
          placeholderTextColor="#9E9E9E"
        />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Semester"
          onChangeText={TextInputValue => this.setState({ Semester: TextInputValue })}
          placeholderTextColor="#9E9E9E"
        />

        <Picker
          selectedValue={this.state.Kelas}
          style={{
            width: 250,
            borderRadius: 25,
            paddingHorizontal: 13,
            marginVertical: 5,
            padding: 5 }}
          onValueChange={itemValue => this.setState({ Kelas: itemValue })}
        >
          <Picker.Item label="-- Pilih Kelas ---" />
          <Picker.Item label="A" value="A" />
          <Picker.Item label="B" value="B" />
          <Picker.Item label="C" value="C" />
          <Picker.Item label="D" value="D" />
        </Picker>

        <TouchableOpacity activeopacity={4} style={styles.button} onPress={this.InputUsers}>
          <Text style={styles.buttonText}>{this.props.type} Tambah</Text>
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
