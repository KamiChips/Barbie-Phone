import React, { useState } from "react";
import { mockContacts } from "@/utils/mocks";
import { 
  View, 
  FlatList, 
  Text, 
  StatusBar, 
  SafeAreaView, 
  TextInput, 
  StyleSheet 
} from "react-native";
import { Stack } from "expo-router";

interface Contacto {
  id: number;
  name: string;
  phone: string;
  email: string;
  empresa: string;
}

interface ContactoItemProps {
  item: Contacto;
}

const ContactoItem = React.memo(({ item }: ContactoItemProps) => (
  <View style={styles.itemContainer}>
    {/* Avatar / Iniciales */}
    <View style={styles.avatar}>
      <Text style={styles.avatarText}>
        {item.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
      </Text>
    </View>

    {/* Información */}
    <View style={styles.infoContainer}>
      <Text style={styles.nameText}>{item.name}</Text>
      <Text style={styles.empresaText}>{item.empresa}</Text>
      <Text style={styles.detailText}>{item.phone}</Text>
      <Text style={styles.detailText}>{item.email}</Text>
    </View>
  </View>
));

export default function ContactList() {
  const [busqueda, setBusqueda] = useState("");

  const contactosFiltrados = mockContacts.filter(contacto => {
    const termino = busqueda.toLowerCase();
    return (
      contacto.name.toLowerCase().includes(termino) ||
      contacto.empresa.toLowerCase().includes(termino) ||
      contacto.email.toLowerCase().includes(termino)
    );
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ title: ' Mis Contactos' }} />

      <StatusBar barStyle="dark-content" />
      {/* Buscador */}
      <View style={styles.searchSection}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.input}
          placeholder="Buscar contacto..."
          value={busqueda}
          onChangeText={setBusqueda}
        />
      </View>

      {/* Lista */}
      <FlatList
        data={contactosFiltrados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ContactoItem item={item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
       
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>🔍</Text>
            <Text style={styles.emptyText}>
              {busqueda ? `No se encontraron contactos con "${busqueda}"` : "No hay contactos en la lista"}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f2f4', 
    paddingTop: 24,
  },
  header: {
    backgroundColor: '#ff69b4',
    padding: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', 
  },
  searchSection: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginVertical: 16,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#fffafd',
    padding: 16,
    marginHorizontal: 16,
    alignItems: 'center',
    borderRadius: 8,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f2b1d2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  avatarText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#910d4f',
  },
  infoContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#57002b',
    marginBottom: 4,
  },
  empresaText: {
    fontSize: 14,
    color: '#910d4f',
    marginBottom: 4,
  },
  detailText: {
    fontSize: 12,
    color: '#a38c98',
  },
  separator: {
    height: 1,
    marginHorizontal: 16,
    marginVertical: 4,
  },
  listHeader: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: '#F3F4F6',
  },
  listHeaderText: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 48,
  },
  emptyIcon: {
    fontSize: 40,
    marginBottom: 8,
  },
  emptyText: {
    color: '#9CA3AF',
    fontSize: 16,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});