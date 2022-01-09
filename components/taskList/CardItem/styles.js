import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    viewCardItem: {
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        // flex: 0.8
    },
    textCardItem: {
        // paddingRight: 10
    },
    containerButtons: {
        flexDirection: 'row',
        margin: 10,
    },
    containerDelete: {
        borderRadius: 5,
        margin: 5,
        backgroundColor: 'red',
        padding: 5,
    },
    textDelete: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    containerEdit: {
        borderRadius: 5,
        margin: 5,
        backgroundColor: 'green',
        padding: 5,
    },
    textEdit: {
        color: '#ffffff',
        fontWeight: 'bold',
    }
});