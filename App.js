// Damir Kairzhanov, 20MD0173, d_kairzhanov at kbtu dot kz

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Navbar } from "./src/components/Navbar";
import { AddTodo } from "./src/components/AddTodo";
import { Todo } from './src/components/Todo';
import { useState } from "react";

export default function App() {
  const dummy = [
    {
      id: 1,
      text: "Todo 1",
      style: false
    },
    {
      id: 2,
      text: "Todo 2",
      style: false
    },
    {
      id: 3,
      text: "Todo 3",
      style: false
    }
  ]

  const [todos, setTodo] = useState(dummy);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now().toString(),
      text: text,
      style: false
    };

    return setTodo(prev => [...prev, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodo(todos.filter(todo => todo.id !== id));
  }

  const changeStyleTodo = (id) => {
    setTodo(
      todos.map((todo) =>
        todo.id === id ? { ...todo, styleType: !todo.styleType } : todo
      )
    );
  }


  return (
    <SafeAreaView>
      <Navbar></Navbar>
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} ></AddTodo>
        <View>
          { todos.map(todo => {
            return <Todo key={todo.id} todo={todo} onDelete={deleteTodo} onChangeStyle={changeStyleTodo}></Todo>
          }) }
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
