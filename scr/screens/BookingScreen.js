import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Calendar } from "react-native-calendars"; 
import DateTimePicker from '@react-native-community/datetimepicker';



const BookingScreen = ({ navigation }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState("Afternoon");

  const timeSlots = {
    Morning: ["8:00 am", "9:00 am", "10:00 am", "11:00 am"],
    Afternoon: ["1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm"],
    Evening: ["6:00 pm", "7:00 pm", "8:00 pm"],
  };
  const handleConfirmation = () => {
    if (selectedDay && selectedTime) {
      alert(`Appointment confirmed on ${selectedDay} at ${selectedTime}`);
      
      navigation.navigate("Home");
    } else {
      alert("Please select a date and time!");
    }
  };
  return (
    <ScrollView style={styles.container}>
     
      <View style={styles.doctorInfo}>
        <Image source={require('../../assets/dr.jpg')} style={styles.profileImage} />
        <Text style={styles.doctorName}>Dr. Abcde Fghi</Text>
        <Text style={styles.specialization}>Cardiologist/Therapy</Text>
        <Text style={styles.experience}>30+ Years of experience in Cardiovascular surgery</Text>
        <Text style={styles.rating}>⭐⭐⭐⭐⭐ [50+]</Text>
      </View>

     
      <Text style={styles.sectionTitle}>Make an Appointment:</Text>
      <View style={styles.calendar}>
        <Calendar
          
          markedDates={{
            [selectedDay]: { selected: true, marked: true, selectedColor: "#6c9d08" },
          }}
          onDayPress={(day) => setSelectedDay(day.dateString)} 
          theme={{
            selectedDayBackgroundColor: "#6c9d08",
            selectedDayTextColor: "#ffffff",
          }}
        />
      </View>

    
      <Text style={styles.sectionTitle}>Choose Time:</Text>
      <View style={styles.timePeriods}>
        {Object.keys(timeSlots).map((period) => (
          <TouchableOpacity
            key={period}
            style={[
              styles.periodButton,
              selectedPeriod === period && styles.selectedPeriod,
            ]}
            onPress={() => setSelectedPeriod(period)}
          >
            <Text style={styles.periodText}>{period}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.timeSlots}>
        {timeSlots[selectedPeriod].map((time, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.timeSlot,
              selectedTime === time && styles.selectedTime,
            ]}
            onPress={() => setSelectedTime(time)}
          >
            <Text style={styles.timeText}>{time}</Text>
          </TouchableOpacity>
        ))}
      </View>

    
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmation}>
        <Text style={styles.confirmText}>Confirm Booking</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 16,
  },
  doctorInfo: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  doctorName: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  specialization: {
    fontSize: 16,
    color: "gray",
  },
  experience: {
    fontSize: 14,
    color: "darkgray",
    marginTop: 5,
  },
  rating: {
    fontSize: 14,
    color: "#ffcc00",
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  calendar: {
    marginBottom: 20,
  },
  timePeriods: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  periodButton: {
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  selectedPeriod: {
    backgroundColor: "#6c9d08",
  },
  periodText: {
    color: "black",
  },
  timeSlots: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
  timeSlot: {
    padding: 10,
    margin: 5,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  selectedTime: {
    backgroundColor: "#6c9d08",
  },
  timeText: {
    color: "black",
  },
  confirmButton: {
    backgroundColor: "#6c9d08",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 20,
  },
  confirmText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default BookingScreen;