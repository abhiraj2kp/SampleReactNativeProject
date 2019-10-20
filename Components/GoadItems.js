import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const GoalItem=props=>{
    return(
        <View style={styles.listItem} key={props.userEmail.length}>
              <Text>
                {props.userEmail}
              </Text>
            </View>
    );
};

const styles=StyleSheet.create({
    listItem:{
        padding:10,
        backgroundColor:"#ccc",
        borderColor:"black",
        borderWidth:1,
        textShadowColor:"#fff",
        borderRadius:5,
        margin:5
      }
});

export default GoalItem;
