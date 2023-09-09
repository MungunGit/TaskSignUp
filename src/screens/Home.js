import React from 'react';
import { View, Text, Button, Image, TextInput } from 'react-native';

const Home = ({ navigation }) => {
    // console.log(props);

    return (
        <View>
            <Text style={{ textAlign: 'center', fontSize: "25", marginVertical: 6}}>Home page</Text>
            <Image 
                source={{
                    uri: "https://images.pexels.com/photos/1590549/pexels-photo-1590549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1://pixabay.com/photos/flowers-meadow-sunlight-summer-276014/",
                    }} 
                    style={{width: "100%", height: "50%"}}
                    />
            
            <Button 
                title="Login" 
                onPress={() => navigation.navigate("Login")} />
                
            <Button
                title="Signup"
                onPress={() => navigation.navigate("Signup")} /> 
        </View>
    );
};



export default Home;