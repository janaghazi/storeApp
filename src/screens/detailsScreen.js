import { View, Text, TouchableOpacity, ImageBackground, Button } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import styles from '../style/style';

import QuantityCounter from "../components/QuantityCounter";
import { handleAddToCart } from "../services/dbService";
import {useState} from "react"



export default function DetailsScreen({ navigation, route }) {
    const { item } = route.params;
    const [quantity, setQuantity] = useState(1);


    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={{ uri: item.image }}
                style={styles.detailsImage}
            >
                <View style={styles.itemIcons}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerCard}>
                        <AntDesign name="arrowleft" size={35} color="#1b4257" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerCard}>
                        <MaterialIcons name="cancel" size={35} color="#1b4257" />
                    </TouchableOpacity>
                </View>
            </ImageBackground>


            <View style={styles.detailsCard}>

                <View>
                    <Text style={styles.detailsTitle}>{item.title}</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: "space-between"}}>

                    <View style={styles.priceContainer}>
                        <Text style={styles.priceText}> ${item.price}</Text>
                    </View>

                    <QuantityCounter
                        quantity={quantity}
                        setQuantity={setQuantity}
                        min={1}
                    />

                </View>

                <Text style={styles.colorText}>
                    Color
                </Text>
                <Text style={[styles.itemDescription, { padding: 10, textTransform: 'uppercase' }]}>
                    {item.description}
                </Text>

                <View style={{ alignSelf: "center" }}>

                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={async () => {
                            await handleAddToCart(item.id, quantity),
                                setQuantity(1)
                        }}
                    >
                        <Text
                            style={styles.buttonText}>
                            ADD TO CART
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>


        </View >
    );
}

