import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const Login = () => {
    const [email, setEmail] = useState("Email"); 
    const [senha, setSenha] = useState("Senha");

    const logar = () => {
      fetch("http://localhost:5000/api/login", {
        method: "POST",
        body: JSON.stringify({
            email: email,
            senha: senha
        }),
        headers: {
            "content-type": "application/json"
        }
      })
      .then(response => {
        if(response.ok) 
            return response.json();
        alert("Email ou senha inválida.");
      })
      .then(data => {
        localStorage.setItem("token-edux", data.token);
      })
      .catch(err => {
          console.log(err);
      });
    }

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Faça login para prosseguir.</Text>
        <TextInput style={styles.form} value={email} onChangeText={text=>setEmail(text)}/>
        <TextInput style={styles.form} value={senha} onChangeText={text=>setSenha(text)}/>
        <TouchableHighlight onPress={entrar}>
          <View style={{width: 75, borderWidth: 1, borderColor: "magenta", alignItems: "center", marginTop: 10}}>
            <Text style={{color: "magenta", padding: 3}}>Entrar</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    color: "#DEDEDE",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 40
  },
  form: {
    borderColor: "#DEDEDE",
    borderWidth: 1,
    width: 250,
    marginBottom: 10,
    color: "magenta",
    paddingLeft: 8,
    paddingRight: 8
  }
});

export default Login;