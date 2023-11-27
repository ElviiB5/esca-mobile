import { StyleSheet } from "react-native";

const votes = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    purpleText: {
        color: "#B1B2FF",
        fontSize: 17,
    },
    pinkText: {
        color: "#F79BD3",
        fontSize: 17,
    },
    chartContainer: {
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
})

export { votes }