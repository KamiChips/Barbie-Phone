import ContactProfile from '@/components/ContactProfile';
import { useLocalSearchParams } from 'expo-router';

export default function ContactProfileScreen() {
    const { id, nombre, telefono, email } = useLocalSearchParams();

    return (
        <ContactProfile
            id={id as string}
            nombre={nombre as string}
            telefono={telefono as string}
            email={email as string}
        />
    );
}