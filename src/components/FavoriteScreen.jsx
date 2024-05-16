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
            <Icon name="star-sharp" size={30} color="#000"/>
            <Text>Favorite!</Text>
            <Button 
            title="Go to Shared"
            onPress={() => props.navigation.navigate('Shared')}
            
            />
        </View>
    )
}