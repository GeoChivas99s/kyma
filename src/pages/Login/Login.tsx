import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Bem-Vindo(a)</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput placeholder="Digide o seu email" style={styles.input} />

        <Text style={styles.title}>Senha</Text>
        <TextInput placeholder="Sua senha" style={styles.input} />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister}>
          <Text style={styles.registerText}>
            Não possui uma conta? Cadastr-se
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#38A69D",
  },
  containerHeader: {
    marginTop: "14%",
    marginBottom:"8%",
    paddingStart: "5%"
  },message:{
   fontSize:28,
   fontWeight:'bold',
   color: '#fff'
  },
  containerForm: {
    backgroundColor:"#fff", 
    flex:1 ,
    borderTopLeftRadius:25 ,
    borderTopRightRadius: 25 ,
    paddingStart: "5%", 
    paddingEnd: "5%"
  },
  title: {
    fontSize: 20, 
    marginTop: 28
  },
  input: {},
  buttonText: {},
  button: {},
  registerText: {},
  buttonRegister: {},
});
