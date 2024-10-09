// import React, {useState, useEffect} from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   SafeAreaView,
//   Image,
// } from 'react-native';
// import {ICONS} from '../../images/image/icon';

// // Define the type for a notification item
// interface Notification {
//   id: string;
//   message: string;
//   Position: string;
// }

// // Define the props for the renderItem function
// interface RenderItemProps {
//   item: Notification;
// }

// const NotificationPage: React.FC = ({route}: any) => {
//   const [notifications, setNotifications] = useState<Notification[]>([]);

//   // Use useEffect to avoid infinite loop and only set notifications when kitsDetails change
//   useEffect(() => {
//     let kits = route.params.kitsDetails || [];
//     const temp: Notification[] = kits.map((item: any) => ({
//       id: item.id,
//       message: item.Coverage,
//       Position: item.cameraPosition,
//     }));

//     // Set the notifications state with the mapped items
//     setNotifications(temp);
//   }, [route.params.kitsDetails]); // Dependency array ensures this runs only when kitsDetails change

//   // Render item function with type annotation
//   const renderItem = ({item}: RenderItemProps) => (
//     <View style={styles.notificationItem}>
//       <Image source={ICONS.Alert} style={styles.bulletPoint} />
//       <View style={styles.notificationTextContainer}>
//         <Text style={styles.notificationMessage}>{item.message}</Text>
//         <Text style={styles.notificationMessage}>{item.Position}</Text>
//       </View>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       {notifications.length ? (
//         <FlatList
//           data={notifications}
//           renderItem={renderItem}
//           keyExtractor={item => item.id}
//         />
//       ) : (
//         <Text style={styles.notificationMessage}>
//           No older notifications!!!
//         </Text>
//       )}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//   },
//   notificationItem: {
//     flexDirection: 'row',
//     marginBottom: 15,
//     alignItems: 'center',
//   },
//   bulletPoint: {
//     width: 40,
//     height: 40,
//     marginBottom: 10,
//     marginRight: 10,
//   },
//   notificationTextContainer: {
//     flex: 1,
//   },
//   notificationMessage: {
//     fontSize: 16,
//     color: '#333',
//     marginBottom: 5,
//   },
//   notificationTime: {
//     fontSize: 14,
//     color: '#999',
//   },
// });

// export default NotificationPage;

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import { ICONS } from '../../images/image/icon';

// Define the type for a notification item
interface Notification {
  id: string;
  message: string;
  position: string;
}

// Define the props for the renderItem function
interface RenderItemProps {
  item: Notification;
}

const NotificationPage: React.FC<{ route: any }> = ({ route }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // Use useEffect to set notifications based on camera statuses from API response
  useEffect(() => {
    const cameraData = route.params.cameraData || []; // Assume this comes from route params

    const temp: Notification[] = [];

    cameraData.forEach((cameraInfo: any) => {
      cameraInfo.cameraStatuses.forEach((camera: any) => {
        if (camera.status === 'Offline') {
          temp.push({
            id: camera._id, // Unique ID for the notification
            message: 'Offline',
            position: camera.cameraPosition,
          });
        } else if (camera.Coverage === null || camera.Coverage === 'Screen interrupted') {
          temp.push({
            id: camera._id, // Unique ID for the notification
            message: 'Screen interrupted',
            position: camera.cameraPosition,
          });
        }
      });
    });

    // Set the notifications state with the filtered items
    setNotifications(temp);
  }, [route.params.cameraData]); // Dependency array ensures this runs only when cameraData changes

  // Render item function with type annotation
  const renderItem = ({ item }: RenderItemProps) => (
    <View style={styles.notificationItem}>
      <Image source={ICONS.Alert} style={styles.bulletPoint} />
      <View style={styles.notificationTextContainer}>
        <Text style={styles.notificationMessage}>{item.message}</Text>
        <Text style={styles.notificationPosition}>{item.position}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {notifications.length ? (
        <FlatList
          data={notifications}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      ) : (
        <Text style={styles.notificationMessage}>
          No notifications at this time!
        </Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  notificationItem: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  bulletPoint: {
    width: 40,
    height: 40,
    marginBottom: 10,
    marginRight: 10,
  },
  notificationTextContainer: {
    flex: 1,
  },
  notificationMessage: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  notificationPosition: {
    fontSize: 14,
    color: '#999',
  },
});

export default NotificationPage;
