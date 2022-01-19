
import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './styles.js';


const RadioButton = ({ item, setOption, option }) => {
  return (
    <Pressable
      onPress={() => setOption(item.id)}
    >
      <View
        style={styles.itemContainer}
      >
        {option === item.id ?
          <View style={styles.itemMark}>
            <View style={styles.itemMarkSelected}></View>
          </View> :
          <View style={styles.itemMark}>
          </View>
        }

        <View style={styles.itemTextContainer}>
          <Text style={styles.itemText}>{item.value}</Text>
        </View>
      </View>
    </Pressable>
  );
}


export default RadioButton;