import {View, Text} from 'react-native';
import React from 'react';

const ProductDetails = ({route: {params}}) => {
  console.log(params.id);
  return (
    <View>
      <Text>ProductDetails</Text>
    </View>
  );
};

export default ProductDetails;
