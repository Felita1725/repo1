import {
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Alert,
  ImageBackground
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";

export default function HomeScreen() {
  const navigation = useNavigation();

  // State for username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Check for hardcoded username and password
    if (username.trim() === "Kila Kela" && password === "1234567") {
      (navigation as any).navigate("indicative");// Navigate to indicative page
    } else {
      // Handle error (e.g., show an alert)
      Alert.alert("Invalid username or password");
    }
  };

  const handleDashboard = () => {
    (navigation as any).navigate("Indicative Information");
  };
  const logo = require('@/assets/images/poto-3.jpeg');

  
  return (
    <ImageBackground source={require('@/assets/images/bk.png')}
    style={styles.background}  >

    <View style={styles.container}>


      <Image source={logo} style={styles.logo} />
     
      <Text style={styles.imagename}>Hello!
      </Text>
      <Text style={styles.headerText}>Welcome back! Kindly enter your log in details</Text>
      
      {/* Username Input */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#ddd" // Placeholder color
        value={username}
        onChangeText={setUsername}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#ddd" // Placeholder color
        secureTextEntry={true} // Hides the password text
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={handleLogin} // Call the login handler
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      
    </View>
    </ImageBackground>
  );
}

// Styling for a modern, attractive layout
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    
  },
  logo: {
   width: 410,
    height:80,
    alignSelf: "center",
    borderRadius: 12,
    bottom: 130,
    
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#e6b800", // Changed to white for contrast against dark background
    textAlign: "center",
    marginBottom: 10, // Adjust space between text and input fields
   
  },
  subText: {
    fontSize: 16,
    color: "#ddd", // Light gray for better contrast
    textAlign: "center",
    marginBottom: 20, // Adjust space between text and input fields
  },
  input: {
    height: 50,
    width: '80%', // Width of the input fields
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20, // Space between input fields and buttons
    color: "#fff", // Text color
  },
  button: {
    backgroundColor: "#4CAF50", // Modern green color
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Elevation for Android
  },
  buttonSecondary: {
    backgroundColor: "#ffcc00", // Stylish blue for Sign In/Sign Up buttons
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Elevation for Android
  },
  buttonText: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  imagename: {
    fontSize: 25,
    color: "#ff6666", // Light gray for better contrast
    textAlign: "left",
    marginBottom: 0, 
    marginTop: 20, // Add some space between the logo and the text
  },
 
});