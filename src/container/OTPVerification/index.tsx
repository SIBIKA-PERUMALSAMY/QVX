// import React, { useState, useEffect, useRef } from 'react';
// import {
//   View,
//   TextInput,
//   StyleSheet,
//   Text,
//   Image,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';

// import NextButton from '../../component/Button';
// import { useNavigation } from '@react-navigation/native';
// import { routes } from '../../routes';
// import { IMAGE } from '../../images/image';

// const OTPverification: React.FC = () => {
//   const { resendOtp } = useAuth(); // Assuming you have a resendOtp method
//   const [otp, setOtp] = useState(['', '', '', '']);
//   const [timer, setTimer] = useState(30);
//   const [resendEnabled, setResendEnabled] = useState(false);
//   const navigation = useNavigation();

//   const inputRefs = useRef<(TextInput | null)[]>([]); // Ref array for inputs

//   useEffect(() => {
//     let interval: NodeJS.Timeout;
//     if (timer > 0) {
//       interval = setInterval(() => {
//         setTimer(prev => {
//           if (prev <= 1) {
//             setResendEnabled(true);
//             clearInterval(interval);
//             return 0;
//           }
//           return prev - 1;
//         });
//       }, 1000);
//     }
//     return () => clearInterval(interval);
//   }, [timer]);

//   const handleResetPassword = () => {
//     navigation.navigate(routes.CreateNewPassword); // Navigate to create new password page
//   };

//   const handleResendOtp = async () => {
//     try {
//       await resendOtp(); // Call resendOtp method from context
//       setTimer(30); // Reset timer
//       setResendEnabled(false); // Disable resend option until timer runs out
//       Alert.alert('Success', 'OTP has been resent.');
//     } catch (error) {
//       Alert.alert('Error', 'Failed to resend OTP. Please try again.');
//     }
//   };

//   const handleChangeText = (text: string, index: number) => {
//     const newOtp = [...otp];
//     newOtp[index] = text;
//     setOtp(newOtp);

//     if (text && index < otp.length - 1) {
//       inputRefs.current[index + 1]?.focus();
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.imageContainer}>
//         <Image source={IMAGE.OTPVerificationImage} style={styles.image} />
//       </View>

//       <Text style={styles.description}>
//         Please enter the 4-digit code sent to your Email Address
//       </Text>

//       <View style={styles.otpContainer}>
//         {otp.map((digit, index) => (
//           <TextInput
//             key={index}
//             ref={ref => (inputRefs.current[index] = ref)}
//             value={digit}
//             onChangeText={text => handleChangeText(text, index)}
//             style={styles.otpInput}
//             keyboardType="numeric"
//             maxLength={1}
//             textAlign="center"
//           />
//         ))}
//       </View>

//       <View style={styles.timerContainer}>
//         <Text style={[styles.timer, timer < 10 && styles.timerRed]}>
//           {`0:${timer.toString().padStart(2, '0')}`}
//         </Text>
//         {resendEnabled ? (
//           <TouchableOpacity onPress={handleResendOtp}>
//             <Text style={styles.resendText}>Resend Code</Text>
//           </TouchableOpacity>
//         ) : (
//           <Text style={styles.resendText}>Resend Code</Text>
//         )}
//       </View>

//       <NextButton
//         onPress={handleResetPassword}
//         text={'Verify'} // Navigation only
//         buttonStyle={styles.nextButton}
//       />

//       <Text style={styles.spamNotice}>
//         Don’t receive the code? Check your email spam folder
//       </Text>

//       <View style={styles.createAccountContainer}>
//         <Text style={styles.noAccountText}>Remember password?</Text>
//         <Text
//           style={styles.createAccountText}
//           onPress={() => navigation.navigate(routes.LoginPage)}
//         >
//           Login
//         </Text>
//       </View>
//     </View>
//   );
// };

