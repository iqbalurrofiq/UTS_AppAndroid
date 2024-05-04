// IconMenu.js
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const IconMenu = ({label, image}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.box}>
        <Image
          source={image}
          style={styles.image}
        />
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 5,
    alignItems: 'center',
  },
  box: {
    width: 72,
    height: 72,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 3,
  },
  image: {
    width: 50, // Sesuaikan dengan ukuran gambar/logo Anda
    height: 50, // Sesuaikan dengan ukuran gambar/logo Anda
    resizeMode:'cover',
    width: '100%',
    height: '100%',
  },
  label: {
    color: '#000',
    marginTop: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default IconMenu;
