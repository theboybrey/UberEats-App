import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import DishListItem from "../../components/DishListItem";
import restaurants from '../../../assets/data/restaurants.json';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar } from "expo-status-bar";
import Header from './Header';
import styles from './styles';
import { useNavigation, useRoute } from "@react-navigation/native";

const restaurant = restaurants[0];
const RestaurantDetailPage = () => {
    const navigation = useNavigation();

    const route = useRoute();
    const id = route.params?.id
    console.warn(id)

    return (
        <View style={styles.page}>
            <FlatList
                ListHeaderComponent={() => <Header restaurant={restaurant}/>}
                data={restaurant.dishes}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <DishListItem dish={item} />}
                keyExtractor={(item) => item.name}
            ></FlatList>

            {/* Back Icon */}
            <View style={styles.iconContainer}>
                <Ionicons name="arrow-back-circle" size={45} onPress={navigation.goBack} color="white" />
            </View>
            <StatusBar style="light" />

        </View>


    )
}

export default RestaurantDetailPage;