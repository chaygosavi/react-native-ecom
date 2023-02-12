import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button} from 'react-native-paper';
import CartItem from '../components/CartItem';
import Header from '../components/Header';
import {colors, defaultStyle} from '../styles/styles';

export const cartItems = [
  {
    product: '23423rsaefsdfsd',
    name: 'Macbook',
    stock: 99,
    price: 87,
    quantity: 90,
    image:
      'https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    product: 'sdfsfw45344t4t',
    name: 'EUU',
    stock: 9189,
    price: 27,
    quantity: 9,
    image:
      'https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
];

const Cart = ({navigation}) => {
  const decrementHandler = (id, qty) => {};
  const incrementHandler = (id, qty, stock) => {};

  const Heading = () => (
    <View
      style={{
        paddingTop: 70,
        marginLeft: 35,
      }}>
      <Text style={{fontSize: 25}}>Shopping</Text>
      <Text style={{fontSize: 25, fontWeight: '900'}}>Cart</Text>
    </View>
  );

  return (
    <View style={{...defaultStyle, padding: 0}}>
      <Header back emptyCart />

      <Heading />
      <View
        style={{
          flex: 1,
          paddingVertical: 20,
        }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {cartItems.map((i, idx) => (
            <CartItem
              id={i.product}
              key={i.product}
              i={i}
              index={idx}
              incrementHandler={incrementHandler}
              decrementHandler={decrementHandler}
            />
          ))}
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 35,
        }}>
        <Text>5 Items</Text>
        <Text>₹5</Text>
      </View>
      <TouchableOpacity
        onPress={
          cartItems.length > 0
            ? () => navigation.navigate('confirmorder')
            : null
        }>
        <Button
          icon="cart"
          textColor={colors.color2}
          style={{
            backgroundColor: colors.color3,
            borderRadius: 100,
            padding: 5,
            margin: 30,
          }}>
          Checkout
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
