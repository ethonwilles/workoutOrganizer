import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';


export default function Main(){
    const handleAddWorkout = e =>{
        console.log("clicked!")
    }
    return(
        <View>
            <Button onclick={handleAddWorkout} title={"+ Add Workout"} />
        </View>
    );
}