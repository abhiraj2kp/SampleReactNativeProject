import React,{useState,useRef,useEffect} from 'react';
import {View,Text,StyleSheet,Button,Alert} from 'react-native';
import Card from '../GuassComponent/Card';
import NumberContainer from '../GuassComponent/NumberContainer';

const generateRandomNo =(min,max, exclude) =>{
    min=Math.ceil(min);
    max=Math.floor(max);
    let rndNo=Math.floor(Math.random() * (max-min)) + min;
    if(rndNo===exclude){
        return generateRandomNo(min,max,exclude);
    }
    return rndNo;
}

const GameScreen = props => {
    const [currentGuass,setCurrenGuass]=useState(generateRandomNo(1,100,props.userChoice));

    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    const [rounds, setRounds] = useState(0);

    const {userChoice, onGameOver} = props;

        useEffect( () => {
            if (currentGuass === userChoice) {
                 onGameOver(rounds);
            }
        }, [currentGuass, userChoice, onGameOver]);

    const nextGuassHandler = direction => {
        if (
            (direction === 'lower' && currentGuass < props.userChoice ) || 
            (direction === 'greater' && currentGuass > props.userChoice) ) {
                Alert.alert("Don't Lie!!","You know this is wrong...",[{text : "Sorry!", style : "cancel"}]);
                return;
        }

        if (direction === 'lower') {
            currentHigh.current = currentGuass;
        } else {
            currentLow.current = currentGuass;
        }

        const nextGuassNo=generateRandomNo(currentLow.current,currentHigh.current,currentGuass)
        setCurrenGuass(nextGuassNo);
        setRounds(curRounds => curRounds + 1);
    };
    return(
        <View style={styles.screen}>
            <Text>Opponent's Guass</Text>
            <NumberContainer>{currentGuass}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={nextGuassHandler.bind(this,'lower')} />
                <Button title="GREATER" onPress={nextGuassHandler.bind(this,'greater')}/>
            </Card>
        </View>
    )
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:"center"
    },
    buttonContainer:{
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:20,
        width:300,
        maxWidth:"80%",

    }
});

export default GameScreen;