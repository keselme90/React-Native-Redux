import React from "react"
import { View, Text, StyleSheet } from "react-native"

function TodoApp () {
    return (
        <View style={styles.container}>
            <Tex>TodoApp</Tex>
        </View>
    )

}

export default TodoApp;

const style = StyleSheet.create({
    contaier: {
        flex: 1,
        alignItemsL: 'center',
        justifyContent: 'center'
    }
})