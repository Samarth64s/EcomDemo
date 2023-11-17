import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';

const OrderSuccess = () => {
  const navigation = useNavigation();
  const orders = useSelector(state => state.OrderReducers);
  const route = useRoute();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={
          route.params.status == 'Success'
            ? require('../images/checked.png')
            : require('../images/cancel.png')
        }
        style={{width: 50, height: 50}}
      />
      <Text style={{marginTop: 20, fontSize: 20}}>
        {route.params.status == 'Success'
          ? 'Your Order Placed Successfully!'
          : 'Order Failed'}
      </Text>
      <TouchableOpacity
        style={{
          width: 200,
          height: 50,
          marginTop: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 6,
          borderRadius: 10,
        }}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text> Go to Home </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderSuccess;
