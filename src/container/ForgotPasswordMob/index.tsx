// import React, { useState } from 'react';
// import { View, TextInput, StyleSheet, Text, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import NextButton from '../../component/Button';
// import { routes } from '../../routes';
// import { IMAGE } from '../../images/image';

// const ForgotPasswordMob: React.FC = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const navigation = useNavigation();

//   const handleNavigateToOtpVerification = () => {
//     navigation.navigate(routes.OTPverification); // Navigate to OTP verification page
//   };

//   // const handleNavigateToForgotPasswordEmail = () => {
//   //   navigation.navigate(routes.ForgotPasswordEmail); // Navigate to ForgotPasswordEmail page
//   // };

//   return (
//     <View style={styles.container}>
//       <View style={styles.imageContainer}>
//         <Image source={IMAGE.ForgotPasswordMobImg} style={styles.image} />
//       </View>

//       <Text style={styles.description}>
//         Please enter your Mobile Number to receive a verification code
//       </Text>

//       <Text style={styles.label}>Mobile Number</Text>
//       <TextInput
//         placeholder="Enter Mobile Number..."
//         value={phoneNumber}
//         onChangeText={setPhoneNumber}
//         keyboardType="phone-pad" // Use phone keyboard type
//         style={styles.input}
//       />

//       <NextButton
//         onPress={handleNavigateToOtpVerification} // Pass the navigation handler
//         text={'Send OTP'}
//         buttonStyle={styles.nextButton}
//       />

//       {/* <View style={styles.orContainer}>
//         <View style={styles.separator} />
//         <Text style={styles.orText}>Or</Text>
//         <View style={styles.separator} />
//       </View> */}

//       {/* New Text for Email OTP Option */}
//       {/* <Text
//         style={styles.emailOtpText}
//         onPress={handleNavigateToForgotPasswordEmail}>
//         Prefer to receive OTP via email?
//       </Text> */}

//       <View style={styles.createAccountContainer}>
//         <Text style={styles.noAccountText}>Remember password?</Text>
//         <Text
//           style={styles.createAccountText}
//           onPress={() => navigation.navigate(routes.LoginPage)}>
//           Login
//         </Text>
//       </View>
//     </View>
//   );
// };

// // Styles for the ForgotPasswordMob component
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   imageContainer: {
//     alignItems: 'center',
//     marginBottom: 30, // Adjusted to bring the image closer to the top
//   },
//   description: {
//     fontSize: 14,
//     marginBottom: 20,
//     color: 'rgba(102, 102, 102, 1)',
//     textAlign: 'center',
//     // margin: 20,
//     marginRight: 10,
//     marginLeft:10,
//     // eslint-disable-next-line no-dupe-keys
//     marginBottom:30,
//   },
//   label: {
//     width: '90%',
//     fontSize: 14,
//     marginBottom: 5,
//     color: 'rgba(102, 102, 102, 1)',
//     textAlign: 'left', // Align label text to the left
//   },
//   input: {
//     width: '90%',
//     padding: 10, // Increased padding for better touch target
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 20,
//     borderRadius: 30,
//   },
//   // nextButton: {
//   //   width: '90%',
//   //   marginBottom: 20,
//   // },
//   nextButton: {
//     // marginVertical: 60,
//     width: '80%',
//     margin: 30,
//     borderRadius:2,
//   },
//   createAccountContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 20, // Added margin to separate from the button
//   },
//   noAccountText: {
//     color: 'rgba(102, 102, 102, 1)',
//     marginRight: 5,
//     // marginVertical: 90,
//     bottom: -90,
//   },
//   createAccountText: {
//     color: '#1A4D8F',
//     fontWeight: 'bold',
//     bottom: -90,
//   },
//   orContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 80,
//   },
//   separator: {
//     height: 1,
//     flex: 1,
//     backgroundColor: 'gray',
//   },
//   orText: {
//     marginHorizontal: 10,
//     color: 'rgba(102, 102, 102, 1)',
//   },
//   // Added style for the email OTP text
//   emailOtpText: {
//     color: 'rgba(14, 118, 109, 1)',
//     fontWeight: 'bold',
//     marginTop: 10,
//     textAlign: 'center', // Center the text
//   },
// });

// export default ForgotPasswordMob;


import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Image, TouchableOpacity, Modal, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NextButton from '../../component/Button';
import { routes } from '../../routes';
import { IMAGE } from '../../images/image';

const countryCodes = [
  { code: '+91', country: 'India' },
  { code: '+1', country: 'USA' },
  { code: '+44', country: 'UK' },
  // Add more country codes as needed
];

const ForgotPasswordMob: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountryCode, setSelectedCountryCode] = useState('+91');
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleNavigateToOtpVerification = () => {
    navigation.navigate(routes.OTPverification); // Navigate to OTP verification page
  };

  const handleCountryCodeSelect = (code: string) => {
    setSelectedCountryCode(code);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={IMAGE.ForgotPasswordMobImg} style={styles.image} />
      </View>

      <Text style={styles.description}>
        Please enter your Mobile Number to receive a verification code
      </Text>

      <View style={styles.countryCodeContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.countryCodeButton}>
          <Text style={styles.countryCodeText}>{selectedCountryCode}</Text>
        </TouchableOpacity>
        <TextInput
          placeholder="Enter Mobile Number..."
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad" // Use phone keyboard type
          style={styles.input}
        />
      </View>

      <NextButton
        onPress={handleNavigateToOtpVerification} // Pass the navigation handler
        text={'Send OTP'}
        buttonStyle={styles.nextButton}
      />

      <View style={styles.createAccountContainer}>
        <Text style={styles.noAccountText}>Remember password?</Text>
        <Text
          style={styles.createAccountText}
          onPress={() => navigation.navigate(routes.LoginPage)}>
          Login
        </Text>
      </View>

      {/* Modal for country code selection */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalView}>
          <FlatList
            data={countryCodes}
            keyExtractor={(item) => item.code}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleCountryCodeSelect(item.code)} style={styles.modalItem}>
                <Text style={styles.modalItemText}>{item.code} - {item.country}</Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

// Styles for the ForgotPasswordMob component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  description: {
    fontSize: 14,
    marginBottom: 20,
    color: 'rgba(102, 102, 102, 1)',
    textAlign: 'center',
    marginHorizontal: 10,
  },
  countryCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginBottom: 20,
  },
  countryCodeButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginRight: 10,
  },
  countryCodeText: {
    fontSize: 16,
    color: 'rgba(102, 102, 102, 1)',
  },
  input: {
    flex: 1,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 30,
  },
  nextButton: {
    width: '80%',
    margin: 30,
    borderRadius: 2,
  },
  createAccountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  noAccountText: {
    color: 'rgba(102, 102, 102, 1)',
    marginRight: 5,
  },
  createAccountText: {
    color: '#1A4D8F',
    fontWeight: 'bold',
  },
  modalView: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
  },
  modalItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  modalItemText: {
    fontSize: 16,
  },
  closeButton: {
    padding: 15,
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    color: '#1A4D8F',
  },
});

export default ForgotPasswordMob;
