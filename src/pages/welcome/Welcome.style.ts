import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#A09DF7",
    },
    containerLogo: {
      flex: 2,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#A09DF7",
    },
    containerForm: {
      flex: 1,
      backgroundColor: "#fff",
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingStart: "5%",
      paddingEnd: "5%",
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginTop: 28,
      marginBottom: 12,
    },
    text: {
      color: "#a1a1a1",
    },
    button: {
      position: "absolute",
      backgroundColor: "#A09DF7",
      borderRadius: 50,
      paddingVertical: 8,
      width: "60%",
      alignSelf: "center",
      bottom: "20%",
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText: {
      fontSize: 24,
      color: "#fff",
      fontWeight: "bold",
    },
  });
  