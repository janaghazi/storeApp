import { ActivityIndicator, View, Text } from "react-native";
import { useEffect, useState } from "react";

import * as SQLite from 'expo-sqlite';

import ItemCard from '../components/itemCard';
import HeaderCard from '../components/HeaderCard';
import DropdownComponent from "../components/DropdownComponent"

import { filterProducts } from "../functions/filterProducts";
import { getCustomHeight } from "../functions/customHeights";

import { fetchProducts } from "../services/productService";

import { dropDownListCategorys, dropDownListPriceRange } from "../constants/dropdownsItems";

import styles from "../style/style"
import { populateProducts } from "../services/dbService";

export default function HomeScreen() {
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchProducts()
            .then(fetchedProducts => {
                setProducts(fetchedProducts);
                return populateProducts(fetchedProducts);
            })
            .catch(err => setError(err.message))
            .finally(() => setIsLoading(false));
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
                        <HeaderCard />
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
                        <ItemCard
                            storeData={alternatedProducts}
                        />
                    </View>
                )}
        </View>
    );
}