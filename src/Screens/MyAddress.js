import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {deleteAddress} from '../redux/actions/Actions';
let addressList = [];

const MyAddress = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const addresslist = useSelector(state => state.AddressReducers);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>MyAddress</Text>
        <TouchableOpacity
          style={styles.settingBtn}
          onPress={() => {
            navigation.navigate('AddAddress');
          }}>
          <Text style={styles.addAddressBtn}>Add Address</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={addresslist}
        renderItem={({item, index}) => {
          return (
            <View style={styles.listBox}>
              <View>
                <Text style={styles.list}>{'House no:- ' + item.houseNo}</Text>
                <Text style={styles.list}>
                  {'Colony/Street Name:- ' + item.street}
                </Text>
                <Text style={styles.list}>{'City Name:- ' + item.city}</Text>
                <Text style={styles.list}>{'PinCode:- ' + item.pincode}</Text>
              </View>
              <TouchableOpacity
                style={styles.deleteBtnBG}
                onPress={() => {
                  dispatch(deleteAddress(index));
                }}>
                <Image
                  style={styles.deleteBtn}
                  source={require('../images/delete.png')}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addAddressBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    padding: 7,
    borderRadius: 10,
    marginRight: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 15,
  },
  listBox: {
    width: '100%',
    borderWidth: 0.2,
    borderColor: '#8e8e8e',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  list: {
    marginLeft: 20,
    marginBottom: 10,
  },
  deleteBtnBG: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  deleteBtn: {
    width: 24,
    height: 24,
  },
});
export default MyAddress;
