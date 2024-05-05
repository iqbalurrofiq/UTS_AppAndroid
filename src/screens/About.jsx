import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

const About = () => {
  return (
    <ImageBackground
      source={require('../assets/icons/Wallpaper.png')}
      style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Tentang Kami</Text>
        <Text style={styles.description}>
          Kami adalah tim yang berdedikasi untuk memberikan pengalaman gaming terbaik kepada pengguna kami. Dengan semangat inovasi dan keunggulan, kami terus berusaha untuk memberikan layanan terbaik dan menjaga komitmen kami terhadap komunitas gaming.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Hubungi Kami</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#FFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#255',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default About;
