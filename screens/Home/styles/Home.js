import { StyleSheet } from "react-native";

const home = StyleSheet.create({
    topContainer: {
        marginBottom: 15,
        marginTop: 20,
        marginHorizontal: 10
    },
    animationView: {
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderColor: '#ECEAEA',
        shadowColor: "#AAC4FF",
        shadowOffset:{
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        marginVertical: 4,
        marginHorizontal: 15
    },
    contactView: {
        flexDirection: "row",
        alignItems: "center"
    },
    contactText: {
        color: "#AAC4FF",
        fontSize: 20,
        marginLeft: 10
    },
    button: {
        width: 342,
        marginTop: 10,
        margin: 10
    },
    imageContainter: {
        margin: 10
    }
})

export { home }