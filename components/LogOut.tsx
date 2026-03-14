import React from "react";
import { TouchableOpacity, Text } from "react-native";

interface Props {
  onPress: () => void;
}

export default function LogoutButton({ onPress }: Props) {
  return (
    <TouchableOpacity
      className="bg-red-500 py-4 rounded-lg"
      onPress={onPress}
    >
      <Text className="text-white text-center font-bold text-base">
        Cerrar Sesión
      </Text>
    </TouchableOpacity>
  );
}