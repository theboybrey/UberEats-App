import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantDetailPage from './src/screens/RestaurantDetailsScreen';
import DishDetailScreen from './src/screens/DishDetailScreen';
import Basket from './src/screens/Basket';




export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen/> */}
       {/* <RestaurantDetailPage/> */}
      {/* <DishDetailScreen/> */}

      <Basket/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
