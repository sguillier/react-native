import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    itemContainer: {
        color: '#fff',
        flexDirection: 'row',
        margin: 10,
        // flex: 0.8,
        // borderBottomWidth: 1,
        // borderBottomColor: '#cccccc',
    },
    itemMark: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#fff',
        marginRight: 10,
        borderColor: 'red',
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },

    itemMarkSelected: {
        width: 18,
        height: 18,
        borderRadius: 9,
        backgroundColor: 'red',
    },

    itemTextContainer: {
        height: 30,        
        justifyContent: 'center',
    },
    itemText: {
        fontSize: 20,
    },
})
