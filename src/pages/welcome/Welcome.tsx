import React from "react";
import { styles } from "./Welcome.style";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require("../../../assets/logo.png")}
          style={{ width: "100%" }}
          resizeMode="contain"
        />
      </View>

      <Animatable.View
        style={styles.containerForm}
        delay={600}
        animation="fadeInUp"
      >
        <Text style={styles.title}>
          Isso é para vcs gagos fdpt Marco e Kussy
        </Text>
        <Text style={styles.text}>Faça o login pra começar</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
