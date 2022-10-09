import { StyleSheet, Text, View, Image } from 'react-native';


// Restaurant Card Item
const RestaurantItem = ({ restaurant }) => {
    return (
        <View style={styles.restaurantContainer}>
            <Image source={{
                uri: restaurant.image
            }}
                style={styles.image}
            ></Image>
            <View style={styles.row}>
                <View>
                    <Text style={styles.title}>{restaurant.name}</Text>
                    <Text style={styles.subtitle}>USD {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime}mins</Text>
                </View>

                <View style={styles.rating}>
                    <Text style={styles.rate}>{restaurant.rating}</Text>
                </View>
            </View>
        </View>

    )
}

export default RestaurantItem;

// Styles for the Restaurant Item
const styles = StyleSheet.create({
    restaurantContainer: {
        width: '100%',
        borderRadius: 5,
        marginVertical: 10,
    },
    image: {
        width: '100%',
        aspectRatio: 7 / 3,
        borderRadius: 8,
        marginBottom: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    subtitle: {
        color: 'grey',
        fontWeight: '450'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rating: {
        marginLeft: 'auto',
        backgroundColor: '#ec9454',
        padding: 5,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center', 
        borderRadius: 15,
    },
    rate: {
        color: 'white',
        fontWeight: 'bold'
    },

});
