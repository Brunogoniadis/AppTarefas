import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function TaskList({data}){
    return(
        <View>
            <Text> {data.nome} </Text>
        </View>
    )
}