import { View, Text, StyleSheet, FlatList } from "react-native";


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

const styles = StyleSheet.create({
    
    name: {
        fontSize: 24,
        fontWeight: '600',
        marginVertical: 15,
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

export default BasketDishItem;