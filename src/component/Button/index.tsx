import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';

// Define the type for the component props
interface NextButtonProps {
  onPress: () => void; // Function to handle button press
  text: string; // Text to display on the button
  buttonStyle?: ViewStyle; // Optional style for the button container
  textStyle?: TextStyle; // Optional style for the text inside the button
}

// Functional component for the NextButton
const NextButton: React.FC<NextButtonProps> = ({
  onPress,
  text,
  buttonStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]} // Merge default button styles with any additional styles passed in
      onPress={onPress} // Handle press event with the passed in function
    >
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

// Define styles for the button and text
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1A4D8F', // Background color of the button (green)
    padding: 10, // Padding around the button text
    borderRadius: 30, // Rounded corners for the button
    alignItems: 'center', // Center the text horizontally within the button
    width: '80%',
    margin: 30,
    marginBottom: -50,
    },
  text: {
    color: '#fff', // Color of the button text (white)
    fontSize: 16, // Font size of the button text
    fontWeight: 'bold', // Bold text
  },
});

export default NextButton;