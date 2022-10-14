import { View, Image, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const OrderListItem = ({ order }) => {
    const navigation = useNavigation()

    return (
        <Pressable style={{ flexDirection: 'row', padding: 10, margin: 10, alignItems: 'center' }}>
            <Image
                source={{ uri: order.Restaurant.image }}
                style={{ width: 75, height: 75, borderRadius: 10, marginRight: 10 }} />
            <View>
                <Text
                    style={{ fontWeight: '600', fontSize: 16, }}>
                    {order.Restaurant.name}</Text>
                <Text
                    style={{ marginVertical: 5, color: '#696969' }}>
                    3 Items &#8226; $38.45</Text>
                <Text style={{ color: '#6969' }}>{order.Restaurant.minDeliveryTime} - {order.Restaurant.maxDeliveryTime}mins &#8226; {order.status} </Text>
            </View>

            {/* Ordered By User */}
            <View
                style={{ position: 'absolute', marginLeft: 'auto', backgroundColor: 'black', padding: 5, width: 80, borderRadius: 20, right: '0%', marginVertical: 10, top: '50%', justifyContent: 'center', }}
            >
                <Text style={{ color: 'white', textAlign: 'center', fontWeight: '600' }}>{order.User.name}</Text>
            </View>

        </Pressable>
    )
}

export default OrderListItem