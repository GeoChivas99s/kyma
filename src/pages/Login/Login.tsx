import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
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
        <Text>Bem-Vindo(a)</Text>
      </Animatable.View>
      <Animatable.View
        animation="fadeInUp"
        style={styles.containerForm}
      ></Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  containerHeader: {},
  containerForm: {},
});
