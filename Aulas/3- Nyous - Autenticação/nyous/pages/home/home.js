import React, {useState, useEffect} from "react";
import {StyleSheet, Text, View, Image} from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
    const [token, setToken] = useState("");
    const [eventos, setEventos] = useState([]);

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

    const listar = async () => {
        try {
            const response = await fetch("http://192.168.1.104:5000/api/eventos");
            const data = await response.json();
            setEventos(data.data);
        } 
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        pegarToken;
        listar();
    }, []); //Se quiser chamar o useEffect toda vez que atualizar o valor de alguma variável, insira a variável neste array. Se quiser só uma vez, quando a página for inicializada, deixe-o vazio.

    return (
        <View style={styles.container}>
            <Text style={{color: "white", fontSize: 20, marginBottom: 25}}>Confira os próximos eventos!</Text>
            {console.log(eventos)}
            {
                eventos.map((evento, index) => {
                    return (
                        <View key={index} style={styles.card}>
                            <Image
                                source={evento.urlImagem}
                                style={styles.cardImg}
                            />
                            <Text style={styles.cardTitulo}>{evento.nome}</Text>
                            <Text style={styles.cardDescricao}>{evento.descricao}</Text>
                            <Text style={styles.cardDetails}>{evento.categoria.nome}</Text>
                            <Text style={styles.cardDetails}>{evento.dataInicial}</Text>
                            <Text style={styles.cardDetails}>{evento.dataFinal}</Text>
                        </View>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        borderColor: "magenta", 
        borderWidth: 1, 
        width: "80%", 
        maxWidth: 400, 
        borderRadius: 10, 
        marginBottom: 20
    },
    cardImg: {
        width: "100%", 
        height: 125, 
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10
    },
    cardTitulo: {
        color: "white", 
        fontWeight: "700", 
        fontSize: 20, 
        textAlign: "center", 
        marginTop: 10
    },
    cardDescricao: {
        color: "#DEDEDE", 
        fontWeight: "400", 
        fontSize: 15, 
        textAlign: "justify", 
        marginTop: 10, 
        marginBottom: 10,
    },
    cardDetails: {
        color: "#DEDEDE", 
        fontWeight: "100", 
        fontSize: 10, 
        textAlign: "left", 
    }
});

export default Home;