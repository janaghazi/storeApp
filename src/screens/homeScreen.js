import { ActivityIndicator, View, Text } from "react-native";
import { useEffect, useState } from "react";
import ItemCard from '../components/itemCard';
import HeaderCard from '../components/HeaderCard';
import DropdownComponent from "../components/DropdownComponent"
import styles from "../style/style"

export default function HomeScreen() {
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null)

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {
        const storeURL = "https://fakestoreapi.com/products/?sort=asc"
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


    const dropDownListCategorys = [
        { label: 'All Categories', value: null },
        { label: "Men's Clothing", value: '1' },
        { label: 'Jewelery', value: '2' },
        { label: "Electronics", value: '3' },
        { label: "Women's Clothing", value: '4' },
    ]
    const [category, setCategory] = useState(null);

    const dropDownListPriceRange = [
        { label: 'All Prices', value: null },
        { label: '$0 - $50', value: '1' },
        { label: '$51 - $150', value: '2' },
        { label: '$151 - $500', value: '3' },
        { label: '$501 - $1000', value: '4' },
    ];
    const [priceRange, setPriceRange] = useState(null);


    const filteredProducts = products.filter(product => {
        const categoryLabel = category ? dropDownListCategorys.find(c => c.value === category)?.label.toLowerCase() : null;
        const priceRangeValues = priceRange ? dropDownListPriceRange.find(p => p.value === priceRange)?.label
            .replaceAll("$","")
            .split(' - ')
            .map(Number) : null;
        const inCategory = !categoryLabel || product.category === categoryLabel;
        const inPriceRange = !priceRangeValues || (product.price >= priceRangeValues[0] && product.price <= priceRangeValues[1]);
        return inCategory && inPriceRange;
    });

    return (
        <View style={{ backgroundColor: "white" }}>
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
                            storeData={filteredProducts}
                        />
                    </View>
                )}
        </View>
    );
}