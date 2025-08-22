import styles from "../style/style"
import { View, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native"
import Feather from '@expo/vector-icons/Feather';


function HeaderCard({ headerTitle, isHome }) {
    // const navigation 
    const navigation = useNavigation();


    return (
        <View style={styles.headerCard}>

            if(isHome){
                <Feather name="more-vertical" size={35} color="#1b4257"
                onPress={() => navigation.navigate("InfoScreen")} />
            }else{
                <AntDesign name="arrowleft" size={35} color="#1b4257"
                    onPress={() => navigation.navigate("HomeScreen")}

                />
            }
            <Text style={styles.headerTitle}>
                {headerTitle}
            </Text>

            <AntDesign
                name="shoppingcart"
                size={35} color="#012785"
                onPress={() => navigation.navigate("checkoutScreen",)}
            />

        </View>
    );
}


export default HeaderCard;