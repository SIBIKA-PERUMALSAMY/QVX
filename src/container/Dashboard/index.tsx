// import React, {useState, useEffect, useCallback} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TextInput,
//   ScrollView,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
// } from 'react-native';
// import { ICONS } from '../../images/image/icon';
// import {IMAGE} from '../../images/image';
// import {useNavigation} from '@react-navigation/native';
// import { COLORS } from '../../component/Colors';
// import {routes} from '../../routes';
// import ServiceBox from '../../component/ServicesBox';
// import AppointmentCard from '../../component/AppointmentCard';
// import moment from 'moment';

// // Types
// interface PatientDetails {
//   name: string;
//   patientID: string;
// }

// interface Appointment {
//   name: string;
//   patientID: string;
//   appointmentDate: Date;
//   appointmentID: string;
//   contactNo: string;
//   time: string;
//   type: string;
// }

// interface DashboardProps {
//   route: {
//     params: {
//       patientDetails: PatientDetails;
//     };
//   };
// }

// const Dashboard: React.FC<DashboardProps> = ({route}: any) => {
//   const params: PatientDetails = route.params?.patientDetails || {};
//   const [profilePicUrl, setProfilePicUrl] = useState<string | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [Appointments, setAppointments] = useState<Appointment[]>([]);
//   const [viewAppointments, setviewAppointments] = useState<Appointment[]>([]);
//   const [isView, setisView] = useState(true);
//   const navigation = useNavigation();
//   const [IsBooking, setisBooking] = useState(false);

//   /*
//   const getAppointments = useCallback(async () => {
//     try {
//       if (params.patientID) {
//         const response = await axios.get(
//           `${Baseurl}/patient/appointment/${params.patientID}`,
//           {
//             headers: {
//               'Content-Type': 'application/json',
//             },
//           },
//         );

//         const tempAppointments = response.data.map((item: any) => ({
//           name: item.name,
//           patientID: item.patientID,
//           appointmentDate: new Date(item.appointmentDate),
//           appointmentID: item.appointmentID,
//           contactNo: item.contactNo,
//           time: item.time,
//           type: item.type,
//         }));

//         setAppointments(tempAppointments);
//         setviewAppointments(
//           tempAppointments.filter((_: any, index: number) => index < 3),
//         );
//         isbook = false;
//       }
//     } catch (error) {
//       console.error(error, 'err');
//       isbook = false;
//     } finally {
//       setLoading(false);
//       isbook = false;
//     }
//   }, []);
//   */

//   const getStatus = (date: Date) => {
//     const today = Number(moment().format('YYYYMMDD'));
//     const givenDate = Number(moment(date).format('YYYYMMDD'));

//     if (givenDate === today) {
//       return 'Booking';
//     } else if (givenDate > today) {
//       return 'Upcoming';
//     } else {
//       return 'Completed';
//     }
//   };

//   useEffect(() => {
//     // getAppointments();
//   }, [IsBooking]);

//   const handleNavigate = (screen: string) => {
//     /*
//     if (screen !== 'Booking') {
//       if (screen === 'Upcoming') {
//         navigation.navigate('AppointmentsNavigator', {
//           screen: 'TabNavigationRS',
//           params: {initialTab: 0, Appointment: [...Appointments]}, // Index for 'Upcoming'
//         });
//       } else if (screen === 'Completed') {
//         navigation.navigate('AppointmentsNavigator', {
//           screen: 'TabNavigationRS',
//           params: {initialTab: 1, Appointment: [...Appointments]}, // Index for 'Completed'
//         });
//       }
//     }
//     */
//   };

