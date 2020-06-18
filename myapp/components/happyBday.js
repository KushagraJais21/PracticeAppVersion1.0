//Kush: class component with text inside that says happy birthday; state = {name : "Barron"}

//Imports
// should be a class component
import React, {Component} from 'react'
import {Text,Stylesheet, View} from 'react-native'

//Code

class HappyBday extends Component{
    state = {name: "Barron"}

    render(){
        return(
        <View>
            <Text>
                Happy Birthday {this.state.name}!
            </Text>
        </View>
        )
    }
}

export default HappyBday;