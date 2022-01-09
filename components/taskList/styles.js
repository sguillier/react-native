import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    formContainer: {
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    textInput: {
        flex: 0.8,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    listContainer: {
        padding: 20,
        // justifyContent: 'space-around',
        // alignItems: 'center',
    },
    listTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 10,
        alignItems: 'center',
        textAlign: 'center',
    },
})
