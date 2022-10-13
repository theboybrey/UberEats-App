import { StyleSheet } from "react-native";
export default StyleSheet.create({
    page: {
        flex: 1,
    },
    image: {
        width: '100%',
        aspectRatio: 5 / 3,
    },

    iconContainer: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 40,
        left: 15,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        marginVertical: 5,
    },
    subtitle: {
        color: '#525252',
        fontWeight: "500",
        fontSize: 16,
    },
    textContainer: {
        margin: 15,

    },
    detailRating: {
        marginLeft: 'auto',
        backgroundColor: 'black',
        padding: 5,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        position: 'absolute',
        left: '75%',
        top: '50%',
    },
    ratings: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16,
    },
    menuCaption: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'green',
        marginTop: -5,
        marginBottom: 1,
        paddingLeft: 15,
        textTransform: 'uppercase',
        lineHeight: 25,
        textAlign: 'left',
        letterSpacing: 1,
    },

})