import React, { useState } from 'react';
import { Text, View, FlatList, Pressable } from 'react-native';
import RadioButton from './RadioButton/index.js';
import { styles } from './styles.js';


const MenuRadio = ({data, title}) => {
    const [option, setOption] = useState(null);

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
            <Text> Your option: {option}</Text>
        </View>
    );
}

export default MenuRadio;