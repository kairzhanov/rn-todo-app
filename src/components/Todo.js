import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export const Todo = ({todo, onDelete, onChangeStyle}) => {
    const deleteTodo = () => {
        onDelete(todo.id);
    }

    const changeStyle = () => {
        onChangeStyle(todo.id);
    }

    let todoStyle = () => {
        return {
            width: '80%',
            fontSize: 20,
            backgroundColor: (todo.styleType) ? 'green' : 'white',
            color: (todo.styleType) ? 'white' : 'black'
        }
    }

    return (
        <View style={styles.container}>
            <Text style={todoStyle()} onLongPress={changeStyle}>{todo.text}</Text>
            <Button onPress={deleteTodo} title='Delete'></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
    }, 
    todo: {
        width: '80%',
        fontSize: 20
    }
})