//   return (
//     <>
//       <View style={{flex: 1}}>
//         <ScrollView style={styles.container}>
//           {/* Header section */}
//           <View style={styles.header}>
//             <View style={styles.headerTop}>
//               <View style={styles.leftContainer}>
//                 <Text style={styles.greetingText}>Hello {params.name}</Text>
//                 <Text style={styles.subGreetingText}>
//                   How are you feeling today?
//                 </Text>
//               </View>
//               <View style={styles.rightIconsContainer}>
//                 <TouchableOpacity
//                   style={styles.notificationButton}
//                   onPress={() => navigation.navigate('NotificationPage')}>
//                   <Image
//                     style={styles.notificationIcon}
//                     source={ICONS.NotificationIcons}
//                   />
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   onPress={() =>
//                     navigation.navigate(routes.Settings, {User: params})
//                   }>
//                   <Image
//                     style={styles.profilePic}
//                     source={IMAGE.ProfilePicDashboardImage}
//                   />
//                 </TouchableOpacity>
//               </View>
//             </View>

//             <Image
//               style={styles.searchContainer}
//               source={IMAGE.ClinicLogo}
//             />
//           </View>

//           <View style={styles.bannerContainer}>
//             <Image
//               style={styles.bannerImage}
//               source={IMAGE.DashboardImg}
//             />
//           </View>

//           <View style={styles.servicesContainer}>
//             <Text style={styles.sectionTitle}>Services</Text>
//             <View style={styles.servicesRow}>
//               <ServiceBox
//                 imageSource={IMAGE.BookingAppointmentImage}
//                 title={'Booking Appointment'}
//                 onPress={() =>
//                   Alert.alert("Booking Appointment is disabled in this version.")
//                 }
//               />
//               <ServiceBox
//                 imageSource={IMAGE.OnlineConsultationImage}
//                 title={'Online Consultation'}
//                 onPress={() =>
//                   Alert.alert("Online Consultation is disabled in this version.")
//                 }
//               />
//             </View>
//             <View style={styles.servicesRow}>
//               <ServiceBox
//                 imageSource={IMAGE.BillAndDischargeImage}
//                 title={'Bill and Discharge summary'}
//                 onPress={() =>
//                   Alert.alert("Bill and Discharge is disabled in this version.")
//                 }
//               />
//               <ServiceBox
//                 imageSource={IMAGE.ExerciseVideoImage}
//                 title={'Exercise Video'}
//                 onPress={() =>
//                   Alert.alert("Exercise Video is disabled in this version.")
//                 }
//               />
//             </View>
//           </View>

//           <View style={styles.appointmentsContainer}>
//             {viewAppointments.length > 0 && (
//               <View style={styles.appointmentsHeader}>
//                 <Text style={styles.titles}>My Appointments</Text>

//                 <TouchableOpacity>
//                   {isView ? (
//                     <Text
//                       style={styles.viewAllText}
//                       onPress={() => {
//                         setisView(false);
//                         setviewAppointments([...Appointments]);
//                       }}>
//                       View more
//                     </Text>
//                   ) : (
//                     <Text
//                       style={styles.viewAllText}
//                       onPress={() => {
//                         setisView(true);
//                         setviewAppointments(
//                           [...Appointments].filter(
//                             (_: any, index: number) => index < 3,
//                           ),
//                         );
//                       }}>
//                       View less
//                     </Text>
//                   )}
//                 </TouchableOpacity>
//               </View>
//             )}

//             <View style={styles.appointmentCardsContainer}>
//               {viewAppointments.map((Appointment: any, index: any) => (
//                 <AppointmentCard
//                   key={index}
//                   date={{
//                     day: moment(Appointment.appointmentDate).format('DD'),
//                     month: moment(Appointment.appointmentDate).format('MMM'),
//                     weekday: moment(Appointment.appointmentDate).format('ddd'),
//                   }}
//                   treatment="Backpain"
//                   bookingId="21ST0089"
//                   timing={Appointment.time}
//                   profileImage={IMAGE.ProfilePicDashboardImage}
//                   onPress={() =>
//                     handleNavigate(getStatus(Appointment.appointmentDate))
//                   }
//                   status={getStatus(Appointment.appointmentDate)}
//                 />
//               ))}
//             </View>
//           </View>
//         </ScrollView>

//         {/* Chatbot Icon */}
//         <TouchableOpacity
//           style={styles.chatbotIconContainer}
//           onPress={() => navigation.navigate('Chatbot')}>
//           <Image source={ICONS.chatbot} style={styles.chatbotIcon} />
//         </TouchableOpacity>
//       </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//     flex: 1,
//     marginBottom: 70,
//   },
//   header: {
//     paddingHorizontal: 20,
//     paddingTop: 20,
//   },
//   headerTop: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   leftContainer: {},
//   greetingText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: COLORS.primary,
//   },
//   subGreetingText: {
//     fontSize: 14,
//     color: COLORS.gray,
//     marginTop: 4,
//   },
//   rightIconsContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   notificationButton: {
//     marginRight: 15,
//   },
//   notificationIcon: {
//     width: 30,
//     height: 30,
//   },
//   profilePic: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10,
//     width: '100%',
//     marginLeft: '5%',
//     resizeMode: 'contain',
//   },
//   bannerContainer: {
//     marginVertical: 5,
//   },
//   // bannerImage: {
//   //   width: '90%',
//   //   marginLeft: '5%',
//   //   marginStart: '5%',
//   //   borderRadius: 10,
//   //   height: 150,
//   // },
//   servicesContainer: {
//     marginVertical: 15,
//     paddingHorizontal: 20,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   servicesRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 15,
//   },
//   appointmentsContainer: {
//     marginHorizontal: 20,
//   },
//   appointmentsHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   titles: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   viewAllText: {
//     fontSize: 14,
//     color: COLORS.primary,
//   },
//   appointmentCardsContainer: {
//     marginTop: 10,
//   },
//   chatbotIconContainer: {
//     position: 'absolute',
//     bottom: 20,
//     right: 20,
//     backgroundColor: COLORS.primary,
//     padding: 15,
//     borderRadius: 50,
//     elevation: 10,
//   },
//   chatbotIcon: {
//     width: 30,
//     height: 30,
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
  Alert,
} from 'react-native';
import { ICONS } from '../../images/image/icon';
import { IMAGE } from '../../images/image';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../component/Colors';
import { routes } from '../../routes';
import ServiceBox from '../../component/ServicesBox';
import AppointmentCard from '../../component/AppointmentCard';
import moment from 'moment';
import axios from 'axios'; 

