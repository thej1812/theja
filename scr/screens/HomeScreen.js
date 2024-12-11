import React from 'react';
import {  ScrollView,View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'; 

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/profile.jpg')}
          style={styles.avatar}
        />
        <View style={styles.headerText}>
          <Text style={styles.greeting}>Hi,</Text>
          <Text style={styles.username}>Person One</Text>
        </View>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="document-text-outline" size={24} color="green" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color="gray" style={styles.searchIcon} />
        <TextInput placeholder="Search anything" style={styles.searchInput} />
      </View>

      {/* Appointment Banner */}
      <View style={styles.banner}>
        <Image
          source={require('../../assets/Mdoc.png')}
          style={styles.bannerImage}
        />
        <View style={styles.bannerText}>
          <Text>Looking for desired doctor?</Text>
          <TouchableOpacity>
            <Text style={styles.appointmentButton}>Book an appointment</Text>
          </TouchableOpacity>
        </View>
      </View>

       {/* Categories Section */}
       <View style={styles.sectionHeader}>
        <Text style={styles.username}>Categories</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
          <Text style={{ color: "green" }}>See All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.categories}>
        {[
          { name: 'Neurologist', icon: 'brain' },
          { name: 'Cardiologist', icon: 'heart' },
          { name: 'Dermatologist', icon: 'user-alt' },
          { name: 'Dentist', icon: 'tooth' },
        ].map((category, index) => (
          <View key={index} style={styles.category}>
            <FontAwesome5 name={category.icon} size={24} color="green" />
            <Text style={styles.categoryText}>{category.name}</Text>
          </View>
        ))}
      </View>
        <br></br>
      <View style={styles.sectionHeader}>
        <Text style={styles.username} >Services</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Services")}>
  <Text style={{ color: "green" }}>See All</Text>
</TouchableOpacity>

      </View>
      <View style={styles.services}>
        {[
          { name: 'Locate & Book Cabs', image: 'https://i.imgur.com/c9WVtb8.png' },
          { name: 'Book Your First Appointment', image: 'https://i.imgur.com/8oHwDwY.png' },
        ].map((service, index) => (
          <View key={index} style={styles.service}>
            <Image source={{ uri: service.image }} style={styles.serviceImage} />
            <Text style={styles.serviceText}>{service.name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  headerText: {
    marginLeft: 8,
    flexDirection: 'row',
  },
  greeting: {
    fontSize: 16,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  iconButton: {
    marginLeft: 'auto',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 8,
    color: 'gray',
  },
  searchInput: {
    flex: 1,
    borderWidth: 0,
  },
  banner: {
    flexDirection: 'row',
    backgroundColor: '#679400',
    
    borderRadius: 8,
    marginBottom: 16,
  },
  bannerImage: {
    width: 200,
    height: 200,
    borderRadius: 8,
  },
  bannerText: {
    marginLeft: 16,
    justifyContent: 'center',
  },
  appointmentButton: {
    backgroundColor: '#28a745',
    color: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 8,
    textAlign: 'center',
  },
  sectionHeader: {
    fontSize: 500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  category: {
    alignItems: 'center',
  },
  categoryText: {
    marginTop: 8,
    fontSize: 14,
  },
  services: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  service: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    overflow: 'hidden',
    width: '48%',
  },
  serviceImage: {
    width: '100%',
    height: 100,
  },
  serviceText: {
    padding: 8,
    fontSize: 14,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    marginTop: 4,
    fontSize: 12,
  },
});