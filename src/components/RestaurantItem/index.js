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
            <Text style={styles.title}>{restaurant.name}</Text>
            <Text style={styles.subtitle}>GHS {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime}mins</Text>
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
        borderRadius: 5,
        marginBottom: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    subtitle: {
        color: 'grey'
    },
});
