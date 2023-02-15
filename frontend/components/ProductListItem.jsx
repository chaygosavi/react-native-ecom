import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../styles/styles';
import MyModal from './MyModal';

const ProductListItem = ({
  i,
  id,
  price,
  stock,
  name,
  category,
  imgSrc,
  navigate,
  deleteHandler,
}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <TouchableOpacity
        onLongPress={() => setOpenModal(prev => !prev)}
        activeOpacity={0.9}
        onPress={() => navigate.navigate('productdetails', {id})}>
        <View
          style={{
            ...styles.container,
            backgroundColor: i % 2 === 0 ? colors.color1 : colors.color3,
          }}>
          <Image
            source={{uri: imgSrc}}
            style={{
              width: 40,
              height: 40,
              resizeMode: 'contain',
            }}
          />
          <Text
            numberOfLines={1}
            style={{
              width: 60,
              color: colors.color2,
            }}>
            ₹{price}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              maxWidth: 120,
              color: colors.color2,
            }}>
            {name}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              width: 60,
              color: colors.color2,
            }}>
            {category}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              width: 40,
              color: colors.color2,
            }}>
            {stock}
          </Text>
        </View>
      </TouchableOpacity>

      {openModal && (
        <MyModal
          id={id}
          deleteHandler={deleteHandler}
          navigate={navigate}
          setOpenModal={setOpenModal}
        />
      )}
    </>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 70,
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
});
