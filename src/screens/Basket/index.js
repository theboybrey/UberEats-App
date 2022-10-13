import { View, Text, StyleSheet, FlatList } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";

const restaurant = restaurants[0];

const BasketDishItem = ({ basketDish }) => {
    return (
        <View style={styles.row}>
            <View style={styles.qtyContainer}>
                <Text>1</Text>
            </View>
            <Text style={{ fontWeight: "bold", letterSpacing: 0.8 }}>{basketDish.name}</Text>
            <Text style={{ marginLeft: 'auto', fontWeight: '500' }}>USD {basketDish.price}</Text>
        </View>
    )
}

const Basket = () => {
    return (
        <View style={styles.page}>
            <Text style={styles.name} numberOfLines={1}>{restaurant.name}</Text>

            <Text style={styles.yourItems}>View Your Items</Text>

            <FlatList data={restaurant.dishes} renderItem={({ item }) => <BasketDishItem basketDish={item} />} />

            <View style={styles.separator} />

            <View style={styles.button}>
                <Text style={styles.buttonText}>Place Order Now</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: '100%',
        paddingVertical: 45,
        padding: 15,
    },
    name: {
        fontSize: 24,
        fontWeight: '600',
        marginVertical: 15,
    },
    description: {
        color: '#696969',
    },
    separator: {
        height: 1,
        backgroundColor: 'lightgrey',
        marginVertical: 10,
        borderRadius: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        padding: 10,
        borderRadius: 8
    },
    quantity: {
        fontSize: 25,
        fontWeight: '600',
        color: '#696969',
        marginHorizontal: 20,
    },
    totalPrice: {
        width: '50%',
        borderRadius: 20,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'flex-end',
        left: '25%',
        marginVertical: 10,
    },
    textPrice: {
        fontWeight: '600',
        fontSize: 18,
        textTransform: 'uppercase',
        color: '#696969'
    },
    button: {
        backgroundColor: 'black',
        marginTop: 'auto',
        padding: 20,
        alignItems: 'center',
        borderRadius: 50,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600'
    },
    yourItems: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#696969',
        textAlign: 'left',
        textTransform: 'uppercase',
        marginBottom: 10,
        marginTop: 10,
    },
    qtyContainer: {
        backgroundColor: 'lightgrey',
        paddingHorizontal: 5,
        marginRight: 10,
        paddingVertical: 2,
        borderRadius: 5,
    },

});

export default Basket;