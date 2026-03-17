import { View, Text } from "react-native";

interface Props {
  nombreUsuario: string;
}

export default function Header({ nombreUsuario }: Props) {
  return (
    <View className="mt-6 mb-10">
      <Text className="text-3xl font-bold text-pink-600">
        ¡Bienvenido!
      </Text>

      <Text className="text-lg text-pink-400 mt-1">
        {nombreUsuario}
      </Text>
    </View>
  );
}