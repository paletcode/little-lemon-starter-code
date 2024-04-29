import * as React from 'react';
import { validateEmail } from '../utils/index';
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, Alert } from 'react-native';
import logoLemonAlt from '../assets/little-lemon-logo-grey.png'; // the smaller logo



const SubscribeScreen = () => {


  const [emailAdd, onChangeEmail] = React.useState('');


  // Add subscribe screen code here
  const subscribeProcess = () => {
    if (validateEmail(emailAdd) != null) {
      Alert.alert("Thank you!", "You're done! we will let you know when we will be online")
      onChangeEmail('')

    } else {
      Alert.alert("Error", "Please use a valid email")
     
    }

  }
  
  return (
    <ScrollView keyboardDismissMode='on-drag' style={styles.container}>
      <Image style={styles.logo} source={logoLemonAlt} resizeMode='center'></Image>

      <Text style={styles.description}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>

      <TextInput style={styles.input} onChangeText={onChangeEmail} placeholder='Your email' value={emailAdd} keyboardType='email-address'>
      </TextInput>

      {emailAdd == '' ? (
        <Pressable style={styles.disabledbutton} onPress={subscribeProcess} disabled={!emailAdd.length}>
          <Text style={styles.textButton}>
            Subscribe
          </Text>
        </Pressable>
      ) : (
        <Pressable style={styles.button} onPress={subscribeProcess} disabled={!emailAdd.length}>
          <Text style={styles.textButton}>
            Subscribe
          </Text>
        </Pressable>
      )
      }

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    margin: 20
  },

  logo: {
    width: 'auto',
    height: 150,
    alignContent: 'center',
    margin: 10
  },

  description: {
    fontSize: 18,
    textAlign: 'center',
    padding: 12
  },

  button: {
    backgroundColor: '#0CA794',
    borderRadius: 8,
    padding: 12,
    textAlign: 'center',
  },


  disabledbutton: {
    backgroundColor: '#919191',
    borderRadius: 8,
    padding: 12,
    textAlign: 'center',
  },

  textButton: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },

  input: {
    fontSize: 14,
    borderWidth: 1,
    padding: 12,
    marginBottom: 10,
    borderColor: '#0CA794',
    borderRadius: 3,

  }

});

export default SubscribeScreen;