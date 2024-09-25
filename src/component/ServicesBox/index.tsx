import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, ViewStyle, ImageSourcePropType } from 'react-native';
import { COLORS } from '../Colors';

interface ServiceBoxProps {
  onPress: () => void;
  imageSource: ImageSourcePropType;
  title: string;
  style?: ViewStyle;
}

const ServiceBox: React.FC<ServiceBoxProps> = ({ onPress, imageSource, title, style }) => {
  return (
    <TouchableOpacity style={[styles.serviceBox, style]} onPress={onPress}>
      <Image style={styles.serviceImage} source={imageSource} />
      <Text style={styles.serviceText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  serviceBox: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 3,
    margin: 5,
  },
  serviceImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  serviceText: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    marginTop:5,
    color:COLORS.gray,
    width:150,
  },
});

export default ServiceBox;