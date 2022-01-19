import React, { useState } from 'react';
import { Text, View, FlatList, Pressable } from 'react-native';
import RadioButton from './RadioButton/index.js';
import { styles } from './styles.js';


const MenuRadio = ({ data, title, procesaNext, nextStep }) => {
    const [option, setOption] = useState(null);

    const next = () => {
        if (option === null) {
            alert('Selecciona una opción')
        } else {
            procesaNext(nextStep, option)
            setOption(null)
        }
    }

    return (
        <View style={styles.menuRadioContainer}>
            <Text style={styles.title}> {title} </Text>

            <View
                style={styles.listContainer}
            >
                <FlatList
                    // style={styles.listContainer}
                    keyExtractor={(item) => item.id}
                    refreshing={true}
                    data={data}
                    renderItem={
                        ({ item }) => (
                            <RadioButton item={item} setOption={setOption} option={option} />
                        )
                    }
                />
            </View>
            <Pressable
                style={styles.buttonMenuRadio}
                onPress={() => next()}
            >
                <Text
                    style={styles.buttonMenuRadioText}
                >
                    Elegir
                </Text>
            </Pressable>

        </View>
    );
}

export default MenuRadio;