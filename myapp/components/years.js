import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Year = (props) => {
    return (
        <View style = {styles.dedication}>
            <Text style = {styles.message}>
                You are {props.age} years old! You should have been dead by now, {props.name}! You are so lucky to be alive!
                Being your third cousin is the greatest disappointment of my entire life! I hated watching "Ice Age" with you when
                I last saw you (you were one). Never thought you'd live this long.
            </Text>
        </View>
    )
};
export default Year

const styles = StyleSheet.create({
    dedication: {
        marginTop: 10,
    },
    message: {
        color: "white"
    }
});