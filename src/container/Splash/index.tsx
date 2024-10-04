// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// import { routes } from '../../routes';
// // Assuming you have the logo stored in IMAGE.Logo
// import { IMAGE } from '../../images/image';

// const SplashScreen: React.FC = () => {
//   const [backgroundColor, setBackgroundColor] = useState('blue'); // Initially blue background
//   const navigation = useNavigation();

//   // This effect will change the background color to white after 5 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setBackgroundColor('white');

//     }, 5000); // 5 seconds delay

//     // Clean up the timer when the component unmounts
//     return () => clearTimeout(timer);
//   }, []);

//   // Navigate to the next screen when the user taps the logo
//   const handleLogoClick = () => {
//     navigation.navigate(routes.Walkthrough); // Replace 'NextPage' with your desired route
//   };

//   return (
//     <View style={[styles.container, { backgroundColor }]}>
//       <TouchableOpacity onPress={handleLogoClick}>
//         <Image source={IMAGE.Splash2LogoImg} style={styles.logo} />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logo: {
//     width: 200,  // Adjust the width of the logo as necessary
//     height: 200, // Adjust the height of the logo as necessary
//     resizeMode: 'contain', // Ensures the image maintains its aspect ratio
//   },
// });

// export default SplashScreen;


import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { routes } from '../../routes';
// Assuming you have the logos stored in IMAGE.Splash1LogoImg, IMAGE.Splash2LogoImg, and IMAGE.BottomLogo
import { IMAGE } from '../../images/image';
import { COLORS } from '../../component/Colors';

const SplashScreen: React.FC = () => {
  const [backgroundColor, setBackgroundColor] = useState(COLORS.SurfieGreen); // Initially blue background
  const navigation = useNavigation();

  // This effect will change the background color to white after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setBackgroundColor('white');
    }, 3000); // 3 seconds delay

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  // Navigate to the next screen when the user taps the logo
  const handleLogoClick = () => {
    navigation.navigate(routes.Walkthrough); // Replace 'Walkthrough' with your desired route
  };

  // Conditionally render the logo based on the background color
  const logoSource = backgroundColor === COLORS.SurfieGreen ? IMAGE.Splash1LogoImg : IMAGE.Splash2LogoImg;

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <TouchableOpacity onPress={handleLogoClick}>
        <Image source={logoSource} style={styles.logo} />
      </TouchableOpacity>

      {backgroundColor === 'white' && (
        <View style={styles.bottomContainer}>
          <Text style={styles.fromText}>from</Text>
          <Image source={IMAGE.BotLogoSplashImg} style={styles.bottomLogo} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,  // Adjust the width of the logo as necessary
    height: 200, // Adjust the height of the logo as necessary
    resizeMode: 'contain', // Ensures the image maintains its aspect ratio
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 50, // Adjust as necessary
    alignItems: 'center',
  },
  fromText: {
    fontSize: 16, // Adjust font size as necessary
    color: 'gray', // Adjust color if needed
    marginBottom: 0, // Space between "from" text and bottom logo
  },
  bottomLogo: {
    width: 130, // Adjust size as necessary
    height: 80, // Adjust size as necessary
    resizeMode: 'contain',
  },
});

export default SplashScreen;
