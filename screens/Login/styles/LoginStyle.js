import { StyleSheet } from "react-native"

const loginStyle = StyleSheet.create({
    titleView: {
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30
    },
    title: {
        color: '#B1B2FF',
        fontSize: 32,
        marginRight: 9
    },
    button: {
        height: 40,
        width: 160,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: '#B1B2FF',
        marginTop: 15
    },
    textButton: {
        color: "#ffffff",
        fontSize: 17
    },
    signinText: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 30
    },
    signinAsk: {
        color: "#B3AAAA"
    },
    signin: {
        color: "#B1B2FF",
        marginLeft: 5
    },
    slogan: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    sloganText: {
        color: "#B1B2FF",
        fontSize: 20,
        marginTop: 15
    }
})

export { loginStyle }