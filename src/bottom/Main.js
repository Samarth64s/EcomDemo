import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../common/Header';
import {products} from '../Products';
import MyProductItem from '../common/MyProductItem';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToCart, addToWishList} from '../redux/actions/Actions';

const Main = () => {
  const dispatch = useDispatch();
  const [categoryList, setCategoryList] = useState([]);
  const [tshirtList, setTShirtList] = useState([]);
  const [jeansList, setJeansList] = useState([]);
  const [shoesList, setShoesList] = useState([]);
  const [jacketsList, setJacketsList] = useState([]);
  const [slippersList, setSlippersList] = useState([]);
  const [trousersList, setTrousersList] = useState([]);

  useEffect(() => {
    // console.warn(products);
    let tempCategory = [];
    products.category.map(item => {
      tempCategory.push(item);
    });
    setCategoryList(tempCategory);
    setTShirtList(products.category[0].data);
    setJeansList(products.category[1].data);
    setJacketsList(products.category[2].data);
    setShoesList(products.category[3].data);
    setTrousersList(products.category[4].data);
    setSlippersList(products.category[5].data);
  }, []);

  const items = useSelector(state => state);
  console.warn(items);

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <Header />
        <Image
          style={styles.banner}
          source={require('../images/banner.webp')}
        />
        <View style={{marginTop: 20}}>
          <FlatList
            data={categoryList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    padding: 10,
                    borderWidth: 1,
                    marginLeft: 20,
                    borderRadius: 20,
                  }}>
                  <Text style={{color: '#000'}}>{item.category}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            color: '#000',
            fontSize: 16,
            fontWeight: '600',
          }}>
          New T Shirts
        </Text>
        <View style={{marginTop: 20}}>
          <FlatList
            data={tshirtList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <MyProductItem
                  item={item}
                  onWhishListAdd={x => {
                    dispatch(addToWishList(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            color: '#000',
            fontSize: 16,
            fontWeight: '600',
          }}>
          New Jeans
        </Text>
        <View style={{marginTop: 20}}>
          <FlatList
            data={jeansList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <MyProductItem
                  item={item}
                  onWhishListAdd={x => {
                    dispatch(addToWishList(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            color: '#000',
            fontSize: 16,
            fontWeight: '600',
          }}>
          New Jackets
        </Text>
        <View style={{marginTop: 20}}>
          <FlatList
            data={jacketsList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <MyProductItem
                  item={item}
                  onWhishListAdd={x => {
                    dispatch(addToWishList(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            color: '#000',
            fontSize: 16,
            fontWeight: '600',
          }}>
          New Shoes
        </Text>
        <View style={{marginTop: 20}}>
          <FlatList
            data={shoesList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <MyProductItem
                  item={item}
                  onWhishListAdd={x => {
                    dispatch(addToWishList(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            color: '#000',
            fontSize: 16,
            fontWeight: '600',
          }}>
          New Trousers
        </Text>
        <View style={{marginTop: 20}}>
          <FlatList
            data={trousersList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <MyProductItem
                  item={item}
                  onWhishListAdd={x => {
                    dispatch(addToWishList(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            color: '#000',
            fontSize: 16,
            fontWeight: '600',
          }}>
          New Slippers
        </Text>
        <View style={{marginTop: 20, marginBottom: 60}}>
          <FlatList
            data={slippersList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <MyProductItem
                  item={item}
                  onWhishListAdd={x => {
                    dispatch(addToWishList(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: '94%',
    height: 200,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,
  },
});
export default Main;
