import React from "react";
import { View, Alert } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import BarbieButton from "../components/PrimaryButton";

export default function HomeScreen() {

  const { nombreUsuario } = useLocalSearchParams();

  const cerrarSesion = () => {
    Alert.alert(
      "Cerrar Sesión",
      "¿Estás seguro de que deseas salir?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Salir",
          style: "destructive",
          onPress: () => {
            router.replace("/login");
          },
        },
      ]
    );
  };

  return (
    <View className="flex-1 bg-pink-50 p-6">

      <Header nombreUsuario={(nombreUsuario as string) || "Usuario"} />

      <InfoCard />

      <BarbieButton
        title="Ver Contactos (Tarea)"
        variant="secondary"
      />

      <BarbieButton
        title="Cerrar Sesión"
        onPress={cerrarSesion}
      />

    </View>
  );
}