import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";


export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState("");

    const CreateTodo = () => {
        
        onSubmit(value);
        setValue('');
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder="Todo Name"></TextInput>
            <Button title='Add' onPress={CreateTodo}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        fontSize: 20
    }, 
    btn: {

    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})