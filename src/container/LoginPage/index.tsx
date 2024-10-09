// import React, {useState} from 'react';
// import {
//   View,
//   StyleSheet,
//   Text,
//   Image,
//   ActivityIndicator,
//   Alert,
// } from 'react-native';
// import NextButton from '../../component/Button';
// import {useNavigation} from '@react-navigation/native';
// import {routes} from '../../routes';
// import {IMAGE} from '../../images/image';
// import CustomTextInput from '../../component/CustomTextInput';
// import axios from 'axios';

// const Baseurl = 'https://vx-bend-1.onrender.com';

// const LoginPage: React.FC = () => {
//   const navigation = useNavigation();
//   const [customerId, setCustomerId] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const [errors, setErrors] = useState<{customerId: string; password: string}>({
//     customerId: '',
//     password: '',
//   });
//   const [loading, setLoading] = useState<boolean>(false);

//   const handleLogin = async () => {
//     let hasErrors = false;

//     // Validation for Customer ID
//     if (customerId.length < 3) {
//       setErrors(prevErrors => ({
//         ...prevErrors,
//         customerId: 'Enter a valid Customer ID',
//       }));
//       hasErrors = true;
//     }

//     // Validation for Password
//     if (password.length < 5) {
//       setErrors(prevErrors => ({
//         ...prevErrors,
//         password: 'Invalid Password',
//       }));
//       hasErrors = true;
//     }

//     // Show alert if any validation errors exist
//     if (hasErrors) {
//       return; // No need to proceed if there are errors
//     } else {
//       setLoading(true);
//       const data = {
//         customerId: customerId,
//         password: password,
//       };
//       try {
//         const response = await axios.post(`${Baseurl}/customer/login`, data, {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });

//         setLoading(false);
//         console.log(response, 'response');
//         // Navigate to Dashboard on successful login
//         navigation.navigate(routes.Dashboard, {customerId: customerId});
//       } catch (error) {
//         setLoading(false);
//         Alert.alert('Login Error', 'Invalid Customer ID or Password.');
//       }
//     }
//   };

//   return loading ? (
//     <View style={styles.loaderContainer}>
//       <ActivityIndicator size="large" color="#1A4D8F" />
//     </View>
//   ) : (
//     <View style={styles.container}>
//       <View style={styles.imageContainer}>
//         {IMAGE.LoginLogoImg ? (
//           <Image source={IMAGE.LoginLogoImg} style={styles.image} />
//         ) : (
//           <Text>Image not available</Text>
//         )}
//       </View>

//       <Text style={styles.heading}>Login</Text>
//       <Text style={styles.description}>Please login to continue our app</Text>

//       <CustomTextInput
//         label="Customer ID"
//         value={customerId}
//         placeholder="Enter Customer ID..."
//         onChangeText={text => {
//           setCustomerId(text);
//           setErrors(prevErrors => ({...prevErrors, customerId: ''}));
//         }}
//         errorMessage={errors.customerId}
//         containerStyle={errors.customerId ? styles.errorInput : {}}
//       />
//       <CustomTextInput
//         label="Password"
//         value={password}
//         placeholder="Enter Password..."
//         onChangeText={text => {
//           setPassword(text);
//           setErrors(prevErrors => ({...prevErrors, password: ''}));
//         }}
//         isPassword={true}
//         errorMessage={errors.password}
//         containerStyle={errors.password ? styles.errorInput : {}}
//       />

//       <NextButton
//         onPress={handleLogin}
//         text={'Next'}
//         buttonStyle={styles.nextButton}
//       />

