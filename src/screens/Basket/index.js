import { View, Text, StyleSheet } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";

const restaurant = restaurants[0];

const Basket = () => {
    const [quantity, setQuantity] = useState(1);

    // On Subtract function
    const onMinus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    // On Add Function
    const onPlus = () => {
        setQuantity(quantity + 1)
    }

    //Total Price
    const getTotal = () => {
        return (dish.price * quantity).toFixed(2);
    }

    return (
        <View style={styles.page}>
            <Text style={styles.name} numberOfLines={1}>{restaurant.name}</Text>
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
        justifyContent: 'center',
        marginTop: '65%',
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
        borderRadius: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600'
    },
});

export default Basket;