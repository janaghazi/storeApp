import { View, Text, FlatList } from "react-native";
import HeaderCard from "../components/HeaderCard";
import { useEffect, useState } from "react";
import { getCartItems, getCartTotal } from "../services/dbService";

export default function CheckOutScreen({ route }) {
    const { item } = route.params;


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
        <View style={{ padding: 20 }}>
            <HeaderCard />

            <Text style={{ fontSize: 18, fontWeight: "bold", marginVertical: 10 }}>
                Checkout Screen
            </Text>
            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.productId.toString()}
                renderItem={({ item }) => (
                    <View style={{ marginBottom: 10 }}>
                        <Text>{item.title}</Text>
                        <Text>Quantity: {item.quantity}</Text>
                        <Text>Price: ${item.price}</Text>
                    </View>
                )}
                ListEmptyComponent={<Text>No items in cart</Text>}
            />

            <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 20 }}>
                Total: ${cartTotal}
            </Text>
        </View>
    );
}
