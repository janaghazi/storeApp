import { View, TouchableOpacity, Text, FlatList, ImageBackground } from "react-native"
import { useNavigation } from "@react-navigation/native"
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from "../style/style";

const ItemCard = ({
    storeData
}) => {
    const navigation = useNavigation();
    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate("DetailsScreen", { item })}

        >
            <View style={styles.itemCard}>
                <ImageBackground
                    style={styles.itemImage}
                    source={{ uri: item.image }}
                    resizeMode="cover"
                    borderRadius={40}
                >
                    <View style={styles.itemIcons}>
                        <View style={styles.shoppingIconCircle}>
                            <AntDesign name="shoppingcart" size={24} color="white" />
                        </View>
                        <AntDesign name="hearto" size={24} color="blue" />
                    </View>
                    <View style={styles.itemNameContainer}>
                        <Text style={styles.itemName}>{item.id}</Text>
                    </View>
                </ImageBackground>

                <View style={styles.itemDetails}>
                    <Text style={styles.itemPrice}>
                        ${item.price}
                    </Text>
                    <Text style={styles.itemDescription}>
                        {item.title}
                    </Text>
                </View>

            </View>
        </TouchableOpacity>
    )
    return (
        <FlatList
            data={storeData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            horizontal={false}
            numColumns={2}
        />
    );

}


export default ItemCard;