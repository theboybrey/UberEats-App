import { View, Image, StyleSheet, Text, Pressable } from "react-native";


const DishListItem = ({ dish }) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Text style={styles.name}>{dish.name}</Text>
                <Text style={styles.description} numberOfLines={2}>{dish.description}</Text>
                <Text style={styles.price}>USD {dish.price}</Text>
            </View>
            {dish.image && (<Image source={{ uri: dish.image }} style={styles.image}></Image>)}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 15,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 0.8,
        paddingBottom: 10,
        flexDirection: 'row',
    },
    name: {
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: 0.5,
    },
    description: {
        color: 'grey',
        marginVertical: 5,
    },
    price: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    image: {
        height: 75,
        aspectRatio: 1,
        borderRadius: 10,
    }

})

export default DishListItem