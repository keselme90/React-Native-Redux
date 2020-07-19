import React from 'react'
import {Button} from 'react-native'

const Link = (props) => {

    const buttonClicked = () => {

        props.onClick(props.filter);
    }

    return (
        <Button title={props.title} onPress={ () => buttonClicked() } >

        </Button>
    )
}

export default Link