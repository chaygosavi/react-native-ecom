import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {defaultStyle, colors} from '../styles/styles';
import Header from '../components/Header';
import Loader from '../components/Loader';
import {Headline} from 'react-native-paper';
import OrderItem from '../components/OrderItem';

const orders = [
  {
    _id: 'asdasd',
    shippingInfo: {
      address: '213 easert',
      city: 'Pune',
      country: 'INDIA',
      pinCode: '411041',
    },
    createdAt: '12-4-23T7s7fys7ydf',
    orderStatus: 'Processing',
    paymentMethod: 'COD',
    totalAmount: 20000,
  },
  {
    _id: 'asdddasd',
    shippingInfo: {
      address: '213 easert',
      city: 'Pune',
      country: 'INDIA',
      pinCode: '411041',
    },
    createdAt: '12-4-23T7s7fys7ydf',
    orderStatus: 'Processing',
    paymentMethod: 'ONLINE',
    totalAmount: 999999999,
  },
];

const Orders = () => {
  const loading = false;

  return (
    <View style={{...defaultStyle, backgroundColor: colors.color5}}>
      <Header back />
      <View
        style={{
          marginBottom: 20,
          paddingTop: 70,
        }}>
        <Text style={styles.heading}>Edit Profile</Text>
      </View>

      {loading ? (
        <Loader />
      ) : (
        <View
          style={{
            padding: 10,
            flex: 1,
          }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {orders.length > 0 ? (
              orders.map((item, index) => (
                <OrderItem
                  key={item._id}
                  id={item._id}
                  i={index}
                  price={item.totalAmount}
                  status={item.orderStatus}
                  paymentMethod={item.paymentMethod}
                  orderedOn={item.createdAt.split('T')[0]}
                  adddress={`${item.shippingInfo.address}, ${item.shippingInfo.city}, ${item.shippingInfo.country} ${item.shippingInfo.pinCode}`}
                  admin
                />
              ))
            ) : (
              <Headline style={{textAlign: 'center'}}>No Orders Yet</Headline>
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center',
    backgroundColor: colors.color3,
    color: colors.color2,
    padding: 5,
    borderRadius: 5,
  },
});
