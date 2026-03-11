import ContactProfile from '@/components/ContactProfile';
import { useLocalSearchParams } from 'expo-router';

export default function ContactProfileScreen() {
    const { id, name, phone, email, empresa } = useLocalSearchParams();

    return (
        <ContactProfile
            id={id as string}
            name={name as string}
            phone={phone as string}
            email={email as string}
            empresa={empresa as string}
        />
    );
}