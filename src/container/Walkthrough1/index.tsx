import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import NextButton from '../../component/Button';
import {useNavigation} from '@react-navigation/native';
import { routes } from '../../routes';
import DotIndicator from '../../component/Button/DotIndicator';
import { IMAGE } from '../../images/image';

const Walkthrough: React.FC = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0); // State to manage the active dot

  const handleSkip = () => {
    navigation.navigate(routes.LoginPage);
  };

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < 3) {
      setCurrentIndex(nextIndex);
      navigation.navigate(routes.Walkthroughh);
    } else {
      navigation.navigate(routes.LoginPage);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      {/* Centered Image */}
      <View style={styles.imageContainer}>
      <Image source ={IMAGE.Walkthrough1Img} style={styles.image}/> 
      </View>

      {/* Dot Indicator */}
      <DotIndicator activeIndex={currentIndex} style={styles.dotIndicator} />

      {/* <Text style={styles.title}>Video Call Integration</Text> */}
      <Text style={styles.description}>
      Continuous surveillance ensures ultimate security against camera interupt 24/7.
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
    fontFamily: 'Poppins-Black', // Applying Poppins font
  },
  imageContainer: {
    marginBottom: 20, // Spacing between the image and the dot indicator
    alignItems: 'center', // Center the image horizontally
  },
  image: {
    resizeMode: 'contain', // Ensure the image fits within its container
  },
  title: {
    color: 'rgba(14, 118, 109, 1)',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 26,
    textAlign:'center',
    marginBottom: 10, // Spacing between the title and description
    fontFamily: 'Poppins', // Applying Poppins font for the title
  },
  description: {
    color: 'rgba(102, 102, 102, 1)',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 25,
    marginLeft:20,
    marginRight:20,
    fontFamily: 'Lato-Black', // Applying Lato font for the description
    marginBottom: 30, // Spacing between the description and the next button
  },
  dotIndicator: {
    marginBottom: 20, // Spacing between the dot indicator and the title
  },
  nextButton: {
    // position: 'absolute',
    // bottom: 50,
    // alignSelf: 'center',
    marginTop:'10%',
  },
});

export default Walkthrough;


