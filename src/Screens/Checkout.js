import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CommonButton from '../common/CommonButton';
import RazorpayCheckout from 'react-native-razorpay';
import {useNavigation} from '@react-navigation/native';
import {addOrder} from '../redux/actions/Actions';

const Checkout = () => {
  const cartData = useSelector(state => state.Reducers);
  const addresslist = useSelector(state => state.AddressReducers);
  const [selectedAdd, setSelectedAdd] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const getTotal = () => {
    let tempTotal = 0;
    cartData.map(item => {
      tempTotal = tempTotal + item.price;
    });
    return tempTotal;
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View>
          <FlatList
            data={cartData}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    width: '100%',
                    height: 70,
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  <Image
                    source={item.image}
                    style={{width: 70, height: 70, marginLeft: 10}}
                  />
                  <View style={{padding: 10}}>
                    <Text style={{fontSize: 18}}>{item.name}</Text>
                    <Text style={{marginTop: 10}}>{'₹ ' + item.price}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 30,
            borderTopWidth: 0.5,
            height: 50,
            borderTopColor: '#8e8e8e',
          }}>
          <Text>Total: </Text>
          <Text>{'₹ ' + getTotal()} </Text>
        </View>
        <View>
          <FlatList
            data={addresslist}
            renderItem={({item, index}) => {
              return (
                <View style={styles.listBox}>
                  <View>
                    <Text style={styles.list}>
                      {'House no:- ' + item.houseNo}
                    </Text>
                    <Text style={styles.list}>
                      {'Colony/Street Name:- ' + item.street}
                    </Text>
                    <Text style={styles.list}>
                      {'City Name:- ' + item.city}
                    </Text>
                    <Text style={styles.list}>
                      {'PinCode:- ' + item.pincode}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={styles.selecteBtnBG}
                    onPress={() => {
                      setSelectedAdd(
                        'House No:' +
                          item.houseNo +
                          '' +
                          ',Street:' +
                          item.street +
                          ' ' +
                          ',City' +
                          item.city +
                          ' ' +
                          ',Pincode' +
                          item.pincode,
                      );
                    }}>
                    <Text>Select Address</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        <Text style={{margin: 20, fontSize: 18}}>Selected Address</Text>
        <Text style={{margin: 20, fontSize: 16}}>
          {selectedAdd == ''
            ? 'Please Select Address From Above List'
            : selectedAdd}
        </Text>
        <CommonButton
          bgColor={'#000'}
          textColor={'#fff'}
          title={'Place Order'}
          onPress={() => {
            var options = {
              description: 'Credits towards consultation',
              image: 'https://i.imgur.com/3g7nmJC.png',
              currency: 'INR',
              key: '', // Your api key
              amount: parseInt(getTotal() * 100),
              name: 'foo',
              prefill: {
                email: 'void@razorpay.com',
                contact: '9191919191',
                name: 'Razorpay Software',
              },
              theme: {color: '#F37254'},
            };
            RazorpayCheckout.open(options)
              .then(data => {
                // handle success
                console.warn(`Success: ${data.razorpay_payment_id}`);
                navigation.navigate('OrderSuccess', {status: 'Success'});
                dispatch(
                  addOrder({
                    items: cartData,
                    total: getTotal(),
                    address: selectedAdd,
                  }),
                );
              })
              .catch(error => {
                // handle failure
                console.warn(`Error: ${error.code} | ${error.description}`);
                navigation.navigate('OrderSuccess', {status: 'Failed'});
              });
          }}
        />
      </View>
    </SafeAreaView>
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
  selecteBtnBG: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
});
export default Checkout;
