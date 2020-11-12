import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Filmes = () => {
  return (
    <View style={styles.container}>
      <Text>Filmes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Filmes;