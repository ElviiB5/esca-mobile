import { StyleSheet } from "react-native";

const commonStyles = StyleSheet.create({
    topContainer: {
        marginTop: 40,
        marginBottom: 20
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
    purpleTitle: {
        color: '#B1B2FF',
        fontSize: 32,
        alignItems: "center",
        marginBottom: 10
    },
    pinkTitle: {
        color: '#F79BD3',
        fontSize: 32,
        alignItems: "center",
        marginBottom: 10
    },
    normalText: {
        color: "#595656",
        fontSize: 17,
        textAlign: "justify",
        marginTop: 10
    },
    footer: {
        color: "#B0A9A9",
        fontSize: 13,
        textAlign: "justify",
        marginTop: 10
    }
})

export { commonStyles }