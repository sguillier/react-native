import React from 'react';
import { useState } from 'react';
import { Text, TextInput, Button, View, FlatList, } from 'react-native';
import CardItem from './CardItem/index';
import ModalEditItem from './ModalEditItem';
import { styles } from './styles'

const TaskList = () => {
    const [item, setItem] = useState('');
    const [itemList, setItemList] = useState([]);
    const [modalData, setModalData] = useState({ visible: false, item: null });

    const additem = () => {
        setItemList([...itemList, { id: "key_" + Math.random(), content: item }]);
        setItem('');
    }

    const deleteItem = (id) => {
        const newList = itemList.filter(e => e.id !== id);
        setItemList(newList);
    }

    const editItem = (id, newTask) => {
        const newList = itemList.map(e => e.id === id ? { id: id, content: newTask } : e);
        setItemList(newList);
    }

    return (
        <View style={styles.container}>


            <View style={styles.formContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder='name a item'
                    onChangeText={(text) => setItem(text)}
                    value={item}
                />
                <Button
                    title='Send'
                    color='#9191E9'
                    onPress={additem}
                    disabled={item.length === 0}
                />
            </View>

            {itemList.length > 0 ? (
                <View>
                    <Text style={styles.listTitle}>Lista de Tareas</Text>
                    <View style={styles.listContainer}>
                        <FlatList
                            keyExtractor={(item) => item.id}
                            refreshing={true}
                            data={itemList}
                            renderItem={({ item }) => (<CardItem item={item} deleteItem={deleteItem} setModalData={setModalData} />)}
                        />
                    </View>
                </View>
            )
                : (<Text style={styles.listTitle}>Sin Tareas</Text>)}

            <ModalEditItem modalData={modalData} setModalData={setModalData} editItem={editItem} />

        </View>



    );
};

export default TaskList;
