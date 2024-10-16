import { useState } from 'react';
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, ImageBackground, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Feedback = () => {

  const navigation = useNavigation();
 
  const handleCompletePress = () => {
    (navigation as any).navigate("logout");
  };


  const [inputText, setInputText] = useState("");
  const handleNextPress = () => {
    Alert.alert('Submitted Text', inputText);
    setInputText('');
  
  };

  return (
    <ImageBackground source={require('@/assets/images/bk.png')}
    style={styles.background}  >

    <View style={styles.container}>
       <Image source={require('@/assets/images/poto-3.jpeg')} style={styles.Image} />
      <View style={styles.header}>
        {/* Add logos here */}
      </View>
      <Text style={styles.title}>Comments & Remarks</Text>
      <Text style={styles.subtitle}>In the field below, type any questions if you have comments.</Text>

      
      <TextInput
          style={styles.input}
          placeholder="Add text here"
          value={inputText}
          onChangeText={setInputText}
          placeholderTextColor="#888"
        />
       <TouchableOpacity
            style={styles.buttonSecondary1}
            onPress={() => handleNextPress()}
          >
            <Text style={styles.buttonText1}>Submit</Text>
      </TouchableOpacity>  
              
    </View>

    <View>
    <TouchableOpacity
            style={styles.buttonSecondary}
            onPress={() => handleCompletePress()}
          >
            <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
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
    padding: 20,
  },
  header: {
    // Style for header where logos will be placed
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF', // Assuming white color for text
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF', // Assuming white color for text
    marginBottom: 20,
  },
  input: {
      height: 150,
      width: 400,
      borderColor: "#ccc",
      borderWidth: 1,
      borderRadius: 12,
      paddingHorizontal: 15,
      marginBottom: 20,
      backgroundColor: "#fff",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
  },
  Image:{
    width: 410,
    height:80,
    alignSelf: "center",
    borderRadius: 12,
    bottom: 130,

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
  buttonSecondary: {
    backgroundColor: "#FDD835", // Stylish blue for Sign In/Sign Up buttons
    borderRadius: 12,
    height: 50,
    width: 120,
    left: 250,
    marginBottom: 30,
    
  },
  buttonText: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop:10,
  },
});

export default Feedback;
