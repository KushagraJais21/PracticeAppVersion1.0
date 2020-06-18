//I
import React from "react";
import {View, StyleSheet} from 'react-native';
import Year from "./years";
import CurrDates from "./currdate";
import HappyBday from "./happyBday"; 

//C
const Display = () => {
    return(
        <View style = {styles.card}>
            <View style = {styles.head}>
                <HappyBday/>
                <CurrDates/>
            </View>
            <Year age="99" name ="Barron"/>
        </View>
    )
}

export default Display


const styles = StyleSheet.create({
    card: {
        backgroundColor: "#05ab24",
        padding: 30,
        margin: 30,
        borderRadius: 15
    },
    head: {
        flexDirection: "row", //--> Changes how the components is arranged, this puts it side by side
        justifyContent: "space-between"    
    }
  });
  