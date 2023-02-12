import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors, defaultStyle} from '../styles/styles';
import Header from '../components/Header';
import {cartItems} from './Cart';
import ConfirmOrderItem from '../components/ConfirmOrderItem';
import {Button} from 'react-native-paper';

const Heading = () => (
  <View
    style={{
      paddingTop: 70,
    }}>
    <Text style={{fontSize: 25}}>Confirm</Text>
    <Text style={{fontSize: 25, fontWeight: '900'}}>Order</Text>
  </View>
);

const PriceTag = ({heading, value}) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 5,
    }}>
    <Text style={{fontWeight: '800'}}>{heading}</Text>
    <Text>₹{value}</Text>
  </View>
);

const ConfirmOrder = ({navigation}) => {
  const itemsPrice = 9000;
  const shippingCharges = 900;
  const tax = 0.18 * itemsPrice;
  const totalAmount = itemsPrice + shippingCharges + tax;
  return (
    <View style={defaultStyle}>
      <Header back />
      <Heading />

      <View
        style={{
          paddingVertical: 20,
          flex: 1,
        }}>
        <ScrollView>
          {cartItems.map(i => (
            <ConfirmOrderItem
              key={i.product}
              image={i.image}
              name={i.name}
              price={i.price}
              quantity={i.quantity}
            />
          ))}
        </ScrollView>
      </View>
      <PriceTag heading={'Subtotal'} value={itemsPrice} />
      <PriceTag heading={'Shipping'} value={shippingCharges} />
      <PriceTag heading={'Tax'} value={tax} />
      <PriceTag heading={'Total'} value={totalAmount} />

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('payment', {
            itemsPrice,
            shippingCharges,
            tax,
            totalAmount,
          })
        }>
        <Button
          style={{
            backgroundColor: colors.color3,
            borderRadius: 100,
            padding: 5,
            margin: 10,
          }}
          textColor={colors.color2}
          icon="chevron-right">
          Payment
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default ConfirmOrder;

const styles = StyleSheet.create({});
