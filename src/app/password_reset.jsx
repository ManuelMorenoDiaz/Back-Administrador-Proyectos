import React, { useEffect } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import ContainerLogo from './components/ContainerLogo.jsx'
import axios from "axios";

export default function Password_Reset({ navigation }) {


  {/*useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users/");
        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleEmails = ( ) => {

  }

  const handleSubmit = () => {

  }*/}


  return (
    <View style={styles.container}>
      <View>
        <ContainerLogo></ContainerLogo>
        <View style={styles.container_inputs}>
          <View style={styles.titleContainer}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <FontAwesome style={styles.backText} name="arrow-left" size={20} color="#000000" />
            </TouchableOpacity>
            <Text style={styles.text_title}>Restablecimiento de contraseña</Text>
          </View>
          <Text style={styles.text_description}>
            Introduce la dirección de correo electrónico que usaste para registrarte; se te enviará un correo con las indicaciones para restablecer la contraseña
          </Text>
          <View style={styles.hr} />
          <View style={styles.text_input} >
            <Text style={styles.label}>
              Correo electrónico
            </Text>
            <TextInput style={styles.input}> </TextInput> 
          </View>
          <Text style={styles.button}>Enviar</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  container_inputs: {
    alignItems: 'center',
    height: '50%',
  },
  backButton: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  backText: {
    fontSize: 22,
    marginRight: 20,
    paddingTop: 2,
  },

  titleContainer: {
    flexDirection: 'row', 
    alignItems: 'baseline',
  },
  text_title: {
    fontSize: 17,
    marginTop: 20,
    marginRight: 50,
    fontWeight: '500',
  },
  text_description: {
    textAlign: 'justify',
    marginTop: 20,
    marginHorizontal: 50,
  },
  hr: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: '85%',
    marginTop: 30,
    marginBottom: 30,
  },
  text_input: {
    alignItems: 'left',
  },
  label: {
    fontSize: 14,
    color: '#5D6363',
    marginBottom: 10,
  },
  input: {
    width: 330,
    height: 40,
    borderColor: '#B5B6B6',
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#B11830',
    color: '#ffffff',
    borderRadius: 5,
    width: 180,
    height: 40,
    margin: 30,
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
