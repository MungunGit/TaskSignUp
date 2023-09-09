import React from 'react';

import { View, Text, Image, TextInput, StyleSheet, Alert, Button } from 'react-native';


const Login = ({ navigation }) => {
    
    const handleChangeText = (text) => {
        console.log(text);
    }

    return (
        <View>
            <Text style={{ textAlign: 'center', fontSize: "25", marginVertical: 6}}>Login</Text>
            <Image 
                source={require("../../assets/mod.jpg")} 
                style={{width: "100%", height: "50%"}}/>

            {/* <Image 
                source={{
                    uri: "https://images.pexels.com/photos/1590549/pexels-photo-1590549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1://pixabay.com/photos/flowers-meadow-sunlight-summer-276014/",
                    }} 
                    style={{width: "100%", height: "50%"}}
                    /> */}

            <TextInput style={css.inputField} 
                placeholder="Type user name" 
                onChangeText={handleChangeText}/>
            <TextInput style={css.inputField} 
                placeholder="Password" 
                onChangeText={handleChangeText} />

            <Button 
                title="Back" 
                onPress={ () => navigation.pop() }/>

        </View>
    );
};

const css = StyleSheet.create({
    inputField: {
      borderBottomColor: "gray",
      borderBottomWidth: 1,
      marginHorizontal: 20,
      marginVertical: 15,
      padding: 10,
    },
    button: {
      marginVertical: 5,
    },
  });

export default Login;