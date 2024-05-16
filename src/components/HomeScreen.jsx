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
            <Icon name="home" size={30} color="#000"/>
            <Text>Home!</Text>
            <Button 
            title="Go to Detail"
            onPress={() => props.navigation.navigate('Details')}
            
            />
        </View>
    )
}