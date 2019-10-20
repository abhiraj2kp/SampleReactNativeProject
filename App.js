import React,{useState} from 'react';
import { Text, View,StyleSheet,Button,TextInput,ScrollView } from 'react-native';
import GoalItem from './Components/GoadItems';

export default function App() {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [userDetails,setUserDetails]=useState([]);

  const emailInputHandler=(emailText)=>{
    setEmail(emailText);
  };

  const passwordInputHandler=(passwordText)=>{
    setPassword(passwordText);
  };

  const addDetails=()=>{
    //spread operator used for previous+1
    //1. approach
    /*setUserDetails([...userDetails,{
      uId:email.length+password.length,
      uEmail:email,
      uPassword:password
    }]);*/

    setUserDetails(currentUser => [...currentUser,{
      uId:email.length+password.length,
      uEmail:email,
      uPassword:password
    }]);
  }
  
  return(
    <View style={styles.parentStyle}>
        <Text style={styles.textStyles}>Welcome to OKE-Services</Text>
        <View style={{flexDirection:"column"}}>
          <TextInput 
            placeholder="Enter Email" 
            textContentType="emailAddress"
            placeholderTextColor="#212121" 
            onChangeText={emailInputHandler}
            value={email}
            style={styles.inputStyle}/>

          <TextInput 
            placeholder="Emter Password" 
            textContentType="password" 
            secureTextEntry={true}
            onChangeText={passwordInputHandler}
            value={password}
            placeholderTextColor="#212121" 
            style={styles.inputStyle}/>
        </View>
        
          <Button title="Click Me" onPress={addDetails} />

          <ScrollView>
            {userDetails.map(items=>(
              <GoalItem userEmail={items.uEmail}/>
            ))
          }
          </ScrollView>
    </View>
  );
}

const styles=StyleSheet.create({
  parentStyle:{
    margin:5
  },
  textStyles:{
    fontSize:20,color:'blue',textAlign:"center",margin:10
  },
  inputStyle:{
    borderBottomColor:'black',padding:5,borderWidth:1,borderRadius:5,marginTop:5,marginBottom:5
  },

  

});
