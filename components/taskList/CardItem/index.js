import React from 'react'
import { styles } from './styles'
import { View, Text, TouchableOpacity } from 'react-native'


const CardItem = ({ item, deleteItem, setModalData }) => {

    return (
        <View style={styles.viewCardItem}>
            <Text style={styles.textCardItem}>
                {item.content}
            </Text>

            <View style={styles.containerButtons}>
                <TouchableOpacity
                    style={styles.containerDelete}
                    onPress={() => deleteItem(item.id)}
                >
                    <Text style={styles.textDelete}>Borrar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.containerEdit}
                    onPress={() => setModalData({visible:true, item:item}) }
                >
                    <Text style={styles.textEdit}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CardItem
