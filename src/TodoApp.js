import React from "react"
import { View, Text, StyleSheet } from "react-native"
import AddTodo from './components'

function TodoApp () {
    return (
        <View style={styles.container}>
            <AddTodo/>
        </View>
    )

}

export default TodoApp;

const style = StyleSheet.create({
    contaier: {
        flex: 1,
        padding: 40
    }
})