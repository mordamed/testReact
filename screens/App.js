import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function LoginPage() {
  const [username, setUsername] = useState('');


  function handleUsernameChange(text) {
    setUsername(text);
  }

  function handleSubmit() {
    // Your authentication logic goes here
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur WIB</Text>
      <Text style={styles.subtitle}>Insérez votre pseudonyme</Text>
      <TextInput
        style={styles.input}
        placeholder="Pseudo"
        value={username}
        onChangeText={handleUsernameChange}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Lancer la carte</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
