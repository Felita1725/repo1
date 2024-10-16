import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  Button,
  StyleSheet,
  Platform,
  FlatList,
  Alert,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  addPerson,
  getPersons,
  updatePerson,
  deletePerson,
  initializeDB,
  Person,
} from "@/database"; // Import initializeDB

import Checkbox from 'expo-checkbox';
import { useNavigation } from "@react-navigation/native";


const Dashboard = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Select Gender");
  const [relation, setRelation] = useState('');
  const [maritial, setMaritial] = useState('');
  const [citizenship, setCitizenship] = useState('');
  
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [persons, setPersons] = useState<Person[]>([]);
  const [selectedPerson, setSelectedPerson] = useState<number | null>(null);
  const [editingPersonId, setEditingPersonId] = useState<number | null>(null); // Track if updating a person
    
  
  const onChangeDate = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === "ios");
    setDate(currentDate);
  };

  const fetchPersons = async () => {
    const allPersons = await getPersons();
    setPersons(allPersons);
  };

  useEffect(() => {
    const setupDatabase = async () => {
      await initializeDB();
      fetchPersons();
    };

    setupDatabase();
  }, []);

  const handleSubmit = async () => {
    if (
      !firstName ||
      !lastName ||
      !phone ||
      !email ||
     !relation ||  
     !maritial ||
     citizenship === "Select Citizenship" ||    
     gender === "Select Gender"
    ) {
      Alert.alert("Error", "Please fill in all fields correctly.");
      return;
    }

    try {
      if (editingPersonId) {
        // Update existing person
        await updatePerson(
          editingPersonId,
          firstName,
          lastName,
          phone,
          email,
          date.toISOString(),
          gender,
          relation,
          maritial,
          citizenship
        );
        console.log("Person updated successfully");
      } else {
        // Add new person
        const id = await addPerson(
          firstName,
          lastName,
          phone,
          email,
          date.toISOString(),
          gender,
          relation,
          maritial,
          citizenship
          
        );
        console.log("Person created successfully with ID:", id);
      }
      resetForm();
      fetchPersons(); // Refresh the list
    } catch (error) {
      console.error("Error submitting person:", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deletePerson(id);
      console.log("Person deleted successfully");
      fetchPersons(); // Refresh the list after deleting
    } catch (error) {
      console.error("Error deleting person:", error);
    }
  };

  const handleUpdateClick = (person: Person) => {
    // Populate the form with the selected person's data
    setFirstName(person.firstName);
    setLastName(person.lastName);
    setPhone(person.phone);
    setEmail(person.email);
    setGender(person.gender);
    setDate(new Date(person.date)); // Assuming dateOfBirth is a string
    setEditingPersonId(person.id); // Set the ID for updating
    setRelation(person.relation);
    setMaritial(person.maritial);
    setCitizenship(person.citizenship);
    
  };

  const resetForm = () => {
    // Clear the form after submission or update
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setGender("Select Gender");
    setDate(new Date());
    setEditingPersonId(null); // Reset ID for creating new entries
    setRelation('');
    setMaritial('');
    setCitizenship('');
  
  };

  const navigation = useNavigation();

  const handleNextPress = () => {
    // code to handle the browse action
    (navigation as any).navigate("household confirmation");
  };

  return (
    <ScrollView>
       <ImageBackground source={require('@/assets/images/bk.png')}
    style={styles.background}  >

      <View style={styles.container}>

      <Image source={require('@/assets/images/poto-3.jpeg')} style={styles.Image} /> 
      
        <Text style={styles.header}>Person Information</Text>

        <View style={styles.inputContainer}>        

        <TextInput
          style={styles.input}
          placeholder="First Name" 
          value={firstName}
          onChangeText={setFirstName}
          placeholderTextColor="#888"
        />

        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
          placeholderTextColor="#888"
        />

        <TextInput
          style={styles.input}
          placeholder="Phone"
          value={phone}
          onChangeText={setPhone}
          keyboardType="numeric"
          placeholderTextColor="#888"
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#888"
        />
        </View>

        <View style={styles.inputContainer}>
        <Picker
          selectedValue={gender}
          onValueChange={(itemValue) => setGender(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label={"Select Gender"} value="" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>

          
        <Picker
          selectedValue={relation}
          onValueChange={(itemValue) => setRelation(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label={"Relation to Head of Household"} />
          <Picker.Item label="Head of Household" value="head of household" />
          <Picker.Item label="Wife" value="wife" />
          <Picker.Item label="Own Son" value="own son" />
          <Picker.Item label="Own Daughter" value="own daughter" />
          <Picker.Item label="Son/Daughter in-Law" value="son/daughter in-law" />
          <Picker.Item label="Adopted/Step Child" value="adopted/step child" />
          <Picker.Item label="Father/Mother" value="father/mother" />
          <Picker.Item label="Brother/Sister" value="brother/sister" />
          <Picker.Item label="Grand/Great-grand Child" value="grand/great-grand child" />
          <Picker.Item label="Father/Mother in-Law" value="father/mother in-law" />
          <Picker.Item label="Brother/Sister in-Law" value="brother/sister in-law" />
          <Picker.Item label="Other Relative" value="other relative" />
          <Picker.Item label="Non-Relative" value="non-relative" />
         </Picker>

            <Picker
          selectedValue={maritial}
          onValueChange={(itemValue) => setMaritial(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label={"Martial Status"} value="" />
          <Picker.Item label="Single" value="single" />
          <Picker.Item label="Married" value="married" />
          <Picker.Item label="Divorced" value="divorced" />
          <Picker.Item label="Widow" value="widow" />
        </Picker>

        </View>

        <View style={styles.inputContainer}>
        <Picker
          selectedValue={citizenship}
          onValueChange={(itemValue) => setCitizenship(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label={"Select Citizenship"} value="" />
          <Picker.Item label="Non-PNG Citizen" value="non-png citizen" />
          <Picker.Item label="PNG Citizen" value="png citizen" />
          
          
        </Picker>
        
    </View>
    </View>

    <View style={styles.inputContainer}>     
        <View>
          <Button
            title="Select Date of Birth"
            onPress={() => setShowDatePicker(true)}
          />
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onChangeDate}
            />
          )}
          <Text style={styles.dateText}>
            Date of Birth: {date.toDateString()}
          </Text>
        </View>
        </View>

        <Button 
          title={selectedPerson ? "Update" : "Submit"}
          onPress={handleSubmit}
        />

        {/* Table to display records */}
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>First Name</Text>
            <Text style={styles.tableHeaderText}>Last Name</Text>
            <Text style={styles.tableHeaderText}>Phone</Text>
            <Text style={styles.tableHeaderText}>Email</Text>
            <Text style={styles.tableHeaderText}>Gender</Text>
            <Text style={styles.tableHeaderText}>Date of Birth</Text>
            <Text style={styles.tableHeaderText}>Relation to Head of Household</Text>
            <Text style={styles.tableHeaderText}>Maritial Status</Text>
            <Text style={styles.tableHeaderText}>Citizenship</Text>
            <Text style={styles.tableHeaderText}>Actions</Text>

          </View>
          {persons.map((person) => (
            <View key={person.id} style={styles.tableRow}>
              <Text style={styles.tableRowText}>{person.firstName}</Text>
              <Text style={styles.tableRowText}>{person.lastName}</Text>
              <Text style={styles.tableRowText}>{person.phone}</Text>
              <Text style={styles.tableRowText}>{person.email}</Text>
              <Text style={styles.tableRowText}>{person.gender}</Text>
              <Text style={styles.tableRowText}>
                {new Date(person.date).toDateString()}
              </Text>
              <Text style={styles.tableRowText}>{person.relation}</Text>
              <Text style={styles.tableRowText}>{person.maritial}</Text>
              <Text style={styles.tableRowText}>{person.citizenship}</Text>
              <View style={styles.actionButtons}>
                <TouchableOpacity
                  style={styles.updateButton}
                  onPress={() => handleUpdateClick(person)}
                >
                  <Text style={styles.buttonText}>Update</Text>_
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => handleDelete(person.id)}
                >
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
                    
              </View>
             </View>
          ))}
        </View>
      <View>
                <TouchableOpacity
            style={styles.buttonSecondary1}
            onPress={() => handleNextPress()}
          >
            <Text style={styles.buttonText1}>Next</Text>
      </TouchableOpacity>
      </View>

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
    flex: 1,
    padding: 20,
    justifyContent: "center",
        
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
    marginBottom: 30,
    marginTop: 20,
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
    height: 50,
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
  picker: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  label: {
    margin: 8,
  },

  dateText: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 16,
    color: "#666",
  },
  personContainer: {
    marginBottom: 20,
  },
  tableContainer: {
    marginTop: 20,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f1f1f1",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  tableHeaderText: {
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000000",
  },
  tableRow: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  tableRowText: {
    flex: 1,
    textAlign: "center",
    color: "#ccffff",
  },
  actionButtons: {
    flexDirection: "row",
  },
  updateButton: {
    backgroundColor: "#4CAF50",
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  deleteButton: { backgroundColor: "#F44336", padding: 5, borderRadius: 5 },
  buttonText: { color: "#fff", fontWeight: "bold" },

  check: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },

  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },

  head: {
    textAlign:"left",
    fontSize: 20,
    fontWeight:"bold"   
  },

  Image:{
    width: 410,
    height:80,
    alignSelf: "center",
    borderRadius: 12,
    marginTop: 25,

  },
  buttonSecondary1: {
    backgroundColor: "#FDD835", // Stylish blue for Sign In/Sign Up buttons
    borderRadius: 12,
    height: 50,
    width: 120,
    left: 255,
    marginBottom: 30,
    marginTop: 10,
  },
  buttonText1: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop:10,
  },
});

export default Dashboard;
