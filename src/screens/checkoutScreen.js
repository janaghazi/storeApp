import { View, Text, FlatList, Dimensions, Image } from "react-native";
import HeaderCard from "../components/HeaderCard";
import { useEffect, useState, useContext } from "react";
import { getCartItems, getCartTotal, clearCart } from "../services/dbService";
import styles from "../style/style";
import Icon from "react-native-vector-icons/Ionicons";
import Svg, { Path } from "react-native-svg";
import { LanguageContext } from "../context/LanguageContext";


export default function CheckOutScreen({ route }) {
    const { t } = useContext(LanguageContext);

    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        async function loadCart() {
            const items = await getCartItems();
            const total = await getCartTotal();
            setCartItems(items);
            setCartTotal(total);
        }
        loadCart();
    }, []);

    return (
        <View>
            <View style={{ padding: 20 }}>
                <HeaderCard headerTitle= {t("checkout")} isHome={false} />

                <View style={{
                    alignItems: "center",
                    alignSelf: "center",
                    backgroundColor: "#FF6557",
                    width: 80,
                    height: 80,
                    borderRadius: 40,
                    elevation: 5
                }}>
                    <Text style={{ fontSize: 60, color: "white" }}>↓</Text>
                </View>


                <FlatList
                    data={cartItems}
                    keyExtractor={(item) => item.productId.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.checkoutContainer}>

                            <View style={styles.titleView}>
                                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.checkoutText}>
                                    {item.title}
                                </Text>
                            </View>

                            <Text style={[styles.quantityCheckout, styles.checkoutText]}
                            >X {item.quantity}
                            </Text>

                            <Text style={[styles.priceCheckout, styles.checkoutText]}>${item.price}</Text>
                        </View>
                    )}
                    ListEmptyComponent={<Text>No items in cart</Text>}
                />
                <Icon
                    name="trash-outline"
                    size={28}
                    color="red"
                    style={{ alignSelf: "flex-end", padding: 10 }}
                    onPress={async () => {
                        await clearCart();
                        const items = await getCartItems();
                        const total = await getCartTotal();
                        setCartItems(items);
                        setCartTotal(total);
                    }}
                />

                <Text
                    numberOfLines={1} style={{ margin: 10 }}>
                    _____________________________________________________
                </Text>

                <View style={styles.delieveryCard}>
                    <Text style={styles.checkoutText}>DELIEVERY: </Text>
                    <Text
                        style={styles.checkoutText}>
                        $18
                    </Text>
                </View>

                <View style={styles.delieveryCard}>
                    <Text style={styles.totalTitle}>
                        TOTAL:
                    </Text>
                    <Text style={styles.totalPrice}>
                        ${cartTotal}
                    </Text>
                </View>

            </View >


            <View
                style={{
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 0

                }}
            >
                <Svg
                    height={200}
                    width={Dimensions.get('screen').width}
                    viewBox="0 0 1440 320"
                >
                    <Path
                        fill='#002881'
                        d="M0,96L18.5,122.7C36.9,149,74,203,111,197.3C147.7,192,185,128,222,96C258.5,64,295,64,332,58.7C369.2,53,406,43,443,85.3C480,128,517,224,554,234.7C590.8,245,628,171,665,122.7C701.5,75,738,53,775,53.3C812.3,53,849,75,886,117.3C923.1,160,960,224,997,218.7C1033.8,213,1071,139,1108,122.7C1144.6,107,1182,149,1218,170.7C1255.4,192,1292,192,1329,170.7C1366.2,149,1403,107,1422,85.3L1440,64L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"

                    />
                </Svg>

                <Image
                    source={require('../../assets/thanku.png')}
                    width={Dimensions.get('screen').width}
                    height={100}
                    resizeMode="contain"
                />

            </View>


        </View >


    );
}

