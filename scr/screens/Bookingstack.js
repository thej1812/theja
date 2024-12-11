import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DoctorList from "./DoctorList";
import DoctorProfile from "./DoctorProfile";
import BookingScreen from "./BookingScreen";

const Stack = createStackNavigator();

export default function BookingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="DoctorList" 
        component={DoctorList} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="DoctorProfile" 
        component={DoctorProfile} 
        options={{ title: "Doctor Profile" }} 
      />
       <Stack.Screen 
        name="appo" 
        component={BookingScreen} 
        options={{ title: "Appointment" }} 
      />
    </Stack.Navigator>
  );
}
