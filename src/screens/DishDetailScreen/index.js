import { View, Text, StyleSheet } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import {AntDesign} from '@expo/vector-icons';


const dish = restaurants[0].dishes[0];

const  DishDetailScreen = () => {
    return(
        <View style={styles.page}>
            <Text style={styles.name}>{dish.name}</Text>
            <Text style={styles.description}>{dish.description}</Text>
            <View style={styles.separator}/>

            <View>
                <AntDesign name="minus" size = {50} color="#000"/>
                <AntDesign name="plus" size = {50} color="#000"/>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    page:{
        flex: 1,
        width: '100%',
        paddingVertical: 45,
        padding: 15,
    },
    name:{
        fontSize: 30,
        fontWeight: '600',
        marginVertical: 10,
        textAlign: 'center',
    },
    description:{
        color: '#696969',
        textAlign: 'center'
    },
    separator:{
        height: 1,
        backgroundColor: 'lightgrey',
        marginVertical: 10,
        borderRadius: 20,
    },
})

export default DishDetailScreen;