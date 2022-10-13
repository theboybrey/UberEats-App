    import { View, Text, FlatList } from 'react-native'
    import orders from '../../../assets/data/orders.json'
    import OrderListItem from '../../components/OrderListItem'
    
    const OrderScreen = () => {
      return (
        <View style={{flex: 1, width: '100%', paddingTop: 50,}}>
          <FlatList 
          data={orders}
          renderItem={({item}) =>  <OrderListItem order={item}/>}/>

        </View>
      )
    }
    
    export default OrderScreen