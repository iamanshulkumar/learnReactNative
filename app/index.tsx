import { View, Text } from 'react-native'
import MyButton from '@/components/MyButton'
import { useRouter } from 'expo-router';

const index = () => {
    const router = useRouter();
    const onContinue = () => {
        router.navigate("/login");
    }
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <MyButton title={"Continue"} onPress={onContinue} />
        </View>
    )
}

export default index