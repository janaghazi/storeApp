import { ActivityIndicator, View, Text } from "react-native";
import { useEffect, useState } from "react";
import ItemCard from '../components/itemCard';
import HeaderCard from '../components/HeaderCard';
import styles from "../style/style"

export default function HomeScreen() {
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null)

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {
        const storeURL = "https://fakestoreapi.com/products/?sort=acd"
        fetch(storeURL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Something went wrong");
                }
                return response.json();
            })
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                setError(error.message)
                setIsLoading(false)
            }
            )
            .finally(() => setIsLoading(false));
    }

    return (
        <View>
            {isLoading ? (
                <ActivityIndicator color="red" size="large" />
            ) : error ? <Text style={styles.errMsg}>{error}</Text> :
                (
                    <View>
                        <HeaderCard />
                        <ItemCard
                            storeData={products}
                        />
                    </View>
                )}
        </View>
    );
}