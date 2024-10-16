import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HouseholdScreen = () => {
  const [householdSize, setHouseholdSize] = useState('');

  const handleNextPress = () => {
    (navigation as any).navigate("person");
  };

  const handleEnterPress = () => {
    const size = parseInt(householdSize, 10);
    if (!householdSize || isNaN(size)) {
      Alert.alert('Invalid Input', 'Please enter a valid number of people.');
    } else {
      Alert.alert('Submitted', `Number of people: ${size}`);
    }
  };

  
  const navigation = useNavigation();

  

  return (
    <ImageBackground source={require('@/assets/images/bk.png')}
        style={styles.background} >
    <View style={styles.container}>
       <Image source={require('@/assets/images/poto-3.jpeg')} style={styles.Image} />
      <Text style={styles.headerText}>Total Person Per Household</Text>


      <View style={styles.inputContainer}> 

      <Text style={styles.labelText}>Enter the No. of people currently living at the house:</Text>

      <TextInput
        style={styles.input}
        value={householdSize}
        onChangeText={setHouseholdSize}
        placeholder="Enter"
        keyboardType="numeric"
      />
      </View> 

      <TouchableOpacity
            style={styles.buttonSecondary1}
            onPress={() => handleEnterPress()}
          >
            <Text style={styles.buttonText1}>Enter</Text>
      </TouchableOpacity>

      <Text style={styles.noteText}>Click next to continue</Text>

      
      <TouchableOpacity
            style={styles.buttonSecondary1}
            onPress={() => handleNextPress()}
          >
            <Text style={styles.buttonText1}>Next</Text>
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
    padding: 20,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 40,
    marginTop: 50,
  },
  labelText: {
    fontSize: 18,
    color: '#000000',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#6FC1CC',
  },
  input: {
    borderWidth: 1,
    borderColor: '#B2DFDB',
    backgroundColor: '#E0F7FA',
    padding: 10,
    fontSize: 16,
    borderRadius: 8,
    marginBottom: 20,
    textAlign: 'center',
  },
   Image:{
    width: 410,
    height:80,
    alignSelf: "center",
    borderRadius: 12,
    marginTop: 20,
    marginBottom: 50,

  },
  buttonSecondary1: {
    backgroundColor: "#FDD835", // Stylish blue for Sign In/Sign Up buttons
    borderRadius: 12,
    height: 50,
    width: 120,
    left: 130,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText1: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop:10,
  },
  noteText: {
    fontSize: 14,
    color: '#FFD740',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default HouseholdScreen;
