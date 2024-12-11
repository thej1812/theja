import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeStackScreen from './scr/screens/HomeStackScreen';
import BookingStack from './scr/screens/Bookingstack';




const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home'; // Home icon
          } else if (route.name === 'Booking') {
            iconName = 'calendar-outline'; // Calendar icon
          } else if (route.name === 'Map') {
            iconName = 'map'; // Map icon
          }

          return <Ionicons nama={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Booking" component={BookingStack} />
      
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <TabNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
}
