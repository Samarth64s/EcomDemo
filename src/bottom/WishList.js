import {View, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CartItem from '../common/CartItem';
import {addItemToCart, removeFromWishlist} from '../redux/actions/Actions';

const WishList = () => {
  const cartData = useSelector(state => state.Reducers2);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <FlatList
        data={cartData}
        renderItem={({item, index}) => {
          return (
            <CartItem
              item={item}
              onAddToCart={() => {
                dispatch(addItemToCart(item));
              }}
              isWhishlist={'whish'}
              onRemoveWhishList={() => {
                dispatch(removeFromWishlist(index));
              }}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 80,
  },
});
export default WishList;
