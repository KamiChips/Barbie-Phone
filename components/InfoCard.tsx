import { View, Text } from "react-native";

export default function InfoCard() {
  return (
    <View className="bg-white p-8 rounded-2xl items-center border border-pink-200 mb-8 shadow-sm">

      <Text className="text-6xl mb-4">
        💖
      </Text>

      <Text className="text-xl font-bold text-pink-600 text-center mb-2">
        Has iniciado sesión correctamente
      </Text>

      <Text className="text-gray-500 text-center leading-6">
        Esta es tu pantalla principal. Nota que NO puedes regresar
        a la pantalla de login usando el botón de retroceso.
      </Text>

    </View>
  );
}