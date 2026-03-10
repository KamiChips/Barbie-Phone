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
        backgroundColor: '#FFE4F1',
        padding: 20,
    },

    avatarGrande: {
        width: 130,
        height: 130,
        borderRadius: 65,
        backgroundColor: '#FF4FA3',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 40,
        marginBottom: 20,
        shadowColor: '#FF4FA3',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 8,
    },

    inicialesGrandes: {
        fontSize: 38,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },

    nombre: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 25,
        color: '#C2185B',
    },

    tarjetaInfo: {
        backgroundColor: '#FFFFFF',
        padding: 18,
        borderRadius: 16,
        marginBottom: 15,
        borderWidth: 2,
        borderColor: '#FF9ECF',
        shadowColor: '#FF9ECF',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 4,
    },

    etiqueta: {
        fontSize: 14,
        color: '#C2185B',
        marginBottom: 5,
        fontWeight: '600',
    },

    valor: {
        fontSize: 18,
        color: '#333',
        fontWeight: '500',
    },

    botonPrimario: {
        backgroundColor: '#FF4FA3',
        paddingVertical: 16,
        borderRadius: 20,
        marginTop: 20,
        shadowColor: '#FF4FA3',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.35,
        shadowRadius: 6,
        elevation: 6,
    },

    textoBoton: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        letterSpacing: 0.5,
    },

    botonSecundario: {
        backgroundColor: '#FFF0F7',
        paddingVertical: 16,
        borderRadius: 20,
        marginTop: 10,
        borderWidth: 2,
        borderColor: '#FF4FA3',
    },

    textoBotonSecundario: {
        color: '#FF4FA3',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    botonRegresar: {
        backgroundColor: '#C2185B',
        paddingVertical: 15,
        borderRadius: 20,
        marginTop: 20,
    },

    textoBotonRegresar: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});