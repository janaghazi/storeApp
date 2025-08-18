import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, TouchableOpacity } from "react-native";
import { handleDecrease, handleIncrease } from "../functions/handleCount";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "../style/style";

const QuantityCounter = ({
    initial = 1,
    min = 1,
    max = 99,
    onChange
}) => {
    const [quantity, setQuantity] = useState(initial);

    return (
        <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => handleDecrease(quantity, setQuantity, min, onChange)}>
                <Icon name="chevron-back" size={22} color="white" />
            </TouchableOpacity>

            <Text style={styles.quantityText}>{quantity}</Text>

            <TouchableOpacity onPress={() => handleIncrease(quantity, setQuantity, max, onChange)}>
                <Icon name="chevron-forward" size={22} color="white" />
            </TouchableOpacity>
        </View>
    );
};


export default QuantityCounter;

