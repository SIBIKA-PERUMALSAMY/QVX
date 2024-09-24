import React from 'react';
import {View, StyleSheet} from 'react-native';

// Define the type for the component props
interface DotIndicatorProps {
  activeIndex: number; // The index of the active dot
}

// Functional component for the DotIndicator
const DotIndicator: React.FC<DotIndicatorProps> = ({activeIndex}) => {
  return (
    <View style={styles.container}>
      {[0, 1, 2].map(index => (
        <View
          key={index}
          style={[
            styles.dot,
            index === activeIndex ? styles.activeDot : styles.inactiveDot,
          ]}
        />
      ))}
    </View>
  );
};

// Define styles for the dots and container
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Arrange dots in a row
    justifyContent: 'center', // Center the dots horizontally
    alignItems: 'center', // Center the dots vertically
    marginBottom: 30, // Add margin at the bottom for spacing
  },
  dot: {
    width: 10, // Width of each dot
    height: 10, // Height of each dot
    borderRadius: 5, // Make the dots circular
    marginHorizontal: 5, // Space between the dots
    borderColor: 'gray',
    borderWidth: 0.5,
  },
  activeDot: {
    backgroundColor: 'gray', // Color of the active dot (filled)
  },
  inactiveDot: {
    backgroundColor: 'white', // Color of the inactive dots (unfilled)
  },
});

export default DotIndicator;