import { ImageBackground, View, Text } from "react-native";
// import {Ionicons} from "@expo/vector-icons"
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from "./../style/style";

function ItemCard() {

    return (
        <View style={styles.itemCard}>
            <ImageBackground
                style={styles.itemImage}
                source={{ uri: "https://img.freepik.com/premium-photo/modern-minimalist-night-stand-with-decoration_23-2148238557.jpg" }}
                resizeMode="cover"
                borderRadius={40}
            >
                <View style={styles.itemIcons}>
                    <View style={styles.shoppingIconCircle}>
                        {/* shopping icon */}
                        <AntDesign name="shoppingcart" size={24} color="white" />
                    </View>
                    {/* icon */}
                    <AntDesign name="hearto" size={24} color="blue" />
                </View>
                <View style={styles.itemNameContainer}>
                    <Text style={styles.itemName}>DESC</Text>
                </View>
            </ImageBackground>

            <View style={styles.itemDetails}>
                {/* price of item */}
                <Text style={styles.itemPrice}>
                    $42
                </Text>
                {/* description of item */}
                <Text style={styles.itemDescription}>
                    Lorem ipsum dolor sit amet
                </Text>
            </View>

        </View>


    );
}


export default ItemCard;