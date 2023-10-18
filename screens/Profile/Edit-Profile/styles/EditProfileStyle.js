import { StyleSheet } from "react-native";

const EditProfileStyles = StyleSheet.create({
        button: {
        width: 290,
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 20
    },
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
        fontSize: 32,
        marginRight: 9
    },
    
})

export { EditProfileStyles }