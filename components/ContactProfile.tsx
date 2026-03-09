import { router } from 'expo-router';
import React from 'react';
import {
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

type Props = {
    id: string;
    nombre: string;
    telefono: string;
    email: string;
};

export default function ContactProfile({ nombre, telefono, email }: Props) {

    const llamarContacto = () => {
        Linking.openURL(`tel:${telefono}`);
    };

    const enviarEmail = () => {
        Linking.openURL(`mailto:${email}`);
    };

    return (
        <View style={styles.container}>
        <View style={styles.avatarGrande}>
            <Text style={styles.inicialesGrandes}>
            {nombre.split(' ').map(n => n[0]).join('')}
            </Text>
        </View>

        <Text style={styles.nombre}>{nombre}</Text>

        <View style={styles.tarjetaInfo}>
            <Text style={styles.etiqueta}>Teléfono</Text>
            <Text style={styles.valor}>{telefono}</Text>
        </View>

        <View style={styles.tarjetaInfo}>
            <Text style={styles.etiqueta}>Email</Text>
            <Text style={styles.valor}>{email}</Text>
        </View>

        <TouchableOpacity style={styles.botonPrimario} onPress={llamarContacto}>
            <Text style={styles.textoBoton}>Llamar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botonSecundario} onPress={enviarEmail}>
            <Text style={styles.textoBotonSecundario}>Enviar Email</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.botonRegresar}
            onPress={() => router.back()}
        >
            <Text style={styles.textoBotonRegresar}>← Regresar</Text>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 20,
    },

    avatarGrande: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#FDB813',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 40,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5,
    },

    inicialesGrandes: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#1A1A1A',
    },

    nombre: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 25,
        color: '#1A1A1A',
    },

    tarjetaInfo: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },

    etiqueta: {
        fontSize: 14,
        color: '#4A4A4A',
        marginBottom: 5,
    },

    valor: {
        fontSize: 18,
        color: '#1A1A1A',
        fontWeight: '500',
    },

    botonPrimario: {
        backgroundColor: '#FDB813',
        paddingVertical: 15,
        borderRadius: 8,
        marginTop: 20,
    },

    textoBoton: {
        color: '#1A1A1A',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    botonSecundario: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 15,
        borderRadius: 8,
        marginTop: 10,
        borderWidth: 2,
        borderColor: '#FDB813',
    },

    textoBotonSecundario: {
        color: '#1A1A1A',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    botonRegresar: {
        backgroundColor: '#4A4A4A',
        paddingVertical: 15,
        borderRadius: 8,
        marginTop: 15,
    },

    textoBotonRegresar: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});