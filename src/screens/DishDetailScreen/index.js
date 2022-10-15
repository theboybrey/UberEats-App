import { View, Text, StyleSheet, Pressable } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";


const dish = restaurants[0].dishes[0];

const DishDetailScreen = () => {
    const [quantity, setQuantity] = useState(1);

    const navigation = useNavigation();

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
            <Text style={styles.name}>{dish.name}</Text>
            <Text style={styles.description}>{dish.description}</Text>
            <View style={styles.separator} />

            <View style={styles.row}>
                <AntDesign
                    name="minus"
                    size={45}
                    color="#000"
                    onPress={onMinus} />
                <Text style={styles.quantity}>{quantity}</Text>
                <AntDesign 
                name="plus" 
                size={40} 
                color="#000" 
                onPress={onPlus} />
            </View>
            <View style={styles.totalPrice}>
                <Text style={styles.textPrice}>USD {getTotal()}</Text>
            </View>

            <Pressable onPress={() => navigation.navigate('Basket')}  style={styles.button}>
                <Text style={styles.buttonText}>Add {quantity} Items To Basket </Text>
            </Pressable>
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
        borderRadius: 50,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600'
    },
});

export default DishDetailScreen;