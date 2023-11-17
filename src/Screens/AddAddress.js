import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import {useDispatch} from 'react-redux';
import {addAddress} from '../redux/actions/Actions';

const AddAddress = () => {
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [pincode, setPincode] = useState('');
  const [houseNo, setHouseNo] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.settingBtn}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={require('../images/back.png')} style={styles.img} />
        </TouchableOpacity>
      </View>
      <CustomTextInput
        placeholder={'Enter City Name'}
        value={city}
        onChangeText={txt => {
          setCity(txt);
        }}
        icon={require('../images/skyline.png')}
      />
      <CustomTextInput
        placeholder={'Enter Street Name / Colony Name'}
        value={street}
        onChangeText={txt => {
          setStreet(txt);
        }}
        icon={require('../images/cityscape.png')}
      />
      <CustomTextInput
        placeholder={'Enter Pincode'}
        value={pincode}
        onChangeText={txt => {
          setPincode(txt);
        }}
        icon={require('../images/mailbox.png')}
      />
      <CustomTextInput
        placeholder={'Enter House No.'}
        value={houseNo}
        onChangeText={txt => {
          setHouseNo(txt);
        }}
        icon={require('../images/location.png')}
      />
      <CommonButton
        title={'Save Address'}
        bgColor={'#000'}
        textColor={'#fff'}
        onPress={() => {
          if (
            city !== '' &&
            street !== '' &&
            pincode !== '' &&
            houseNo !== ''
          ) {
            dispatch(
              addAddress({
                city: city,
                street: street,
                houseNo: houseNo,
                pincode: pincode,
              }),
              navigation.goBack(),
            );
          }
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
  settingBtn: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginLeft: 20,
  },
  img: {
    width: 24,
    height: 24,
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 15,
  },
});

export default AddAddress;
