// import React from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import { COLORS } from '../Colors';

// interface AppointmentCardProps {
//     date: {
//         day: string;
//         month: string;
//         weekday: string;
//     };
//     treatment: string;
//     bookingId: string;
//     timing: string;
//     profileImage?: any; // URL or local image path
//     onTodayPress: () => void;
// }

// const AppointmentCard: React.FC<AppointmentCardProps> = ({
//     date,
//     treatment,
//     bookingId,
//     timing,
//     profileImage,
//     onTodayPress,
// }) => {
//     return (
//         <View style={styles.card}>
//             {/* Date*/}
//             <View style={styles.dateSection}>
//                 <Text style={styles.month}>{date.month}</Text>
//                 <Text style={styles.day}>{date.day}</Text>
//                 <Text style={styles.weekday}>{date.weekday}</Text>
//             </View>
//             <View style={styles.verticalLine}></View>
//             {/* Booking Details */}
//             <View style={styles.detailsSection}>
//                 <Text style={styles.title}>Booking Appointment</Text>
//                 <Text style={[styles.text, { color: COLORS.gray, fontWeight: '600' }]}>Treatment: {treatment}</Text>
//                 <View style={styles.horizontalLine}></View>
//                 <Text style={[styles.text, { fontWeight: '600' }]}>Booking ID: {bookingId}</Text>
//                 <Text style={styles.text}>Timing: {timing}</Text>
//             </View>

//             {/* Profile */}
//             <View style={styles.profileSection}>
//                 <Image source={profileImage} style={styles.profileImage} />
//                 <TouchableOpacity style={styles.todayButton} onPress={onTodayPress}>
//                     <Text style={styles.todayButtonText}>Today</Text>
//                 </TouchableOpacity>
//             </View>

//             <View style={styles.profileSection}>
//                 <Image source={profileImage} style={styles.profileImage} />
//                 <TouchableOpacity style={styles.todayButton} onPress={onTodayPress}>
//                     <Text style={styles.todayButtonText}>Upcoming</Text>
//                 </TouchableOpacity>
//             </View>

//             <View style={styles.profileSection}>
//                 <Image source={profileImage} style={styles.profileImage} />
//                 <TouchableOpacity style={styles.todayButton} onPress={onTodayPress}>
//                     <Text style={styles.todayButtonText}>Completed</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     card: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: 'white',
//         borderRadius: 10,
//         padding: 10,
//         elevation: 3,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.2,
//         shadowRadius: 2,
//         marginTop:4,
//         marginBottom:6
//     },
//     dateSection: {
//         alignItems: 'center',
//         marginRight: 10,
//         padding: 5
//     },
//     month: {
//         color: '#787878',
//         fontSize: 16,
//         fontWeight: 'bold'
//     },
//     day: {
//         color: '#1E4C98',
//         fontSize: 30,
//         fontWeight: 'bold',

//     },
//     weekday: {
//         color: '#787878',
//         fontSize: 16,
//         fontWeight: 'bold'
//     },
//     detailsSection: {
//         flex: 1,
//         paddingRight: 10,
//     },
//     title: {
//         color: '#4A4A4A',
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginBottom: 5,
//     },
//     text: {
//         color: '#787878',
//         fontSize: 14,
//         marginBottom: 3,
//     },
//     profileSection: {
//         alignItems: 'center',
//     },
//     profileImage: {
//         width: 40,
//         height: 40,
//         borderRadius: 20,
//         marginBottom: 5,
//     },
//     todayButton: {
//         backgroundColor: '#1E4C98',
//         paddingHorizontal: 10,
//         paddingVertical: 5,
//         borderRadius: 5,
//     },
//     todayButtonText: {
//         color: 'white',
//         fontSize: 14,
//     },
//     horizontalLine: {
//         borderBottomColor: '#CCCCCC',
//         borderBottomWidth: 1,
//         width: '100%',
//         marginVertical: 5,
//     },
//     verticalLine: {
//         borderRightColor: '#CCCCCC',
//         borderRightWidth: 1,
//         height: 90,
//         marginHorizontal: 10,
//     },
// });

// export default AppointmentCard;

//CORRECT CODE FOR API INTEGRATION (ABOVE ONE)

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../Colors';

interface AppointmentCardProps {
    date: {
        day: string;
        month: string;
        weekday: string;
    };
    treatment: string;
    bookingId: string;
    timing: string;
    profileImage?: any; // URL or local image path
    status: 'Today' | 'Upcoming' | 'Completed';
    onPress: () => void;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({
    date,
    treatment,
    bookingId,
    timing,
    profileImage,
    status,
    onPress,
}) => {
    const textColor = status === 'Today' ? '#666666' : status === 'Upcoming' ? '#666666' : '#666666';
    const bgColor = status === 'Today' ? '#104A82' : status === 'Upcoming' ? '#0E766D' : '#BE1E2D';
    return (
        <View style={[styles.card]}>
            {/* Date */}
            <View style={styles.dateSection}>
  <Text style={styles.month}>{date.month}</Text>
  <Text style={[styles.day, { color: bgColor }]}>{date.day}</Text>
  <Text style={styles.weekday}>{date.weekday}</Text>
</View>

            <View style={styles.verticalLine}></View>
            {/* Booking Details */}
            <View style={styles.detailsSection}>
                <Text style={[styles.title, { color: textColor }]}>Booking Appointment</Text>
                <Text style={[styles.text, { color: COLORS.gray, fontWeight: '600' }]}>Treatment: {treatment}</Text>
                <View style={styles.horizontalLine}></View>
                <Text style={[styles.text, { fontWeight: '600' }]}>Booking ID: {bookingId}</Text>
                <Text style={styles.text}>Timing: {timing}</Text>
            </View>

            {/* Profile and Status */}
            <View style={styles.profileSection}>
                <Image source={profileImage} style={styles.profileImage} />
                <TouchableOpacity style={[styles.statusButton, { backgroundColor: bgColor }]} onPress={onPress}>
                    <Text style={styles.statusButtonText}>{status}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        marginBottom: 6,
    },
    dateSection: {
        alignItems: 'center',
        marginRight: 10,
        padding: 5,
    },
    month: {
        color: '#787878',
        fontSize: 16,
        fontWeight: 'bold',
    },
    day: {
        color: '#1E4C98',
        fontSize: 30,
        fontWeight: 'bold',
    },
    weekday: {
        color: '#787878',
        fontSize: 16,
        fontWeight: 'bold',
    },
    detailsSection: {
        flex: 1,
        paddingRight: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    text: {
        color: '#787878',
        fontSize: 14,
        marginBottom: 3,
        padding:5,
    },
    profileSection: {
        alignItems: 'center',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginBottom: 5,
    },
    statusButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
    statusButtonText: {
        color: 'white',
        fontSize: 14,
    },
    horizontalLine: {
        borderBottomColor: '#CCCCCC',
        borderBottomWidth: 1,
        width: '100%',
        marginVertical: 5,
    },
    verticalLine: {
        borderRightColor: '#CCCCCC',
        borderRightWidth: 1,
        height: 90,
        marginHorizontal: 10,
    },
});

export default AppointmentCard;
