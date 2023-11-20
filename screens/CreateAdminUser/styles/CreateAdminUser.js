import { StyleSheet } from "react-native"

const createAdminUserStyle = StyleSheet.create({
    mainView: {
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 17,
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
        marginVertical: 20,
        marginHorizontal: 15
    },
    titleView: {
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30
    },
    inputs: {
        width: 280
    },
    title: {
        color: '#B1B2FF',
        fontSize: 28,
        marginRight: 9
    },
    button: {
        height: 40,
        width: 160,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8
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
    },
    text: {
        color: '#B3AAAA',
        fontSize: 15,
        marginHorizontal: 5,
        marginBottom: -6
    }
})

export { createAdminUserStyle }