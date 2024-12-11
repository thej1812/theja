import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const services = [
  {
    id: '1',
    title: 'Locate & Book Cabs',
    image: 'https://i.imgur.com/c9WVtb8.png',
    icon: 'directions-car',
    rating: 5,
  },
  {
    id: '2',
    title: 'Book An Appointment',
    image: 'https://i.imgur.com/8oHwDwY.png',
    icon: 'medical-services',
    rating: 4,
  },
  {
    id: '3',
    title: 'Find Doctors',
    image: 'https://i.imgur.com/c9WVtb8.png',
    icon: 'person-search',
    rating: 4.5,
  },
  {
    id: '4',
    title: 'Order Medicines',
    image: 'https://i.imgur.com/8oHwDwY.png',
    icon: 'local-pharmacy',
    rating: 4.2,
  },
];

const ServiceCard = ({ service }) => {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>

        <TouchableOpacity
          style={styles.likeButton}
          onPress={() => setLiked(!liked)}
        >
          <Icon
            name={liked ? 'favorite' : 'favorite-border'}
            size={32} 
            color="#FF0000" 
          />
        </TouchableOpacity>

        
        <Image source={{ uri: service.image }} style={styles.image} />
      </View>

      
      <View style={styles.ratingContainer}>
        {[...Array(5)].map((_, index) => (
          <Icon
            key={index}
            name="star"
            size={18}
            color={index < Math.floor(service.rating) ? '#FFD700' : '#E0E0E0'}
          />
        ))}
      </View>

      
      <View style={styles.cardContent}>
        <Text style={styles.title}>{service.title}</Text>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name={service.icon} size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ServicesScreen = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.headerContainer}>
        
        <TouchableOpacity style={styles.searchIcon}>
          <Icon name="search" size={32} color="black" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={services}
        renderItem={({ item }) => <ServiceCard service={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  backButton: {
    padding: 8,
  },
  searchIcon: {
    padding: 8,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 4,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 150,
  },
  likeButton: {
    position: 'absolute',
    top: 10,
    right: 10, 
    padding: 6,
    elevation: 3,
    zIndex: 1, 
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 8,
    paddingLeft: 16, 
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconButton: {
    backgroundColor: '#4CAF50', 
    padding: 8,
    borderRadius: 16,
  },
});

export default ServicesScreen;