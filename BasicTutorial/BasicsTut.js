import React from 'react';
import { Text, View} from 'react-native';


function Welcome(props) {
    return( 
    <View>
        <Text>
            {props.behav},
            {props.name}
        </Text>
    </View>
    )
}

export default function Appp() {
    return (
      <View>
        <Welcome name="Abhi Parker" behav="Muradnagar" />
        <Welcome name="Raj Parker" behav="Muradnagar" />
        <Welcome name="Neha Parker" behav="Muradnagar" />
      </View>
    );
}