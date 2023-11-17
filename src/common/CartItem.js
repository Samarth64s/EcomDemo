import {View, Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const CartItem = ({
  item,
  onRemoveItem,
  onAddToCart,
  onRemoveWhishList,
  onAddToWishList,
  isWhishlist,
}) => {
  return (
    <View
      style={{
        width: '90%',
        height: 300,
        borderRadius: 10,
        marginTop: 20,
        elevation: 5,
        backgroundColor: '#fff',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
      }}>
      <Image
        source={item.image}
        style={{
          width: '100%',
          height: '60%',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <Text
        style={{
          marginLeft: 10,
          marginTop: 10,
          fontSize: 18,
          fontWeight: '600',
        }}>
        {item.name}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 10,
          paddingRight: 10,
          marginTop: 10,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, fontWeight: '600'}}>
          {'₹' + item.price}
        </Text>
        {isWhishlist ? (
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderRadius: 10,
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 7,
              paddingBottom: 7,
            }}
            onPress={() => {
              onAddToCart(item);
            }}>
            <Text>Add to Cart </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderRadius: 10,
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 7,
              paddingBottom: 7,
            }}
            onPress={() => {
              onRemoveItem();
            }}>
            <Text>Remove Item </Text>
          </TouchableOpacity>
        )}
      </View>
      {isWhishlist ? (
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            backgroundColor: '#fff',
            borderRadius: 20,
            elevation: 5,
            position: 'absolute',
            top: 10,
            right: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            onRemoveWhishList();
          }}>
          <Image
            source={require('../images/heartBlack.png')}
            style={{width: 24, height: 24, tintColor: 'red'}}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            backgroundColor: '#fff',
            borderRadius: 20,
            elevation: 5,
            position: 'absolute',
            top: 10,
            right: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            onAddToWishList(item);
          }}>
          <Image
            source={require('../images/heart.png')}
            style={{width: 24, height: 24}}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CartItem;
