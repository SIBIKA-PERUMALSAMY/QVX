import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import { ICONS } from '../../images/image/icon'
import { IMAGE } from '../../images/image'
import { useNavigation, useRoute } from '@react-navigation/native'

const CameraDetails = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const { cameraDetails } = route.params // Retrieve camera details from navigation parameters

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {/* Uncomment the header if needed */}
        {/* <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.backIcon} source={ICONS.BackIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Camera Details</Text>
        </View> */}
{/* <Image style={styles.cameraImage} source={IMAGE.HomeTempDashImg}/> */}
        <View style={styles.tableContainer}>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>Camera Number</Text>
            <Text style={styles.tableSeparator}>-</Text>
            <Text style={styles.tableData}>{cameraDetails.cameraNumber}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>Position</Text>
            <Text style={styles.tableSeparator}>-</Text>
            <Text style={styles.tableData}>{cameraDetails.cameraPosition}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>IP Address</Text>
            <Text style={styles.tableSeparator}>-</Text>
            <Text style={styles.tableData}>{cameraDetails.ip}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>Status</Text>
            <Text style={styles.tableSeparator}>-</Text>
            <Text style={styles.tableData}>{cameraDetails.status}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>Coverage</Text>
            <Text style={styles.tableSeparator}>-</Text>
            <Text style={styles.tableData}>{cameraDetails.Coverage}</Text>
          </View>
          {/* <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>ID</Text>
            <Text style={styles.tableSeparator}>-</Text>
            <Text style={styles.tableData}>{cameraDetails._id}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>Created At</Text>
            <Text style={styles.tableSeparator}>-</Text>
            <Text style={styles.tableData}>{cameraDetails.crearedAt}</Text>
          </View> */}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center', // Centering the content
  },
  scrollContainer: {
    flex: 1,
    width: '100%', // Ensuring the scroll view takes full width
  },
  cameraImage: {
    margin: 30,
    width: '80%',
    height: '30%',
   
    borderRadius: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A4D8F',
    padding: 10,
  },
  backIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  tableContainer: {
    width: '90%', // Adjust the width as needed
    padding: 20,
    margin: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
    borderLeftWidth: 2, // Adding left border
    borderLeftColor: '#1A4D8F', // Vertical line color
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Center content vertically
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tableHeader: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#1A4D8F', // Highlight color
    flex: 1, // Allow to grow and fill space
  },
  tableSeparator: {
    fontSize: 16,
    textAlign: 'center',
    color: '#1A4D8F', // Highlight color for separator
    flex: 0, // Fixed width for separator
    width: 20, // Set a width for the separator
  },
  tableData: {
    fontSize: 14,
    color: '#333',
    fontWeight:'bold',
    textAlign: 'center', // Center text horizontally
    flex: 1, // Allow to grow and fill space
  },
})

export default CameraDetails

