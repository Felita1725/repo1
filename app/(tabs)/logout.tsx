import React from 'react';
import { View, Text, StyleSheet, Button,Image, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ThankYouScreen = () => {

  const navigation = useNavigation();
 
  const handleLogoutPress = () => {
    (navigation as any).navigate("index");
  }; 

  return (
    <ImageBackground source={require('@/assets/images/bk.png')}
        style={styles.background} >
          
    <View style={styles.container}>
       <Image source={require('@/assets/images/poto-3.jpeg')} style={styles.Image} />

      <View style={styles.logoContainer}>
        {/* Add logos here using Image component */}
      </View>
      <Text style={styles.thankYouText}>"Thank you for your participation!"</Text>
      <Text style={styles.localThankYouText}>"Tenku tru!"</Text>
      <View>
    <TouchableOpacity
            style={styles.buttonSecondary1}
            onPress={() => handleLogoutPress()}
          >
            <Text style={styles.buttonText1}>Log out</Text>
      </TouchableOpacity>
    </View>
    </View>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    // Style for logo container
  },
  thankYouText: {
    fontSize: 25,
    marginVertical: 8,
    color: '#FFFFFF', // Assuming white color for text
    fontWeight: 'bold',
  },
  localThankYouText: {
    fontSize: 22,
    marginBottom: 30,
    color: '#FFFFFF', // Assuming white color for text
    fontWeight: 'bold',
  },
  Image:{
    width: 410,
    height:80,
    alignSelf: "center",
    borderRadius: 12,
    bottom: 200,
  },
  buttonSecondary1: {
    backgroundColor: "#FDD835", // Stylish blue for Sign In/Sign Up buttons
    borderRadius: 12,
    height: 50,
    width: 120,
    
  },
  buttonText1: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop:10,
  },
});

export default ThankYouScreen;
