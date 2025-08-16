import styles from "../style/style"
import { View, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';


function HeaderCard() {
    return (
        <View style = {styles.headerCard}>
            <AntDesign name="arrowleft" size={35} color="#1b4257" />
            <Text style = {styles.headerTitle}>
                Furniture
            </Text>
            <AntDesign name="shoppingcart" size={35} color="#012785" />

        </View>
    );
}


export default HeaderCard;