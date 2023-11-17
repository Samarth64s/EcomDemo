import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Main from '../bottom/Main';
import Search from '../bottom/Search';
import Cart from '../bottom/Cart';
import WishList from '../bottom/WishList';
import Profile from '../bottom/Profile';
import {useSelector} from 'react-redux';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const data = useSelector(state => state);

  return (
    <View style={styles.container}>
      {selectedTab == 0 ? (
        <Main />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Cart />
      ) : selectedTab == 3 ? (
        <WishList />
      ) : (
        <Profile />
      )}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image
            source={require('../images/home.png')}
            style={{
              width: 24,
              height: 24,
              tintColor: selectedTab == 0 ? '#000' : '#bebebe',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image
            source={require('../images/search.png')}
            style={{
              width: 24,
              height: 24,
              tintColor: selectedTab == 1 ? '#000' : '#bebebe',
            }}
          />
        </TouchableOpacity>
        <View style={styles.cartList}>
          <TouchableOpacity
            onPress={() => {
              setSelectedTab(2);
            }}
            style={{
              width: 44,
              height: 44,
              backgroundColor: selectedTab == 2 ? 'green' : '#000',
              borderRadius: 22,
              justifyContent: 'center',
              alignItems: 'center,',
            }}>
            <Image
              style={{
                width: 24,
                alignSelf: 'center',
                height: 24,
                tintColor: '#fff',
              }}
              source={require('../images/shopping-cart.png')}
            />
            <View style={styles.shoppingCount}>
              <Text style={{color: '#fff', fontWeight: '600'}}>
                {data.Reducers.length}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab(3);
          }}
          style={styles.btn}>
          <Image
            source={require('../images/heart.png')}
            style={{
              width: 24,
              height: 24,
              tintColor: selectedTab == 3 ? '#000' : '#bebebe',
            }}
          />
          <View style={styles.wishListCount}>
            <Text style={{color: '#fff', fontWeight: '600'}}>
              {data.Reducers2.length}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab(4);
          }}
          style={styles.btn}>
          <Image
            source={require('../images/user.png')}
            style={{
              width: 24,
              height: 24,
              tintColor: selectedTab == 4 ? '#000' : '#bebebe',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomNavigation: {
    width: '100%',
    height: 70,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    flexDirection: 'row',
  },
  btn: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartList: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shoppingCount: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 2,
    right: 2,
  },
  wishListCount: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 15,
    right: 20,
  },
});

export default Home;

