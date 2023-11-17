import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
let name = ' ';
const Profile = () => {
  const navigation = useNavigation();
  useEffect(() => {
    getData();
  });
  const getData = async () => {
    name = await AsyncStorage.getItem('NAME');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity style={styles.settingBtn}>
          <Image
            style={styles.img}
            source={require('../images/settings.png')}
          />
        </TouchableOpacity>
      </View>
      <Image source={require('../images/profie.png')} style={styles.profile} />
      <Text style={styles.profileName}>{name}</Text>
      <TouchableOpacity
        style={styles.touchBtn}
        onPress={() => {
          navigation.navigate('MyAddress');
        }}>
        <Text>My Address</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchBtn}
        onPress={() => {
          navigation.navigate('Orders');
        }}>
        <Text>My Order</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchBtn}>
        <Text>Offers</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 15,
  },
  profile: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 30,
  },
  header: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingBtn: {
    width: 30,
    height: 30,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 24,
    height: 24,
  },
  profileName: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 18,
  },
  touchBtn: {
    width: '90%',
    alignSelf: 'center',
    height: 50,
    borderBottomColor: '#8e8e8e',
    borderBottomWidth: 1,
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default Profile;
