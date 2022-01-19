import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    menuRadioContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 30,
    },
    title: {
        padding: 20,
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 22,
    },
    listContainer: {
        padding: 20,
        // flex: 1,
        // flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '80%',
    },
    buttonMenuRadio: {
        padding: 20,
        fontSize: 20,
        backgroundColor: 'lightblue',
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
    },
    buttonMenuRadioText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    }
})
