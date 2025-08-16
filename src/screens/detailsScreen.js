import { View, Text, TouchableOpacity, ImageBackground,Button } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import styles from '../style/style';


export default function DetailsScreen({ navigation, route }) {
    const { item } = route.params;

    return (
        <View>
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

                <View style={{ flexDirection: 'row' }}>

                    <View style={styles.priceContainer}>
                        <Text style={styles.priceText}> ${item.price}</Text>
                    </View>

                    <View style={styles.countContainer}>
                        <Text>count will be here</Text>
                    </View>

                </View>
                <Text>
                    Color
                </Text>
                <Text>
                    {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut */}
                    {item.description}
                </Text>

                <Button
                title='ADD TO CART'
                >
                    
                </Button>

            </View>
        </View>
    );
}
