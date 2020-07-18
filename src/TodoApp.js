import React from "react"
import { View, Text, StyleSheet } from "react-native"
import AddTodo from './containers/AddTodo'
import VisibleTodos from './containers/VisibleTodos'

function TodoApp () {
    return (
        <View style={styles.container}>
            <AddTodo/>
            <View>
                <VisibleTodos />
            </View>
        </View>
    )

}

export default TodoApp;

const styles = StyleSheet.create({
    contaier: {
        flex: 1,
        padding: 40
    }
})