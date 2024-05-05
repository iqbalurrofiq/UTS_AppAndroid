import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Account = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Image
            source={require('../assets/icons/Wallpaper.png')}
            style={styles.image}
          />
          <Text style={styles.sectionTitle}>Profil Anda</Text>
          <View style={styles.profileInfo}>
            <Icon name="person" size={24} color="green" />
            <Text style={styles.label}>Nama:</Text>
            <Text style={styles.value}>John Doe</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.profileInfo}>
            <Icon name="email" size={24} color="green" />
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>john.doe@example.com</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.profileInfo}>
            <Icon name="location-on" size={24} color="green" />
            <Text style={styles.label}>Alamat:</Text>
            <Text style={styles.value}>Jalan Contoh No. 123</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.profileInfo}>
            <Icon name="phone" size={24} color="green" />
            <Text style={styles.label}>Nomor Telepon:</Text>
            <Text style={styles.value}>+6281234567890</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Keluar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    color: '#333',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
    color: '#333',
  },
  value: {
    flex: 1,
    color: '#333',
  },
  editButton: {
    backgroundColor: '#333',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  editButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF',
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default Account;
