import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, defaultStyle} from '../../styles/styles';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import ButtonBox from '../../components/ButtonBox';
import ProductListHeading from '../../components/ProductListHeading';
import {products} from '../Home';
import ProductListItem from '../../components/ProductListItem';
import Chart from '../../components/Chart';

const AdminPanel = ({navigation}) => {
  const loading = false;

  const navigationHandler = text => {
    switch (text) {
      case 'Category':
        navigation.navigate('categories');
        break;
      case 'All Orders':
        navigation.navigate('adminorders');
        break;
      case 'Product':
        navigation.navigate('newproduct');
        break;
      default:
        navigation.navigate('adminorders');
        break;
    }
  };
  const deleteProductHandler = id => {};

  return (
    <View style={defaultStyle}>
      <Header back />
      <View
        style={{
          marginBottom: 20,
          paddingTop: 70,
        }}>
        <Text style={styles.heading}>Admin Panel</Text>
      </View>

      {loading ? (
        <Loader />
      ) : (
        <>
          <View
            style={{
              backgroundColor: colors.color3,
              borderRadius: 20,
              alignItems: 'center',
            }}>
            <Chart inStock={6} outOfStock={14} />
          </View>

          <View>
            <View
              style={{
                flexDirection: 'row',
                margin: 10,
                justifyContent: 'space-between',
              }}>
              <ButtonBox
                icon={'plus'}
                text="Product"
                handler={navigationHandler}
              />
              <ButtonBox
                icon={'format-list-bulleted-square'}
                text="All Orders"
                handler={navigationHandler}
                reverse
              />
              <ButtonBox
                icon={'plus'}
                text="Category"
                handler={navigationHandler}
              />
            </View>
          </View>
          <ProductListHeading />

          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              {products.map((item, index) => (
                <ProductListItem
                  key={item._id}
                  id={item._id}
                  i={index}
                  price={item.price}
                  stock={item.stock}
                  name={item.name}
                  category={item.category}
                  imgSrc={item.images[0].url}
                  navigate={navigation}
                  deleteHandler={deleteProductHandler}
                />
              ))}
            </View>
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default AdminPanel;

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
