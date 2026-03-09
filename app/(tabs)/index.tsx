import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const contacto = {
    id: '1',
    nombre: 'Juan Pérez',
    telefono: '5551234567',
    email: 'juan@email.com',
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.boton}
        onPress={() =>
          router.push({
            pathname: `/contact/ContactProfileScreen`,
            params: contacto,
          })
        }
      >
        <Text style={styles.textoBoton}>Abrir perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
  },

  boton: {
    backgroundColor: '#FDB813',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },

  textoBoton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A1A1A',
    textAlign: 'center',
  },
});