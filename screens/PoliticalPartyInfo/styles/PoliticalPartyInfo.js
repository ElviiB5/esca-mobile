import { StyleSheet } from "react-native";

const partyInfo = StyleSheet.create({
    textContainer: {
        paddingHorizontal: 10
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
        marginTop: 30,
        marginBottom: 13,
        marginHorizontal: 15
    },
    topContainer: {
        marginBottom: 400,
        marginHorizontal: 10
    },
    normalText: {
        color: "#595656",
        fontSize: 17,
        textAlign: "center"
    },
    purpleText: {
        color: "#B1B2FF",
        fontSize: 17,
    },
    normalAlignText: {
        color: "#595656",
        fontSize: 17,
        textAlign: "justify"
    },
    purpleTextTitle: {
        color: "#B1B2FF",
        fontSize: 20,
    },
    blueText: {
        color: "#AAC4FF",
        fontSize: 17,
    },
    button: {
        width: 300,
        marginTop: 20
    },
    dataContainer: {
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
        marginTop: 17,
        marginBottom: 350,
        marginHorizontal: 5
    },
    imageContainter: {
        margin: 10
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
})

export { partyInfo }