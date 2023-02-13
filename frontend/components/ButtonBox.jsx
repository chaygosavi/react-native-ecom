import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-paper';
import {colors} from '../styles/styles';

const ButtonBox = ({icon, text, handler, reverse = false, loading = false}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        backgroundColor: reverse ? colors.color1 : colors.color3,
        height: 80,
        width: 80,
        borderRadius: 20,
        alignItems: 'center',
      }}
      onPress={() => handler(text)}
      disabled={loading}>
      <Avatar.Icon
        size={50}
        icon={icon}
        style={{backgroundColor: reverse ? colors.color1 : colors.color3}}
      />
      <Text style={{color: colors.color2}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonBox;

const styles = StyleSheet.create({});
