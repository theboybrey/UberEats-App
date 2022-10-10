import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import DishListItem from "../../components/DishListItem";
import restaurants from '../../../assets/data/restaurants.json';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar } from "expo-status-bar";

const restaurant = restaurants[2];

const RestaurantDetailPage = () => {
    return (
        <View style={styles.page}>
            <Image source={{ uri: restaurant.image }} style={styles.image}></Image>

            {/* Back Icon */}
            <View style={styles.iconContainer}>
                <Ionicons name="arrow-back-circle" size={45} color="white" />
            </View>

            {/* Ratings on the Detailed Page */}
            <View style={styles.detailRating}>
                <Text style={styles.ratings}>{restaurant.rating}</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.title}>{restaurant.name}</Text>
                <Text style={styles.subtitle}>USD {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime}mins</Text>
            </View>
            <Text style={styles.menuCaption}>View Today's Menu</Text>
            
            <FlatList 
            data={restaurant.dishes}
            showsVerticalScrollIndicator={false}
            renderItem={({item})=> <DishListItem dish={item}/>}
            ></FlatList>

            <StatusBar style="light" />
        </View>


    )
}



const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    image: {
        width: '100%',
        aspectRatio: 5 / 3,
    },

    iconContainer: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 40,
        left: 15,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        marginVertical: 5,
    },
    subtitle: {
        color: '#525252',
        fontWeight: "500",
        fontSize: 16,
    },
    textContainer: {
        margin: 15,
    },
    detailRating: {
        marginLeft: 'auto',
        backgroundColor: 'black',
        padding: 5,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        position: 'absolute',
        left: '75%',
        top: '23%',
    },
    ratings: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16,
    },
    menuCaption: {
        fontWeight: '600',
        fontSize: 16,
        color: 'green',
        marginTop: -5,
        marginBottom: 0,
        paddingLeft: 15,
        textTransform: 'uppercase',
        lineHeight: 25,
        textAlign: 'left',
        letterSpacing: 1,
    },

})

export default RestaurantDetailPage;