import { View, Text, TouchableOpacity, ImageBackground, Button } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import styles from '../style/style';

import QuantityCounter from "../components/QuantityCounter";


export default function DetailsScreen({ navigation, route }) {
    const { item } = route.params;

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

                <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>

                    <View style={styles.priceContainer}>
                        <Text style={styles.priceText}> ${item.price}</Text>
                    </View>

                    <QuantityCounter
                        initial={1}
                        min={1}
                        max={10}
                        onChange={(val) => {
                            console.log("Quantity changed to:", val);
                        }}
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
                    >
                        <Text style={styles.buttonText}>
                            ADD TO CART
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

            
        </View >
    );
}

