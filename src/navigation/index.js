import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import RestaurantDetailPage from '../screens/RestaurantDetailsScreen';
import DishDetailScreen from '../screens/DishDetailScreen';
import Basket from '../screens/Basket';
import OrderScreen from '../screens/OrderScreen';
import OrderDetails from '../screens/OrderDetails';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
// import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={HomeTabs} />
            <Stack.Screen
                name="Restaurants"
                component={RestaurantDetailPage}
                options={{ headerShown: false }} />
            <Stack.Screen name="Order" component={Basket} />
            {/* <Stack.Screen name="" component={}/> */}
        </Stack.Navigator>
    )
}

const Tab = createMaterialBottomTabNavigator();
const HomeTabs = () => {
    return (
        <Tab.Navigator barStyle={{backgroundColor: 'white'}}>
            <Tab.Screen
                name='Meals'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => <Ionicons name="fast-food" size={24} color={color} />
                }} />
            <Tab.Screen
                name='Orders'
                component={OrderScreen}
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome name="shopping-basket" size={24} color={color} />
                }}
            />
            <Tab.Screen
                name='Profile'
                component={OrderDetails}
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} />
                }}
            />
        </Tab.Navigator>
    )
}

export default RootNavigator; 