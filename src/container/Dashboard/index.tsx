// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   StyleSheet,
//   ActivityIndicator,
// } from 'react-native';
// import { ICONS } from '../../images/image/icon';
// import { IMAGE } from '../../images/image';
// import { useNavigation } from '@react-navigation/native';
// import { COLORS } from '../../component/Colors';
// import { routes } from '../../routes';
// import axios from 'axios';
// import cameraDetails from '../CamDetails';

// const Baseurl = 'https://vx-bend-1.onrender.com';

// interface ICameraStatus {
//   cameraNumber: number;
//   ip: string;
//   cameraPosition: string;
//   status: string;
//   Coverage: string;
//   id: string;
//   createdAt: string;
// }

// interface IKits {
//   id: string;
//   customerId: string;
//   visionXId: string;
//   latitude: string;
//   longitude: string;
//   location: string;
//   numberOfCameras: number;
//   cameraStatuses: ICameraStatus[];
// }

// const Dashboard = ({ route }: any) => {
//   const customerId = route.params?.customerId || '';
//   const [customerDetails, setCustomerDetails] = useState<any>(null);
//   const [kitsData, setKitsData] = useState<IKits[]>([]);
//   const [loading, setIsLoading] = useState(true);
//   const [kitIndex, setKitIndex] = useState<number>(0);
//   const navigation = useNavigation();
//   const handleCameraPress = (cameraDetails: ICameraStatus, kitDetails: IKitDetails) => {
//     // Navigate to the CameraDetails page with the camera and kit details as parameters
//     navigation.navigate('cameraDetails', { cameraDetails, kitDetails });
//   };
  
//   useEffect(() => {
//     const fetchData = async () => {
//       if (customerId) {
//         try {
//           const customerResponse = await axios.get(`${Baseurl}/customer/get-info/${customerId}`);
//           setCustomerDetails(customerResponse.data.message);
//           const kitsResponse = await axios.post(`${Baseurl}/kit/get-kits/${customerId}`);
//           setKitsData(kitsResponse.data.response);
//         } catch (error) {
//           console.error('Error fetching data', error);
//         } finally {
//           setIsLoading(false);
//         }
//       } else {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [customerId]);

//   if (loading) {
//     return (
//       <View style={styles.loaderContainer}>
//         <ActivityIndicator size="large" color={COLORS.SurfieGreen} />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <ScrollView style={styles.scrollContainer}>
//         {/* Header Section */}
//         <View style={styles.header}>
//           {/* Profile Section */}
//           <View style={styles.profileSection}>
//             <TouchableOpacity
//               onPress={() => navigation.navigate(routes.Settings, { User: customerDetails })}>
//               <Image style={styles.ProfileAvatar} source={IMAGE.ProfileAvatarImg} />
//             </TouchableOpacity>
//             <View>
//               <Text style={styles.welcomeText}>Welcome Back!</Text>
//               <Text style={styles.userNameText}>{customerDetails?.name}</Text>
//             </View>
//             {/* <TouchableOpacity
//               style={styles.notificationButton}
//               onPress={() =>
//                 navigation.navigate('NotificationPage', {
//                   kitsDetails: kitsData[kitIndex]?.cameraStatuses.filter(val => val.status !== 'Online'),
//                 })
//               }>
//               <Image style={styles.notificationIcon} source={ICONS.NotificationIcons} />
//             </TouchableOpacity> */}
//           </View>
//         </View>

//         {/* Banner section */}
//         <View style={styles.bannerContainer}>
//           <View style={styles.bannerTextContainer}>
//             <View style={styles.BigDropDash} />
//             <View style={styles.SmallDropDash1} />
//             <Image source={IMAGE.HomeDashImg} style={styles.Home} />
//             <Text style={styles.bannerTitle}>Secure Your Success with</Text>
//             <Text style={styles.bannerSubtitle}>Quantum Vision X Solutions</Text>
//             <View style={styles.SmallDropDash4} />
//             <TouchableOpacity style={styles.exploreButton}>
//               <Text style={styles.exploreButtonText}>Explore More</Text>
//             </TouchableOpacity>
//             <View style={styles.SmallDropDash2} />
//           </View>
//           <Image style={styles.bannerImage} source={IMAGE.BannerImage} />
//         </View>

//         {/* Monitoring Areas */}
//         <View style={styles.monitoringContainer}>
//           <Text style={styles.sectionTitle}>Monitoring Areas</Text>
//           <View style={styles.areaCards}>
//             {kitsData.map((kit, index) => (
//               <TouchableOpacity key={kit.id} onPress={() => setKitIndex(index)}>
//                 <View style={styles.areaCard}>
//                   <Text style={styles.IDText}>{kit.customerId}</Text>
//                   <Image style={styles.areaImage} source={IMAGE.HomeTempDashImg} />
//                   <Text style={styles.areaText}>{kit.location}</Text>
//                   <Text style={styles.cameraCount}>
//                     Total Cameras: {kit.numberOfCameras}
//                   </Text>
//                 </View>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </View>

