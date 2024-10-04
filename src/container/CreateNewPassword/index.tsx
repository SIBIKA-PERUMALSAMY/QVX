import React, { useState } from 'react';
import {
  View,
  TextInput,
  Alert,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { useAuth } from '../../context';
import NextButton from '../../component/Button';
import { useNavigation } from '@react-navigation/native';
import { routes } from '../../routes';
import { IMAGE } from '../../images/image';
import { ICONS } from '../../images/image/icon';

const CreateNewPassword: React.FC = () => {
  const { login } = useAuth();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [passwordError, setPasswordError] = useState(''); // State for error message
  const navigation = useNavigation();

  const handleConfirm = () => {
    if (!password || !confirmPassword) {
      setPasswordError('Password fields cannot be empty.'); // Set error if either field is empty
    } else if (password !== confirmPassword) {
      setPasswordError('Passwords do not match.'); // Set error if passwords don't match
    } else {
      setPasswordError(''); // Clear error if passwords match and are not empty
      setModalVisible(true);
    }
  };

  const handleModalClose = () => {
    setModalVisible(false);
    navigation.navigate(routes.LoginPage); // Navigate after closing modal
  };

  return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={handleModalClose}>
        <View style={styles.modalContainer}>
          
          <View style={styles.modalContent}>
          <Image source={IMAGE.BigDropImg}style={styles.BigDrop1}/>
          <Image source={IMAGE.BigDropImg}style={styles.BigDrop2}/>
          <Image source={IMAGE.SmallDropImg}style={styles.SmallDrop1}/>
          <Image source={IMAGE.SmallDropImg}style={styles.SmallDrop2}/>
          <Image source={IMAGE.SmallDropImg}style={styles.SmallDrop3}/>
          <Image source={IMAGE.SmallDropImg}style={styles.SmallDrop4}/>
          <Image source={IMAGE.ModalImg}style={styles.Modalimage}/>
          <Image source={IMAGE.BigDropImg}style={styles.BigDrop3}/>
          <Image source={IMAGE.SmallDropImg}style={styles.SmallDrop5}/>
          <Image source={IMAGE.SmallDropImg}style={styles.SmallDrop6}/>
          <Image source={IMAGE.SmallDropImg}style={styles.SmallDrop7}/>
          <Image source={IMAGE.SmallDropImg}style={styles.SmallDrop8}/>
          <Image source={IMAGE.BigDropImg}style={styles.BigDrop4}/>
            <Text style={styles.modalTitle}>Success</Text>
            <Text style={styles.modalMessage}>
              You have successfully reset your password.
            </Text>
            <TouchableOpacity style={styles.doneButton} onPress={handleModalClose}>
              <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.imageContainer}>
        <Image source={IMAGE.CreateNewPasswordImg} style={styles.image} />
      </View>

      <Text style={styles.description}>
        Your New Password must be different from previous used password
      </Text>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          placeholder="Enter new password"
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setPasswordVisible(!isPasswordVisible)}>
          <Image source={isPasswordVisible ? ICONS.eye : ICONS.eyeoff} style={styles.eyeImage} />
        </TouchableOpacity>
      </View>

      {/* Confirm Password Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          secureTextEntry={!isConfirmPasswordVisible}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={[styles.input, passwordError ? styles.inputError : null]} // Apply red border on error
          placeholder="Confirm new password"
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setConfirmPasswordVisible(!isConfirmPasswordVisible)}>
          <Image source={isConfirmPasswordVisible ? ICONS.eye : ICONS.eyeoff} style={styles.eyeImage} />
        </TouchableOpacity>
      </View>

      {/* Error Message */}
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

      <NextButton
        onPress={handleConfirm}
        text={'Confirm'}
        buttonStyle={styles.nextButton}
      />
    </View>
  );
};

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
  Modalimage:{
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    marginBottom: 20,
    color: 'rgba(102, 102, 102, 1)',
    textAlign: 'center',
    margin: 20,
  },
  inputContainer: {
    width: '90%',
    marginBottom: 30,
    position: 'relative',
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: 'rgba(102, 102, 102, 1)',
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 30,
  },
  inputError: {
    borderColor: 'red', // Red border for error
  },
  errorText: {
    color: 'red', // Red text for error message
    marginBottom: 20,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 40,
  },
  eyeImage: {
    width: 24,
    height: 24,
  },
  nextButton: {
    width: '80%',
    marginBottom: 20,
    borderRadius: 2,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#1A4D8F',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  doneButton: {
    backgroundColor: '#1A4D8F',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  doneButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  SmallDrop1:{
    position:'absolute',
    top: 15,
    left: 120,
  },
  SmallDrop2:{
    position:'absolute',
    top: 45,
    left: 80,
  },
  SmallDrop3:{
    position:'absolute',
    top: 30,
    left: 190,
  },
  SmallDrop4:{
    position:'absolute',
    top: 15,
    left: 240,
  },
  SmallDrop5:{
    position:'absolute',
    top: 120,
    left: 270,
  },
  SmallDrop6:{
    position:'absolute',
    top: 100,
    left: 220,
  },
  SmallDrop7:{
    position:'absolute',
    top: 140,
    left: 30,
  },
  SmallDrop8:{
    position:'absolute',
    top: 70,
    left: 40,
  },
  BigDrop1:{
    position:'absolute',
    top: 60,
    left: 250,
  },
  BigDrop2:{
    position:'absolute',
    top: 30,
    left: 20,
  },
  BigDrop3:{
    position:'absolute',
    top: 120,
    left: 60,
  },
  BigDrop4:{
    position:'absolute',
    top: 130,
    left: 220,
  },
});

export default CreateNewPassword;
