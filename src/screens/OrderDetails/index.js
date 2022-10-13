import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, FlatList } from 'react-native'
import orders from '../../../assets/data/orders.json'
import restaurants from '../../../assets/data/restaurants.json'
import DishListItem from '../../components/DishListItem';
import styles from './styles';

const order = orders[0];

const OrderDetailsHeader = () => {
    return (
        <View>
            <StatusBar style="light" />

            <View style={styles.page}>
                <Image source={{ uri: order.Restaurant.image }} style={styles.image}></Image>

                {/* Ratings on the Detailed Page */}
                <View style={styles.detailRating}>
                    <Text style={styles.ratings}>{order.Restaurant.rating.toFixed(1)}</Text>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.title}>{order.Restaurant.name}</Text>
                    <Text style={styles.subtitle}>{order.status} &#8226; 2 days ago</Text>
                </View>
                <Text style={styles.menuCaption}>Your Order History</Text>




            </View>

        </View>
    )
};

const OrderDetails = () => {
    return(
        <FlatList 
        ListHeaderComponent={OrderDetailsHeader}
        data={restaurants[0].dishes} 
        renderItem={({item}) => <DishListItem dish={item}/>}>

        </FlatList>
    )
};

export default OrderDetails