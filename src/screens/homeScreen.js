import { ActivityIndicator, View } from "react-native";
import ItemCard from '../components/itemCard';
import HeaderCard from '../components/HeaderCard';
import { useEffect, useState } from "react";


const storeURL = "https://fakestoreapi.com/products/?sort=acd"

export default function HomeScreen() {
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(storeURL)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => alert(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <View>
            {isLoading ? (
                <ActivityIndicator/>
            ) : (
                <View>
                    <HeaderCard />
                    <ItemCard
                        storeData={data}
                    />
                </View>
            )}
        </View>
    );
}