//         {/* Enlarged View */}
//         <View style={styles.enlargeViewContainer}>
//         <Text style={styles.sectionTitle}>Enlarged View</Text>
        
//           {/* {kitsData.length > 0 && kitsData[kitIndex]?.cameraStatuses.some(val => val.status !== 'Online') && (
//             <Text style={styles.sectionTitle}>Enlarged View</Text>
//           )} */}
//           {kitsData[kitIndex]?.cameraStatuses.filter(val => val.status !== 'Online').map(val => (
//             <View style={styles.warningBox} key={val.id}>
//               <Text style={styles.warningText}>
//                 {/* ⚠️ Motion Detected on  CAMERA - {val.cameraNumber} please ensure the problem {val.Coverage}. */}
//                 ⚠️ Motion detected on  CAMERA - {val.cameraNumber}  in {val.cameraPosition}. Please ensure the problem.


//               </Text>
//             </View>
//           ))}
//           <View style={styles.camerasGrid}>
//             {kitsData[kitIndex]?.cameraStatuses.map(val => (
//               <TouchableOpacity 
//           style={styles.cameraFeed} 
//           key={val.id} 
//           onPress={() => handleCameraPress(val)} // Pass camera details on press
//         >
//           <Image style={styles.cameraImage} source={IMAGE.HomeTempDashImg} />
          
//           <Text
//             style={[
//               styles.EnlInfoText,
//               val.status === 'Online' ? styles.cameraStatusActive : styles.cameraStatusInactive,
//             ]}
//           >
//             {val.status}
//           </Text>
//         </TouchableOpacity>
//             ))}
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//     flex: 1,
//   },
//   EnlInfoText:{
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginTop: 5,
//     marginBottom:5,
//     textAlign: 'center',
//   },
//   SmallDropDash1: {
//     backgroundColor: 'rgba(255, 255, 255, 0.16)',
//     height: 50,
//     borderRadius: 50,
//     width: 50,
//     position: 'absolute',
//     left: -20,
//     top: -28,
//   },
//   SmallDropDash2: {
//     backgroundColor: 'rgba(255, 255, 255, 0.16)',
//     height: 50,
//     borderRadius: 50,
//     width: 50,
//     position: 'absolute',
//     left: 70,
//     top: 120,
//   },
//   SmallDropDash4: {
//     backgroundColor: 'rgba(255, 255, 255, 0.16)',
//     height: 10,
//     borderRadius: 50,
//     width: 10,
//     position: 'absolute',
//     left: 140,
//     top: -10,
//   },
//   header: {
//     backgroundColor: '#1A4D8F',
//   },
//   BigDropDash: {
//     position: 'absolute',
//     right: -150,
//     backgroundColor: '#103B74',
//     top: -30,
//     height: 150,
//     borderRadius: 100,
//     width: 150,
//   },
//   Home: {
//     position: 'absolute',
//     right: -120,
//     top: -10,
//     height: 150,
//     width: 150,
//   },
//   IDText: {
//     fontSize: 12,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   profileSection: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     paddingTop: 10,
//     paddingLeft: 10,
//   },
//   welcomeText: {
//     fontSize: 13,
//     color: '#FFFFFF',
//     paddingHorizontal: 20,
//     paddingTop: 5,
//   },
//   userNameText: {
//     fontSize: 13,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//     paddingHorizontal: 20,
//   },
//   notificationButton: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     position: 'absolute',
//     right: 10,
//     paddingTop: 20,
//   },
//   notificationIcon: {
//     width: 30,
//     height: 30,
//   },
//   bannerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#1A4D8F',
//     height: '25%',
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//     paddingHorizontal: 0, // Removed left and right padding
//   },
//   bannerTextContainer: {
//     flex: 1,
//   },
//   bannerTitle: {
//     fontSize: 12,
//     color: 'white',
//     paddingLeft: 10,
//   },
//   bannerSubtitle: {
//     fontSize: 14,
//     color: 'white',
//     paddingLeft: 10,
//     marginVertical: 5,
//   },
//   exploreButton: {
//     backgroundColor: 'rgba(255, 255, 255, 0.35)',
//     padding: 8,
//     borderRadius: 20,
//     paddingLeft: 10,
//     marginLeft: 10,
//     marginTop: 10,
//     width: 120,
//   },
//   exploreButtonText: {
//     color: '#FFFFFF',
//     fontWeight: 'bold',
//   },
//   bannerImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 10,
//   },
//   monitoringContainer: {
//     marginVertical: 10,
//     width: '100%', // Full-width container
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     paddingLeft: 10,
//     color:'black',
//     marginBottom: 10,
//   },
//   areaCards: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//   },
//   areaCard: {
//     width: '100%',
//     backgroundColor: '#f5f5f5',
//     padding: 10,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   areaText: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     marginTop: 5,
//     marginBottom:5,
//     textAlign: 'center',
//   },
//   cameraCount: {
//     fontSize: 12,
//     textAlign: 'center',
//   },
//   // cameraFeed: {
//   //   width: '45%',
//   //   marginBottom: 10,
//   // },
//   // cameraImage: {
//   //   width: '100%',
//   //   height: 150,
//   //   borderRadius: 10,
//   // },
//   // cameraStatusActive: {
//   //   position: 'absolute',
//   //   bottom: 10,
//   //   right: 10,
//   //   backgroundColor: 'green',
//   //   padding: 5,
//   //   borderRadius: 5,
//   //   color: 'white',
//   //   fontWeight: 'bold',
//   //   fontSize: 12,
//   // },
//   enlargeViewContainer: {
//     paddingVertical: 10,
//     marginBottom: 50,
//   },
//   warningBox: {
//     backgroundColor: COLORS.lightRed,
//     padding: 10,
//     borderRadius: 8,
//     marginBottom: 10,
//   },
//   warningText: {
//     color: 'red',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   camerasGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     margin: 10,
//   },
//   cameraFeed: {
//     width: '48%',
//     marginBottom: 70,
//     borderColor: 'gray',
//     borderWidth: 0.5,
//     borderRadius: 8,
//   },
//   cameraFeed2: {
//     width: '48%',
//     marginBottom: 70,
//     borderColor: 'gray',
//     borderWidth: 0.5,
//     borderRadius: 8,
//   },
//   cameraImage: {
//     width: '100%',
//     height: 120,
//     borderRadius: 8,
//   },
//   cameraStatusActive: {
//     color: 'green',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginTop: 5,

