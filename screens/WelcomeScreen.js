import * as React from 'react';
import { Image, Pressable, View, StyleSheet, Text } from 'react-native';
import logoLemon from '../assets/little-lemon-logo.png';

const WelcomeScreen = ({ navigation }) => {
    // Add welcome screen code here.
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={logoLemon} resizeMode='center'></Image>
            <Text style={styles.description}>
                Little Lemon, your local Mediterranean Bistro.
            </Text>

            <Pressable style={styles.button} onPress={() => navigation.navigate('Subscribe')}>
            <Text style = {styles.textButton}>
                Newsletter
            </Text>
            </Pressable>
        </View>)

};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    margin: 20
  },

  logo:{
    width:'auto',
    height: 150,
    alignContent: 'center',
    margin:10
  },

  description:{
    fontSize: 18,
    textAlign: 'center',
    padding: 12
  }, 

  button:{
    backgroundColor : '#0CA794',
    borderRadius: 8,
    padding: 12,
    textAlign: 'center'
  },

  textButton:{
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  }

});


export default WelcomeScreen;

