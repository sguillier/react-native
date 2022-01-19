import React from 'react';
import { useState } from 'react';
import { Text, Pressable, View } from 'react-native';
import Game from './Game/index.js';
import { styles } from './styles'

const PlayNumber = () => {
    const [menu, setMenu] = useState('home');


    if (menu === 'home') {
        return (
            <View style={styles.container}>
                <View style={styles.caja}>
                    <Text
                        style={styles.title}
                    >
                        Juego de SUMA!!!
                    </Text>

                    <Pressable
                        style={styles.button}
                        onPress={() => setMenu('game')}
                    >
                        <Text
                            style={styles.buttonText}
                        >
                            Start Game
                        </Text>
                    </Pressable>
                </View>

            </View>
        )
    } else {
        return (
            <View
                style={styles.container}
            >
                <Game menu={menu} setMenu={setMenu} />
            </View>)
    }

};

export default PlayNumber;
