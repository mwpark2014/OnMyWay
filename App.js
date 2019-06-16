import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LocationSection from './views/home/components/location/LocationSection';

export default function App() {
  return (
    <View style={styles.container}>
      <LocationSection style={styles.alignCenter} />
      <Text>Favorites
      </Text>
      <Text>Recents
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
    margin: 20,
  },
  alignCenter: {
    alignSelf: 'center',
  }
});
