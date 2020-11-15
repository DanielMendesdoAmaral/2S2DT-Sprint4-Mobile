import React, {useState, useEffect} from "react";
import {StyleSheet, Text, View} from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
    const [token, setToken] = useState("");

    const pegarToken = async () => {
        try {
            const token = await AsyncStorage.getItem("jwt");
            if(token!==null)
                setToken(token);
        } 
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        pegarToken;
    }, []); //Se quiser chamar o useEffect toda vez que atualizar o valor de alguma variável, insira a variável neste array. Se quiser só uma vez, quando a página for inicializada, deixe-o vazio.

    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center',
      }
});

export default Home;