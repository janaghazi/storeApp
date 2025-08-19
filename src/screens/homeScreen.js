import { ActivityIndicator, View, Text } from "react-native";
import { useEffect, useState } from "react";

import ItemCard from '../components/itemCard';
import HeaderCard from '../components/HeaderCard';
import DropdownComponent from "../components/DropdownComponent"

import { filterProducts } from "../functions/filterProducts";
import { getCustomHeight } from "../functions/customHeights";

import { fetchProducts } from "../services/productService";

import { dropDownListCategorys, dropDownListPriceRange } from "../constants/dropdownsItems";

import styles from "../style/style"
import { populateProducts, initDatabase } from "../services/dbService";

import { useNavigation } from "@react-navigation/native"


export default function HomeScreen() {
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null)
    const navigation = useNavigation();


    useEffect(() => {
        async function initialize() {
            console.log("Starting database initialization...");
            await initDatabase();
            console.log("Database initialized.");

            console.log("Fetching products...");
            try {
                const fetchedProducts = await fetchProducts();
                console.log("Fetched products");
                setProducts(fetchedProducts);
                console.log("Populating products...");
                await populateProducts(fetchedProducts);
                console.log("Products populated.");
            } catch (err) {
                console.error("Error during initialization:", err.message);
                setError(err.message);
            } finally {
                console.log("Setting isLoading to false.");
                setIsLoading(false);
            }
        }
        initialize();
    }, []);

    const [category, setCategory] = useState(null);
    const [priceRange, setPriceRange] = useState(null);

    const filteredProducts = filterProducts(products, category, priceRange, dropDownListCategorys, dropDownListPriceRange);
    const alternatedProducts = filteredProducts.map((item, idx) => ({
        ...item,
        customHeight: getCustomHeight(idx),
    }));


    return (
        <View style={{ backgroundColor: "white", }}>
            {isLoading ? (
                <ActivityIndicator color="red" size="large" />
            ) : error ? <Text style={styles.errMsg}>{error}</Text> :
                (
                    <View>
                        {/* shopping icon in header will navigate to checkout */}
                        <HeaderCard navigation={navigation} item={products[0]} />

                        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
                            <DropdownComponent
                                data={dropDownListCategorys}
                                value={category}
                                onChange={setCategory}
                                placeholder="Category"
                            />
                            <DropdownComponent
                                data={dropDownListPriceRange}
                                value={priceRange}
                                onChange={setPriceRange}
                                placeholder="Price Range"
                            />
                        </View>
                        {/* shopping icon in header will add the item to the cart */}
                        <ItemCard
                            storeData={alternatedProducts}
                        />
                    </View>
                )}
        </View>
    );
}