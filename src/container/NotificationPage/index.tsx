import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, Image } from 'react-native';
import { ICONS } from '../../images/image/icon';

// Define the type for a notification item
interface Notification {
  id: string;
  message: string;
  time: string;
}

// Sample data with type annotation
const notifications: Notification[] = [
  {
    id: '1',
    message:
      'Continuous surveillance ensures ultimate security against Cameras 24/7.',
    time: 'Today at 9:30 am',
  },
  // Add more notifications as needed
  {
    id: '2',
    message:
      'Continuous surveillance ensures ultimate security against Cameras 24/7.',
    time: 'Today at 9:50 am',
  },
  // {
  //   id: '3',
  //   message:
  //     'A receptionist is often the first person customers or clients will speak to when walking through your door or calling you.',
  //   time: 'Today at 9:30 am',
  // },
  // {
  //   id: '4',
  //   message:
  //     'A receptionist is often the first person customers or clients will speak to when walking through your door or calling you.',
  //   time: 'Today at 9:30 am',
  // },
  // {
  //   id: '5',
  //   message:
  //     'A receptionist is often the first person customers or clients will speak to when walking through your door or calling you.',
  //   time: 'Today at 9:30 am',
  // },
];

// Define the props for the renderItem function
interface RenderItemProps {
  item: Notification;
}

const NotificationPage: React.FC = () => {
  // Render item function with type annotation
  const renderItem = ({ item }: RenderItemProps) => (
    <View style={styles.notificationItem}>
     
        <Image source={ICONS.Alert}style={styles.bulletPoint}/>
        
      <View style={styles.notificationTextContainer}>
        <Text style={styles.notificationMessage}>{item.message}</Text>
        <Text style={styles.notificationTime}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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
    marginBottom:10,
    // borderRadius: 5,
    // backgroundColor: '#00AA99',
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
  notificationTime: {
    fontSize: 14,
    color: '#999',
  },
});

export default NotificationPage;
