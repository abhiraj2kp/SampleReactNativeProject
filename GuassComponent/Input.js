import React from 'react';
import {TextInput,StyleSheet} from 'react-native';

const Input = props => {
    return(
        <TextInput {...props} style={{...styles.inputStyle,...props.style}}></TextInput>
    )
}

const styles=StyleSheet.create({
    inputStyle:{
        height:40,
        borderBottomColor:"gray",
        borderBottomWidth:1,
        marginVertical:10,
    }
});
export default Input;