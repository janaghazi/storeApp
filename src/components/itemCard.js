import { View, TouchableOpacity, Text, FlatList, ImageBackground } from "react-native"
import { useNavigation } from "@react-navigation/native"
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from "../style/style";
import {handleAddToCart} from "../services/dbService"


const ItemCard = ({
    storeData
}) => {
    const navigation = useNavigation();
    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate("DetailsScreen", { item })}
        >
            <View style={[styles.itemCard, { height: item.customHeight }]}>
                <ImageBackground
                    style={[styles.itemImage, { height: item.customHeight - 100 }]}
                    source={{ uri: item.image }}
                    resizeMode="cover"
                    borderRadius={40}
                >
                    <View style={styles.itemIcons}>
                        <View style={styles.shoppingIconCircle}>
                            <AntDesign name="shoppingcart" size={24} color="white" onPress={() => handleAddToCart(item.id)} />
                        </View>
                        <AntDesign name="hearto" size={24} color="blue" />
                    </View>
                    <View style={styles.itemNameContainer}>
                        <Text style={styles.itemName} numberOfLines={1}>{item.title}</Text>
                    </View>
                </ImageBackground>

                <View style={styles.itemDetails} >
                    <Text style={styles.itemPrice} >
                        ${item.price}
                    </Text>
                    <Text style={styles.itemDescription} numberOfLines={2}>
                        {item.description}
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


