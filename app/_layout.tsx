import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#E0218A", // Barbie pink
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="login"
        options={{
          title: "Iniciar Sesión",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="home"
        options={{
          title: "Inicio",
          headerBackVisible: false,
        }}
      />
    </Stack>
  );
}