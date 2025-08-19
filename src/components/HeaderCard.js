import styles from "../style/style"
import { View, Text, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';


function HeaderCard({navigation,item}) {
    
    return (
        <View style={styles.headerCard}>
            <AntDesign name="arrowleft" size={35} color="#1b4257" />
            <Text style={styles.headerTitle}>
                FURNITURE
            </Text>

            <AntDesign
                name="shoppingcart"
                size={35} color="#012785"
                onPress={() => navigation.navigate("checkoutScreen", { item })}
            />

        </View>
    );
}


export default HeaderCard;