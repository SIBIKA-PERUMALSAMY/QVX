// import React, {useState} from 'react';
// import {
//   View,
//   Alert,
//   StyleSheet,
//   Text,
//   Image,
//   ActivityIndicator,
// } from 'react-native';
// import NextButton from '../../component/Button';
// import {useNavigation} from '@react-navigation/native';
// import {routes} from '../../routes';
// import {IMAGE} from '../../images/image';
// import CustomTextInput from '../../component/CustomTextInput';
// import axios from 'axios';

// const Baseurl = 'https://66lm3itzuf.execute-api.us-east-1.amazonaws.com';

// const LoginPage: React.FC = () => {
//   const navigation = useNavigation();
//   const [patientId, setPatientId] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const [errors, setErrors] = useState<{patientId: string; password: string}>({
//     patientId: '',
//     password: '',
//   });
//   const [loading, setLoading] = useState<boolean>(false);

//   const handleLogin = async () => {
//     let hasErrors = false;

//     if (patientId.length < 3) {
//       setErrors(prevErrors => ({
//         ...prevErrors,
//         patientId: 'Enter valid Patient ID',
//       }));
//       hasErrors = true;
//     }

//     if (password.length < 5) {
//       setErrors(prevErrors => ({...prevErrors, password: 'Invalid Password'}));
//       hasErrors = true;
//     }

//     if (hasErrors) {
//       Alert.alert('Login Error', 'Invalid Patient ID or Password.');
//     } else {
//       setLoading(true);
//       const data = {
//         patientID: patientId,
//         password: password,
//       };

//       try {
//         const response = await axios.post(
//           `${Baseurl}/user/patientLogin`,
//           data,
//           {
//             headers: {
//               'Content-Type': 'application/json',
//             },
//           },
//         );
//         setLoading(false);
//         navigation.navigate(routes.BottomTab, {
//           User: response.data.user,
//         });
//       } catch (error) {
//         setLoading(false);
//         Alert.alert('Login Error', 'Invalid Patient ID or Password.');
//       }
//     }
//   };

//   return loading ? (
//     <View style={styles.loaderContainer}>
//       <ActivityIndicator size="large" color="#28a745" />
//     </View>
//   ) : (
//     <View style={styles.container}>
//       <View style={styles.imageContainer}>
//         <Image source={IMAGE.LoginPageImage} style={styles.image} />
//       </View>

//       <Text style={styles.heading}>Login</Text>
//       <Text style={styles.description}>Please login to continue our app</Text>

//       <CustomTextInput
//         label="Patient ID"
//         value={patientId}
//         placeholder="Enter Patient ID..."
//         onChangeText={text => {
//           setPatientId(text);
//           setErrors(prevErrors => ({...prevErrors, patientId: ''}));
//         }}
//         errorMessage={errors.patientId}
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
//       />

//       <Text
//         style={styles.forgotPassword}
//         onPress={() => navigation.navigate(routes.ForgotPasswordEmail)}>
//         Forgot Password?
//       </Text>

//       <NextButton
//         onPress={handleLogin}
//         text={'Next'}
//         buttonStyle={styles.nextButton}
//       />
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
//     marginBottom: 20,
//   },
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
//     textAlign: 'right',
//     color: '#666',
//     marginBottom: 20,
//     marginTop: 10,
//     marginLeft: 10,
//   },
//   nextButton: {
//     margin: 16,
//   },
// });

// export default LoginPage;




import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ActivityIndicator,
  Alert,
} from 'react-native';
import NextButton from '../../component/Button';
import { useNavigation } from '@react-navigation/native';
import { routes } from '../../routes';
import { IMAGE } from '../../images/image';
import CustomTextInput from '../../component/CustomTextInput';
import axios from 'axios';
// let Baseurl:string="http://localhost:3001";

const Baseurl = 'https://vx-bend-1.onrender.com';
const LoginPage: React.FC = () => {
  const navigation = useNavigation();
  const [customerId, setCustomerId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<{ customerId: string; password: string }>({
    customerId: '',
    password: '',
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    let hasErrors = false;

    // Validation for Patient ID
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

    // Show alert if any validation errors exist
    if (hasErrors) {
      return; // No need to proceed if there are errors
    }
    else {
      setLoading(true);
      const data = {
        customerId: customerId,
        password: password,
      };
      try {
        const response = await axios.post(
         `${Baseurl}/customer/login`,
          data,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
          
        );

        setLoading(false);
        console.log(response,'response');
        // Navigate to Dashboard on successful login
        navigation.navigate(routes.Dashboard);
        // navigation.navigate(routes.Dashboard, {
        //   patientDetails: response.data.user,
        // });
      } catch (error) {
        setLoading(false);
        Alert.alert('Login Error', 'Invalid Patient ID or Password.');
      }
    }

    // Uncomment the following code to integrate backend later
    /*
    setLoading(true);
    const data = {
      patientID: patientId,
      password: password,
    };

    try {
      const response = await axios.post(
        `https://yourapiurl.com/user/patientLogin`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      setLoading(false);
      // Navigate to Dashboard on successful login
      navigation.navigate(routes.Dashboard, {
        patientDetails: response.data.user,
      });
    } catch (error) {
      setLoading(false);
      Alert.alert('Login Error', 'Invalid Patient ID or Password.');
    }
    */

    // For now, simulate successful navigation after validation
    // navigation.navigate(routes.Dashboard);
  };

  return loading ? (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" color="#28a745" />
    </View>
  ) : (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={IMAGE.LoginLogoImg} style={styles.image} />
      </View>

      <Text style={styles.heading}>Login</Text>
      <Text style={styles.description}>Please login to continue our app</Text>

      <CustomTextInput
        label="Customer ID"
        value={customerId}
        placeholder="Enter Customer ID..."
        onChangeText={text => {
          setCustomerId(text);
          setErrors(prevErrors => ({ ...prevErrors, patientId: '' }));
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
          setErrors(prevErrors => ({ ...prevErrors, password: '' }));
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

      <Text
        style={styles.forgotPassword}
        onPress={() => navigation.navigate(routes.ForgotPasswordMob)}>
        Forgot Password?
      </Text>
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
