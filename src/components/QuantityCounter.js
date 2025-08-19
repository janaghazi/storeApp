import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { handleDecrease, handleIncrease } from "../functions/handleCount";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "../style/style";

const QuantityCounter = ({ quantity, setQuantity, min = 1, max = 99 }) => {

    return (
        <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => handleDecrease(quantity, setQuantity, min)}>
                <Icon name="chevron-back" size={22} color="white" />
            </TouchableOpacity>

            <Text style={styles.quantityText}>{quantity}</Text>

            <TouchableOpacity onPress={() => handleIncrease(quantity, setQuantity, max)}>
                <Icon name="chevron-forward" size={22} color="white" />
            </TouchableOpacity>
        </View>
    );
};


export default QuantityCounter;

