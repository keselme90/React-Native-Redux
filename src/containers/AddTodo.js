import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {connect} from 'react-redux' // used to connect the Store with this component

function AddTodo(props) {

    const [state, setState] = useState({text: ''})

    addTodo = (text) => {
        props.dispatch({type:'ADD_TODO', text})
        setState({text: ''})
    }

    return (
        <View style={{flexDirection: 'row', marginHorizontal: 20}}>
            <TextInput 
                onChangeText={ (text) => setState({text: text})}
                value={state.text}
                placeholder="Eg. Create new Video"
                style={{borderWidth: 1, borderColor:'#eaeaea',
                        backgroudColor:'#f2f2e1', height: 50, flex:1, padding: 5}} />
            
            <TouchableOpacity onPress={() => addTodo(state.text)}>
                <View style={{height:50, backgroundColor:'#f2f2e1', alignItems:'center', justifyContent:'center'}}>
                    <Ionicons name="md-add" size={30} style={{color:'#de9595', padding:10}}/>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default connect()(AddTodo) //This is how we connect the Store with the component

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})