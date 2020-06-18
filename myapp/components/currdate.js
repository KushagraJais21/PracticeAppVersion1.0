//Date Class Component
import React, {Component} from "react"
import {StyleSheet, View, Text} from 'react-native';

//Code Section:
class CurrDates extends Component{

    state = {
        Month : "June",
        Day : 16,
        Year : 2020
    }

    render()
    {
        return(
            <View style = {styles.date}> 
                <Text> 
                    {this.state.Month} {this.state.Day}, {this.state.Year}
                </Text>
            </View>
        )
    }
}

export default CurrDates

const styles = StyleSheet.create({
   date: {
       
   }
  });