// // Styles for the OTPverification component
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: 'white',
//   },
//   imageContainer: {
//     alignItems: 'center',
//     marginBottom: 30,
//   },
// //   image: {
// //     width: 130,
// //     height: 130,
// //     resizeMode: 'contain',
// //   },
//   description: {
//     fontSize: 14,
//     marginBottom: 20,
//     color: 'rgba(102, 102, 102, 1)',
//     textAlign: 'center',
//   },
//   otpContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '80%', // Reduced width for better alignment
//     marginBottom: 20,
//   },
//   otpInput: {
//     width: 45,
//     height: 45,
//     textAlign: 'center',
//     fontSize: 20,
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//     marginHorizontal: 5,
//   },
//   nextButton: {
//     width: '80%', // Reduced width for better alignment
//     marginBottom: 20,
//   },
//   timerContainer: {
//     flexDirection: 'row',
//     width: '80%', // Reduced width for better alignment
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   timer: {
//     fontSize: 16,
//     color: 'rgba(102, 102, 102, 1)',
//   },
//   timerRed: {
//     color: 'red',
//   },
//   resendText: {
//     color: 'rgba(14, 118, 109, 1)',
//     fontWeight: 'bold',
//   },
//   spamNotice: {
//     color: 'rgba(102, 102, 102, 1)',
//     textAlign: 'center',
//     marginTop: 10,
//   },
//   createAccountContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   noAccountText: {
//     color: 'rgba(102, 102, 102, 1)',
//     marginRight: 5,
//   },
//   createAccountText: {
//     color: 'rgba(14, 118, 109, 1)',
//     fontWeight: 'bold',
//   },
// });

// export default OTPverification;


import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import NextButton from '../../component/Button';
import { useNavigation } from '@react-navigation/native';
import { routes } from '../../routes';
import { IMAGE } from '../../images/image';
import { useAuth } from '../../context';
const OTPverification: React.FC = () => {
  const { resendOtp } = useAuth(); // Get resendOtp from useAuth hook
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(30);
  const [resendEnabled, setResendEnabled] = useState(false);
  const navigation = useNavigation();

  const inputRefs = useRef<(TextInput | null)[]>([]); // Ref array for inputs

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            setResendEnabled(true);
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleResetPassword = () => {
    navigation.navigate(routes.CreateNewPassword); // Navigate to create new password page
  };

  const handleResendOtp = async () => {
    try {
      await resendOtp(); // Call resendOtp method from context
      setTimer(30); // Reset timer
      setResendEnabled(false); // Disable resend option until timer runs out
      Alert.alert('Success', 'OTP has been resent.');
    } catch (error) {
      Alert.alert('Error', 'Failed to resend OTP. Please try again.');
    }
  };

  const handleChangeText = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={IMAGE.OTPverification} style={styles.image} />
      </View>

      <Text style={styles.description}>
      Please enter the 4digit code sent to your phone number.      </Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            value={digit}
            onChangeText={(text) => handleChangeText(text, index)}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            textAlign="center"
          />
        ))}
      </View>

      <View style={styles.timerContainer}>
        <Text style={[styles.timer, timer < 10 && styles.timerRed]}>
          {`0:${timer.toString().padStart(2, '0')}`}
        </Text>
        {resendEnabled ? (
          <TouchableOpacity onPress={handleResendOtp}>
            <Text style={styles.resendText}>Resend Code</Text>
          </TouchableOpacity>
        ) : (
          <Text style={styles.resendText}>Resend Code</Text>
        )}
      </View>

      <NextButton
        onPress={handleResetPassword}
        text={'Verify'} // Navigation only
        buttonStyle={styles.nextButton}
      />

      {/* <Text style={styles.spamNotice}>
        Don’t receive the code? Check your email spam folder
      </Text> */}

      <View style={styles.createAccountContainer}>
        <Text style={styles.noAccountText}>Remember password?</Text>
        <Text
          style={styles.createAccountText}
          onPress={() => navigation.navigate(routes.LoginPage)}
        >
          Login
        </Text>
      </View>
    </View>
  );
};

// Styles for the OTPverification component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
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
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%', // Reduced width for better alignment
    marginBottom: 20,
  },
  otpInput: {
    width: 45,
    height: 45,
    textAlign: 'center',
    fontSize: 15,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 30,
    marginHorizontal: 5,
  },
  nextButton: {
    width: '80%', // Reduced width for better alignment
    marginBottom: 20,
    borderRadius:2,
  },
  timerContainer: {
    flexDirection: 'row',
    width: '80%', // Reduced width for better alignment
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  timer: {
    fontSize: 16,
    color: 'rgba(102, 102, 102, 1)',
  },
  timerRed: {
    color: 'red',
  },
  resendText: {
    color: '#666666',
    fontWeight: 'bold',
  },
  spamNotice: {
    color: 'rgba(102, 102, 102, 1)',
    textAlign: 'center',
    marginTop: 10,
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
});

export default OTPverification;
