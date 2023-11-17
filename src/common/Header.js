import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Ecommer App</Text>
      <TouchableOpacity style={styles.btn}>
        <Text>Mode</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 0.2,
    borderBottomColor: '#bebebe',
    backgroundColor: '#fff',
  },
  txt: {
    fontWeight: '600',
    fontSize: 20,
    color: '#000',
    marginLeft: 20,
  },
  btn: {
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 30,
  },
});

export default Header;
