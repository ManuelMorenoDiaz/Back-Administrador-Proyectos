import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import ContainerLogo from "./components/ContainerLogo.jsx";

export default function Signup() {
  return (
    <View style={styles.container}>
      <View>
        <ContainerLogo></ContainerLogo>
        <View style={styles.container_inputs}>
          <View style={styles.text_inputs}>
            <Text style={styles.label}>Nombre</Text>
            <TextInput style={styles.input}> </TextInput>

            <View style={styles.twin}>
              <View>
                <Text style={styles.twin_label}>Apellido paterno</Text>
                <TextInput style={styles.twin_input}> </TextInput>
              </View>

              <View>
                <Text style={styles.twin_label}>Apellido materno</Text>
                <TextInput style={styles.twin_input}> </TextInput>
              </View>
            </View>

            <Text style={styles.label}>Correo electrónico</Text>
            <TextInput style={styles.input}> </TextInput>

            <View style={styles.twin}>
              <View>
                <Text style={styles.twin_label}>Contraseña</Text>
                <TextInput style={styles.twin_input}> </TextInput>
              </View>

              <View>
                <Text style={styles.twin_label}>Confirmar contraseña</Text>
                <TextInput style={styles.twin_input}> </TextInput>
              </View>
            </View>
          </View>
          <View style={styles.container_buttons}>
            <Text style={styles.button}>Registrarse</Text>
            <Text style={styles.link}>Iniciar sesión</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
  },

  container_inputs: {
    alignItems: "center",
    height: "50%",
  },

  text_inputs: {
    marginTop: 20,
  },

  label: {
    marginTop: 5,
    fontSize: 14,
    color: "#5D6363",
    marginBottom: 5,
  },

  input: {
    width: 330,
    height: 40,
    borderColor: "#B5B6B6",
    borderWidth: 1,
    borderRadius: 5,
  },

  twin: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  twin_label: {
    marginTop: 5,
    fontSize: 14,
    color: "#5D6363",
    marginBottom: 5,
  },

  twin_input: {
    width: 160,
    height: 40,
    borderColor: "#B5B6B6",
    borderWidth: 1,
    borderRadius: 5,
  },

  container_buttons: {
    marginTop: "5%",
    alignItems: "center",
    height: "50%",
  },

  button: {
    backgroundColor: "#B11830",
    color: "#ffffff",
    borderRadius: 5,
    width: 180,
    height: 40,
    marginBottom: 10,
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  link: {
    color: "#5D6363",
    textDecorationLine: "underline",
    textAlign: "center",
  },
});
