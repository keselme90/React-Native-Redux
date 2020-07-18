import React from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

export function AddTodo() {
    return (
        <View style={{flexDirection: 'row', marginHorizontal: 20}}>
            <TextInput 
                placeholder="Eg. Create new Video"
                style={{borderWidth: 1, borderColor:'#eaeaea',
                        backgroudColor:'#f2f2e1', height: 50, flex:1, padding: 5}} />
            
            <TouchableOpacity onPress={() => alert('added todo')}>
                <View style={{height:50, backgroundColor:'#f2f2e1', alignItems:'center', justifyContent:'center'}}>
                    <Ionicons name="md-add" size={30} style={{color:'#de9595', padding:10}}/>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})