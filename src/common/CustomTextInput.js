import {View, TextInput, StyleSheet, Image} from 'react-native';
import React from 'react';

const CustomTextInput = ({
  value,
  onChangeText,
  placeholder,
  icon,
  type,
  keyboardType,
}) => {
  return (
    <View style={styles.txtInput}>
      <Image source={icon} style={{width: 24, height: 24}} />
      <TextInput
        placeholder={placeholder}
        secureTextEntry={type ? true : false}
        keyboardType={keyboardType ? keyboardType : 'default'}
        style={{marginLeft: 10}}
        value={value}
        onChangeText={txt => {
          onChangeText(txt);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  txtInput: {
    alignSelf: 'center',
    paddingLeft: 20,
    width: '85%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default CustomTextInput;
