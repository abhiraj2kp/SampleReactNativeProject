import React, {useState} from 'react';
import {View,StyleSheet} from 'react-native';
import Header from '../GuassComponent/Header';
import StartGameScreen from '../screen/StartGameScreen'
import GameScreen from '../screen/GameScreen';
import GameOverScreen from '../screen/GameOverScreen';

export default ReactGuassApp = props =>
{
    const [userNumber,setUserNumber] = useState();
    const [guassRound,setGuassRound] = useState(0);

    const configureNewGameHandler = () => {
        setGuassRound(0);
        setUserNumber(null);
    }

    const startGameHandler = selectedNumber => {
        setUserNumber(selectedNumber);
        setGuassRound(0);
    };

    const gameOverHandler = numOfRounds => {
        setGuassRound(numOfRounds);
    }

    let content = <StartGameScreen onStartGame={startGameHandler} /> 

    if(userNumber && guassRound <= 0){
        content = <GameScreen userChoice ={userNumber} onGameOver = {gameOverHandler} />
    }else if (guassRound > 0) {
        content = <GameOverScreen roundsNumber={guassRound} userNumber={userNumber} onRestart = {configureNewGameHandler} />
    }
    return(
        <View style={styles.container}>
            <Header title="Hello parker" />
            {content}
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
       flex:1
    }
})