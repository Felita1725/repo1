import {
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
  
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import AuthComponent from "@/components/auth/AuthComponent";
import React from "react";

export default function HomeScreen() {
  const navigation = useNavigation();
 
  const handleSignIn = () => {
    (navigation as any).navigate("authentication");
  };



  

  return (
    <ImageBackground source={require('@/assets/images/bk.png')}
        style={styles.background} >
          
        <View style={styles.container}>
      
          {/* Two Text Messages */}
          <Text style={styles.headerText}> BE COUNTED, LEAVE NO ONE BEHIND</Text>
          <Text style={styles.censusInfo}>PAPUA NEW GUINEA NATIONAL POPULATION CENSUS PORTAL</Text>

          <Text style={styles.subText}> Explore and manage your content with ease. </Text>
          <Image source={require('@/assets/images/poto-2.png')} style={styles.Image} />
        
          <TouchableOpacity
            style={styles.buttonSecondary}
            onPress={() => handleSignIn()}
          >
            <Text style={styles.buttonText}>Get Started</Text>
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
    // backgroundColor: "#1D8A99", // Light background for contrast against buttons
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 10,
    
  },

  censusInfo: {
    color: '#ffcc00',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 5,
    fontWeight:"condensed"
  },
  subText: {
    fontSize: 16,
    color: "#b30000",
    textAlign: "center",
    marginBottom: 40, // Space between text and buttons
    fontWeight:"condensed",
    
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
    fontWeight: "bold",
    textAlign: "center",
    marginTop:10,
  },
  Image:{
    width:350,
    height:300,
    marginBottom: 10, // Adjust space between text and button
  }
  
});
