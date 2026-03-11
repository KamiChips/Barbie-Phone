import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router'; 

export default function LoginScreen() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); 

  const manejarLogin = () => {
    if (usuario.trim() === '' || password.trim() === '') {
      Alert.alert('¡Ups!', 'Por favor ingresa tu usuario y contraseña, muñeca.');
      return;
    }

    if (usuario === 'Barbie' && password === 'MojoDojoCasaHouse') {
      router.replace('/(tabs)'); 
    } else {
      Alert.alert('Error, usuario o contraseña incorrectos.');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Barbieland</Text>
          <Text style={styles.subtitle}>Se toda una divaza como Barbie y devora</Text>

          <TextInput
            style={styles.input}
            placeholder="Usuario"
            placeholderTextColor="#f2b1d2"
            value={usuario}
            onChangeText={setUsuario}
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="#f2b1d2"
            value={password}
            onChangeText={setPassword}
            secureTextEntry 
          />

          <TouchableOpacity 
            style={styles.button}
            onPress={manejarLogin}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.hintText}>usuario: Barbie</Text>
          <Text style={styles.hintText}>password: MojoDojoCasaHouse</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f2f4', 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    backgroundColor: '#fffafd',
    padding: 24,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#f2b1d2',
    elevation: 4,
    shadowColor: '#910d4f',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ff69b4',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#910d4f',
    textAlign: 'center',
    marginBottom: 32,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
    color: '#57002b',
    borderWidth: 1,
    borderColor: '#f2b1d2',
  },
  button: {
    backgroundColor: '#ff69b4',
    paddingVertical: 16,
    borderRadius: 8,
    marginTop: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fffafd',
    fontSize: 18,
    fontWeight: 'bold',
  },
  hintText: {
    textAlign: 'center',
    marginTop: 24,
    color: '#a38c98',
    fontSize: 14,
  },
});