//     // position:'absolute',
//     // left: 100,
//     // top: 40,
//   },
//   cameraStatusInactive: {
//     color: 'red',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginTop: 5,
//   },
//   loaderContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   ProfileAvatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//   },
//   scrollContainer: {
//     flex: 1,
//   },
// });

// export default Dashboard;





import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { ICONS } from '../../images/image/icon';
import { IMAGE } from '../../images/image';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../component/Colors';
import { routes } from '../../routes';
import axios from 'axios';
import cameraDetails from '../CamDetails';

const Baseurl = 'https://vx-bend-1.onrender.com';

interface ICameraStatus {
  cameraNumber: number;
  ip: string;
  cameraPosition: string;
  status: string;
  Coverage: string;
  _id: string;
  createdAt: string;
}

interface IKits {
  _id: string;
  customerId: string;
  visionXId: string;
  latitude: string;
  longitude: string;
  location: string;
  numberOfCameras: number;
  cameraStatuses: ICameraStatus[];
}

const Dashboard = ({ route }: any) => {
  const customerId = route.params?.customerId || '';
  const [customerDetails, setCustomerDetails] = useState<any>(null);
  const [kitsData, setKitsData] = useState<IKits[]>([]);
  const [loading, setIsLoading] = useState(true);
  const [kitIndex, setKitIndex] = useState<number>(0);
  const navigation = useNavigation();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchKitsData = async () => {
    try {
      if (customerId) {
        const customerResponse = await axios.get(`${Baseurl}/customer/get-info/${customerId}`);
        setCustomerDetails(customerResponse.data.message);

        const kitsResponse = await axios.post(`${Baseurl}/kit/get-kits/${customerId}`);
        setKitsData(kitsResponse.data.response);
      }
    } catch (error) {
      console.error('Error fetching data', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchKitsData();
    const intervalId = setInterval(() => {
      fetchKitsData();
    }, 5000); // Refresh every 5 seconds
    // console.log('This will be called every 5 seconds');
    return () => clearInterval(intervalId); // Clean up on unmount
  }, [customerId, fetchKitsData]);

  const handleCameraPress = (cameraDetails: ICameraStatus) => {
    navigation.navigate('cameraDetails', { cameraDetails });
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={COLORS.SurfieGreen} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {/* Header Section */}
        <View style={styles.header}>
          {/* Profile Section */}
          <View style={styles.profileSection}>
            <TouchableOpacity
              onPress={() => navigation.navigate(routes.Settings, { User: customerDetails })}>
              <Image style={styles.ProfileAvatar} source={IMAGE.ProfileAvatarImg} />
            </TouchableOpacity>
            <View>
              <Text style={styles.welcomeText}>Welcome Back!</Text>
              <Text style={styles.userNameText}>{customerDetails?.name}</Text>
            </View>
          </View>
        </View>

        {/* Banner Section */}
        <View style={styles.bannerContainer}>
          <View style={styles.bannerTextContainer}>
            <View style={styles.BigDropDash} />
            <View style={styles.SmallDropDash1} />
            <Image source={IMAGE.HomeDashImg} style={styles.Home} />
            <Text style={styles.bannerTitle}>Secure Your Success with</Text>
            <Text style={styles.bannerSubtitle}>Quantum Vision X Solutions</Text>
            <View style={styles.SmallDropDash4} />
            <TouchableOpacity style={styles.exploreButton}>
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
            {kitsData.map((kit, index) => (
              <TouchableOpacity key={kit.id} onPress={() => setKitIndex(index)}>
                <View style={styles.areaCard}>
                  <Text style={styles.IDText}>{kit.customerId}</Text>
                  <Image style={styles.areaImage} source={IMAGE.HomeTempDashImg} />
                  <Text style={styles.areaText}>{kit.location}</Text>
                  <Text style={styles.cameraCount}>
                    Total Cameras: {kit.numberOfCameras}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Enlarged View */}
<View style={styles.enlargeViewContainer}>
  {/* Enlarged View Heading */}
  <Text style={styles.sectionTitle}>
    Enlarged View of {kitsData[kitIndex]?.location}
  </Text>

  {/* Warning Boxes for Offline Cameras */}
  {kitsData[kitIndex]?.cameraStatuses.filter(val => val.status !== 'Online').map(val => (
    <View style={styles.warningBox} key={val._id}>
      <Text style={styles.warningText}>
        ⚠️ Motion detected on CAMERA - {val.cameraNumber} in {val.cameraPosition}. Please ensure the problem.
      </Text>
    </View>
  ))}

  {/* Cameras Grid */}
  <View style={styles.camerasGrid}>
    {kitsData?.[kitIndex]?.cameraStatuses?.map(val => (
      <TouchableOpacity 
        style={styles.cameraFeed} 
        key={val._id} 
        onPress={() => handleCameraPress(val)}
      >
        <Image style={styles.cameraImage} source={IMAGE.HomeTempDashImg} />
        <Text style={styles.EnlInfoText}> {val.cameraPosition}</Text>
        <Text
          style={[
            styles.EnlInfoText,
            val.status === 'Online' ? styles.cameraStatusActive : styles.cameraStatusInactive,
          ]}
        >
          {val.status}
        </Text>
        <Text
          style={[
            styles.EnlInfoText,
            val.Coverage === 'Screen not interrupted' ? styles.cameraStatusActive : styles.cameraStatusInactive,
          ]}
        >
          {val.Coverage}
        </Text>
      </TouchableOpacity>
    ))}
  </View>


        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  EnlInfoText:{
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    // marginBottom:5,
    textAlign: 'center',
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
    backgroundColor: '#1A4D8F',
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
    color:'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  profileSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10,
    paddingLeft: 10,
  },
  welcomeText: {
    fontSize: 13,
    color: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 5,
  },
  userNameText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFFFFF',
    paddingHorizontal: 20,
  },
  notificationButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    paddingTop: 20,
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
    height: '25%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 0, // Removed left and right padding
  },
  bannerTextContainer: {
    flex: 1,
  },
  bannerTitle: {
    fontSize: 12,
    color: 'white',
    paddingLeft: 10,
  },
  bannerSubtitle: {
    fontSize: 14,
    color: 'white',
    paddingLeft: 10,
    marginVertical: 5,
  },
  exploreButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    padding: 8,
    borderRadius: 20,
    paddingLeft: 10,
    marginLeft: 10,
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
  monitoringContainer: {
    marginVertical: 10,
    width: '100%', // Full-width container
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10,
    color:'black',
    marginBottom: 10,
  },
  areaCards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  areaCard: {
    width: '100%',
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  areaText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom:5,
    textAlign: 'center',
    color:'black',

  },
  cameraCount: {
    fontSize: 12,
    textAlign: 'center',
    color:'black',
  },
  // cameraFeed: {
  //   width: '45%',
  //   marginBottom: 10,
  // },
  // cameraImage: {
  //   width: '100%',
  //   height: 150,
  //   borderRadius: 10,
  // },
  // cameraStatusActive: {
  //   position: 'absolute',
  //   bottom: 10,
  //   right: 10,
  //   backgroundColor: 'green',
  //   padding: 5,
  //   borderRadius: 5,
  //   color: 'white',
  //   fontWeight: 'bold',
  //   fontSize: 12,
  // },
  enlargeViewContainer: {
    paddingVertical: 10,
    marginBottom: 50,
  },
  warningBox: {
    backgroundColor: COLORS.lightRed,
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  warningText: {
    color: 'red',
    fontSize: 16,
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
    marginBottom: 70,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
  },
  cameraFeed2: {
    width: '48%',
    marginBottom: 70,
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
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ProfileAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  scrollContainer: {
    flex: 1,
  },
});

export default Dashboard;
