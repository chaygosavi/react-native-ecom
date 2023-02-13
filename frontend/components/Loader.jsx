import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../styles/styles';
import {ActivityIndicator} from 'react-native-paper';

const Loader = () => {
  return (
    <ActivityIndicator size={40} style={{flex: 1}} color={colors.color3} />
  );
};

export default Loader;

const styles = StyleSheet.create({});
