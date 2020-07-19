import {connect} from 'react-redux'
import TodoList from '../components/TodoList'
import {toggleTodo} from '../redux/actions'
import {VisibilityFilters} from '../redux/actions/'

const getVisibleTodos = (todos, filter) => {

    switch (filter) {

        case VisibilityFilters.SHOW_ALL:
            return todos
        
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter( todo => todo.completed)
        
        case VisibilityFilters.SHOW_ACTIVE:

            return todos.filter( todo => !todo.completed)

        default:
            return todos
    }
}

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)