import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import RestaurantDetailPage from '../screens/RestaurantDetailsScreen';
import DishDetailScreen from '../screens/DishDetailScreen';
import Basket from '../screens/Basket';
import OrderScreen from '../screens/OrderScreen';
import OrderDetails from '../screens/OrderDetails';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return(
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen 
            name="Restaurants" 
            component={RestaurantDetailPage} 
            options={{headerShown: false}}/>
            <Stack.Screen name="Order" component={Basket}/>
            {/* <Stack.Screen name="" component={}/> */}
        </Stack.Navigator>
    )
}

export default RootNavigator; 