import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [badName, setBadName] = useState(false);
  const [badMobile, setBadMobile] = useState(false);
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [badConfirmPassword, setBadConfirmPassword] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const validate = () => {
    setButtonDisabled(true);
    if (name === '') {
      setBadName(true);
      setButtonDisabled(false);
    } else {
      setBadName(false);
      if (mobile === '') {
        setBadMobile(true);
        setButtonDisabled(false);
      } else {
        setBadMobile(false);
        if (email === '') {
          setBadEmail(true);
          setButtonDisabled(false);
        } else {
          setBadEmail(false);
          if (password === '') {
            setBadPassword(true);
            setButtonDisabled(false);
          } else {
            setBadPassword(false);
            if (confirmPassword === '') {
              setBadConfirmPassword(true);
              setButtonDisabled(false);
            } else {
              setBadConfirmPassword(false);
              if (password !== confirmPassword) {
                setBadConfirmPassword(true);
              } else {
                setBadConfirmPassword(false);
                saveData();
              }
            }
          }
        }
      }
    }
  };
  const saveData = async () => {
    await AsyncStorage.setItem('NAME', name);
    await AsyncStorage.setItem('MOBILE', mobile);
    await AsyncStorage.setItem('EMAIL', email);
    await AsyncStorage.setItem('PASSWORD', password);
    // console.warn('yessssss');
    navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.login}>
        <Image
          source={require('../images/ic_launcher_round.png')}
          style={styles.img}
        />
        <Text style={styles.loginTxt}>Create New Account</Text>
        <CustomTextInput
          placeholder={'Enter Name'}
          icon={require('../images/user.png')}
          value={name}
          onChangeText={txt => {
            setName(txt);
            setBadName(false);
          }}
        />
        {badName === true ? (
          <Text style={styles.badtxt}>⚠️ Please Enter Name</Text>
        ) : null}
        <CustomTextInput
          placeholder={'Enter Mobile Number'}
          icon={require('../images/telephone.png')}
          value={mobile}
          keyboardType={'number-pad'}
          onChangeText={txt => {
            setMobile(txt);
            setBadMobile(false);
          }}
        />
        {badMobile === true ? (
          <Text style={styles.badtxt}>⚠️ Please Enter Mobile Number</Text>
        ) : null}
        <CustomTextInput
          placeholder={'Enter Email id'}
          icon={require('../images/mail.png')}
          value={email}
          onChangeText={txt => {
            setEmail(txt);
            setBadEmail(false);
          }}
        />
        {badEmail === true ? (
          <Text style={styles.badtxt}>⚠️ Please Enter Email Id</Text>
        ) : null}
        <CustomTextInput
          placeholder={'Enter password'}
          icon={require('../images/key.png')}
          type={'password'}
          value={password}
          onChangeText={txt => {
            setPassword(txt);
            setBadPassword(false);
          }}
        />
        {badPassword === true ? (
          <Text style={styles.badtxt}>⚠️ Please Enter Password</Text>
        ) : null}
        <CustomTextInput
          placeholder={'Enter Confirm password'}
          icon={require('../images/key.png')}
          value={confirmPassword}
          onChangeText={txt => {
            setConfirmPassword(txt);
            setBadConfirmPassword(false);
          }}
        />
        {badConfirmPassword === true ? (
          <Text style={styles.badtxt}>⚠️ Please Confirm Password</Text>
        ) : null}
        <CommonButton
          title={'Signup'}
          bgColor={buttonDisabled ? '#bebebe' : '#000'}
          textColor={'#fff'}
          onPress={() => validate()}
          disabled={buttonDisabled}
        />
        <Text
          style={styles.newUser}
          onPress={() => {
            //navigation.navigate('Login');
            navigation.goBack();
          }}>
          Already have account?
        </Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  login: {
    flex: 1,
  },
  img: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 100,
  },
  loginTxt: {
    marginTop: 50,
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  newUser: {
    fontSize: 18,
    fontWeight: '800',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 70,
    textDecorationLine: 'underline',
  },
  badtxt: {
    marginTop: 10,
    marginLeft: 30,
    color: 'red',
  },
});

export default Signup;
