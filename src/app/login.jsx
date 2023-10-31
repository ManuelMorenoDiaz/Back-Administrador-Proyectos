import React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import ContainerLogo from './components/ContainerLogo.jsx'

export default function Login( {navigation} ) {
  return (
    <View style={styles.container}>
      <View>
        <ContainerLogo></ContainerLogo>
        <View style={styles.container_inputs}>
            <View style={styles.text_inputs} >
              <Text style={styles.label}>Correo electrónico</Text>
              <TextInput style={styles.input}> </TextInput> 

              <Text style={styles.label}>Contraseña</Text>
              <TextInput style={styles.input}> </TextInput>
            </View>
            <View style={styles.container_buttons}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Password_Reset')}
              >
                <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Details')}
              >
                <Text style={styles.text_button}>Iniciar sesión</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Signup')}
              >
                <Text style={styles.link}>¿No tienes cuenta? ¡Regístrate!</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View> 
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
      width: '100%',
      height: '100%',
      display: 'flex',
  },

  container_inputs:{
    alignItems:'center',
    height:'50%',
  },

  text_inputs:{
    marginTop: 20,
  },

  label:{
    marginTop: 15,
    fontSize: 14,
    color: '#5D6363',
    marginBottom: 10,
  },

  input:{
    width: 330,
    height: 40,
    borderColor: '#B5B6B6',
    borderWidth: 1,
    borderRadius: 5,
  },

  container_buttons:{
    marginTop: 15,
    alignItems:'center',
    height:'50%',
  },

  button:{
    backgroundColor: '#B11830',
    color: '#ffffff',
    borderRadius: 5,
    width: 180,
    height: 43,
    marginTop: 20,
    marginBottom: 7,
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  text_button:{
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },

  link:{
    color: '#5D6363',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginTop: 10,
  },

})