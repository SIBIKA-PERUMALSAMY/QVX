import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {ICONS} from '../../images/image/icon';
import {IMAGE} from '../../images/image';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../component/Colors';
import {routes} from '../../routes';
import ServiceBox from '../../component/ServicesBox';
import AppointmentCard from '../../component/AppointmentCard';
import moment from 'moment';
import axios from 'axios';

const Baseurl = 'https://vx-bend-1.onrender.com';
let KitIndex = 0;
interface IKits {
  id: string;
  customerId: string;
  visionXId: string;
  latitude: string;
  longitude: string;
  location: string;
  numberOfCameras: number;
  cameraStatuses: any[]; // Assuming cameraStatuses is an array of strings (statuses)
}
const Dashboard = ({route}: any) => {
  const customerId = route.params?.customerId || '';
  const _customerDetails = {
    id: '',
    customerId: '',
    name: '',
    password: '',
    contactNumber: null,
    email: '',
    address: '',
    pincode: null,
    createdAt: '',
    version: null,
    status: false,
  };
  const [customerDetails, setcustomerDetails] = useState({..._customerDetails});
  const [kitsData, setKitsData] = useState<IKits[]>([]);
  const [loading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const GetCustomerDetails = async () => {
    if (customerId != '') {
      try {
        const _res = await axios.get(
          `https://vx-bend-1.onrender.com/customer/get-info/${customerId}`,
        );
        let _data = _res.data.message;
        console.log(_data, 'data');
        let data: any = {};
        data = {
          id: _data._id,
          customerId: _data.customerId,
          name: _data.name,
          password: _data.password,
          contactNumber: _data.contactNumber,
          email: _data.email,
          address: _data.address,
          pincode: _data.pincode,
          createdAt: _data.createdAt,
          version: data._v,
          status: _data.status,
        };
        setcustomerDetails({...data});
        fetchKitsData();
      } catch (error) {
        console.error('Error fetching customer details', error);
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  };
  const fetchKitsData = async () => {
    try {
      const response = await axios.post(
        `https://vx-bend-1.onrender.com/kit/get-kits/${customerId}`,
      );

      let Data = response.data.response;
      console.log(Data, 'respo');
      for (var i = 0; i < Data.length; i++) {
        let _temp: any = [];
        let item = Data[i];
        console.log(item.cameraStatuses, 'item');
        for (var j = 0; j < item.cameraStatuses.length; j++) {
          let _tempKits: any = [];
          let _item = item.cameraStatuses[j];
          _tempKits.push({
            cameraNumber: 1,
            ip: _item.ip,
            cameraPosition: _item.cameraPosition,
            status: _item.status,
            Coverage: _item.Coverage,
            id: _item._id,
            crearedAt: _item.crearedAt,
          });
          if (item.cameraStatuses.length - 1 == j) {
            _temp.push({
              id: item._id,
              customerId: item.customerId,
              visionXId: item.visionXId,
              latitude: item.latitude,
              longitude: item.longitude,
              location: item.location,
              numberOfCameras: item.numberOfCameras,
              cameraStatuses: [..._tempKits],
            });
            console.log(_temp.cameraStatuses, 'temp');
            setKitsData([..._temp]);
          }
        }
      }
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching Kits details', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    GetCustomerDetails();
  }, []);

  return loading ? (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" color="#28a745" />
    </View>
  ) : (
    <View style={{flex: 1}}>
      <ScrollView style={styles.container}>
        {/* Header section */}
        <View style={styles.header}>
          <View style={styles.profileSection}>
            <View style={styles.userDetails}>
              {/* <TouchableOpacity
              // style={styles.SettingsButton}
              onPress={() =>{  Alert.alert('Profile Avatar Pressed'); // Debug alert
                navigation.navigate(routes.Settings, {User: params})}}

              style={styles.SettingsButton}
              >
             
              <Image style={styles.ProfileAvatar} source={IMAGE.ProfileAvatarImg} />
            </TouchableOpacity> */}

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(routes.Settings, {User: customerDetails});
                }}
                style={[styles.SettingsButton, {zIndex: 10}]} // Increase zIndex
              >
                <Image
                  style={styles.ProfileAvatar}
                  source={IMAGE.ProfileAvatarImg}
                />
              </TouchableOpacity>
              <Text style={styles.welcomeText}>Welcome Back!</Text>
              <Text style={styles.userNameText}>{customerDetails.name}</Text>
            </View>
            <TouchableOpacity
              style={styles.notificationButton}
              onPress={() =>
                navigation.navigate('NotificationPage', {
                  kitsDeatils: kitsData[KitIndex].cameraStatuses.filter(
                    val => val.status != 'Online',
                  ),
                })
              }>
              <Image
                style={styles.notificationIcon}
                source={ICONS.NotificationIcons}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Banner section */}
        <View style={styles.bannerContainer}>
          <View style={styles.bannerTextContainer}>
            <View style={styles.BigDropDash} />
            <View style={styles.SmallDropDash1} />
            <Image source={IMAGE.HomeDashImg} style={styles.Home} />
            <Text style={styles.bannerTitle}>Secure Your Success with</Text>
            {/* <View style={styles.SmallDropDash3}/> */}
            <Text style={styles.bannerSubtitle}>
              Quantum Vision X Solutions
            </Text>
            <View style={styles.SmallDropDash4} />
            <TouchableOpacity style={styles.exploreButton}>
              {/* <View style={styles.SmallDropDash5}/> */}
              <Text style={styles.exploreButtonText}>Explore More</Text>
            </TouchableOpacity>
            <View style={styles.SmallDropDash2} />
          </View>
          <Image style={styles.bannerImage} source={IMAGE.BannerImage} />
        </View>

        {/* Monitoring Areas */}
        <View style={styles.monitoringContainer}>
          <Text style={styles.sectionTitle}>Monitoring Areas</Text>
          <View style={styles.areaCards}>
            {kitsData.map((val: any, index: number) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    KitIndex = index;
                  }}>
                  <View style={styles.areaCard}>
                    <Text style={styles.IDText}>{val.customerId}</Text>
                    <Image
                      style={styles.areaImage}
                      source={IMAGE.HomeTempDashImg}
                    />
                    <Text style={styles.areaText}>{val.location}</Text>
                    <Text style={styles.cameraCount}>
                      Total Cameras: {val.numberOfCameras}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Enlarged View */}
        <View style={styles.enlargeViewContainer}>
          {kitsData.length > 0 &&
            kitsData[KitIndex].cameraStatuses.filter(
              (val: any) => val.status != 'Online',
            ).length > 0 && (
              <Text style={styles.sectionTitle}>Enlarge View</Text>
            )}

          {kitsData[KitIndex]?.cameraStatuses &&
            kitsData[KitIndex].cameraStatuses
              .filter((val: any) => val.status != 'Online')
              .map((val: any) => {
                return (
                  <View style={styles.warningBox}>
                    <Text style={styles.warningText}>
                      ⚠️ Motion Detected on ({val.cameraNumber}) please ensure
                      the problem {val.Coverage}
                    </Text>
                  </View>
                );
              })}

          <View style={styles.camerasGrid}>
            {kitsData.length > 0 &&
              kitsData[KitIndex].cameraStatuses.map((val: any) => {
                return (
                  <View style={styles.cameraFeed} key={val.id || Math.random()}>
                    <Image
                      style={styles.cameraImage}
                      source={IMAGE.HomeTempDashImg}
                    />
                    <Text style={styles.cameraStatusActive}>{val.status}</Text>
                  </View>
                );
              })}
          </View>
        </View>
      </ScrollView>

      {/* Floating Action Button for Chatbot */}
      {/* <TouchableOpacity
        style={styles.chatbotButton}
        onPress={() => navigation.navigate('Chatbot')}
      >
        <Image source={ICONS.chatbot} style={styles.chatbotIcon} />
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,

    // paddingHorizontal: 15,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SmallDropDash1: {
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
    height: 50,
    borderRadius: 50,
    width: 50,
    position: 'absolute',
    left: -20,
    top: -28,
  },

  SmallDropDash2: {
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
    height: 50,
    borderRadius: 50,
    width: 50,
    position: 'absolute',
    left: 70,
    top: 120,
  },
  // SmallDropDash3:{
  //   backgroundColor:'rgba(255, 255, 255, 0.16)',
  //   height: 10,
  //   borderRadius:50,
  //   width: 10,
  //   position: 'absolute',
  //   left: 300,
  //   top: 110,
  //     },

  SmallDropDash4: {
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
    height: 10,
    borderRadius: 50,
    width: 10,
    position: 'absolute',
    left: 140,
    top: -10,
  },

  header: {
    // marginVertical: 20,
    backgroundColor: '#1A4D8F',
    // marginTop: 10,
  },
  BigDropDash: {
    position: 'absolute',
    right: -150,
    backgroundColor: '#103B74',
    top: -30,
    height: 150,
    borderRadius: 100,
    width: 150,
  },
  Home: {
    position: 'absolute',
    right: -120,
    top: -10,
    height: 150,
    width: 150,
  },
  IDText: {
    fontSize: 12,
    fontWeight: 'bold',
    // marginTop: 10,
    textAlign: 'center',
  },
  profileSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userDetails: {
    flexDirection: 'column',
  },
  welcomeText: {
    fontSize: 13,
    color: '#FFFFFF',
    paddingHorizontal: 60,
    paddingTop: 10,
    // position:'absolute',
    // top: 20,
    // left: 70
  },
  userNameText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFFFFF',
    paddingHorizontal: 60,
  },
  notificationButton: {
    // padding: 5,
    paddingHorizontal: 10,
  },
  notificationIcon: {
    width: 30,
    height: 30,
  },
  bannerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1A4D8F',
    padding: 10,
    height: '20%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  bannerTextContainer: {
    flex: 1,
  },
  bannerTitle: {
    fontSize: 12,
    color: 'white',
  },
  bannerSubtitle: {
    fontSize: 14,
    color: 'white',
    marginVertical: 5,
  },
  exploreButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    padding: 8,
    borderRadius: 20,
    marginTop: 10,
    width: 120,
  },
  exploreButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  bannerImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  ProfileAvatar: {
    // position:'absolute',
    // left:10,
    // top:8,
    width: 40,
    height: 40,
  },
  SettingsButton: {
    position: 'absolute',
    left: 10,
    top: 10,
  },
  monitoringContainer: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  areaCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  areaCard: {
    // backgroundColor: 'gray',
    borderColor: '#A1A1A1',
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 30,
    width: '48%',
  },
  areaImage: {
    width: '100%',
    height: 100,
    borderColor: '#A1A1A1',
    borderWidth: 0.5,
    borderRadius: 8,
  },
  areaText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  areaDetails: {
    fontSize: 12,
    color: COLORS.gray,
    marginTop: 5,
    textAlign: 'center',
  },
  cameraCount: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
  enlargeViewContainer: {
    marginVertical: 20,
  },
  warningBox: {
    backgroundColor: COLORS.lightRed,
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  warningText: {
    color: 'red',
    fontSize: 14,
    fontWeight: 'bold',
  },
  camerasGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 10,
  },
  cameraFeed: {
    width: '48%',
    marginBottom: 20,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
  },
  cameraFeed2: {
    width: '48%',
    marginBottom: 100,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
  },
  cameraImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
  },
  cameraStatusActive: {
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,

    // position:'absolute',
    // left: 100,
    // top: 40,
  },
  cameraStatusInactive: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
  chatbotButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatbotIcon: {
    width: 40,
    height: 40,
  },
});

export default Dashboard;
