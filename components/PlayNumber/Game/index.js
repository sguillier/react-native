import React from 'react';
import { useState } from 'react';
import { Text, TextInput, Button, View, FlatList, Pressable, } from 'react-native';
import MenuRadio from './MenuRadio/index.js';
import { styles } from './styles'

const Game = ({ menu, setMenu }) => {
    const alt = ['a', 'b', 'c', 'd', 'e']
    const [n1, setN1] = useState(alt.map(e => ({ id: e, value: Math.floor(Math.random() * 100) })));
    const [n2, setN2] = useState(alt.map(e => ({ id: e, value: Math.floor(Math.random() * 100) })));
    const [n3, setN3] = useState(alt.map(e => ({ id: e, value: Math.floor(Math.random() * 100) })));
    const [sum, setSum] = useState(null);
    const [key, setKey] = useState(alt[Math.floor(Math.random() * 5)]);

    const procesaNext = (nextStep, option) => {
        if (nextStep === 'game2') {
            setSum(option.value);
            setMenu(nextStep);
        }
        if (nextStep === 'suma') {
            setN3(n3.map(e => e.id === key ? { id: e.id, value: option.value + sum } : e))
            setSum(option.value + sum);
            setMenu(nextStep);
        }
        if (nextStep === 'end') {
            setMenu(nextStep);
            if(option.value === sum){
                alert('Ganaste!!!')
            }else{
                alert('Perdiste')
            }
            setN1(alt.map(e => ({ id: e, value: Math.floor(Math.random() * 100) })));
            setN2(alt.map(e => ({ id: e, value: Math.floor(Math.random() * 100) })));
            setN3(alt.map(e => ({ id: e, value: Math.floor(Math.random() * 100) })));
            setKey(alt[Math.floor(Math.random() * 5)]);
            setSum(null)
            setMenu('home');
        }
    }


    if (menu === 'game') {
        return (
            <View style={styles.container}>
                <MenuRadio data={n1} title='Escoger un Numero' procesaNext={procesaNext} nextStep='game2' />
            </View>
        )
    }

    if (menu === 'game2') {
        return (
            <View style={styles.container}>
                <MenuRadio data={n2} title='Escoger Otro Numero' procesaNext={procesaNext} nextStep='suma' />
            </View>
        )
    }

    if (menu === 'suma') {
        return (
            <View style={styles.container}>
                <MenuRadio data={n3} title='Indica la suma entre tu primer número y el segundo' procesaNext={procesaNext} nextStep='end' />
            </View>
        )
    }

    return null
};

export default Game;
