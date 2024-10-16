import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image, TouchableOpacity, ImageBackground } from 'react-native';

const HouseholdConfirmationScreen = () => {
  const navigation = useNavigation();
 
  const handleNextPress = () => {
    (navigation as any).navigate("feedback");
  };
  const [missingPeople, setMissingPeople] = useState(0);

  const handleEnterPress = () => {
    if  (!missingPeople || isNaN(missingPeople)) {
      Alert.alert('Invalid Input', 'Please enter a valid number of people.');
    } else {
      Alert.alert('Submitted', `Missing people: ${missingPeople}`);
    }
  };

  // const handleNextPress = () => {
  //   // Add your navigation logic here
  //   console.log('Next button pressed');
  // };

  return (
    <ImageBackground source={require('@/assets/images/bk.png')}
    style={styles.background}  >
    <View style={styles.container}>
       <Image source={require('@/assets/images/poto-3.jpeg')} style={styles.Image} />

      <Text style={styles.headerText}>Person Per Household Confirmation</Text>

      <Text style={styles.subHeaderText}>
        If there is anyone missing / left out / not currently at the house?
      </Text>

      <View style={styles.inputContainer}>
      <Text style={styles.labelText}>Please enter their total number:</Text>

      <TextInput
              style={styles.input}
              value={missingPeople}
              onChangeText={setMissingPeople}
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

      <Text style={styles.noteText}>If none, then click next</Text>

      
      <TouchableOpacity
            style={styles.buttonSecondary}
            onPress={() => handleNextPress()}
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
  buttonSecondary: {
    backgroundColor: "#FDD835", // Stylish blue for Sign In/Sign Up buttons
    borderRadius: 12,
    height: 50,
    width: 100,
    left: 280,
    top: 100,
  },
  buttonText: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop:10,
    
  },
  buttonSecondary1: {
    backgroundColor: "#FDD835", // Stylish blue for Sign In/Sign Up buttons
    borderRadius: 12,
    height: 50,
    width: 120,
    left: 140,
  },
  buttonText1: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop:10,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  subHeaderText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FFD740',
    marginBottom: 20,
  },
  labelText: {
    fontSize: 16,
    color: '#E0F7FA',
    marginBottom: 10,
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
  noteText: {
    fontSize: 14,
    color: '#FFD740',
    textAlign: 'center',
    marginVertical: 20,
  },
  Image:{
    width: 410,
    height:80,
    alignSelf: "center",
    borderRadius: 12,
    bottom: 120,
  },
});

export default HouseholdConfirmationScreen;
