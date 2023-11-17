import {View, FlatList, StyleSheet, Text} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CartItem from '../common/CartItem';
import {addToWishList, removeFromCart} from '../redux/actions/Actions';
import CommonButton from '../common/CommonButton';
import {useNavigation} from '@react-navigation/native';

const Cart = () => {
  const cartData = useSelector(state => state.Reducers);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {cartData.length > 0 ? (
        <FlatList
          data={cartData}
          renderItem={({item, index}) => {
            return (
              <CartItem
                item={item}
                onAddToWishList={() => {
                  dispatch(addToWishList(item));
                }}
                onRemoveItem={() => {
                  dispatch(removeFromCart(index));
                }}
              />
            );
          }}
        />
      ) : (
        <View style={styles.notFound}>
          <Text>No Items Added in Carts</Text>
        </View>
      )}
      {cartData.length > 0 ? (
        <View>
          <CommonButton
            title={'CheckOut'}
            bgColor={'green'}
            textColor={'#fff'}
            onPress={() => {
              navigation.navigate('Checkout');
            }}
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 80,
  },
  notFound: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Cart;
