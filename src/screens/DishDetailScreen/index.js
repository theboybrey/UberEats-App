import { View, Text, StyleSheet } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";

const dish = restaurants[0].dishes[0];

const DishDetailScreen = () => {
    const [quantity, setQuantity] = useState(1);

    const onMinus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const onPlus = () => {
        setQuantity(quantity + 1)
    }

    return (
        <View style={styles.page}>
            <Text style={styles.name}>{dish.name}</Text>
            <Text style={styles.description}>{dish.description}</Text>
            <View style={styles.separator} />

            <View style={styles.row}>
                <AntDesign name="minus" size={45} color="#000" onPress={onMinus} />
                <Text style={styles.quantity}>{quantity}</Text>
                <AntDesign name="plus" size={40} color="#000" onPress={onPlus} />
            </View>

            <View style={styles.button}>
                <Text style={styles.buttonText}>Add {quantity} Items To Basket </Text>
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
        fontSize: 30,
        fontWeight: '600',
        marginVertical: 10,
        textAlign: 'center',
    },
    description: {
        color: '#696969',
        textAlign: 'center'
    },
    separator: {
        height: 1,
        backgroundColor: 'lightgrey',
        marginVertical: 10,
        // borderRadius: 20,
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
    button:{
        backgroundColor: 'black',
        marginTop: 'auto',
        padding: 20,
        alignItems: 'center',
        borderRadius: 50,
    },
    buttonText:{
        color: 'white',
        fontSize: 18,
        fontWeight: '600'
    },
});

export default DishDetailScreen;