import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const Header = ({heading}: {heading: String}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cfcfcf',
    alignItems: 'center',
    backgroundColor: "#00FFFF"
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
  },
});
export default Header;
