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
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Home" component={HomeTabs} />
        </Stack.Navigator>
    )
}

const Tab = createMaterialBottomTabNavigator();
const HomeTabs = () => {
    return (
        <Tab.Navigator barStyle={{ backgroundColor: 'white' }}>
            <Tab.Screen
                name='Meals'
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({ color }) => <Ionicons name="fast-food" size={24} color={color} />
                }} />
            <Tab.Screen
                name='Basket'
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


const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Cafèteria" component={HomeScreen} />
            <HomeStack.Screen name="Restaurant" component={RestaurantDetailPage} />
            <HomeStack.Screen name="Dish" component={DishDetailScreen} />
        </HomeStack.Navigator>
    )
}

export default RootNavigator; 