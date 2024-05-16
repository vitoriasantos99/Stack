import React from "react";
import { View, Text, Button } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default props =>{
    return (
        <View style={
        {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Icon name="share" size={30} color="#000"/>
            <Text>Shared!</Text>
            <Button 
            title="Go back to Home"
            onPress={() => props.navigation.navigate('Home')}
            
            />
        </View>
    )
}