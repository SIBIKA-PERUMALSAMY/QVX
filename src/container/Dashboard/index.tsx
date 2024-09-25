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


import React, {useState, useEffect, useCallback} from 'react';
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
import {IMAGE} from '../../images/image';
import {useNavigation} from '@react-navigation/native';
import { COLORS } from '../../component/Colors';
import {routes} from '../../routes';
import ServiceBox from '../../component/ServicesBox';
import AppointmentCard from '../../component/AppointmentCard';
import moment from 'moment';

// Types
interface PatientDetails {
  name: string;
  patientID: string;
}

interface Appointment {
  name: string;
  patientID: string;
  appointmentDate: Date;
  appointmentID: string;
  contactNo: string;
  time: string;
  type: string;
}

interface DashboardProps {
  route: {
    params: {
      patientDetails: PatientDetails;
    };
  };
}

const Dashboard: React.FC<DashboardProps> = ({route}: any) => {
  const params: PatientDetails = route.params?.patientDetails || {};
  const [profilePicUrl, setProfilePicUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [Appointments, setAppointments] = useState<Appointment[]>([]);
  const [viewAppointments, setviewAppointments] = useState<Appointment[]>([]);
  const [isView, setisView] = useState(true);
  const navigation = useNavigation();
  const [IsBooking, setisBooking] = useState(false);

  const getStatus = (date: Date) => {
    const today = Number(moment().format('YYYYMMDD'));
    const givenDate = Number(moment(date).format('YYYYMMDD'));

    if (givenDate === today) {
      return 'Booking';
    } else if (givenDate > today) {
      return 'Upcoming';
    } else {
      return 'Completed';
    }
  };

  useEffect(() => {
    // getAppointments();
  }, [IsBooking]);

  const handleNavigate = (screen: string) => {
    // Navigation logic here...
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView style={styles.container}>
        {/* Header section */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View style={styles.leftContainer}>
              <Text style={styles.greetingText}>Hello {params.name}</Text>
              <Text style={styles.subGreetingText}>
                How are you feeling today?
              </Text>
            </View>
            <View style={styles.rightIconsContainer}>
              <TouchableOpacity
                style={styles.notificationButton}
                onPress={() => navigation.navigate('NotificationPage')}>
                <Image
                  style={styles.notificationIcon}
                  source={ICONS.NotificationIcons}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(routes.Settings, {User: params})
                }>
                <Image
                  style={styles.profilePic}
                  source={IMAGE.ProfilePicDashboardImage}
                />
              </TouchableOpacity>
            </View>
          </View>

          <Image
            style={styles.searchContainer}
            source={IMAGE.ClinicLogo}
          />
        </View>

        <View style={styles.bannerContainer}>
          <Image
            style={styles.bannerImage}
            source={IMAGE.DashboardImg}
          />
          <View style={styles.overlayContainer}>
            <Image
              style={styles.overlayImage}
              source={IMAGE.OverlayImage} // Add your overlay image here
            />
            <Text style={styles.overlayText}>Welcome to Your Dashboard</Text>
          </View>
        </View>

        <View style={styles.servicesContainer}>
          <Text style={styles.sectionTitle}>Services</Text>
          <View style={styles.servicesRow}>
            <ServiceBox
              imageSource={IMAGE.BookingAppointmentImage}
              title={'Booking Appointment'}
              onPress={() =>
                Alert.alert("Booking Appointment is disabled in this version.")
              }
            />
            <ServiceBox
              imageSource={IMAGE.OnlineConsultationImage}
              title={'Online Consultation'}
              onPress={() =>
                Alert.alert("Online Consultation is disabled in this version.")
              }
            />
          </View>
          <View style={styles.servicesRow}>
            <ServiceBox
              imageSource={IMAGE.BillAndDischargeImage}
              title={'Bill and Discharge summary'}
              onPress={() =>
                Alert.alert("Bill and Discharge is disabled in this version.")
              }
            />
            <ServiceBox
              imageSource={IMAGE.ExerciseVideoImage}
              title={'Exercise Video'}
              onPress={() =>
                Alert.alert("Exercise Video is disabled in this version.")
              }
            />
          </View>
        </View>

        <View style={styles.appointmentsContainer}>
          {viewAppointments.length > 0 && (
            <View style={styles.appointmentsHeader}>
              <Text style={styles.titles}>My Appointments</Text>

              <TouchableOpacity>
                {isView ? (
                  <Text
                    style={styles.viewAllText}
                    onPress={() => {
                      setisView(false);
                      setviewAppointments([...Appointments]);
                    }}>
                    View more
                  </Text>
                ) : (
                  <Text
                    style={styles.viewAllText}
                    onPress={() => {
                      setisView(true);
                      setviewAppointments(
                        [...Appointments].filter(
                          (_: any, index: number) => index < 3,
                        ),
                      );
                    }}>
                    View less
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          )}

          <View style={styles.appointmentCardsContainer}>
            {viewAppointments.map((Appointment: any, index: any) => (
              <AppointmentCard
                key={index}
                date={{
                  day: moment(Appointment.appointmentDate).format('DD'),
                  month: moment(Appointment.appointmentDate).format('MMM'),
                  weekday: moment(Appointment.appointmentDate).format('ddd'),
                }}
                treatment="Backpain"
                bookingId="21ST0089"
                timing={Appointment.time}
                profileImage={IMAGE.ProfilePicDashboardImage}
                onPress={() =>
                  handleNavigate(getStatus(Appointment.appointmentDate))
                }
                status={getStatus(Appointment.appointmentDate)}
              />
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Chatbot Icon */}
      <TouchableOpacity
        style={styles.chatbotIconContainer}
        onPress={() => navigation.navigate('Chatbot')}>
        <Image source={ICONS.chatbot} style={styles.chatbotIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    marginBottom: 70,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftContainer: {},
  greetingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  subGreetingText: {
    fontSize: 14,
    color: COLORS.gray,
    marginTop: 4,
  },
  rightIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationButton: {
    marginRight: 15,
  },
  notificationIcon: {
    width: 30,
    height: 30,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
    marginLeft: '5%',
    resizeMode: 'contain',
  },
  bannerContainer: {
    marginVertical: 5,
    position: 'relative', // Add position relative to the parent container
  },
  bannerImage: {
    width: '100%', // Set to full width
    height: 150, // Adjust height as needed
    borderRadius: 10,
  },
  overlayContainer: {
    position: 'absolute',
    top: 20, // Adjust the position as needed
    left: 20, // Adjust the position as needed
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayImage: {
    width: 100, // Adjust the size of the overlay image
    height: 100, // Adjust the size of the overlay image
    borderRadius: 50, // If the overlay is circular
  },
  overlayText: {
    marginTop: 10, // Space between the image and text
    fontSize: 16,
    color: 'white', // Change color as needed
    fontWeight: 'bold',
    textAlign: 'center',
  },
  servicesContainer: {
    marginVertical: 15,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  servicesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  appointmentsContainer: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  appointmentsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titles: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAllText: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  appointmentCardsContainer: {
    marginTop: 10,
  },
  chatbotIconContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  chatbotIcon: {
    width: 60,
    height: 60,
  },
});

export default Dashboard;






































