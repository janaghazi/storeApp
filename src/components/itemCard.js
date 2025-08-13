import { ImageBackground, View } from "react-native";
// import {Ionicons} from "@expo/vector-icons"
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from "../styles/style.js";
function itemCard() {

    return (
        <View>
            <ImageBackground
                style={styles.itemImage}
                source={uri = "https://img.freepik.com/premium-photo/modern-minimalist-night-stand-with-decoration_23-2148238557.jpg"}
            >
                <View style= {styles.itemIcons}>
                    {/* shopping icon */}
                    <AntDesign name="shoppingcart" size={24} color="white" />
                    {/* icon */}
                    <AntDesign name="hearto" size={24} color="blue" />
                </View>

                <Text style={styles.itemName}>DESC </Text>
            </ImageBackground>

            <View style = {styles.itemDetails}>
                {/* price of item */}
                <Text>
                    $42
                </Text>
                {/* description of item */}
                <Text>
                    Lorem ipsum dolor sit amet
                </Text>
            </View>

        </View>
    );
}
