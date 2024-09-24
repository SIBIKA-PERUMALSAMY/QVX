import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { IMAGE } from '../../images/image';
import NextButton from '../../component/Button';
import DotIndicator from '../../component/Button/DotIndicator'; 
import { routes } from '../../routes';

const Walkthroughhh: React.FC = () => {
  const navigation = useNavigation(); // Get navigation object from hook

  // Example index for demonstration
  const currentIndex = 2; 

  const handleSkip = () => {
    navigation.navigate(routes.LoginPage); // Redirect to login page if skipped
  };

  const handleNext = () => {
    navigation.navigate(routes.LoginPage); // Navigate to the login page on next
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      {/* Centered Image */}
      <View style={styles.imageContainer}>
      <Image source ={IMAGE.Walkthrough3Img} style={styles.image} />
      </View>

      {/* Dot Indicator */}
      <DotIndicator activeIndex={currentIndex} style={styles.dotIndicator} />

      {/* <Text style={styles.title}>Home Based Physiotherapy</Text> */}
      <Text style={styles.description}>
      Monitor Camera status effortlessly with our easy-to-navigate mobile app.
      </Text>

      {/* Next Button */}
      <NextButton
        onPress={handleNext}
        text={'Next'}
        buttonStyle={styles.nextButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 20,
  },
  skipButton: {
    position: 'absolute',
    top: 10,
    right: '5%',
  },
  skipText: {
    color: 'rgba(102, 102, 102, 1)', // Example gray color
    fontSize: 16,
  },
  imageContainer: {
    marginBottom: 20, // Space between the image and the dot indicator
    alignItems: 'center', // Center the image horizontally
  },
  image: {
    resizeMode: 'contain', // Ensure the image fits within its container
  },
  title: {
    color: 'rgba(14, 118, 109, 1)',
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    fontSize: 20,
    textAlign:'center',
    lineHeight: 26,
    marginBottom: 10, // Space between the title and description
  },
  description: {
    color: 'rgba(102, 102, 102, 1)',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Lato',
    lineHeight: 25,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30, // Space between the description and next button
  },
  dotIndicator: {
    marginBottom: 20, // Space between the dot indicator and the title
  },
  nextButton: {
    // position: 'absolute',
    // bottom: 50,
    // alignSelf: 'center',
    marginTop:'10%',
  },
});

export default Walkthroughhh;
