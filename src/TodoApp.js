import React from "react"
import { View, Text, StyleSheet } from "react-native"
import AddTodo from './containers/AddTodo'
import VisibleTodos from './containers/VisibleTodos'
import FilterLink from "./containers/FilterLink"
import {VisibilityFilters} from './redux/actions'

function TodoApp () {
    return (
        <View style={styles.container}>
            <AddTodo/>
            <View>
                <VisibleTodos />
            </View>
            <FilterLink filter={VisibilityFilters.SHOW_ALL} title="show all"/>
            <FilterLink filter={VisibilityFilters.SHOW_COMPLETED} title="show completed"/>
            <FilterLink filter={VisibilityFilters.SHOW_ACTIVE} title="show active"/>

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