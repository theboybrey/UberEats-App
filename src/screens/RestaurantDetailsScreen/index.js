import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import DishListItem from "../../components/DishListItem";
import restaurants from '../../../assets/data/restaurants.json';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar } from "expo-status-bar";
import Header from './Header';
import styles from './styles';

const restaurant = restaurants[0];
const RestaurantDetailPage = () => {
    return (
        <View style={styles.page}>
            <FlatList
                ListHeaderComponent={() => <Header restaurant={restaurant}/>}
                data={restaurant.dishes}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <DishListItem dish={item} />}
            ></FlatList>

            {/* Back Icon */}
            <View style={styles.iconContainer}>
                <Ionicons name="arrow-back-circle" size={45} color="white" />
            </View>
            <StatusBar style="light" />

        </View>


    )
}

export default RestaurantDetailPage;