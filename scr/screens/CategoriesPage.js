import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons"; 

const categories = [
  { id: 1, name: "Neurologist", icon: require("../../assets/i1.png") },
  { id: 2, name: "Cardiologist", icon: require("../../assets/i2.png") },
  { id: 3, name: "Dermatologist", icon: require("../../assets/i2.png") },
  { id: 4, name: "Dentist", icon: require("../../assets/i2.png") },
  { id: 5, name: "Dentist", icon: require("../../assets/i2.png") },
  { id: 1, name: "Neurologist", icon: require("../../assets/i1.png") },
  { id: 2, name: "Cardiologist", icon: require("../../assets/i2.png") },
  { id: 3, name: "Dermatologist", icon: require("../../assets/i2.png") },
  { id: 4, name: "Dentist", icon: require("../../assets/i2.png") },
  { id: 1, name: "Neurologist", icon: require("../../assets/i1.png") },
  { id: 2, name: "Cardiologist", icon: require("../../assets/i2.png") },
  { id: 5, name: "Dentist", icon: require("../../assets/i2.png") },
];

export default function CategoriesPage() {
  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={item.icon} style={styles.icon} />
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );
  
  const handleSearchPress = () => {
    console.log("Search button pressed");
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.iconRow}> 
        <TouchableWithoutFeedback onPress={handleSearchPress}>
          <Ionicons name="search" size={24} color="#333" style={styles.iconButton} />
        </TouchableWithoutFeedback>
      </View>

      <FlatList
        data={categories}
        numColumns={4} 
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={renderCategory}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingHorizontal: 16,
  },
  iconButton: {
    padding: 8,
  },
  header: {
    marginBottom: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  grid: {
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 80,
    height: 100,
    alignItems: "center",
    margin: 8,
    backgroundColor: "#E8F5E9",
    borderRadius: 8,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  text: {
    fontSize: 12,
    fontWeight: "600",
    color: "#4CAF50",
    textAlign: "center",
  },
});

