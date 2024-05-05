import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, TextInput } from 'react-native';
import IconMenu from '../component/IconMenu';

const Data = [
    { id: 1, label: 'Mobile Legends', image: require('../assets/icons/ML.png') },
    { id: 2, label: 'Free Fire', image: require('../assets/icons/FF.png') },
    { id: 3, label: 'PUBG Mobile', image: require('../assets/icons/PUBG.png') },
    { id: 4, label: 'Lords Mobile', image: require('../assets/icons/LM.png') },
    { id: 5, label: 'Genshin Impact', image: require('../assets/icons/GI.png') },
    { id: 6, label: 'Rise Of Kingdom', image: require('../assets/icons/ROK.png') },
    { id: 7, label: 'Clash Of Clans', image: require('../assets/icons/COC.png') },
    { id: 8, label: 'Dragon City', image: require('../assets/icons/DC.png') },
    { id: 9, label: 'Clash Royale', image: require('../assets/icons/CR.png') },
    { id: 10, label: 'Royal Match', image: require('../assets/icons/RM.png') },
];

const Home = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');

    const filteredData = Data.filter(item =>
        item.label.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <ScrollView contentContainerStyle={styles.scrollView}>
            <ImageBackground source={require('../assets/icons/Wallpaper.png')} style={styles.background}>
                <View style={styles.container}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Cari game..."
                        onChangeText={setSearchText}
                        value={searchText}
                    />
                    <View style={styles.centerContainer}>
                        <Text style={styles.title}>Selamat Datang! </Text>
                        <Text style={styles.subtitle}>Jelajahi berbagai game favorit Anda</Text>
                    </View>
                    <View style={styles.iconMenuContainer}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {filteredData.map((item) => (
                                <IconMenu key={item.id} label={item.label} image={item.image} />
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
    },
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    container: {
        flex: 1,
        paddingTop: 10, // Atur padding atas sesuai kebutuhan
    },
    searchInput: {
        backgroundColor: '#555',
        padding: 10,
        marginHorizontal: 20,
        marginBottom: 10,
        borderRadius: 10,
    },
    centerContainer: {
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
    },
    subtitle: {
        fontSize: 16,
        color: '#FFF',
    },
    iconMenuContainer: {
        marginBottom: 20,
    },
});

export default Home;