const Baseurl = 'https://vx-bend-1.onrender.com';

const Dashboard = ({ route }: any) => {
  const params = route.params?.customerDetails || {};
  const [kitsData, setKitsData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  // const fetchKitsData = async () => {
  //   try{
  //     const response = await axios.post(
  //       `${Baseurl}/http://localhost:3001/kit/get-kits/QVX20241003-001`)
  //   }
  
  // };

  useEffect(() => {
    // Fetch  data
  }, []);

  return (
    <View style={{ flex: 1 }}>
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
    // Alert.alert('Profile Avatar Pressed');
    navigation.navigate(routes.Settings, { User: params });
  }}
  style={[styles.SettingsButton, { zIndex: 10 }]} // Increase zIndex
>
  <Image style={styles.ProfileAvatar} source={IMAGE.ProfileAvatarImg} />
</TouchableOpacity>
              <Text style={styles.welcomeText}>Welcome Back!</Text>
              <Text style={styles.userNameText}>Ms. {params.name}</Text>
            </View>
            <TouchableOpacity
              style={styles.notificationButton}
              onPress={() => navigation.navigate('NotificationPage')}
            >
              <Image style={styles.notificationIcon} source={ICONS.NotificationIcons} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Banner section */}
        <View style={styles.bannerContainer}>
          <View style={styles.bannerTextContainer}>
          <View style={styles.BigDropDash} />
          <View style={styles.SmallDropDash1}/>
          <Image source={IMAGE.HomeDashImg} style={styles.Home}/>
            <Text style={styles.bannerTitle}>Secure Your Success with</Text>
            {/* <View style={styles.SmallDropDash3}/> */}
            <Text style={styles.bannerSubtitle}>Quantum Vision X Solutions</Text>
            <View style={styles.SmallDropDash4}/>
            <TouchableOpacity style={styles.exploreButton}>
            {/* <View style={styles.SmallDropDash5}/> */}
              <Text style={styles.exploreButtonText}>Explore More</Text>
            </TouchableOpacity>
            <View style={styles.SmallDropDash2}/>
          </View>
          <Image style={styles.bannerImage} source={IMAGE.BannerImage} />
        </View>

        {/* Monitoring Areas */}
        <View style={styles.monitoringContainer}>
          <Text style={styles.sectionTitle}>Monitoring Areas</Text>
          <View style={styles.areaCards}>
          
          
            <View style={styles.areaCard}>
            <Text style={styles.IDText}>ID - QV2024001</Text>
              <Image style={styles.areaImage} source={IMAGE.HomeTempDashImg} />
              <Text style={styles.areaText}>Home</Text>
              <Text style={styles.areaDetails}>Anna Nagar, Vellore</Text>
              <Text style={styles.cameraCount}>Total Cameras: 6</Text>
            </View>
            <View style={styles.areaCard}>
            <Text style={styles.IDText}>ID - QV2024001</Text>
              <Image style={styles.areaImage} source={IMAGE.HomeTempDashImg} />
              <Text style={styles.areaText}>Shop 1</Text>
              <Text style={styles.areaDetails}>Anna Nagar, Vellore</Text>
              <Text style={styles.cameraCount}>Total Cameras: 6</Text>
            </View>
          </View>
        </View>

        {/* Enlarged View */}
        <View style={styles.enlargeViewContainer}>
          <Text style={styles.sectionTitle}>Enlarge View</Text>
          <View style={styles.warningBox}>
            <Text style={styles.warningText}>
              ⚠️ Motion Detected on (3rd Camera) please ensure the problem
            </Text>
          </View>

          <View style={styles.camerasGrid}>
            <View style={styles.cameraFeed}>
              <Image style={styles.cameraImage} source={IMAGE.HomeTempDashImg} />
              <Text style={styles.cameraStatusActive}>Active</Text>
            </View>
            <View style={styles.cameraFeed}>
              <Image style={styles.cameraImage} source={IMAGE.HomeTempDashImg} />
              <Text style={styles.cameraStatusActive}>Active</Text>
            </View>
            <View style={styles.cameraFeed2}>
              <Image style={styles.cameraImage} source={IMAGE.HomeTempDashImg} />
              <Text style={styles.cameraStatusInactive}>Inactive</Text>
            </View>
            <View style={styles.cameraFeed2}>
              <Image style={styles.cameraImage} source={IMAGE.HomeTempDashImg} />
              <Text style={styles.cameraStatusActive}>Active</Text>
            </View>
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
  SmallDropDash1:{
backgroundColor:'rgba(255, 255, 255, 0.16)',
height: 50,
borderRadius:50,
width: 50,
position: 'absolute',
left: -20,
top: -28,
  },

  SmallDropDash2:{
    backgroundColor:'rgba(255, 255, 255, 0.16)',
    height: 50,
    borderRadius:50,
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


          SmallDropDash4:{
            backgroundColor:'rgba(255, 255, 255, 0.16)',
            height: 10,
            borderRadius:50,
            width: 10,
            position: 'absolute',
            left: 140,
            top: -10,
              },

  header: {
    // marginVertical: 20,
    backgroundColor:'#1A4D8F',
    // marginTop: 10,
    
  },
  BigDropDash:{
    position:'absolute',
    right: -150,
    backgroundColor:'#103B74',
    top:-30,
    height: 150,
    borderRadius: 100,
    width:150,
  },
  Home:{
    position:'absolute',
    right: -120,
    top:-10,
    height: 150,
    width:150,
  },
  IDText:{
    fontSize: 12,
    fontWeight: 'bold',
    // marginTop: 10,
    textAlign:'center',
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
    paddingHorizontal:60,
   paddingTop: 10,
    // position:'absolute',
    // top: 20,
    // left: 70
  },
  userNameText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFFFFF',
    paddingHorizontal:60,
  },
  notificationButton: {
    // padding: 5,
    paddingHorizontal:10,
  },
  notificationIcon: {
    width: 30,
    height: 30,
  },
  bannerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:'#1A4D8F' ,
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
  ProfileAvatar:{
// position:'absolute',
// left:10,
// top:8,
width: 40,
height: 40,
  },
  SettingsButton:{
    position:'absolute',
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
    borderColor:'#A1A1A1',
    borderWidth:0.5,
    padding: 10,
    borderRadius: 30,
    width: '48%',
  },
  areaImage: {
    width: '100%',
    height: 100,
    borderColor:'#A1A1A1',
    borderWidth:0.5,
    borderRadius: 8,
  },
  areaText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign:'center',
  },
  areaDetails: {
    fontSize: 12,
    color: COLORS.gray,
    marginTop: 5,
    textAlign:'center',
  },
  cameraCount: {
    fontSize: 12,
    textAlign:'center',
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
    borderWidth:0.5,
    borderRadius:8,
  },
  cameraFeed2: {
    width: '48%',
    marginBottom: 100,
    borderColor: 'gray',
    borderWidth:0.5,
    borderRadius:8,
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
    color:'red',
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
