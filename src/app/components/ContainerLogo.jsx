import React from "react";
import { StyleSheet ,View, Image, Text } from "react-native";

export default function containerLogo() {
  return(
    <View style={styles.container_logo}>
      <Image source={require('../../../assets/logo-ujed.png')} style={styles.logo} ></Image>
      <Text style={styles.title}>Gestor de proyectos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container_logo:{
    alignItems:'center',
    justifyContent:'center',
    height:'50%',
    backgroundColor:'#B11830',
  },
  logo:{
    width: 350,
    height: 160,
    resizeMode: 'cover',
  },
  title:{
    top: 40,
    fontSize: 26,
    color: '#ffffff',
    fontWeight: 'bold',
  },
})