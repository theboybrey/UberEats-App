import { View, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./styles";


const RestaurantHeader = ({restaurant}) => {
    return (
        <View style={styles.page}>
            <Image source={{ uri: restaurant.image }} style={styles.image}></Image>

            {/* Ratings on the Detailed Page */}
            <View style={styles.detailRating}>
                <Text style={styles.ratings}>{restaurant.rating}</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.title}>{restaurant.name}</Text>
                <Text style={styles.subtitle}>USD {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime}mins</Text>
            </View>
            <Text style={styles.menuCaption}>View Today's Menu</Text>

            <StatusBar style="light" />

        </View>


    )
}

export default RestaurantHeader;