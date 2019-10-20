import React,{useState} from 'react';
import {View,Text,Keyboard,StyleSheet,Button,TouchableWithoutFeedback,Alert } from 'react-native';
import Card from '../GuassComponent/Card';
import Colors from '../ReactGuassApp/constant/colors';
import Input from '../GuassComponent/Input';
import NumberContainer from '../GuassComponent/NumberContainer';

const StartGameScreen = props =>{

    const[enteredValue,setEnteredValue] = useState("");
    const[confirmed,setConfirmed]=useState(false);
    const[selectedNo,setSelectedNo]=useState();

    const inputHandler = inputText =>{
        setEnteredValue(inputText.replace(/[^0-9]/g,""));
    }

    const resetInputHandler = props =>{
        setEnteredValue("");
    }

    const confirmInputHandler = () =>{
        let chosenNo=parseInt(enteredValue);
        if(isNaN(chosenNo) || chosenNo<=0 || chosenNo>99){
            Alert.alert("Invalid Number!","Number has to be a number between 1 and 99.",[{text:"Okey",style:"destructive",onPress:resetInputHandler}])
            return;
        }

        setConfirmed(true);
        setEnteredValue("");
        setSelectedNo(chosenNo);
        Keyboard.dismiss();
    }

    let confirmedOutput;
    if(confirmed){
        confirmedOutput=(
        <Card style={styles.summeryContainer}>
            <Text>You Selected</Text>
            <NumberContainer>{selectedNo}</NumberContainer>
            <Button title="START GAME" onPress = {() => props.onStartGame(selectedNo)} />
        </Card>);
    }
    return(
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss(); 
        } }>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a new Game</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input 
                    style={styles.inputStyle}
                    blurOnSubmit autoCapitalize = 'none'
                    autoCorrect={false}
                    keyboardType="number-pad"
                    onChangeText={inputHandler}
                    value={enteredValue}
                    maxLength={2}/>
                    <View style={styles.buttonContainer}  >
                        <View style={styles.btnEqStyle}><Button color={Colors.accent} title="Reset" onPress={resetInputHandler} /></View>
                        <View style={styles.btnEqStyle}><Button color={Colors.primary} title="Confirm" onPress={confirmInputHandler} /></View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:"center",
    },
    buttonContainer:{
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-between",
        paddingHorizontal:15,
    },
    title:{
        fontSize:20,
        marginVertical:10,
    },
    inputContainer:{
        width:300,
        maxWidth:"80%",
        alignItems:"center",
    },
    btnEqStyle:{
        width:80,
    },
    inputStyle:{
        width:50,
        textAlign:'center',
    },
    summeryContainer:{
        marginTop:20, 
        alignItems:"center"
    }
})

export default StartGameScreen;