//       <Text
//         style={styles.forgotPassword}
//         onPress={() => navigation.navigate(routes.ForgotPasswordMob)}>
//         Forgot Password?
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   loaderContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   imageContainer: {
//     alignItems: 'center',
//     marginBottom: 60,
//   },
//   // image: {
//   //   width: 200,
//   //   height: 200,
//   // },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     alignSelf: 'center',
//     color: '#666',
//   },
//   description: {
//     fontSize: 14,
//     marginBottom: 20,
//     color: '#666',
//     textAlign: 'center',
//   },
//   forgotPassword: {
//     width: '90%',
//     textAlign: 'center',
//     color: '#666',
//     margin: 20,
//     bottom: -70,
//   },
//   nextButton: {
//     marginVertical: 60,
//     margin: 30,
//     borderRadius: 2,
//   },
//   errorInput: {
//     borderColor: 'red',
//     borderWidth: 1,
//   },
// });

// export default LoginPage;

import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ActivityIndicator,
  Alert,
} from 'react-native';
import NextButton from '../../component/Button';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../routes';
import {IMAGE} from '../../images/image';
import CustomTextInput from '../../component/CustomTextInput';
import axios from 'axios';

const Baseurl = 'https://vx-bend-1.onrender.com';

const LoginPage: React.FC = () => {
  const navigation = useNavigation();
  const [customerId, setCustomerId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<{customerId: string; password: string}>({
    customerId: '',
    password: '',
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    let hasErrors = false;

    // Validation for Customer ID
    if (customerId.length < 3) {
      setErrors(prevErrors => ({
        ...prevErrors,
        customerId: 'Enter a valid Customer ID',
      }));
      hasErrors = true;
    }

    // Validation for Password
    if (password.length < 5) {
      setErrors(prevErrors => ({
        ...prevErrors,
        password: 'Invalid Password',
      }));
      hasErrors = true;
    }

    if (hasErrors) {
      Alert.alert('Login Error', 'Invalid Customer ID or Password.');
    } else {
      setLoading(true);
      const data = {
        customerId: customerId,
        password: password,
      };
      try {
        const response = await axios.post(`${Baseurl}/customer/login`, data, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        console.log(response.data); // Log the complete response

        if (response.data.status === 200 && response.data.response) {
          const customerData = response.data.response;
          console.log(customerData, 'dfgh');
          navigation.navigate(routes.Dashboard, {customerId: customerId});
        } else {
          Alert.alert('Login Error', response.data.message || 'Login failed.');
        }
      } catch (error) {
        Alert.alert('Login Error', 'Invalid Customer ID or Password.');
      }
    }
  };

  return loading ? (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" color="#1A4D8F" />
    </View>
  ) : (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {IMAGE.LoginLogoImg ? (
          <Image source={IMAGE.LoginLogoImg} style={styles.image} />
        ) : (
          <Text>Image not available</Text>
        )}
      </View>

      <Text style={styles.heading}>Login</Text>
      <Text style={styles.description}>Please login to continue our app</Text>

      <CustomTextInput
        label="Customer ID"
        value={customerId}
        placeholder="Enter Customer ID..."
        onChangeText={text => {
          setCustomerId(text);
          setErrors(prevErrors => ({...prevErrors, customerId: ''}));
        }}
        errorMessage={errors.customerId}
        containerStyle={errors.customerId ? styles.errorInput : {}}
      />
      <CustomTextInput
        label="Password"
        value={password}
        placeholder="Enter Password..."
        onChangeText={text => {
          setPassword(text);
          setErrors(prevErrors => ({...prevErrors, password: ''}));
        }}
        isPassword={true}
        errorMessage={errors.password}
        containerStyle={errors.password ? styles.errorInput : {}}
      />

      <NextButton
        onPress={handleLogin}
        text={'Next'}
        buttonStyle={styles.nextButton}
      />

      {/* <Text
        style={styles.forgotPassword}
        onPress={() => navigation.navigate(routes.ForgotPasswordMob)}>
        Forgot Password?
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  // image: {
  //   width: 200,
  //   height: 200,
  // },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
    color: '#666',
  },
  description: {
    fontSize: 14,
    marginBottom: 20,
    color: '#666',
    textAlign: 'center',
  },
  forgotPassword: {
    width: '90%',
    textAlign: 'center',
    color: '#666',
    margin: 20,
    bottom: -70,
  },
  nextButton: {
    marginVertical: 60,
    margin: 30,
    borderRadius: 2,
  },
  errorInput: {
    borderColor: 'red',
    borderWidth: 1,
  },
});

export default LoginPage;
