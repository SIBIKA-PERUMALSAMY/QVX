

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { ICONS } from '../../images/icon';
import { COLORS } from '../Colors';


const Header = ({ title, onBackPress, onIconPress, image}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        {/* <Ionicons name="arrow-back" size={24} color="black" /> */}
        <Image source={ICONS.backarrow}/>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
      <TouchableOpacity onPress={onIconPress} style={styles.iconButton}>
      <Image source={image}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingHorizontal: 16,
    // height: 56,
    padding:24  ,
    backgroundColor: COLORS.SurfieGreen, 
  },
  backButton: {
    paddingRight: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    lineHeight:22,
    color:'white',
  },
  iconButton: {
    paddingLeft: 16,
  },
});

export default Header;