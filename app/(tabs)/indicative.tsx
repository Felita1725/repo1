import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity, Image, ImageBackground, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

;

const IndicativeInfoScreen = () => {
  const [formData, setFormData] = useState({
    province: '',
    district: '',
    llg: '',
    ward: '',
    censusUnit: '',
    censusUnitType: '',
    workloadNo: '',
    locality: '',
    section: '',
    lot: '',
    householdNo: '',
  });

  const navigation = useNavigation();

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNextPress = () => {
    if (
      formData.province === '' ||
      formData.district === '' ||
      formData.llg === '' ||
      formData.ward === '' ||
      formData.censusUnit === '' ||
      formData.censusUnitType === '' ||
      formData.workloadNo === '' ||
      formData.locality === '' ||
      formData.section === '' ||
      formData.lot === '' ||
      formData.householdNo === ''
    ) {
      Alert.alert('Validation Error', 'All fields are required.');
    } else {
      Alert.alert('Success', 'All fields are filled.');
      // Save form data (could save to state, context, etc. - here just a dummy function)
      saveFormData(formData);
      // Navigate to the next screen
      navigation.navigate('household confirmation');
    }
  };

  const saveFormData = (data) => {
    // Implement your save logic here if necessary
    console.log('Form Data Saved:', data);
  };

  
  return (
    
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground source={require('@/assets/images/bk.png')}
        style={styles.background} >

      <Image source={require('@/assets/images/poto-3.jpeg')} style={styles.Image} />
      <Text style={styles.headerText}>Indicative Information</Text>
      <View style={styles.inputContainer}>

      {/* Province */}
      <TextInput
        style={styles.input}
        value={formData.province}
        onChangeText={(value) => handleInputChange('province', value)}
        placeholder="Province"
      />

      {/* District */}
      <TextInput
        style={styles.input}
        value={formData.district}
        onChangeText={(value) => handleInputChange('district', value)}
        placeholder="District"
      />

      {/* LLG */}
      <TextInput
        style={styles.input}
        value={formData.llg}
        onChangeText={(value) => handleInputChange('llg', value)}
        placeholder="LLG"
      />

      {/* Ward */}
      <TextInput
        style={styles.input}
        value={formData.ward}
        onChangeText={(value) => handleInputChange('ward', value)}
        placeholder="Ward"
      />
      </View>

      <View style={styles.inputContainer}>

      {/* Census Unit */}
      <TextInput
        style={styles.input}
        value={formData.censusUnit}
        onChangeText={(value) => handleInputChange('censusUnit', value)}
        placeholder="Census Unit"
      />

      {/* Census Unit Type */}
      <TextInput
        style={styles.input}
        value={formData.censusUnitType}
        onChangeText={(value) => handleInputChange('censusUnitType', value)}
        placeholder="Census Unit Type"
      />

      {/* Workload No */}
      <TextInput
        style={styles.input}
        value={formData.workloadNo}
        onChangeText={(value) => handleInputChange('workloadNo', value)}
        placeholder="Workload No"
      />
      </View>

      <View style={styles.inputContainer}>

      {/* Locality */}
      <TextInput
        style={styles.input}
        value={formData.locality}
        onChangeText={(value) => handleInputChange('locality', value)}
        placeholder="Locality"
      />

      {/* Section */}
      <TextInput
        style={styles.input}
        value={formData.section}
        onChangeText={(value) => handleInputChange('section', value)}
        placeholder="Section"
      />

      {/* Lot */}
      <TextInput
        style={styles.input}
        value={formData.lot}
        onChangeText={(value) => handleInputChange('lot', value)}
        placeholder="Lot"
      />

      {/* Household No */}
      <TextInput
        style={styles.input}
        value={formData.householdNo}
        onChangeText={(value) => handleInputChange('householdNo', value)}
        placeholder="Household No"
      />
       </View>

<TouchableOpacity
        style={styles.buttonSecondary1}
        onPress={() => handleNextPress()}
      >
        <Text style={styles.buttonText1}>Next</Text>
      </TouchableOpacity>
      </ImageBackground>

    </ScrollView>

    
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 20,
    marginTop: 22,
  },
  inputContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    
    
  },
  input: {
    borderWidth: 1,
    borderColor: '#B2DFDB',
    backgroundColor: '#E0F7FA',
    padding: 10,
    fontSize: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#ffcc00", // Modern green color
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Elevation for Android
    width: 32,
  },
  buttonSecondary1: {
    backgroundColor: "#FDD835", // Stylish blue for Sign In/Sign Up buttons
    borderRadius: 12,
    height: 50,
    width: 120,
    left: 255,
    marginBottom: 30,
  },
  buttonText1: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop:10,
  },
  Image:{
    width: 410,
    height:80,
    alignSelf: "center",
    borderRadius: 12,
    marginTop: 25,

  },
});

export default IndicativeInfoScreen;
function setErrorMessage(arg0: string) {
  throw new Error('Function not implemented.');
}

