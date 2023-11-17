import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../common/Loader';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const validate = () => {
    setModalVisible(true);
    if (email == '') {
      setBadEmail(true);
      setModalVisible(false);
    } else {
      setBadEmail(false);
      if (password === '') {
        setBadPassword(true);
        setModalVisible(false);
      } else {
        setTimeout(() => {
          setBadPassword(false);
          getData();
        }, 2000);
      }
    }
  };

  const getData = async () => {
    const mEmail = await AsyncStorage.getItem('EMAIL');
    const mPass = await AsyncStorage.getItem('PASSWORD');
    if (email === mEmail && password === mPass) {
      setModalVisible(false);
      navigation.navigate('Home');
    } else {
      setModalVisible(false);
    }
  };

  return (
    <View style={styles.login}>
      <Image
        source={require('../images/ic_launcher_round.png')}
        style={styles.img}
      />
      <Text style={styles.loginTxt}>Login</Text>
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
        <Text style={styles.badmail}>⚠️ Please Enter Email Id</Text>
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
        <Text style={styles.badmail}>⚠️ Please Enter Email Id</Text>
      ) : null}
      <CommonButton
        title={'Login'}
        bgColor={'#000'}
        textColor={'#fff'}
        onPress={() => {
          validate();
        }}
      />
      <Text
        style={styles.newUser}
        onPress={() => {
          navigation.navigate('Signup');
        }}>
        Create New Account?
      </Text>
      <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
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
    textDecorationLine: 'underline',
  },
  badmail: {
    marginTop: 10,
    marginLeft: 30,
    color: 'red',
  },
});

export default Login;
