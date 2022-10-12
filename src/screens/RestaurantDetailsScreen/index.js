import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import DishListItem from "../../components/DishListItem";
import restaurants from '../../../assets/data/restaurants.json';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar } from "expo-status-bar";
import { Header } from "./Header";

const restaurant = restaurants[0];
const RestaurantDetailPage = () => {
    return (
        <View style={styles.page}>
            <StatusBar style="auto" />

            <FlatList
                ListHeaderComponent={Header}
                data={restaurant.dishes}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <DishListItem dish={item} />}
            ></FlatList>

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
        fontWeight: 'bold',
        fontSize: 16,
        color: 'green',
        marginTop: -5,
        marginBottom: 1,
        paddingLeft: 15,
        textTransform: 'uppercase',
        lineHeight: 25,
        textAlign: 'left',
        letterSpacing: 1,
    },

})

export default RestaurantDetailPage;