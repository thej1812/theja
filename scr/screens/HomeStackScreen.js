// HomeStackScreen.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen"; 
import CategoriesPage from "./CategoriesPage"; 
import ServicesScreen from "./ServicesScreen";
const HomeStack = createStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }}  
      />
       <HomeStack.Screen
        name="Services"
        component={ServicesScreen}
        options={{ title: "Services" }} 
      />
      <HomeStack.Screen 
        name="Categories" 
        component={CategoriesPage} 
        options={{ title: "Categories" }} 
      />
    </HomeStack.Navigator>
  );
}
