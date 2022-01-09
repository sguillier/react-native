import React, { useLayoutEffect, useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput } from "react-native";
import { styles } from './styles'

const ModalEditItem = ({ modalData, setModalData, editItem }) => {
    const [newItem, setNewItem] = useState('');


    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={modalData.visible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalData({ visible: false, item: null });
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Editar Tarea</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder={modalData.item ? modalData.item.content : ''}
                        onChangeText={(text) => setNewItem(text)}
                        value={newItem}
                    />

                    <View style={styles.containerButtons}>
                    <Pressable
                        style={[styles.button, styles.buttonSave]}
                        onPress={() => {
                            setModalData({ visible: false, item: null });
                            editItem(modalData.item.id, newItem);
                            setNewItem('');
                        }}
                    >
                        <Text style={styles.textStyle}>Guardar</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => {
                            setModalData({ visible: false, item: null });
                        }}
                    >
                        <Text style={styles.textStyle}>Cancelar</Text>
                    </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
};


export default ModalEditItem;