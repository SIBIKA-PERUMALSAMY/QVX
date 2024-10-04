import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { ICONS } from '../../images/image/icon';
import {COLORS} from '../../component/Colors';
import CustomRow from '../../component/SettingsItem';
import {routes} from '../../routes';
import { IMAGE } from '../../images/image';

export const Settings = ({route}: {route: any}) => {
  const {User} = route.params;

  const navigation = useNavigation();
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [notificationOn, setNotificationOn] = useState(false);
  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility

  const toggleSwitch = (value: boolean) => {
    setIsSwitchOn(value);
  };

  const notificationSwitch = (value: boolean) => {
    setNotificationOn(value);
  };

  const handleLogOut = () => {
    setModalVisible(true); // Show the modal when the Logout button is pressed
  };

  const confirmLogout = () => {
    setModalVisible(false);
    navigation.navigate(routes.LoginPage); // Perform logout action and navigate
  };

  const cancelLogout = () => {
    setModalVisible(false); // Hide the modal if logout is canceled
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <Header
        title={'Settings'}
        onBackPress={() => navigation.goBack()}
        image={ICONS.edit}
        onIconPress={undefined}
      /> */}
      <View style={styles.content}>
        <View style={styles.avatarContainer}>
          <Image source={IMAGE.ProfileAvatarImg} style={styles.avatar} />
          <TouchableOpacity style={styles.cameraButton}>
            <Image source={ICONS.cam} style={styles.cameraIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.name}>{User.name}</Text>
          <Text style={[styles.name, {fontSize: 16, fontWeight: '600'}]}>
            Ms.
            {/* 27.07.1980 */}
          </Text>
          <Text style={[styles.name, {fontSize: 16, fontWeight: '600'}]}>
            +91 0987654321
            {/* 27.07.1980 */}
          </Text>
          {User.email ? (
            <Text style={[styles.name, {fontSize: 16, fontWeight: '600'}]}>
              {User.email}
            </Text>
          ) : (
            ''
          )}
          <Text style={[styles.name, {fontSize: 16, fontWeight: '600'}]}>
            {User.contactNo}
          </Text>
        </View>
      </View>
      <View style={styles.settingsContainer}>
        <Text style={[styles.name, {color: 'black', margin: 10}]}>
          General Settings
        </Text>
        <CustomRow
          icon1={ICONS.lang}
          title={'Language'}
          rightIcon
          rightText="English"
        />
        <CustomRow icon1={ICONS.privacy} title={'Privacy & Safety'} rightIcon />
        <CustomRow
          icon1={ICONS.Popup}
          title={'Popup Notification'}
          showSlider={true}
          sliderValue={notificationOn}
          onSliderChange={notificationSwitch}
        />
        {/* <CustomRow
          icon1={ICONS.theme}
          title="Dark Mode"
          showSlider={true}
          sliderValue={isSwitchOn}
          onSliderChange={toggleSwitch}
        /> */}
        <TouchableOpacity style={styles.helpButton}>
          <Image source={ICONS.help} />
          <Text style={styles.title}>Help</Text>
        </TouchableOpacity>

        <View>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogOut}>
            <Text style={[styles.title, {marginRight: 15}]}>Logout</Text>
            <Image source={ICONS.logout} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal for Logout Confirmation */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Logout</Text>
            <View style={styles.vertical}></View>
            <Text style={styles.modalMessage}>
              Are you sure you want to logout?
            </Text>
            <View style={styles.modalActions}>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={cancelLogout}>
                <Text style={[styles.buttonText, {color: COLORS.SurfieGreen}]}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={confirmLogout}>
                <Text style={styles.buttonText}>Yes, Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
  },
  avatarContainer: {
    position: 'relative',
    
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: COLORS.SurfieGreen,
  },
  cameraButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: COLORS.SurfieGreen,
    borderRadius: 20,
    padding: 7,
  },
  cameraIcon: {
    width: 15,
    height: 12,
  },
  rightContainer: {
    flex: 1,
    marginLeft: 16,
    padding: 15,
  },
  name: {
    color: COLORS.gray,
    fontSize: 18,
    fontWeight: 'bold',
  },
  settingsContainer: {
    margin: 16,
    backgroundColor: 'white',
    // borderWidth: 0.2,
    color: 'gray',
    // borderRadius: 10,
  },
  helpButton: {
    marginVertical: 13,
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  logoutButton: {
    marginTop: 150,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.gray,
    marginLeft: 15,
  },
  // Modal Styles
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: COLORS.gray,
    textAlign: 'center',
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 20,
    color: COLORS.gray,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 5,
  },
  confirmButton: {
    borderColor: COLORS.SurfieGreen,
    borderWidth: 1,
    padding: 10,
    width: '40%',
    borderRadius: 15,
  },
  cancelButton: {
    backgroundColor: COLORS.SurfieGreen,
    padding: 10,
    width: '40%',
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  vertical: {
    borderBottomWidth: 0.5,
    marginTop: 5,
    color: COLORS.platinum,
  },
});

export default Settings;
